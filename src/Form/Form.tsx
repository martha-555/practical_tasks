import { useState } from 'react'
import classes from './styles.module.css'

const Form = () => {

  const [name, setName] = useState('');
  const [errorMessage,setErrorMessage] = useState({
    name:'',
    email: '',
    password:''
  })

  const regex = /^[^\s]+@[^\s@]+\.[^\s@]+$/ ;
  console.log(regex.test('martagolov4ak@gmail.com'))

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
 const target = e.target.value
 setName(target)
  }
const handleEmail = () => {
  
}

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  }
    return(
      <div>
      <form onSubmit={handleSubmit} className={classes.form} action="martagolov4ak@gmail.com">
        <input onChange={handleName} value={name} type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password"/>
        <button className={classes.formButton} type='submit'>Submit</button>
      </form>
      </div>
    )
}

export default Form