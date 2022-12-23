import Koa from 'koa'
import cors from '@koa/cors'
import commandLineLogger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import { router } from './routes'
import { authRequired } from './middleware/auth'

const app = new Koa()
const PORT = 3333

app.use(cors({ credentials: true }))
app.use(commandLineLogger())
app.use(bodyParser())
app.use(authRequired())

app.use(router)

app.on('error', e => console.error('Error', e))
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))