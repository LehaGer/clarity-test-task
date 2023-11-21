import express from 'express'
import type {Request, Response} from 'express'

const app = express();

const PORT: number = Number(process.env.PORT) || 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('auth app on express')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
