import './Sobre.css'

function Sobre(){
    return(
        <div className='Sobre'>
            <h3>Quem sou eu?</h3>
            <div className='desc'>
              <p>Tenho 16 anos e sou aluna do Instituto Federal de Mato Grosso do Sul, no curso integrado em técnico de Informática.</p>

            <h5>Formação:</h5>
            <p>Estudo técnico integrado em informática.</p>

            <h5>Objetivos:</h5>
            <p>Pretendo seguir carreira no ramo da informática dentro da área de back-end, onde pretendo me especializar em: Java,
               PHP e Ruby. Pretendo fazer isso me formando em análise de sistemas, para assim, poder ministrar e também criar servidores
               de forma mais limpa e clara.</p>

            <h5>Projetos:</h5>
            <p>Participei durante meu primeiro ano no IFMS do projeto "Eu, tu e o nosso ambiente", organizado pela professora Luciene Bonfim,
               e atualmente participo como bolsista do projeto "HortiTalk" organizado pelo professor Rodrigo Duran, sendo que este último,
               está sendo utilizado também como um trabalho de conclusão de curso.</p>

            <h5>Experiência:</h5>
            <p>Estagiária na empresa <a href='https://www.facebook.com/farmais.na/?locale=pt_BR'> Farmais-na</a>.</p>
            </div>

        </div>
    )
}

export default Sobre