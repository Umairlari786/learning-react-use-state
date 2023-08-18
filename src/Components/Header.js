import { useState } from "react";
import "./header.css"


const Header = () => {
const [num , setNum] = useState(0);
const count =()=>{
     setNum(num + 1);
    console.log(num);
}
const countDown = ()=>{
    setNum(num - 1);
    console.log(num);
}


  return (
    <div className='container'>
             <h1>{num}</h1>
    <div className="btn">
    <button className="btn1"onClick={count}>Increase</button>
    <button className="btn2" onClick={countDown}>Decrease</button>
    </div>
    </div>
  )
}

export default Header
