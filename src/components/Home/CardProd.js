import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    border-radius: 15px;
    box-shadow: 0 2px 2px gray;
    transition: 0.3s ease;
    width: 250px;
    margin: 10px;
    :hover {
        box-shadow: 0 4px 4px gray;
    }
    .title{
        margin: 10px 5px 3px 10px;
        font-size: larger;
        font-weight: bolder;
    }
    .description{
        font-size: medium;
        font-weight: bold;
        color: gray;
        margin: 0 10px;
    }
    .price{
        font-size: large;
        font-weight: bold;
        margin: 10px;
    }
`

export function CardProd(props) {
            return <CardContainer>
            <p className="title">{props.cardTitle}</p>

            <p className="description">{props.cardDescription}</p>

            <p className="price">R$ {props.cardPrice}</p>

            <p>Forma de Pagamento: <br/> {props.cardPayMeth}</p>

            <p>Data limite: <br/> {props.cardDueDate}</p>

            <button value={props.value} onClick={props.addToCart}>Adicionar ao carrinho</button>
        </CardContainer>
}