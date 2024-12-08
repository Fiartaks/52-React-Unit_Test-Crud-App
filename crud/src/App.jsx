import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"

const App = () => {
  const[users, setUsers] =useState([
    {
      name:'Alparslan',
      mail:'alpokereta@gmail.com',
      age:2,
    },
    {
      name:'Feride',
      mail:'fiartaks@gmail.com',
      age:1,
    },
  ])

  //yeni kullanici ekle
  const addUser =(newUser)=>{
     setUsers([...users, newUser])
  }


  return (
    <div className="container">
      <h2 className="text-center my-5">Kullanici Paneli</h2>
      <Form addUser={addUser}  />
      <List users={users} />
    </div>
  )
}
export default App