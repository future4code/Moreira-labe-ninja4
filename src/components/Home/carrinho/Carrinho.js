import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai"

const Produto = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    margin: 2px;
    min-width: 30vw;
    p{
        margin: 6px;
    }
`

const CartContainer = styled.div`
    margin: 15px;
    border: 2px solid #69268A;
    border-radius: 10px;
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 20%;
    .title{
        font-weight: bold;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        p{
            margin: 10px;
        }
        .close{
            margin: -3px;
            cursor: pointer;
        }
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
            <CartContainer>

                <div className="title">
                    <AiOutlineShoppingCart/>
                    <p>Carrinho</p>
                   <AiOutlineCloseCircle className="close" onClick={this.props.showCart}/>
                </div>

                {produtosCarrinhos}

                <p>Valor Total: R${this.valorTotal()}</p>

            </CartContainer>
        )
    }
}


export default Carrinho;