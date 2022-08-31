import { Button, Container, Table, Form } from "react-bootstrap";
import React from "react";
import "./index.scss";
//import { getAllPosts } from "../actions";
import { cardService } from "../../APIs/Services/Cards";

function Cards() {
  const [users, setUsers] = React.useState([]);
  // React.useEffect(() => {
  //     // const usersFormAPI = axios.get("https://630cee00b37c364eb7fce4e3.mockapi.io/posts");

  //     // usersFormAPI.then(({ data }) => {
  //     //     setUsers(data);
  //     //     console.log(data)
  //     // })

  //     getAllPosts(setUsers);

  // }, []);

  const [inputUserId, setInputUserId] = React.useState(1);
  const [inputUserTitle, setInputUserTitle] = React.useState("");
  const [inputUserBody, setInputUserBody] = React.useState("");

  // const [form, setForm] = React.useState({
  //   userId: 0,
  //   title: "",
  //   body: "",
  // });

  const postData = () => {
    // if (form.userId === '' || form.title === '' || form.body === '') { alert('Butun deyerleri daxil edin'); return; }
    // if (Number(form.userId) < 1) { alert('user id 0-dan boyuk olmalidir'); return; }




    const newElement = {
      userId: inputUserId,
      title: inputUserTitle,
      body: inputUserBody
    };

    console.log(newElement);
    
    cardService.postNewPost(newElement);
    

    // setForm({
    //     userId: 0,
    //     title: "",
    //     body: ""
    // })
  };

  React.useEffect(() => {
    cardService.getAllPost().then(({ data: userData }) => {
      setUsers(userData);
    });
  }, []);

  return (
    <>
      <Container>
        <Form className="py-1 my-5 mx-auto d-flex justify-content-center">
          <label className="ps-4 pe-2">User Id: </label>
          <input
            type="number"
            onChange={(event) => setInputUserId(event.target.value)}
            value={inputUserId}
          />

          <label className="ps-4 pe-2">Title: </label>
          <input
            type="text"
            onChange={(event) => setInputUserTitle(event.target.value)}
            value={inputUserTitle}
          />

          <label className="ps-4 pe-2">Body: </label>
          <input
            type="text"
            onChange={(event) => setInputUserBody(event.target.value)}
            value={inputUserBody}
          />

          <Button
            className="ms-4 fw-bold btn btn-success py-1 px-3"
            variant="success" onClick={postData}  type="number" 
          >
            add
          </Button>
        </Form>

        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>User userId</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, title, body, userId }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{title}</td>
                <td>{body.lengt < 65 ? body : body.slice(0, 65)}</td>
                <td>
                  <Button  variant="primary">Go somewhere</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cards;
