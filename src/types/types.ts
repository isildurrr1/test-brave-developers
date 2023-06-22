export interface IElement {
  'name': string,
  'logo': string,
}

export interface ElementProps {
  operatorChoice: Function,
  data: IElement
}

export interface ListProps {
  operatorChoice: Function
}

export interface FormProps {
  data: IElement
  goHome: Function
}

export interface ProtectFormProps {
  data: IElement | null
  goHome: Function
}

export interface OperatorElementProps {
  data: IElement
}