import React from 'react'
import { FormConatiner ,InputType} from '../styles/FormStyle'

export default function Form({children,...Restprops}) {
  return (
    <FormConatiner {...Restprops}>{children}</FormConatiner>
  )
}


Form.Input=function Input({type,...Restprops}) {
     return (
        <InputType type={type} {...Restprops}/>
     )
}