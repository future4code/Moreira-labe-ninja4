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
`

export function CardProd(props) {
            return <CardContainer>
            <p>Título: <br/> {props.cardTitle}</p>

            <p>Descrição: <br/> {props.cardDescription}</p>

            <p>Preço: <br/> R$ {props.cardPrice}</p>

            <p>Forma de Pagamento: <br/> {props.cardPayMeth}</p>

            <p>Data limite: <br/> {props.cardDueDate}</p>

            <button onClick={props.addToCart}>Adicionar ao carrinho</button>
        </CardContainer>
    }