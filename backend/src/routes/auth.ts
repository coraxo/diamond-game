'use strict'

import express from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const prisma = new PrismaClient()

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
      },
    })
    console.log("Created user")
    res.status(200).json({
      message: 'User created',
    })
  } catch (err: unknown) {
    if (err instanceof Error) {
      if (err.message.includes('hash')) {
        res.status(500).json({
          message: "Error hashing password",
          err,
        })
      } else {
        res.status(500).json({
          message: "Error creating user",
          err,
        })
      }
    } else {
      res.status(500).json({ message: "Internal server error" })
    }
  }
})

router.post("/login", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username: req.body.username }
    })
    if (!user) {
      res.status(401).json({
        message: "Unauthorized"
      })
    } else {
      const correctPassword = await bcrypt.compare(req.body.password, user.password)
      if (!correctPassword) {
        res.status(401).json({
          message: "Unauthorized"
        })
      }
      const token = await jwt.sign(
        { username: user.username },
        'jwt_secret',
        { expiresIn: '1h' }
      )
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
        path: '/',
        maxAge: 3600000, // 1 hour (same as token expiry)
      });
      res.status(200).json({ message: "Login successful" })
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: "Error logging in",
        err,
      })
    } else {
      res.status(500).json({ message: "Internal server error" })
    }
  }
})

module.exports = router