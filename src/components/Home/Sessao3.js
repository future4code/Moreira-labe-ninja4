import React from 'react'
import { MdFeedback } from 'react-icons/md';
import styled from 'styled-components';

const BoaContainer = styled.section`
    background: linear-gradient(90deg,#E6581D,#4C2263);
    padding: 50px;
    margin: 50px 0px;
    color: white;
    letter-spacing: 2px;
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Title = styled.section`
    text-align: center;
    margin-bottom: 25px;
`
const P = styled.p`
    font-size: 18px;
    margin: 50px 0px;
`
const SectionOne = styled.section`
    display: flex; 
    flex-direction: column;
`
const SectionTwo = styled.section`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`    
const Box = styled.article`
    width: 25%;
    @media screen and (max-width: 800px) {
        width: 80%;
    }
`


class Sessao3 extends React.Component{
    render(){
        return(
            <BoaContainer>
                <SectionOne>
                    <Title>
                        <h2>A DevLivery tem os melhores freelancers do mercado</h2>
                        <P> ♥ Somos a maior empresa no ramo de trabalho freelancer ♥</P>
                    </Title>
                </SectionOne>
                <SectionTwo>
                    <Box>
                        <MdFeedback />
                        <h4>Contate o freelancer</h4>
                        <p>Aqui você escolhe o melhor profissional. Temos uma variedade muito grande e aqui também conta
                            com o suporte da TeamTech para qualquer eventual problema que aparacer.
                        </p>
                    </Box>
                    <Box>
                        <MdFeedback />
                        <h4>Acompanhando o projeto</h4>
                        <p>Aqui você conta com as nossas salas virtuais. Nelas, você e seu contratado pode entrar e
                            conversar bastante, seja com o uso de webcams e também por voz.
                        </p> 
                    </Box>
                    <Box>
                        <MdFeedback />
                        <h4>Término e Feedback</h4>
                        <p>Ao término do seu projeto, você atribiu uma nota ao contratado e também pode escrever
                            um breve resumo como foi fazer este projeto.
                        </p>
                    </Box>
                </SectionTwo>
            </BoaContainer>
        )
    }
}

export default Sessao3