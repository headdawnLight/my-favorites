import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FavsContext } from "../contexts/FavsContext";

const CardAddForm = () => {
  const { dispatch } = useContext(FavsContext);

  const [newFav, setNewFav] = useState({
    title: "",
    image: "",
    items: "",
  });

  const { title, image, items } = newFav;

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
        items,
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Title *"
          name="title"
          value={title}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Image link *"
          name="image"
          value={image}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Favorite things *"
          name="items"
          value={items}
          onChange={(e) => onInputChange(e)}
          rows={5}
        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100 mt-1" block>
        Add New Favorite Card
      </Button>
    </Form>
  );
};

export default CardAddForm;
