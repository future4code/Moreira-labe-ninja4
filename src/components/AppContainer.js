import React, { Component } from 'react'
import SessaoProd from './Home/SessaoProd'
import PagCadastro from './Register/PagCadastro'
import Header from './Home/Header'
import Footer from './Home/Footer'
import { IconName } from "react-icons/fa";

export class AppContainer extends Component {

  state = {
    section: "home",
    button: "Seja um ninja!"
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
        button: "Seja um ninja!"
      })
    }
  }

  render() {

    let displaySection

    if (this.state.section === "home") displaySection = <SessaoProd/>
    else if (this.state.section === "register") displaySection = <PagCadastro/>

    return (
      <div>
        <Header />
        <button onClick={this.changeSection}>{this.state.button}</button>
        {displaySection}
        <Footer/>
      </div>
    )
  }
}