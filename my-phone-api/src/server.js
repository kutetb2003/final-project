/* eslint-disable no-console */

import express from 'express'
import { CONNECT_DB, GET_DB } from '~/config/mongodb'
import { mapOrder } from '~/utils/sorts.js'

const START_SERVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 1609

  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello Smeap, I am running at ${hostname}:${port}/`)
  })
}

(async () => {
  try {
    console.log('Connecting to MongoDB Cloud Atlas')
    await CONNECT_DB()
    console.log('Connected to Database Atlas')
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

// CONNECT_DB()
//   .then(() => console.log('Connected to MongoDB Cloud Atlas'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })
