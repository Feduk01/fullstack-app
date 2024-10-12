import {
  MongoClient,
  Db,
  Collection,
  WithId,
  //   UpdateResult,
  //   ObjectId,
} from 'mongodb'
import { AnimalFact } from '../models/animalModel'

const con: string | undefined = process.env.CONNECTION_STRING

async function connect(): Promise<[Collection<AnimalFact>, MongoClient]> {
  if (!con) {
    console.log('Wrong connection string')
    throw new Error('No connecting string')
  }

  const client: MongoClient = await MongoClient.connect(con)
  const db: Db = await client.db('Exercise')
  const col: Collection<AnimalFact> = db.collection<AnimalFact>('animalFacts')
  return [col, client]
}
async function getFacts(): Promise<WithId<AnimalFact>[]> {
  const [col, client]: [Collection<AnimalFact>, MongoClient] = await connect()

  const result: WithId<AnimalFact>[] = await col.find({}).toArray()
  await client.close()
  return result
}

export { getFacts }
