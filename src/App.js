import Child from "./child"
import Child2 from "./child2"
import Child0 from "./Child0"
const a=["apple","bat","cat"]
const o={
  name:"swaroop",
  age:40,
  clg:"stm"
}
const name="suha"
const App=()=>{

  return(
    <>
    <h1>AIDSC</h1>
    <h1>AIDSC</h1>
    <Child0 n={name}/>
    <Child k={a}/>
    <Child2 o={o}/>
    

    </>
  )
}
export default App