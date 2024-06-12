import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message : 'GET:  API get list products'})
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ message : 'POST:  API post new product'})
  })

export const productRoutes = Router