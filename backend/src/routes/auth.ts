'use strict'

import express from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

router.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then((hashedPassword : string) => {
      const user = prisma.user.create({
        data: {
          username: req.body.username,
          password: hashedPassword,
        }
      }).then(() => {
        console.log("Created user")
        res.status(200).send({
          message: 'User created'
        })
      })
      .catch((err: any) => {
        res.status(500).send({
          message: "Error creating user",
          err
        })
      })
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error hashing password",
        err
      })
    })
})

module.exports = router