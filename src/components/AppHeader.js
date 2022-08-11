import AddIcon from "@mui/icons-material/Add";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CardAddForm from "./CardAddForm";
import { useState } from "react";
import "../styles/AppHeader.css";

const AppHeader = ({ fav }) => {
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="App-header p-4">
      <h1>my favorites...</h1>

      <Button variant="primary" className="m-2" onClick={handleShow}>
        <AddIcon fontSize="small" />
        <span>Add New Favorite Card</span>
      </Button>

      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Favorite's Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardAddForm />
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
