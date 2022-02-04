import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { CardProd } from "./CardProd";
import { baseURL, headersAPI } from "../../services/urls";
import Carrinho from "./Carrinho";
import Dev from '../../assets/dev.png'
import { Search } from "./search-field/Search";

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const Box = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
  //text-align: center;
  //border: 1px solid black;
  //background-color: lightcoral;
  width: 600px;
  line-height: 60px;
  letter-spacing: 3px;
`
const H2 = styled.h2`
  text-align: center;
`
const BoxDesc = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
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
      return (
        <SessionContainer>

                <BoxDesc>
                  <img src={Dev} alt="Ninja" />
                  <H1>Relaxa! Aqui você encontra
                    devs super-poderosos para te ajudar!</H1>
                </BoxDesc>

                <Search onChangebuscar={this.onChangebuscar} buscar={this.state.buscar}/>
                <Box>
                    <Input type="text" placeholder="Valor mínimo" onChange={this.onChangeMinimo} value={this.state.valorMinimo}/>
                    <Input type="text" placeholder="Valor máximo" onChange={this.onChangeMaximo} value={this.state.valorMaximo}/>
                    <Select name="order" onChange={this.onChangeOrder}>
                        <option value="title">Titulo</option>
                        <option value="price">Valor</option>
                        <option value="dueDate">Prazo</option>
                    </Select>
                </Box>


            <Carrinho remove={this.removeCarrinho} cart={this.state.cart}/>

            <CardsContainer>

             {allJobs}

            </CardsContainer>

        </SessionContainer>
      )
    }
  }  