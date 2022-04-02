import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import successful from '../Modals/Modals_Images/Vector.png'

const PaymentSuccessful = () => {

  return (
    <div>
      <Modal
          //  show={show}
          //  onHide={handleClose}
           backdrop="static"
           keyboard={false}>
           <Modal.Header style={{border: 'none'}} closeButton></Modal.Header>
           <div style={{display: 'block', textAlign: 'center', marginBottom: '10px'}}>
             <div style={{justifyContent: 'center', width: '50px', height:'50px', marginBottom: '10px', transform: 'translateX(220px)'}}>
                 <img src={successful} width='50px' height='50px' alt=''/></div>
             <h4 style={{textAlign: 'center'}}>Purchased Successfully</h4><br/>
             <small>You have successfully bought Africana Ape at 1.26ETH </small>
           </div>
            <ButtonStyled>
             <Button onClick={handleClose} className='button'>
               See my collections
             </Button><br/>
             <Button className='button'>Back to marketplace</Button><br/><br/><br/>
           </ButtonStyled>
       </Modal>
    </div>
  )
}

export default PaymentSuccessful
              