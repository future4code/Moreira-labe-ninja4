import React from "react";
import { FaShoppingCart, FaOpencart } from "react-icons/fa";
import styled from "styled-components";

const Fig = {
    fontSize: "40px",
    color: "#000",
    paddingRight: "50px",
    cursor: "pointer"
}
const Content = styled.div`
    background-color: brown;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const H1 = styled.h1`
    padding: 0px 100px;
`
const Button = styled.button`
    height: 30px;
    width: 150px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #fff;
    background-color: brown;
    border-radius: 5px;
    &:hover{
        background-color: #c74040;
    } 
`

class Header extends React.Component{
    render(){
        return(
            <Content>
                <div>
                    <H1><FaOpencart/> Ninjas </H1>
                </div>
                <div>
                    <Button onClick={this.props.clicks}>Procurar ninja!</Button>
                </div>
                <div>
                    <Button>Entrar</Button>
                </div>
                <div>
                    <FaShoppingCart style={Fig}/>
                </div>
            </Content>
        )
    }
}

export default Header