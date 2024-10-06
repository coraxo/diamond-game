'use strict'

import { PrismaClient } from '@prisma/client';
import express from 'express'
const router = express.Router()
const auth = require('../auth.ts')
import { generateRoom } from '../gameLogic';

declare global {
  namespace Express {
    interface Request {
      user?: {
        username: string;
      };
    }
  }
}

const prisma = new PrismaClient()

router.get('/diamonds', auth, async (req, res) => {
  try {
    if (req.user && req.user.username) {
      const { username } = req.user
      const user = await prisma.user.findUnique({
        where: {username: username},
        include: {player: true}
      })
      if (!user) {
        res.status(404).send({
          message: "User not found"
        })
      } else if (!user.player) {
        res.status(404).send({
          message: "Player not found"
        })
      } else {
        const data = {
          "diamonds": user.player.diamonds
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

router.get('/player', auth, async (req, res) => {
  try {
    if (req.user && req.user.username) {
      const { username } = req.user
      const user = await prisma.user.findUnique({
        where: {username: username},
        include: {player: true}
      })
      if (!user) {
        res.status(404).send({
          message: "User not found"
        })
      } else if (!user.player) {
        res.status(404).send({
          message: "Player not found"
        })
      } else {
        const data = {
          player: {
            "name": user.player.name,
            "diamonds": user.player.diamonds
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

router.put('/player', auth, async (req, res) => {
  try {
    if (req.user && req.user.username) {
      const { username } = req.user
      const user = await prisma.user.findUnique({
        where: {username: username},
        include: {player: true}
      })
      if (!user) {
        res.status(404).send({
          message: "User not found"
        })
      } else {
        await prisma.player.create({
          data: {
            name: req.body.name,
            diamonds: 1000,
            stats: {},
            gear: {},
            inventory: {},
            currentRoom: generateRoom({biome:'forest', description: ''}, true),
            user: { connect: { username: user.username }}
          },
        })
        console.log("Created player")
        res.status(200).json({
          message: 'Player created',
        })
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