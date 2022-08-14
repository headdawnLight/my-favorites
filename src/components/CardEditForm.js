import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FavsContext } from "../contexts/FavsContext";

const CardEditForm = ({ theFav }) => {
  const { dispatch } = useContext(FavsContext);

  const fav = theFav;
  const id = fav.id;

  const [title, setTitle] = useState(fav.title);
  const [image, setImage] = useState(fav.image);
  const [fav1, setFav1] = useState(fav.fav1);
  const [fav2, setFav2] = useState(fav.fav2);
  const [fav3, setFav3] = useState(fav.fav3);

  const updatedFav = { id, title, image, fav1, fav2, fav3 };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "update_fav", id, updatedFav });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Card title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Card image link"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="mt-1"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="First favorite"
          name="fav1"
          value={fav1}
          onChange={(e) => setFav1(e.target.value)}
          className="mt-1"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Second favorite"
          name="fav2"
          value={fav2}
          onChange={(e) => setFav2(e.target.value)}
          className="mt-1"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Third favorite"
          name="fav3"
          value={fav3}
          onChange={(e) => setFav3(e.target.value)}
          className="mt-1"
        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100 mt-3" block>
        Update Card Information
      </Button>
    </Form>
  );
};

export default CardEditForm;
