import React from "react";
import styled from "styled-components";

class Carrinho extends React.Component{
    

    valorTotal = () => {
        const valorTotal = this.props.cart.map((job) => {
            return job.price
        }).reduce((a, b) => a + b, 0)
            return(valorTotal)

    } 



    render (){
        let produtosCarrinhos

        if (this.props.cart !== []){
            produtosCarrinhos = this.props.cart.map((job) => {
                return <div value={job.id}>
                <p>{job.title}</p>
                <p>R$ {job.price}</p>
                <button 
                value={job.id}
                onClick={this.props.remove}> Remover</button>
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