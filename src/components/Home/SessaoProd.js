import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { CardProd } from "./CardProd";
import { baseURL, headersAPI } from "../../services/urls";
import Carrinho from "./carrinho/Carrinho";
import Dev from '../../assets/dev.png'
import { Search } from "./search-field/Search";
import { CartButton } from "./carrinho/CartButton";

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
  @media screen and (max-width: 600px) {
       display: flex;
       flex-direction: column;
    }
`

const Box = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
    @media screen and (max-width: 1100px) {
       width: 50%;
    }
    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
    }
`
const Input = styled.input`
  border: 1px solid lightgray;
  height: 30px;
  border-radius: 5px;
  margin: 10px;
  
`
const Select = styled.select`
  border: 1px solid lightgray;
  height: 30px;
  border-radius: 5px;
  margin: 10px;
`
const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
      margin-top: -15px;
      font-weight: normal;
      font-size: 1em;
  }
`

const BoxDesc = styled.div`
  margin: 10px 0px;
  max-width: 70vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  img{
    max-width: 500px;
  }
  p{
    width: 80%;
    font-size: 0.6em;
    font-weight: bold;
    color: gray;
  }
  @media screen and (max-width: 1100px) {
        flex-direction: column;
    }
  @media screen and (max-width: 800px) {
        img{
          max-width: 300px;
        }
      }
`
export default class SessaoProd extends React.Component {

  componentDidMount(){
    this.getJobs()
  }

    state = {
      jobs: [],
      cart: [],
      valorMinimo: "",
      valorMaximo: "",
      buscar: '',
      order: "title",
      showCart: false
    }

    getJobs = () => {
        Axios.get(baseURL+"jobs", headersAPI)
        .then((res) => {this.setState({
          jobs: res.data.jobs
        })
      })
        .catch((err) => console.log(err.response))
    }

    addToCart = (e) => {
      const jobId = e.target.value
      const addJob = this.state.jobs.find((job) => jobId === job.id)
      const alreadyIn = this.state.cart.some((job) => jobId === job.id)
      const newCart = [...this.state.cart, addJob]

      if(!alreadyIn) this.setState({cart: newCart})
      else alert('Esse serviço já está no carrinho')
    }

    removeCarrinho = (ev) => {
      const idJob = ev.target.value
      const novoCarrinho = this.state.cart.filter((job) => {
          return job.id !== idJob
      }).map((job) => {
          return job
      })
      this.setState({cart: novoCarrinho})
  }

    //A partir daqui: Arthur
    onChangeMinimo = (event) =>{
      this.setState({
          valorMinimo: event.target.value.replace(/\D/,'')
      })
    }
    onChangeMaximo = (event) =>{
      this.setState({
          valorMaximo: event.target.value.replace(/\D/,'')
      })
    }
    onChangebuscar = (event) =>{
      this.setState({
          buscar: event.target.value
      })
    }
    onChangeOrder = (e) => {
      this.setState({
        order: e.target.value
    })}

    cartButton = () => {
      this.setState({showCart: !this.state.showCart})
    }
    
    render() {
      
      let allJobs

      if (this.state.jobs !== []){
        allJobs = this.state.jobs
          .filter((job) => {
          return job.title.toLowerCase().includes(this.state.buscar.toLowerCase())
          })
          .filter((job) => {
          return this.state.valorMinimo === "" || job.price >= Number(this.state.valorMinimo)
        })
        .filter((job) => {
          return this.state.valorMaximo === "" || job.price <= Number(this.state.valorMaximo)
        })
        .sort((a, b) => {
            switch (this.state.order) {
              case "price":
                return a.price - b.price

              case "title":
                return a.title.localeCompare(b.title)

              case "dueDate":
                return new Date(a.dueDate).getTime() < new Date(b.dueDate).getTime()

              default:
                return a.price - b.price
            }})
        .map((job) => {
          return <CardProd 
          key={job.id}
          cardTitle={job.title} 
          cardDescription={job.description} 
          cardPrice={job.price} 
          cardPayMeth={job.paymentMethods} 
          cardDueDate={job.dueDate}
          addToCart={this.addToCart}
          value={job.id}/>
        })
      }

      let showCart

      if (this.state.showCart === true) {
        showCart = <Carrinho remove={this.removeCarrinho} cart={this.state.cart} showCart={this.cartButton}/>
      } else  showCart = <CartButton cart={this.state.cart} showCart={this.cartButton}/>

      return (
        <SessionContainer>

                <BoxDesc>
                  <img src={Dev} alt="Dev" />
                  <H1>Relaxa! Aqui você encontra
                    devs super-poderosos para te ajudar!
                    <p>Encontre o serviço que precisa, contate a pessoa que o oferece e a gente cuida do resto.</p>
                    
                  </H1>
                </BoxDesc>

                <Search onChangebuscar={this.onChangebuscar} buscar={this.state.buscar}/>

                <Box>

                  <p>Filtrar:</p>
                    <Input type="text" placeholder="Valor mínimo" onChange={this.onChangeMinimo} value={this.state.valorMinimo}/>
                    <Input type="text" placeholder="Valor máximo" onChange={this.onChangeMaximo} value={this.state.valorMaximo}/>
                    <Select name="order" onChange={this.onChangeOrder}>
                        <option value="title">Titulo</option>
                        <option value="price">Valor</option>
                        <option value="dueDate">Prazo</option>
                    </Select>

                    {showCart}

                </Box>

            <CardsContainer>

             {allJobs}

            </CardsContainer>

        </SessionContainer>
      )
    }
  }  