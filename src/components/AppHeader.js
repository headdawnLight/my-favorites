import { useContext, useState, useEffect } from "react";
import { FavsContext } from "../contexts/FavsContext";
import { Button, Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import CardAddForm from "./CardAddForm";
import "../styles/AppHeader.css";

const AppHeader = () => {
  const { sortedFavs } = useContext(FavsContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [sortedFavs]);

  return (
    <header className="App-header p-2">
      <h1>My Favorites...</h1>

      <Button variant="primary" className="m-2" onClick={handleShow}>
        <AddIcon fontSize="small" />
        <span id="header-btn">Create Fav Card</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Card Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardAddForm />
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default AppHeader;
