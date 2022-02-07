import React, { Component } from 'react'
import SessaoProd from './Home/SessaoProd'
import PagCadastro from './Register/PagCadastro'
import Header from './Home/Header'
import Footer from './Home/Footer'
import styled from 'styled-components'
import Sessao3 from './Home/Sessao3'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export class AppContainer extends Component {

  state = {
    section: "home",
    button: "Anuncie seus poderes"
  }

  changeSection = () => {
    if(this.state.section === "home"){
        this.setState({
          section: "register",
          button : "Voltar à Home"
        })
    }else if(this.state.section === "register"){
      this.setState({
        section: "home",
        button: "Anuncie seus poderes"
      })
    }
  }

  render() {

    let displaySection

    if (this.state.section === "home") displaySection = <SessaoProd/>
    else if (this.state.section === "register") displaySection = <PagCadastro/>

    return (
      <Container>
        <Header buttonText={this.state.button} clicks={this.changeSection} />
        {displaySection}
        <Sessao3 />
        <Footer/>
      </Container>
    )
  }
}