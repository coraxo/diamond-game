'use strict'

const jwt = require('jsonwebtoken')
import { Request, Response, NextFunction } from 'express'

declare global {
  namespace Express {
    interface Request {
      user?: {
        username: string
      }
    }
  }
}

module.exports = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token
    const decodedToken = await jwt.verify(
      token,
      "jwt_secret"
    )
    const user = await decodedToken
    req.user = user
    next()
  } catch (error) {
    res.status(401).json({
      error: "Unauthorized"
    })
  }
}