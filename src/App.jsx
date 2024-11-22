import { useState } from 'react'
import './App.css'

function App() {

const users = [{
  name: "Salmon Joy",
  roll: 23
},
{
  name: "Amit Chawan",
  roll: 43
},
{
  name: "Mehul Shah",
  roll: 27
},
{
  name: "Rajesh Sola",
  roll: 89
}
]

let [count,setCount] = useState(0)
let [display, setDisplay] = useState([])

function handleClick(){
  if (display.length<users.length){
    setDisplay([...display,users[count]])
    setCount(count+1)
    console.log(count)
  }
}
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr no</th>
      <th scope="col">Student name</th>
      <th scope="col">Roll number</th>
    </tr>
  </thead>
  <tbody>
  {display.map((user)=>(
      <tr key={user.roll}>
      <td>{count+1}</td>
      <td>{user.name}</td>
      <td>{user.roll}</td>
    </tr>
    ))}
  </tbody>
</table>
    


    <button  type="button" className="btn btn-primary" onClick={handleClick} >Show one more user</button>
    </>
  )
}

export default App
