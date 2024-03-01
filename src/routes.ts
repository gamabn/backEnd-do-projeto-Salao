import { Router, Request, Response} from 'express'

import { CreateUserController } from './controller/user/CreateUserController'
import { AuthUserController } from './controller/user/AuthUserController'
import { DetailUserController } from './controller/user/DetailUserController'
import  {Isauthentication}  from './middleware/Isauthentication'
import { createBarbaControler } from './controller/controlerBarbeiro/createBarbaControler'
import { createHorarioControler } from './controller/horario/createHorarioControler'
import { listHoursController } from './controller/horario/listHoursController'
import { listControler } from './controller/controlerBarbeiro/listControler'
import {  mudarHoursController  } from './controller/horario/mudarHoursController'
import { consultController } from './controller/horario/consultController'
import { listUserControler } from './controller/user/listUserControler'
const router = Router()

router.post('/user', new CreateUserController().handler)
router.post('/session', new AuthUserController().handler)
router.get('/me', new DetailUserController().handler)
router.get('/list/user', new listUserControler().handler)

//rotas de serviço
router.post('/barba',Isauthentication,new createBarbaControler().handler)
router.post('/horas',Isauthentication, new createHorarioControler().handler)
router.get('/list',Isauthentication, new listControler().handler)
router.get('/list/hours', new listHoursController().handler)
router.post('/disponivel', new mudarHoursController().handler)
router.get('/checkAppointment', new consultController().handler)
//rote de agendamento



export {router}