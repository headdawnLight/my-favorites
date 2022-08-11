import { useContext, useState, useEffect } from "react";
import { Button, Modal, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FavsContext } from "../contexts/FavsContext";
import CardEditForm from "./CardEditForm";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AppCard = ({ fav }) => {
  const { dispatch } = useContext(FavsContext);

  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleHide();
  }, [fav]);

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={fav.image}
          alt="fav_image"
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>{fav.title}</Card.Title>
          <Card.Text>{fav.items}</Card.Text>
          <OverlayTrigger
            overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}
          >
            <Button
              variant="danger"
              className="float-end"
              onClick={() => dispatch({ type: "remove_fav", id: fav.id })}
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
            <Button
              variant="warning"
              className="float-end"
              onClick={handleShow}
            >
              <EditIcon fontSize="small" />
            </Button>
          </OverlayTrigger>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Favorite Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardEditForm theFav={fav} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AppCard;
