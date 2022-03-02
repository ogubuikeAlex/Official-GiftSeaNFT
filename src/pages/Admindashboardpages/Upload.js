import React from 'react'
import AdminUpload from '../Admindashboardpages/AdminUpload'
import UploadStyled from '../../Styled-components/UploadStyled'
const Upload = () => {
  return (
      <UploadStyled>
    <div className='uploadContainer'>
        <div className='items'>
        <p>Item Name</p> 
        {/* use labels for your inputs: here instead of paragraphs */}
        <input type='text'/>
        <p className='descriptionText'>Description</p>
        <textarea className='description' type='search'/>
        </div>
        <div className='uploadnft'>
        <p>NFT image</p>
        <div className='uploadCentered'>
            <div className='centered'>
            <i className='fas fa-arrow-up'></i>
            <label htmlFor="filePicker">
                <p className='pickMe'>Upload Images</p>
            </label>
            <input id="filePicker" style={{visibility:"hidden"}} type={"file"}/>
            <p className='filesTitle'>PNG, GIF, WEBP, MP4 max 50mb</p>
            </div>
        </div>
        </div>
        <section className="items" id="property">
            <p>Property</p>
            <div id='property_layer'>
                <div className='property_layer-InputContainer'>
                    <label for="price">Item Price</label>
                    <input className='property_layer-input' type="text" className="price" placeholder='ETH 0.00' />
                </div>
                <div className='property_layer-InputContainer'>
                    <label for="price">Network</label>
                    <input className='property_layer-input'  type="text" className="price" value='Ethereum' readonly />
                </div>
               
            </div>
            <hr />
            <div id='property_layer'>
                <div className='property_layer-InputContainer'>
                    <label for="price">Copies</label>
                    <input className='property_layer-input' type="text" className="price"  placeholder='0000'/>
                   
                </div>
                <div className='property_layer-InputContainer'>
                    <label for="price">Category</label>
                    <input className='property_layer-input' type="text" className="price" value='Trending' readonly/>
                </div>
            </div>
            <button>Mint NFT</button>
        </section>
    </div>
    <AdminUpload/>
    </UploadStyled>

  )
}


export default Upload;