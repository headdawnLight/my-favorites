import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FavsContext } from "../contexts/FavsContext";

const CardEditForm = ({ theFav }) => {
  const { dispatch } = useContext(FavsContext);

  const fav = theFav;
  const id = fav.id;

  const [title, setTitle] = useState(fav.title);
  const [image, setImage] = useState(fav.image);
  const [items, setItems] = useState(fav.items);

  const updatedFav = { id, title, image, items };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "update_fav", id, updatedFav });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Title *"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Image link *"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Favorite things *"
          name="items"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          rows={5}
        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100 mt-2" block>
        Update Your Favorite Card
      </Button>
    </Form>
  );
};

export default CardEditForm;
