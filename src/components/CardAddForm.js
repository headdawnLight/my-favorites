import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FavsContext } from "../contexts/FavsContext";

const CardAddForm = () => {
  const { dispatch } = useContext(FavsContext);

  const [newFav, setNewFav] = useState({
    title: "",
    image: "",
    fav1: "",
    fav2: "",
    fav3: "",
  });

  const { title, image, fav1, fav2, fav3 } = newFav;

  const onInputChange = (e) => {
    setNewFav({ ...newFav, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add_fav",
      fav: {
        title,
        image,
        fav1,
        fav2,
        fav3,
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Card title"
          name="title"
          value={title}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Card image link"
          name="image"
          value={image}
          onChange={(e) => onInputChange(e)}
          className="mt-1"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="First favorite"
          name="fav1"
          value={fav1}
          onChange={(e) => onInputChange(e)}
          className="mt-1"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Second favorite"
          name="fav2"
          value={fav2}
          onChange={(e) => onInputChange(e)}
          className="mt-1"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Third favorite"
          name="fav3"
          value={fav3}
          onChange={(e) => onInputChange(e)}
          className="mt-1"
        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100 mt-3" block>
        Create Card Information
      </Button>
    </Form>
  );
};

export default CardAddForm;
