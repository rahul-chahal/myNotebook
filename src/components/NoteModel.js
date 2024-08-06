import React, { useState } from 'react';
import AddNote from './AddNote';
import { Button, Modal } from 'react-bootstrap';

export default function Model() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <div className="container">  
                <Button variant="primary" onClick={handleShow}>
                   Add a note
                </Button>

                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD N NOTE</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNote />
                    </Modal.Body>
                </Modal>
            </div>

    </div>
  )
}
