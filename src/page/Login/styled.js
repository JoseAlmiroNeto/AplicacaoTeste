import styled from 'styled-components';

export const BackgroudLogin = styled.div`
background-color: black;
height: 60.1pc;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`;

export const AreaLogin = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #3b3b3b;
    padding: 30px;
    height: 440px;
    width: 380px;
    margin: auto;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0px 0px 10px #ccc;

    .img-login {
        width: 140px;
    }

    .form-input{

        label{
            display: block;
            color: #a6a6a6;
            font-size: 20px;
        }

        input {
            background-color: #3b3b3b;
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #a6a6a6;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;
            color: #fff;

            &:hover {
                border: 1px solid blue;
            }
        }
    }

`;

export const BtnDefault = styled.button`

    background-color: #7d2ae8;
    color: #fff;
    display: inline;
    align-items: center;
    padding: 10px;
    width: 50%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    margin-bottom: 15px;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
        background-color: #4e129c;
    }

    .center{
        text-align: center;
        width: 100%;
    }
`;
