import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import styled from "styled-components";

const fig = {
    marginRight: "5px",
}

const Content = styled.div`
    background-color: #E6581D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0 30px;
    height: 50px;
`
const H1 = styled.h1`
    margin: 0 15px;
    display: flex;
    align-items: center;
`
const Button = styled.button`
    width: fit-content;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #fff;
    background-color: #E6581D;
    border-radius: 5px;
    transition: 0.3s ease;
    :hover{
        background-color: orange;
    }
    :active{
        background-color: darkorange;
    }
    margin: 0 15px;
    color: white;
`

class Header extends React.Component{
    render(){
        return(
            <Content>

                <div>
                    <H1><FaLaptopCode style={fig}/> DevLivery</H1>
                </div>
                <div>
                    <Button onClick={this.props.clicks}>{this.props.buttonText}</Button>
                </div>

            </Content>
        )
    }
}

export default Header