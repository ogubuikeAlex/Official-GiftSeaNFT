import {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton></Modal.Header>
            <h4 style={{textAlign: 'center'}}>Oh no! You do not have Metamask Extension</h4>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis at sit nibh congue purus. Auctor sed purus, nam purus purus justo pellentesque. Lorem posuere egestas volutpat eleifend nec facilisi. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis at sit nibh congue purus. Auctor sed purus, nam purus purus justo pellentesque. Lorem posuere egestas volutpat eleifend nec facilisi.
            </div>
          <div style={{display: 'flex', flexDirection:'column', lineHeight:'20px'}}>
            <Button variant="success" onClick={handleClose}>
                Install Metamask Extension
            </Button>
          </div>
        </Modal>
      </>
    );
  }
  
  export default Example;