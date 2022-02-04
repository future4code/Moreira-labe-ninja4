import React from "react";
import styled from "styled-components";

const Produto = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    margin: 2px;
    p{
        margin: 6px;
    }
`

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
                return <Produto key={job.id} value={job.id}>
                <p>{job.title}</p>
                <p>R${job.price}</p>
                <button 
                value={job.id}
                onClick={this.props.remove}> Remover</button>
            </Produto>
            })}
        return(
            <div>
                <p>Carrinho</p>
                {produtosCarrinhos}
                <p>Valor Total: R${this.valorTotal()}</p>
            </div>
        )
    }
}


export default Carrinho;