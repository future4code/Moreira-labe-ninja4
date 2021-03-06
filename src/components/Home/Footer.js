import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import FormaDePagamento from '../../assets/paymethods.png'

const fig = {
    fontSize: "30px",
    margin: "5px"
}

const FooterDiv = styled.div`
    background-color: #E6581D;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: white;
`
const A = styled.a`
    color: #111;
`
const PSegundo = styled.div`
      @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const FirstSection = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media screen and (max-width: 1100px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const SecondSection = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
const H4 = styled.h4`
    font-size: 30px;
`
const Img = styled.img`
    width: 300px;
`
const Hr = styled.hr`
    width: 80%;
`
const Coments = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Socials = styled.section`
    display: flex;
    align-items: center;
    
`
const ImageSocial = styled.section`
    text-align: center;
`
const TitleSocial = styled.p`
    margin: 0;
    text-align: center;
`
class Footer extends React.Component{
    render(){
        return(
            <FooterDiv>
                <FirstSection>
                    <section>
                        <div>
                            <H4>Sobre nós</H4>
                        </div>
                        <div>
                            <p>Confiabilidade</p>
                            <p>Carreira</p>
                            <p>Lojas Físicas</p>
                            <p>Funcionarios Destaque</p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <div>
                                <H4>Atendimento</H4>
                            </div>
                            <div>
                                <p>Central de ajuda</p>
                                <p>Atendimento para empresas</p>
                                <p>Vendas com Devs</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                            <div>
                                <H4>Televendas</H4>
                            </div>
                            <div>
                                <p>Telefone: 0800 080 1289</p>
                                <p>De segunda a sábado, das 08h as 20h.</p>
                                <p>Exceto feriados</p>
                            </div>
                        </div>
                    </section>
                    <section> 
                        <H4>Formas de pagamento</H4>
                        <Img src={FormaDePagamento} alt="" />
                    </section>
                </FirstSection>
                <Hr/>
                <SecondSection>
                    <Coments>
                        <p>© 2022 DevLivery inc. ·
                            <A href="#">Privacidade</A> 
                            · <A href="#">Termos</A> 
                            · <A href="#">Mapa do Site</A> 
                            · <A href="#"> Informações da Empresa</A> 
                        </p>
                    </Coments>
                    <Socials>
                        <PSegundo>
                            <TitleSocial>
                                <H4>Acompanhe o DevLivery</H4>
                            </TitleSocial>
                            <ImageSocial>
                                <FaFacebook style={fig}/>
                                <FaInstagram style={fig}/>
                                <FaTwitter style={fig}/>
                            </ImageSocial>
                        </PSegundo>
                    </Socials>
                    
                </SecondSection>
            </FooterDiv>
        )
    }
}

export default Footer