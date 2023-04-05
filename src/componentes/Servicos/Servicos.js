import './Servicos.css'

function Servicos(){
    return(
        <div className='Servicos'>
            <h1>Serviços:</h1>
            <div className='secoes'>
            <main className='word'>
                <h4>Formatação de texto</h4>
            </main>
            <main className='powerpoint'>
                <h4>Criação de slides</h4>
            </main>
            <main className='excel'>
                <h4>Criação de planilhas</h4>
            </main>
            <main className='html'>
                <h4>Codigação de sites</h4>
            </main>
            <main className='css'>
                <h4>Estilização de sites</h4>
            </main>
            <main className='js'>
                <h4>Mobilização de sites</h4>
            </main>
            </div>
        </div>
    )
}

export default Servicos