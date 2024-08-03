import { useState } from "react"

function App() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [yearOfBirth, setYearOfBirth] = useState("")
  const [age, setAge] = useState("")

  function onSubmit(event) {
    event.preventDefault()
    const caculateAge = currentYear - yearOfBirth

    setAge(caculateAge)
  }

  return (
   <>
   <h1>{age}</h1>

   <form onSubmit={onSubmit}>
    <div>
      <input
      type="text"
      nmae="yearOfBirth"
      value={yearOfBirth}
      onChange={(event) => setYearOfBirth(event.target.value)}
      />
    </div>

    <div>
      <button type="submit">submit</button>
    </div>
   </form>
   </>
  )
}

export default App
