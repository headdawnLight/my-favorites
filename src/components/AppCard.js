import { Card, Modal, Button, ListGroup } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { FavsContext } from "../contexts/FavsContext";
import CardEditForm from "./CardEditForm";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AppCard = ({ fav }) => {
  const { dispatch } = useContext(FavsContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [fav]);

  return (
    <>
      <Card className="h-100 w-100 shadow">
        <Card.Img
          variant="top"
          src={fav.image}
          alt="fav_image"
          class="border-bottom"
          style={{ height: "240px" }}
        />

        <Card.Body>
          <Card.Title className="text-center fw-bold">{fav.title}</Card.Title>

          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">{fav.fav1}</ListGroup.Item>
            <ListGroup.Item as="li">{fav.fav2}</ListGroup.Item>
            <ListGroup.Item as="li">{fav.fav3}</ListGroup.Item>
          </ListGroup>

          <div className="card-buttons float-end mt-3">
            <Button variant="warning" className="me-1" onClick={handleShow}>
              <EditIcon fontSize="small" />
              <span>Update</span>
            </Button>

            <Button
              variant="danger"
              onClick={() => dispatch({ type: "remove_fav", id: fav.id })}
            >
              <DeleteIcon fontSize="small" />
              <span>Delete</span>
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Card Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CardEditForm theFav={fav} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AppCard;
