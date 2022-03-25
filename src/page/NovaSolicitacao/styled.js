import styled from 'styled-components';

 export const ContainerPage= styled.div`
    margin: auto;
    background-color: #ffffff;
    padding: 20px;
    height: auto;
    width: 500px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px #ccc;
    font-size: 24px;

    .ticketTitle{
        display: flex;
        flex-direction: column;;

        .titulo {
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #00a4fc;
        }

        label {
            font-size: 20px;
            color: #696969;
        }

        input {
            border-radius: 6px;
            height: 25px;
            border-color: #ccc;
            border-width: 1px;
        }
    }

    select {
        border-radius: 6px;
        height: 30px;
        border-color: black;
    }

    .Container-btnSend{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        .btnSend{
            cursor: pointer;
            font-size: 20px;
            width: 8vw;
            height: 3vw;
            border: none;
            border-radius: 20px;
            color: white;
            background: linear-gradient(#00fcef, #0065fc);
            transition: width 0.5s, height 0.5s; 

            &:hover{
                box-shadow: 0 0 10px #0032fc;
                width: 8.5vw;
                height: 3.5vw;
                border: none;
            }
        }
    }



    
`;