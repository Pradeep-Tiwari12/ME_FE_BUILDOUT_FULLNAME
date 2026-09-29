import { useState } from 'react'

function App() {
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [fullname,setFullname] = useState("")

function handlerfirst(e){
  let firstName = e.target.value

  setFirst(firstName)
}

function handlerlast(e){
  let lastName = e.target.value

  setLast(lastName)

}

function submit(e){

  e.preventDefault()
  setFullname(`${first} ${last}`)

  // setFirst("")
  // setLast("")
}


function reset(){
  setFirst("")
  setLast("")
  setFullname("")
}
  return (
    <>

    <h1>Full Name Display</h1>
    <form onSubmit={submit}>
     <label htmlFor="first">FIrst Name</label>
     <input type="text" required id="first" value={first} onChange={handlerfirst}/>

<br />
     <label htmlFor="last">Last Name</label>
     <input type="text" required id='last' value={last} onChange={handlerlast}/>
     <br />

     <button >submit</button>

 <button onClick={reset}>reset</button>

</form>

{fullname && (
  <h2> {fullname}</h2>
)}
    </>
  )
}

export default App
