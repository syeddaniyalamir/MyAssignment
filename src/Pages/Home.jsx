import { useNavigate } from "react-router-dom";
import style from "../assets/Home.module.css";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    document.title = "My Assignment";
  },[])
  return (
    <>
    <div className={style.container}>
        <h1>My <span>Assignment</span></h1>
        <div className={style.underline}></div>
        <p>In this project, I have practiced React concepts like Components, State, Hooks, API Fetching, and Routing by creating a Counter, Posts Cards, and Students Table.</p>
        <div className={style.btn}>
            <button onClick={()=>navigate('/counter')}>See Counter</button>
            <button onClick={()=>navigate('/cards')}>See Posts</button>
            <button onClick={()=>navigate('/table')}>See Table</button>
        </div>
        <div className={style.underline2}></div>
        <div className={style.footer}>
            <h5>Student Name : <strong>SYED DANIYAL AMIR &lt;/&gt;</strong></h5>
            <h6>Student Id : <strong>1624886</strong></h6>
            <small>All Right Reserved &copy; 2026</small>            
        </div>
    </div>
    </>
  )
}

export default Home
