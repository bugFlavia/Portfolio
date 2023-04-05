import Botao from '../Botao/Botao'
import Mensagem from '../Mensagem/Mensagem'
import { useState } from 'react'
import './Contato.css'

const Contato = (props)=>{

    const [mensagem, setmensagem] = useState('')

    const Submeter = (evento) =>{
        evento.preventDefault()
        alert("Sua mensagem foi enviada");
        props.mensagemAdicionada({mensagem})
    }
    return(
        <div className='contato'>

            <h1>Contato:</h1>

            <div className='divisao'>

            <div className='informacoes'>
                <p><span>Telefone:</span>(67) 99959-9103</p>
                <p><span>E-mail:</span>flavianunesbarboza@gmail.com</p>
                <p><span>Endereço:</span>Rua Andrá Loyer, 1276, Sinhá Stela, Nova Andradina- MS.</p>
                <p><span>Instagram:</span><a href='https://www.instagram.com/flx_prod/'>@flx_prod</a></p>
                <p><span>Likedin:</span><a href='https://www.linkedin.com/in/flavia-nunes-b4480524b/'>Flavia Nunes</a></p>
                <p><span>GitHub:</span><a href='https://github.com/bugFlavia'>@bugFlavia</a></p>
            </div>

            <div className='formulario'>
                <form onSubmit={Submeter}>
                <h4>Digite sua mensagem:</h4>
                <Mensagem type="text" value={mensagem} mensagem= {value => setmensagem(value)}/>
                <Botao>Enviar</Botao>
          </form>
            </div>

            </div>

        </div>
        
    )
}

export default Contato