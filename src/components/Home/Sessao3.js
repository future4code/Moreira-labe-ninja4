import React from 'react'
import { MdFeedback } from 'react-icons/md';

class Sessao3 extends React.Component{
    render(){
        return(
            <section>
                <div>
                    <h3>Etapa 0</h3>
                </div>
                <div>
                    <h2>A TeamTech tem os melhores freelancers do mercado</h2>
                    <p>Somos a 6 maior empresa no ramo de trabalho freelancer</p>
                </div>
                <section>
                    <article>
                        <h4>Contate o freelancer</h4>
                        <p>Aqui você escolhe o melhor profissional. Temos uma variedade muito grande e aqui também conta
                            com o suporte da TeamTech para qualquer eventual problema que aparacer.
                        </p>
                    </article>
                    <article>
                        <h4>Acompanhando o projeto</h4>
                        <p>Aqui você conta com as nossas salas virtuais. Nelas, você e seu contratado pode entrar e
                            conversar bastante, seja com o uso de webcams e também por voz.
                        `</p> 
                    </article>
                    <article>
                        <MdFeedback />
                        <h4>Término e Feedback</h4>
                        <p>Ao término do seu projeto, você atribiu uma nota ao contratado e também pode escrever
                            um breve resumo como foi fazer este projeto.
                        </p>
                    </article>
                </section>
            </section>
        )
    }
}

export default Sessao3