import React from 'react';
import styled from 'styled-components';
import blogs from '../Trends';

const Trending = () => {
    return (
        <TrendingStyled>
            <div className='Nfts'>
            <h4>Most sort after</h4>
            <h1>Trending NFTS</h1>
            </div>
                <div className='blogs'>
                    {
                        blogs.map((blog) => {
                            return <div className='blog' key={blog.id}>
                            <div className='image'>
                                <img src={blog.image} alt=''/>
                            </div>
                            <div className='user'>
                            <div className='object'>
                            <h5>{blog.title}</h5>
                            <span>
                            <i className='fa-brands fa-ethereum'></i>
                            <p>{blog.rate}</p>
                            </span>
                            </div>
                            </div>
                                <div className='increase'>
                                    <p>{blog.increase}</p>
                                </div>
                            </div>
                        })
                        
                    }
                </div>
        </TrendingStyled>
    )
}

const TrendingStyled = styled.div`
.increase p{
    justify-content: center;
    padding: 3em;
    text-align: center;
}
h5{
    padding-top: 20px;
}
span{
    display: flex;
    justify-content: center;
    padding-top: 20px;
}
p{
    font-weight: bold;
    font-size: 18px;
}

i{
    margin-right: 20px;
    font-size: 25px;
    
}
    .object{
        display:flex;
        flex-direction: column;
    }
    .blogs{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-top: 2rem;
        padding-left: 3rem;
        justify-content: center;
        @media(max-width:540px){
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 50px;
        }
            h6{
                font-size: .8rem;
                font-weight: 400;
            }
            .user{
                font-weight: 400;
                display: flex;
                flex-direction: row;
                font-size: .8rem;
            }
            
        }
        .blog{
            background: rgba(255, 255, 255, 0.03);
            box-shadow: 3px 2px 4px 7px #F2F2F2;
            padding: 0.2em;
            margin: 20px;
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            justify-content:flex-start;
            width: 75% !important;
            @media(max-width: 540px){
                width: 88% !important;
                height: 88%;
                padding-right: 20px;
                margin:0 !important;
                }
            .image{
                width: 100%;
                border-radius: 10px;
                padding-right: 10px;
                transition: .4s ease-in-out all;
                @media(max-width: 540px){
                    object-fit: cover;
                    margin:0 !important;
                    }
                img{
                    padding: .3rem;
                    width: 180px;
                    height:180px;
                    @media(max-width:540px){
                        width:130px;
                        height:130px;
                        margin:0 !important;
                    }
                }
            }
                
            }
        }
        .Nfts{
            justify-content: center;
            text-align: center;
            h4{
                font-weight: bold;
            }
            h1{
                color: #00CBAC;
                font-weight: bold;
            }
        }
    }

`;

export default Trending;
