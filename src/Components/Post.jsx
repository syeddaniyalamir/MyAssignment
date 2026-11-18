import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from "../assets/Post.module.css";
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

const Post = () => {
    //using navigate 
    const navigate = useNavigate();
    //posts state
    const [post, setPost] = useState([]);
    //loading state
    const [loading, setLoading] = useState(true);
    //error state
    const [error, setError] = useState("");
    //refresh state 
    const [refresh, setRefresh] = useState(true);

    useEffect(()=>{
      document.title = "All Post";
    },[])

    useEffect(()=>{
        setLoading(true);
        setError("");

                    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> response.json())
        .then((data)=>{
            setPost(data.slice(0,10));
            setLoading(false);
        })
        .catch((err)=>{
            setError("Daya Kuch to garbar hai!");
            setLoading(false);
        })
    },[refresh])

  return (
    <>
   

    {loading ? 
    (<h1 className='d-block text-center my-5 fw-bold'><strong>Loading...</strong></h1>)
    : error ? <h1 className='text-danger fw-bold text-center'>{error}</h1> : (

        <Container>
           <div className='d-flex justify-content-center w-100 gap-5'>
    <button className={`my-3 w-50  ${style.btn}`} onClick={()=>setRefresh(!refresh)}>Refresh</button>
    <button className={`my-3 w-50 ${style.btn}`} onClick={()=>navigate('/')} >Go Back</button>
    </div>
    <Row>
              {post.map((items)=>{
                  return (
                      <Col md={6} lg={12} className='my-3' key={items.id}>
<Card className={style.container}>
      <Card.Header><strong>Post Id : </strong> {items.id} </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p><strong>Post Title : </strong>
           {items.title}
          </p>
          <strong className='d-block my-3'>Post Body : </strong>
          <footer className="blockquote-footer">
            {items.body}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
            </Col>
        );
    }
    )}
    </Row>
</Container>
)}
    </>
  )
}

export default Post
