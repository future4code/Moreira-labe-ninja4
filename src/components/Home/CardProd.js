import React from "react";
import styled from "styled-components";
import { AiFillCode } from "react-icons/ai";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 0 2px 2px lightgray;
    transition: 0.3s ease;
    width: 250px;
    margin: 10px;
    :hover {
        box-shadow: 0 4px 4px lightgray;
    }
    .description{
        font-size: 0.8em;
        font-weight: bold;
        color: gray;
        margin: 5px 10px 15px 10px;
    }
    .price{
        font-size: 1.3em;
        font-weight: bold;
        margin: 10px;
    }
    .paymentMethod{
        font-size: 0.8em;
        margin: 5px;
        color: gray;
    }
    .dueDate{
        font-size: 0.8em;
        margin: 5px;
        color: gray;
    }
    button{
        width: 80%;
        height: 30px;
        align-self: center;
        background-color: #4C2263;
        border: none;
        border-radius: 10px;
        margin: 5px;
        font-size: 0.8em;
        transition: 0.3s ease;
        color: white;
        font-weight: 600;
        :hover{
            background-color: #69268A;
        }
        :active{
            background-color: #4C2263;
        }
    }
`

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
    color: #E6581D;
    .icon{
        margin: 15px;
        scale: 3;
        box-sizing: border-box;
    }
    .title{
        margin: 10px 5px 3px 10px;
        font-size: larger;
        font-weight: bolder;
    }
`

export function CardProd(props) {
            return <CardContainer>

            <CardHeader>

                <AiFillCode className="icon"/>
                <p className="title">{props.cardTitle}</p>

            </CardHeader>

            <p className="description">{props.cardDescription}</p>

            <p className="paymentMethod">Forma de Pagamento: <br/> {props.cardPayMeth}</p>

            <p className="dueDate">Data limite: <br/> {props.cardDueDate}</p>

            <p className="price">R${props.cardPrice}</p>

            <button value={props.value} onClick={props.addToCart}>Adicionar ao carrinho</button>
        </CardContainer>
}