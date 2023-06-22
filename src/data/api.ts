import { IElement } from "../types/types"
import megafon from '../images/megafon.png'
import yota from '../images/yota.png'
import mts from '../images/mts.png'
import web_money from '../images/web_money.png'
import ya_money from '../images/ya_money.png'
import qiwi from '../images/qiwi.png'
import beeline from '../images/beeline.png'
import yesIcon from '../images/yes_icon.png'
import noIcon from '../images/no_icon.png'

export const apiRes: IElement[] = [
  {
    name: 'Успешно',
    logo: yesIcon
  },
  {
    name: 'Неудачно',
    logo: noIcon
  },
]

export const apiOperators: IElement[] = [
  {
    'name' : 'Мегафон',
    'logo': megafon,
  },
  {
    'name' : 'Yota',
    'logo': yota,
  },
  {
    'name' : 'Билайн',
    'logo': beeline,
  },
  {
    'name' : 'МТС',
    'logo': mts,
  },
  {
    'name' : 'Web Money',
    'logo': web_money,
  },
  {
    'name' : 'Я.Деньги',
    'logo': ya_money,
  },
  {
    'name' : 'Qiwi',
    'logo': qiwi,
  },
]