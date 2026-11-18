import React, { useEffect, useState } from 'react'
import style from "../assets/Counter.module.css";
import { useNavigate } from 'react-router-dom';

const Counter = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  //status check funtion
  const checkStatus=()=>{
    if(count > 0){
      return "Positive Lumber";
    }
    else if (count < 0){
      return "Negative Lumber";
    }
    else{
      return "Zero";
    }
  }

  //using (useEffect Hook) one time from my title according to browser
  useEffect(()=>{
    document.title = "Counter App";
  },[])

  //increase count
  const handleIncrease=()=>{
    setCount((prev)=> prev + 1);

  }
  //decrease count
  const handleDecrease=()=>{
    setCount((prev)=> prev - 1);

  }
  //reset count
  const handleReset=()=>{
    setCount(0)
  }

  return (
    <div className={style.container}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <h3>{checkStatus()}</h3>
      <div className={style.btn}>
        <button onClick={handleIncrease}>+ Increase +</button>
        <button onClick={handleDecrease}>- Decrease -</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className={style.btn2}>
      <button onClick={()=>navigate('/')}>Go Back</button>
      </div>
    </div>
  )
}

export default Counter
