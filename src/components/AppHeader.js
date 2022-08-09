import AddIcon from "@mui/icons-material/Add";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./AppHeader.css";

const AppHeader = () => {
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className="App-header p-1">
      <h1>my favorites...</h1>
      <Button variant="primary" className="m-2" onClick={handleShow}>
        <AddIcon fontSize="small" />
        <span>Add New Favorite Card</span>
      </Button>
      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Favorite Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Hello</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default AppHeader;
