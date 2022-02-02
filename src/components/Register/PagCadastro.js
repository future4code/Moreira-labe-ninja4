import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { baseURL, headersAPI } from "../../services/urls";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: center;
`

const StyledInput = styled.input`
    
`

const StyledButton = styled.button`

`

export default class PagCadastro extends React.Component{

    state = {
        title: "",
        description: "",
        price: "",
        paymentMethods: [],
        dueDate: "",
    }

    onChangeTitle = (e) => {
        this.setState({title: e.target.value})
    }

    onChangeDescription = (e) => {
        this.setState({description: e.target.value})
    }

    onChangePrice = (e) => {    
            this.setState({price: e.target.value.replace(/\D/,'')})
    }

    onChangePayment = (e) => {
        this.setState({paymentMethods: [e.target.value]})
    }

    onChangeDate = (e) => {
        this.setState({dueDate: e.target.value})
    }

    handleSubmit = (e) => {

        e.preventDefault()

        const body = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            paymentMethods: this.state.paymentMethods,
            dueDate: this.state.dueDate,
        }

        Axios.post(baseURL+"jobs", body, headersAPI)
        .then((res) => alert("job criado"))
        .catch((err) => console.log(err.response.data))
    }

    render(){
        return<FormContainer 
                type="submit" 
                onSubmit={this.handleSubmit}>

            <StyledInput 
                value={this.state.title} 
                type="text"
                onChange={this.onChangeTitle}
                placeholder="Título do serviço"
            />

            <StyledInput 
                value={this.state.description} 
                onChange={this.onChangeDescription}
                type="text"
                placeholder="Descrição"
            />

            <StyledInput 
                value={this.state.price} 
                type="text"
                onChange={this.onChangePrice}
                placeholder="Preço"
            />

            <label>Forma de pagamento</label>
            <div
                onChange={this.onChangePayment}>

                    <input type="checkbox" value="Pix" name="payment"/> Pix
                    <input type="checkbox" value="Cartão" name="payment"/>Cartão
                    <input type="checkbox" value="Dinheiro" name="payment"/>Dinheiro
                    <input type="checkbox" value="Troca" name="payment"/>Troca

            </div>

            <label>Data limite</label>
            <StyledInput 
                value={this.state.dueDate} 
                onChange={this.onChangeDate}
                type="date"
                placeholder="Data limite"
            />

            <StyledButton type="submit" onClick={this.handleSubmit}>
                Enviar
            </StyledButton>

        </FormContainer>
    }
}