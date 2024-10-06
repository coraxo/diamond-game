'use strict'

import express from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../auth.ts')

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
  let sent = false
  try {
    const user = await prisma.user.findUnique({
      where: { username: req.body.username }
    })
    if (!user) {
      if (!sent) {
        res.status(401).json({
          message: "Unauthorized"
        })
        sent = true
      }
    } else {
      const correctPassword = await bcrypt.compare(req.body.password, user.password)
      if (!correctPassword && !sent) {
        res.status(401).json({
          message: "Unauthorized"
        })
        sent = true
      }
      const token = await jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
        path: '/',
        maxAge: 3600000, // 1 hour (same as token expiry)
      })
      res.status(200).json({ message: "Login successful" })
    }
  } catch (err) {
    if (!sent) {
      if (err instanceof Error) {
        res.status(500).json({
          message: "Error logging in",
          err,
        })
      } else {
        res.status(500).json({ message: "Internal server error" })
      }
    }
  }
})

router.get("/logout", async (req, res) => {
  try {
    res.cookie('token', 'none', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
      path: '/',
      expires: new Date(Date.now() + 1) // Expire cookie in 0.001 seconds
    })
    res.status(200).json({ message: "Logout successful" })
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: "Error logging out",
        err,
      })
    } else {
      res.status(500).json({ message: "Internal server error" })
    }
  }
})

router.get('/user', auth, async (req, res) => {
  try {
    if (req.user && req.user.username) {
      const { username } = req.user
      const user = await prisma.user.findUnique({
        where: {username: username},
      })
      if (!user) {
        res.status(404).send({
          message: "User not found"
        })
      } else {
        const data = {
          user: {
            "username": user.username
          }
        }
        res.status(200).send(data)
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send({
        message: "Internal server error",
        err
      })
    } else {
      res.status(500).send({
        message: "Internal server error"
      })
    }
  }
})

module.exports = router