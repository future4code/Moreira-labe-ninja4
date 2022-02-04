import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { baseURL, headersAPI } from "../../services/urls";
import Illustration from "../../assets/dev2.png"


const PageContainer = styled.div`
    background-image: linear-gradient(90deg, #EECCFF, #FFD6B6);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-width: 30%;
    }
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    align-self: center;
    margin: 40px 0;
    p{
        font-size: 1.5em;
        font-weight: bold;
    }
    label{
        margin-top: 10px;
        font-weight: bold;
    }
    .date{
        width: fit-content;
    }
    .payment{
        display: grid;
        grid-template-columns: repeat(2, 0.5fr);
        margin: 20px;
        width: max-content;
    }
    @media screen and (max-width: 800px) {
        margin: 5px;
    }
`

const StyledInput = styled.input`
    width: 50%;
    font-size: 1em;
    border: 2px solid gray;
    border-radius: 5px;
    padding: 5px;
`

const StyledButton = styled.button`
        margin: 10px;
        width: fit-content;
        height: 30px;
        align-self: center;
        background-color: #4C2263;
        border: none;
        border-radius: 10px;
        margin: 20px 0 10px 0;
        font-size: 1em;
        transition: 0.3s ease;
        color: white;
        font-weight: 600;
        cursor: pointer;
        :hover{
            background-color: #69268A;
        }
        :active{
            background-color: #4C2263;
        }
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
        .then((res) => {
            alert("Serviço adicionado com sucesso")
            this.setState({
                title: "",
                description: "",
                price: "",
                paymentMethods: [],
                dueDate: "",
            })})
        .catch((err) => alert(err.response.data.message))
    }

    render(){
        return <PageContainer>
            
            <img src={Illustration} alt='Programador'/>

            <FormContainer 
                type="submit" 
                onSubmit={this.handleSubmit}>

            <p>Cadastre seu serviço</p>
            
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

            <label>Forma de pagamento:</label>
            <div className="payment"
                onChange={this.onChangePayment}>

                    <input type="radio" value="Pix" name="payment"/>Pix
                    <input type="radio" value="Cartão" name="payment"/>Cartão
                    <input type="radio" value="Dinheiro" name="payment"/>Dinheiro
                    <input type="radio" value={["Pix", " Cartão", " Dinheiro"]} name="payment"/>Todos os anteriores

            </div>

            <label>Data limite:</label>
            <StyledInput 
                className="date"
                value={this.state.dueDate} 
                onChange={this.onChangeDate}
                type="date"
                placeholder="Data limite"
            />

            <StyledButton type="submit" onClick={this.handleSubmit}>
                Enviar
            </StyledButton>

        </FormContainer>
        </PageContainer>
    }
}