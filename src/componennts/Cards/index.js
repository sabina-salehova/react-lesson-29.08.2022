import { Button, Card, Container, Col, Row } from "react-bootstrap";
import React from "react";
import "./index.scss";
import { getAllPosts } from "../actions";

function Cards() {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        // const usersFormAPI = axios.get("https://630cee00b37c364eb7fce4e3.mockapi.io/posts");

        // usersFormAPI.then(({ data }) => {
        //     setUsers(data);
        //     console.log(data)
        // })

        getAllPosts(setUsers);

    }, []);

    return (
        <>
            <Container>
                <Row>
                    {users.map(({id,title,body}) => (
                        <Col key={id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {body}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Cards;
