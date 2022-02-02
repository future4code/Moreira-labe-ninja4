import React from "react";
import styled from "styled-components";

class Carrinho extends React.Component{
    state = {
        carrinho: this.props.cart
    }

    valorTotal = () => {
        const valorTotal = this.state.carrinho.map((job) => {
            return job.price
        }).reduce((a, b) => a + b, 0)
            return(valorTotal)

    } 

    removeCarrinho = (ev) => {
        const idJob = ev.target.value
        const novoCarrinho = this.state.carrinho.filter((job) => {
            return job.id !== idJob
        }).map((job) => {
            return job
        })
        this.setState({carrinho: novoCarrinho})
        console.log(ev.target.value)
    }

    render (){
        let produtosCarrinhos

        if (this.state.carrinho !== []){
            produtosCarrinhos = this.state.carrinho.map((job) => {
                return <div value={job.id}>
                <p>{job.title}</p>
                <p>R$ {job.price}</p>
                <button 
                value={job.id}
                onClick={this.removeCarrinho}> Remover</button>
            </div>
            })}
        return(
            <div>
                <p>Carrinho</p>
                {produtosCarrinhos}
                <p>Valor Total: {this.valorTotal()}</p>
            </div>
        )
        
        
    }





}


export default Carrinho;