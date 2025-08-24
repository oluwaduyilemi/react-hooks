import { useState } from "react"

const UseObject = () => {

    const [objects, setObjects] = useState({
        name: "favour",
        age: 45,
        massage: 'send massage'
    });

    const changeMassge = () => {
        setObjects({...objects, massage: 'Hello World'})
    }
  return (
    <>
    <h6>Ass 3</h6>
        <h3>{objects.name}</h3>
        <h3>{objects.age}</h3>
        <h3>{objects.massage}</h3>
        <button className="btn" onClick={changeMassge}>change massage </button>
    </>
  )
}

export default UseObject