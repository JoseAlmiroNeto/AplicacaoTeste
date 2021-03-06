import React, { useState } from 'react'
import { useDados } from '../../context/formContext';
import { ListaSoli } from './styled';
import StarsIcon from '@mui/icons-material/Stars';

const PageHome = () => {

    let showdate=new Date();
    let dt=showdate.toDateString();
    let displaytime= showdate.getHours()+':'+showdate.getMinutes();

    const {listaDeDados} = useDados()
    
    return (
        <ListaSoli>
            <h1 className='titleHome'>Solicitações</h1>
            <div className='search'>
                <select className='select'>
                    <option></option>
                    <option>Entrada</option>
                    <option>Saída</option>
                </select>
                <input className='inputSearch' type='text'></input>
            </div>

            {listaDeDados.length === 0 && <div className="noTicket"><img src="https://user-images.githubusercontent.com/97368866/159596645-3dd2e408-0de9-4a5b-bb49-4726fd914cf3.png" /> <p>Nenhum Ticket em sua fila</p> </div>}
            {listaDeDados.map((data, index) => {
                return (
                        <div className='container' key={index}>
                            <div className='Conatiner-title'>
                                <div className='status'>
                                    <button className='btnDone'><StarsIcon/>Em Analize</button>
                                    <p>| # 1892</p>
                                    <p>| {data.company}</p>
                                </div>
                                <p className='title'><strong> {data.title} - {data.problem} - {data.category} </strong></p>
                                <p className='product'>Produto ou serviço: <strong>{data.product}</strong></p>
                            </div>
                            <div className='info'>
                                A prioridade é <strong>{data.priority}</strong>, o numero de úsuarios impactados é de<br/><strong>{data.impactedUsers}</strong>, a operação <strong>{data.stoppedOperation}</strong> e o<br/>ambiente é <strong>{data.environmentInformation}</strong>
                            </div>
                            <div className='dateTime'>
                                <div><strong>{dt}</strong></div>
                                <div>{displaytime}</div>
                            </div>
                        </div>
                )
            })}

        </ListaSoli>
        
        
    );
}

export default PageHome;
