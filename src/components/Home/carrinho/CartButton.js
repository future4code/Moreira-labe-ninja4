import React from 'react';
import styled from 'styled-components';
import { MdShoppingCart } from 'react-icons/md';

const ButtonContainer = styled.div`
    margin-left: 20%;
    width: fit-content;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: #69268A;
    cursor: pointer;
    color: white;
    transition: 0.3s ease;
    p{
        font-weight: bold;
        margin: 0;
        margin-left: 10px;
        text-align: center;
    }
    :hover{
        background-color: #4C2263;
    }
`

export function CartButton(props) {
    return <ButtonContainer onClick={props.showCart}>
        <MdShoppingCart/>
        <p>Carrinho [{props.cart.length}]</p>
        </ButtonContainer>
}