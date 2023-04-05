import './Mensagem.css';

const Mensagem = (props) => {
    const mensagemEnviada = (objeto) =>{
        props.mensagem(objeto.target.value)
    }

    return(
        <div className="mensagem">
            <input onChange={mensagemEnviada} value={props.value} type={props.type}/>
        </div>
    )
}

export default Mensagem