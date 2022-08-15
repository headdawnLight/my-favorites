import { useContext, useState, useEffect } from "react";
import { FavsContext } from "../contexts/FavsContext";
import { Button, Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import AppSearchBar from "./AppSearchBar";
import CardAddForm from "./CardAddForm";
import "../styles/AppHeader.css";

const AppHeader = () => {
  const { sortedFavs, onChangeHandler } = useContext(FavsContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [sortedFavs]);

  return (
    <header className="App-header shadow-sm p-2">
      <h1>My Favorites...</h1>
      <div className="header-inputs d-flex m-2">
        <AppSearchBar searchQuery={onChangeHandler} />

        <Button
          variant="primary"
          id="header-btn"
          className="ms-2"
          onClick={handleShow}
        >
          <AddIcon fontSize="small" />
          <span>Create Fav Card</span>
        </Button>
      </div>
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
