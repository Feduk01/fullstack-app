import express, { Router, Response } from 'express'
import { getFacts } from '../database/animalFactsCollection.js'
import { AnimalFact } from '../models/animalModel.js'
import { WithId } from 'mongodb'

const router: Router = express.Router()

router.get('/', async (_, res: Response) => {
  const facts: WithId<AnimalFact>[] = await getFacts()
  res.send(facts)
})

export { router }
