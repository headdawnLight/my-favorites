import { Form } from "react-bootstrap";

const AppSearchBar = ({ searchQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Search a fav card..."
          onChange={searchQuery}
        />
      </Form.Group>
    </Form>
  );
};

export default AppSearchBar;
