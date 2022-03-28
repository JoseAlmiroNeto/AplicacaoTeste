import styled from 'styled-components';

export const ListaSoli = styled.div`
    .noTicket{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        font-family: Arial, Helvetica, sans-serif;

        img {
            width: 40vw;
        }

    }

    .titleHome{
        margin-left: 20px;
    }

    .search{
        display: flex;
        gap: 15px;
        margin-left: 15px;
        margin-bottom: 15px;

        .select{
            width: 5vw;
            height: 4vh;
            border-radius: 2px;
            border: 1px solid #ccc;
            box-shadow: 0 0 2px #ccc;
            padding: 10px;
        }

        .inputSearch{
            border-radius: 2px;
            border: 1px solid #ccc;
            box-shadow: 0 0 2px #ccc;
        }
    }

    .container{
        border: 1px solid #e8e8e8;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .Conatiner-title{
            display: flex;
            flex-direction: column;
        }

        .title{
            margin: 0px;
        }

        .dateTime{
            padding-left: 10px;
            padding-right: 10px;
            border-left: 1px solid #e8e8e8;
            height: 12.3vh;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .btnDone{
            cursor: pointer;
            border: none;
            background-color: transparent;
            color: #00a0fc;
            display: flex;
            align-items: center;
            padding-left: 0px;
        }

        &:hover{
            background-color: #e6e6e6;
        }

        .status{
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
`;
