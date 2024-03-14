import { useCallback, useState } from "react"

function App() {
  const[length, setLength] = useState(8)
  const[numberAllow, setNumberAllow] = useState(false)
  const[charAllow, setCharAllow] = useState(false)
  const[password, setPassword] = useState("")

const paswordGenerator = useCallback( ()=>{
  let pass =""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllow) str += "0123456789"
  if(charAllow) str += "!@#$%^&*"

  for(let i =1 ; i<=array.length;i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass =str.charAt(char)
  }
  setPassword(pass)
},[length, numberAllow, charAllow, setPassword])

  return (
    <>
      <h1 className='text-white text-center text-4xl '>Password Generator</h1>
      <div className="text-warning bg-secondary text-center  ">test</div>
    </>
  )
}

export default App
