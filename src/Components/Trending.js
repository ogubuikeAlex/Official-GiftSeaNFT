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
        width: 100%;
        height: 100%;

    @media(max-width: 540px){
        height: 90px;
        transform: translateY(-10px) translateX(-10px);
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
        transform: translateY(7px) translateX(-35px);
        }
    @media(max-width: 540px){
        transform: translateX(-60px);
        }
    @media(max-width: 540px){
        transform: translateX(-28px);
        .increase p{
            font-size: 15px;
        }
    }
}
h5{
    padding-top: 20px;
    width: 129px;
    font-size: 16px;
    font-weight: bold;
    @media(max-width: 900px){
        font-size: 15px;
        }
    
}
span{
    display: flex;
    justify-content: center;
    padding-top: 5px;
    margin-left:-36px;
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
            h6{
                font-size: .8rem;
                font-weight: 400;
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
            box-shadow: 3px 2px 4px 7px #F2F2F2;
            margin: 20px;
            border-radius: 20px;
            display: grid;
            padding: 1em;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1rem;
            justify-content:flex-start;
            width: 85% !important;
            height: 85% !important;
            @media(max-width: 900px){
                width: 100%;
                }
            @media(max-width: 768px){
                width: 100% !important;
                height: 100% !important;
            }
            @media(max-width: 540px){
                width: 88% !important;
                height: 88% !important;
                padding-right: 20px;
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
