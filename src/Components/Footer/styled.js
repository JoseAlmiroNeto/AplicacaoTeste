import styled from 'styled-components';

export const AreaFooter = styled.div`
    background-color: rgb(0, 141, 184);
    box-shadow: 0 0 10px #0047fc;
    text-align: center;
    height: auto;
    font-size: 14px;
    color: white;
    font-size: 15px;
    position: relative;
    width: 100vw;

    img{
        width: 5vw;
        padding-left: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        margin-left: 22pc;
    }

    .copyright{
        border-top: 1px solid white;
        display: flex;
        align-items:center;
        justify-content: space-between;       
        margin-left: 25pc;
        margin-right: 25pc;
        padding-top: 10px;
        padding-bottom: 10px;
        align-items: center;    

        .social{
            display: flex;
            align-items:center;
            justify-content: center;
            gap: 10px;

            a{
                cursor: pointer;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                border: 0px;
                display: flex;
                align-items:center;
                justify-content: center;
                background: white;
            }

            .btnFacebook{
                
                &:hover{
                    background-color: #00aaff;
                }
            }
            .btnInstagram{
                &:hover{
                    background: linear-gradient(#00229c,#c7002e);
                }
            }
            .btnYoutube{
                &:hover{
                    background-color: #ff3d3d;
                }
            }
        }
    }

`;
