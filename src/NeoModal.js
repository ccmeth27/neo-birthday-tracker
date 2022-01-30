import React from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
const NeoModal = () => {
    //Some code taken from this guide https://www.pluralsight.com/guides/working-with-bootstraps-modals-react
    const [isOpen, setIsOpen] = React.useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    //NEO definition text from Wikipedia
    return (
      <div class="modal-container">
        <button class="btn btn-primary" type="button" onClick={showModal}>What is an NEO?</button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Near-Earth Object</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              A near-Earth object is any small Solar System body whose orbit brings it into proximity with Earth. By convention, a Solar System body is a NEO if its closest approach to the Sun is less than 1.3 astronomical units. If a NEO's orbit crosses the Earth's, and the object is larger than 140 meters across, it is considered a potentially hazardous object. Most known PHOs and NEOs are asteroids, but a small fraction are comets. 
                  <br/><br/>
              There are over 27,000 known near-Earth asteroids and over a hundred known short-period near-Earth comets. A number of solar-orbiting meteoroids were large enough to be tracked in space before striking the Earth. It is now widely accepted that collisions in the past have had a significant role in shaping the geological and biological history of the Earth. Asteroids as small as 20 metres in diameter can cause significant damage to the local environment and human populations</Modal.Body>
          <Modal.Footer>
            <button class="btn btn-primary" type="button" onClick={hideModal}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
  export default NeoModal