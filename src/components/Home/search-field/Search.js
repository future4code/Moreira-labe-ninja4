import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    border-radius: 15px;
    width: 70%;
    height: 40px;
    box-sizing: border-box;
    transition: 200ms ease;
    overflow: hidden;
    input{
        width: 96%;
        border: 0;
        font-size: 1em;
        height: 85%;
    }
    .icon{
        margin-left: 10px;
    }

    :hover{
            border:  2px solid orange;
        }
`

export function Search(props) {
    return <SearchContainer>

        <BiSearch className="icon"/>
        <input 
        type="text" 
        placeholder="Encontre devs" 
        onChange={props.onChangebuscar} 
        value={props.buscar}/>

    </SearchContainer>
}