import React from "react";
import { FaLanguage, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const fig = {
    fontSize: "30px",
    margin: "5px"
}

const FooterDiv = styled.div`
    background-color: #971a1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
`

class Footer extends React.Component{
    render(){
        return(
            <FooterDiv>
                <section>
                    <p>© 2022 Ninjas, inc ·
                        <a href="#">Privacidade</a> 
                        · <a href="#">Termos</a> 
                        · <a href="#">Mapa do Site</a> 
                        · <a href="#"> Informações da Empresa</a> 
                    </p>
                </section>
                <section>
                    <p>
                        <FaLanguage />
                        <a href="#">Português (BR)</a>
                        R$ <a href="#">BRL</a>
                        <FaFacebook style={fig}/>
                        <FaInstagram style={fig}/>
                        <FaTwitter style={fig}/>
                    </p>
                </section>
            </FooterDiv>
        )
    }
}

export default Footer