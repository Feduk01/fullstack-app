import express, { Express } from 'express'
import { router as animalFacts } from './routes/animalFactsRoute.js'

const app: Express = express()
const port: number = 4200

app.use('/', express.static('dist/'))
app.use('/', express.json())

app.use('/animal-facts', animalFacts)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
