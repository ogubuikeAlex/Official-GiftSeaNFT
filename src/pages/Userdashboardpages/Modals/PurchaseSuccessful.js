import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import successful from '../Modals/Modals_Images/Vector.png'
import ButtonStyled from '../../../Styled-components/ButtonStyled'
import { useNavigate } from 'react-router-dom';

const PurchaseSuccessful = () => {
  const [lgShowPS, setLgShowPS] = useState(true);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/userdashboard/collections');
  };

  const handleClosePS = () => setLgShowPS(false);
    const handleShowPS = () => setLgShowPS(true);

  return (
      <Modal
          show={lgShowPS}
          onHide={() => setLgShowPS(false)}
           backdrop="static"
           keyboard={false}>
           <Modal.Header style={{border: 'none'}} closeButton></Modal.Header>
           <div style={{display: 'block', textAlign: 'center', marginBottom: '10px'}}>
             <div style={{justifyContent: 'center', width: '50px', height:'50px', marginBottom: '10px', transform: 'translateX(220px)'}}>
                 <img src={successful} width='50px' height='50px' alt=''/></div>
             <h4 style={{textAlign: 'center'}}>Purchase Successful</h4><br/>
             <small>You have successfully bought Africana Ape at 1.26ETH </small>
           </div>
            <ButtonStyled>
             <Button onClick={handleRedirect} className='button'>
               See my collections
             </Button><br/>
             <Button className='button'>Back to marketplace</Button><br/><br/><br/>
           </ButtonStyled>
       </Modal>
  )
}

export default PurchaseSuccessful
              