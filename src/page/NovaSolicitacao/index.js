import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextField from '@mui/material/TextField';
import { ContainerPage } from "./styled"
import { useDados } from '../../context/formContext';
import Footer from '../../Components/Footer';
import Button from '@mui/material/Button';

export default function Page () {
    const [text, setText] = useState('')

    const { addDados } = useDados();
    const [list, setList] = useState({
        title:'',
        product:'',
        category:'',
        problem:'',
        company:'',
        priority: '',
        impactedUsers:'',
        stoppedOperation:'',
        environmentInformation:'',
    })
    
    return (
        <>
        <ContainerPage>
            <div className="ticketTitle">
             <label className="titulo">Ticket</label>
             <TextField id="tituloTick" label="Título" variant="standard"  value={list.title} 
             onChange={(event) => setList( (oldState) => ({...oldState, title: event.target.value}))}/>
             <br/>
             <TextField id="prodTick" label="Produto" variant="standard" value={list.product} 
             onChange={(event) => setList( (oldState) => ({...oldState, product: event.target.value}))}/>
             <br/>
             <TextField id="cateTick" label="Categoria" variant="standard" value={list.category} 
             onChange={(event) => setList( (oldState) => ({...oldState, category: event.target.value}))}/>
             <br/>
             <TextField id="proFraTick" label="Problema em uma frase" variant="standard" value={list.problem} 
             onChange={(event) => setList( (oldState) => ({...oldState, problem: event.target.value}))}/>
             <br/>
             <TextField id="proFraTick" label="Empresa/Pessoa Física" variant="standard" value={list.company} 
             onChange={(event) => setList( (oldState) => ({...oldState, company: event.target.value}))}/>
             <br/>

            <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                <InputLabel>Prioridade</InputLabel>
                <Select value={list.priority} onChange={(event) => setList( (oldState) => ({...oldState, priority: event.target.value}))}>
                    <MenuItem value={''}></MenuItem>
                    <MenuItem value={"Alta"}>Alta</MenuItem>
                    <MenuItem value={"Média"}>Média</MenuItem>
                    <MenuItem value={"baixa"}>Baixa</MenuItem>
                </Select>
            </FormControl>
            <br/>

            <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                <InputLabel>Usuários Impactados</InputLabel>
                <Select value={list.impactedUsers} onChange={(event) => setList( (oldState) => ({...oldState, impactedUsers: event.target.value}))}>
                    <MenuItem value={''}></MenuItem>
                    <MenuItem value={'Apenas 1'}>Apenas 1</MenuItem>
                    <MenuItem value={'1 a 10 Usuários'}>1 a 10 Usuários</MenuItem>
                    <MenuItem value={'11 a 30 Usuários'}>11 a 30 Usuários</MenuItem>
                    <MenuItem value={'31 a 50 Usuários'}>31 a 50 Usuários</MenuItem>
                    <MenuItem value={'Mais de 50 Usuários'}>Mais de 50 Usuários</MenuItem>
                </Select>
            </FormControl>
            <br/>

             <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                <InputLabel>Sua operação está parada?</InputLabel>
                <Select value={list.stoppedOperation} onChange={(event) => setList( (oldState) => ({...oldState, stoppedOperation: event.target.value}))}>
                    <MenuItem value={''}></MenuItem>
                    <MenuItem value={'Esta parada'}>Operação parada</MenuItem>
                    <MenuItem value={'Consegue trabalhar'}>Operação consegue trabalhar</MenuItem>
                    </Select>
            </FormControl>
            <br/>

             <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                <InputLabel>Informação do Ambiente</InputLabel>
                <Select value={list.environmentInformation} onChange={(event) => setList( (oldState) => ({...oldState, environmentInformation: event.target.value}))}>
                    <MenuItem value={''}></MenuItem>
                    <MenuItem value={'Dados/Ambiente de Testes - Somente testes'}>Dados/Ambiente de Testes - Somente testes</MenuItem>
                    <MenuItem value={'Ambiente de produção - Cliente Ativo/Licença'}>Ambiente de produção - Cliente Ativo/Licença</MenuItem>
                </Select>
            </FormControl>
             <br/>

             <div className='App'>
                 <div className='editor'>
                    <CKEditor
                        value={list.richText}
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(data)
                        }}
                    />
                 </div>
             </div>

            <label>Selecione o PDF:</label>
            <form action='/action_page.php'>
                <input type="file" accept="application/pdf"></input>
            </form>
            <br/>
            
            <div className='Container-btnSend'>
                <Button className='btnSend' onClick={() => {addDados(list)}}>ENVIAR</Button>
            </div>
        </div>
        </ContainerPage>
        <Footer />
        </>
        );
}
