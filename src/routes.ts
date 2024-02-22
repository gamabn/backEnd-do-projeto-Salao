import { Router, Request, Response} from 'express'

import { CreateUserController } from './controller/user/CreateUserController'
import { AuthUserController } from './controller/user/AuthUserController'
import { DetailUserController } from './controller/user/DetailUserController'
import  {Isauthentication}  from './middleware/Isauthentication'
import { createBarbaControler } from './controller/controlerBarbeiro/createBarbaControler'
import { createHorarioControler } from './controller/horario/createHorarioControler'
import { listHoursController } from './controller/horario/listHoursController'
import { listControler } from './controller/controlerBarbeiro/listControler'

const router = Router()

router.post('/user', new CreateUserController().handler)
router.post('/session', new AuthUserController().handler)
router.get('/me',Isauthentication, new DetailUserController().handler)

//rotas de serviço
router.post('/barba',Isauthentication,new createBarbaControler().handler)
router.post('/horas', Isauthentication, new createHorarioControler().handler)
router.get('/list', Isauthentication, new listControler().handler)
router.get('/list/hours', Isauthentication , new listHoursController().handler)

//rote de agendamento



export {router}