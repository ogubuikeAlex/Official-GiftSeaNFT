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
            <h4 style={{textAlign: 'center'}}>Purchased Successfully</h4>
          <div style={{display: 'flex', flexDirection:'column', lineHeight:'20px'}}>
            <Button variant="success" onClick={handleClose}>
              See my collections
            </Button>
            <Button variant="success">Back to marketplace</Button>
          </div>
        </Modal>
        <Button variant="primary" onClick={handleShow}>
          Purchase Button
        </Button>
      </>
    );
  }
  
  export default Example;