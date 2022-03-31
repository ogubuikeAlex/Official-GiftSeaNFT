import React from 'react'
import {useNavigate} from 'react-router-dom'
import successful from '../Modals/Modals_Images/Vector.png'
import { Modal, Button } from 'react-bootstrap'
import ButtonStyled from '../../../Styled-components/ButtonStyled'

const SoldSuccessful = () => {

  let navigateToCollection = useNavigate();
  const routeToCollection = () => {
    let path = `collections`;
    navigateToCollection(path);
   }
   let navigateToMarketPlace = useNavigate();
  const routeToMarketplace  = () => {
    let path = `marketplace`;
    navigateToMarketPlace(path);
   }

  return (
    <div>
      <Modal
          // show={show}
          // onHide={handleClose}
          backdrop="static"
          keyboard={false}>
          <Modal.Header style={{ border: 'none' }} closeButton></Modal.Header>
          <div style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>
              <div style={{ justifyContent: 'center', width: '50px', height: '50px', marginBottom: '10px', transform: 'translateX(220px)' }}>
              <img src={successful} width='50px' height='50px' alt='' /></div>
              <h4 style={{ textAlign: 'center' }}>Sold Successfully</h4><br />
              <small>You have successfully sold Africana Ape at 1.26ETH </small>
          </div>
          <ButtonStyled>
             <Button onClick={routeToCollection} className='button'>
              See my collections
             </Button><br />
             <Button onClick={routeToMarketplace} className='button'>Back to marketplace</Button><br /><br /><br />
          </ButtonStyled>
      </Modal>
    </div>
  )
}


export default SoldSuccessful