import { useEffect, useState } from 'react'
import classes from './styles.module.css'

const Form = () => {

  const [userInfo, setUserInfo] = useState({
name: '',
email: '',
password: ''
  });
  const [errorMessage,setErrorMessage] = useState({
    name:'',
    email: '',
    password:''
  })



  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
 const target = e.target.value;
 setUserInfo((prev) => ({
  ...prev,
  name: target
 }))
 const regex = /^[^\s\.\W\d]+\s*$/
!regex.test(target) && setErrorMessage((prevValue) =>({ ...prevValue,
  name: "Неправильно вказане ім'я"}))
}

const regex = /^\w[^\s@]+@[^\s@]+\.[^\d]+\w[^\s\.]+\s*$/ ;
console.log(regex.test('martagolov4ak@gmail.c.om'))
const handleEmail = () => {
}

const handlePassword = () => {

}
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  }
  console.log(errorMessage)
  useEffect(() => {
},[errorMessage])
    return(
      <div>
      <form onSubmit={handleSubmit} className={classes.form} action="martagolov4ak@gmail.com">
        <input required onChange={handleName} value={userInfo.name} type="text" placeholder="name" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password"/>
        <button className={classes.formButton} type='submit'>Submit</button>
      </form>
      </div>
    )
}

export default Form