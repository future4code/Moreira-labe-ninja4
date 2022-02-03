import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { CardProd } from "./CardProd";
import { baseURL, headersAPI } from "../../services/urls";
import Carrinho from "./Carrinho";
import Ninja from '../../assets/ninja.jpg'

const SessionContainer = styled.div`
  //display: flex;
  //flex-wrap: wrap;
  //background-color: lightblue;
`
const Box = styled.div`
  border: 1px solid black;
  width: 90vw;
  height: 100px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
const Input = styled.input`
  border: 1px solid black;
  width: 300px;
  height: 30px;
  border-radius: 5px;
  margin: 10px;
  
`
const Select = styled.select`
  border: 1px solid black;
  width: 300px;
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
  //background-color: lightblue;
  margin: 50px 0px;
  display: flex;
  justify-content: space-around;
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
      const addJob = this.state.jobs.find((job) => jobId === job.id);
      const newCart = [...this.state.cart, addJob]

      this.setState({cart: newCart}) 
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
          valorMinimo: event.target.value
      })
    }
    onChangeMaximo = (event) =>{
      this.setState({
          valorMaximo: event.target.value
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
                  <img src={Ninja} alt="Ninja" />
                  <H1>Fique tranquilo! Aqui você encontra os melhores
                    profissionais, para o seu problema!</H1>
                </BoxDesc>
                <div>
                  <H2>Quero um super ninja!</H2>
                </div>
                <Box>
                    <Input type="number" placeholder="Valor mínimo" onChange={this.onChangeMinimo} value={this.state.valorMinimo}/>
                    <Input type="number" placeholder="Valor máximo" onChange={this.onChangeMaximo} value={this.state.valorMaximo}/>
                    <Input type="text" placeholder="Buscar" onChange={this.onChangebuscar} value={this.state.buscar}/>
                    <Select name="" id="">
                        <option value="">Titulo</option>
                        <option value="">Valor</option>
                        <option value="">Prazo</option>
                    </Select>
                </Box>
            <Carrinho remove={this.removeCarrinho} cart={this.state.cart}/>

            {allJobs}

        </SessionContainer>
      )
    }
  }  