import React from 'react'
import styled from 'styled-components'
import AdminUpload from '../Admindashboardpages/AdminUpload'
const Upload = () => {
  return (
      <UploadStyled>
    <div className='uploadContainer'>
        <div className='items'>
        <p>Item Name</p>
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
    </div>
    <AdminUpload/>
    </UploadStyled>

  )
}

const UploadStyled = styled.div`
@media only screen and (max-width:1360px){
    margin-left: -20px;
}
@media only screen and (max-width: 1328px){
    margin-left: -30px;
}
.items{
    background: #FFF;
    height: 387px;
    width: 67%;
    border-radius: 9px;
    padding: 20px;
    p{
        font-family: Inter;
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
        text-align: left;
    }
    .descriptionText{
        margin-top: 25px;
    }
    input{
        width: 100%;
        height: 54px;
        border-radius: 5px;
        padding: 10px;
        outline: #02AAB0;
        border: 1px solid #CECECE;
    }
    .description{
        height: 139px;
        width: 100%;
        border-radius: 5px;
        padding: 10px;
        outline: #02AAB0;
        border: 1px solid #CECECE;
    }
}
.uploadCentered{
    height: 204px;
    width: 100%;
    border-radius: 4px;
    border: 1px dashed #8C9196;
    background: #F6F6F7;
    .pickMe{
        padding: 0.4em 30px;
        border-radius: 9px;
        border: 1px solid #CECECE;
        outline: none;
        text-decoration: none;
        background: #FFF;
    }
    .centered{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 10px;
        margin-top: 30px;
    }
    i{
        border-radius:50%;
        padding: 0.4em;
        background: #5C5F62;
        color: #FFF;
        width: 25px;
        height: 25px;
        margin-bottom: 10px;
        .filesTitle{
            height: 19px;
            width: 247px;
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            text-align: center;

        }

    }
}

    .uploadnft{
        background: #FFF;
        width: 67%;
        margin-top: 30px;
        height: 334px;
        border-radius: 9px;
        padding: 30px 45px 30px 45px;
        p{
            font-family: Inter;
            font-size: 18px;
            font-weight: 500;
            line-height: 26px;
            text-align: left;
        }
    }
`;

export default Upload;