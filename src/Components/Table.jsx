import StudentData from "../Data/Students.json";
import BootstrapTable from 'react-bootstrap/Table';
import style from "../assets/Table.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Table = () => {
  //using navigate hook
  const navigate = useNavigate();

  useEffect(()=>{
    document.title = "Student Table";
  },[])
  return (
    <>
      <Container>
        <div className={`d-flex justify-content-end ${style.btn}`}>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div>
        <Row>
          <Col>
            <div className={style.table} >
              <BootstrapTable striped bordered hover >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Batch</th>
                    <th>Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  {StudentData.map((list) => {
                    return (
                      <tr key={list.id}>
                        <td>{list.id}</td>
                        <td>{list.name}</td>
                        <td>{list.age}</td>
                        <td>{list.batch}</td>
                        <td>{list.Teacher}</td>
                      </tr>
                    )

                  })}

                </tbody>
              </BootstrapTable>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Table
