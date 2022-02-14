import React from 'react';
import styled, {keyframes} from 'styled-components';
import blogs from '../Trends';
import {slideInUp} from 'react-animations'

const Slides = styled.div`
animation: 2s ${keyframes`${slideInUp}`}`;

const Trending = () => {
    return (
        <TrendingStyled>
            <Slides>
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
                            <h5>{blog.title}</h5>
                            <span>
                            <i className='fa-brands fa-ethereum'></i>
                            <p>{blog.rate}</p>
                            </span>
                            </div>
                                <div className='increase'>
                                    <p>{blog.increase}</p>
                                </div>
                            </div>
                        })
                        
                    }
                </div>
                </Slides>
        </TrendingStyled>
    )
}

const TrendingStyled = styled.div`
.image{
    width: 120px;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    img{
        border-radius: 10px;
        width: 100%;
        height: 100%;

    @media(max-width: 540px){
        height: 90px;
        transform: translateY(-6px) translateX(-5.5px);
        }
        @media(min-width: 365px) and (max-width: 375px){
            width: 80px;
        }
    }
}
.increase{
    justify-content: center;
    text-align: center;
    margin-top: 30px;
    @media(max-width: 900px){
        transform: translateY(7px) translateX(-40px);
        }
    @media(max-width: 540px){
        transform: translateX(-10px);
        .increase p{
            font-size: 15px;
        }
    }
    @media(min-width: 365px){
        transform: translateX(-45px);
    }
}
h5{
    padding-top: 20px;
    width: 129px;
    font-size: 16px;
    font-weight: bold;
    @media(max-width: 1440px) and (min-width: 768px){
        width:150px;
    }
    @media(max-width: 900px){
        font-size: 15px;
        }
    
}
span{
    display: flex;
    justify-content: center;
    padding-top: 5px;
    margin-left:-36px;
    @media(max-width: 1440px){
        transform: translateX(-20px);
    }
    @media(max-width: 1220px){
        transform: translateX(-10px);
    }
    @media(max-width: 900px){
        transform: translateX(-5px);
    }
    
}
p{
    font-weight: 500;
    font-size: 16px;
}

i{
    margin-right: 8px;
    font-size: 25px;
    
}

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
            .user{
                font-weight: 400;
                margin-top: -8px;
                display: flex;
                flex-direction: column;
                font-size: .7rem;
                @media(max-width: 540px){
                    transform: translateX(-25px);
                }
            }

            
        }
        .blog{
            background: rgba(255, 255, 255, 0.03);
            box-shadow: 3px 3px 4px 2px #F2F2F2;
            margin: 20px;
            border-top: none;
            border-radius: 10px;
            display: grid;
            padding: 0 !important;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1rem;
            justify-content:flex-start;
            width: 85% !important;
            height: 85% !important;
            @media(max-width: 900px){
                width: 100%;
            }
            @media(max-width: 540px){
                width: 88% !important;
                height: 88% !important;
                margin:0 !important;            
                }

            }
                
            }
        }
        .Nfts{
            justify-content: center;
            text-align: center;
            h4{
                font-weight: bold;
                @media(max-width: 540px){
                    font-size: 16px;
                }
            }
            h1{
                color: #00CBAC;
                font-weight: bold;
                @media(max-width: 540px){
                    font-size: 22px;
                }
            }
        }
    }

`;

export default Trending;
