import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { CardProd } from "./CardProd";
import { baseURL, headersAPI } from "../../services/urls";
import Carrinho from "./Carrinho";

const SessionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

                <div>
                    <input type="number" placeholder="Valor mínimo" onChange={this.onChangeMinimo} value={this.state.valorMinimo}/>
                    <input type="number" placeholder="Valor máximo" onChange={this.onChangeMaximo} value={this.state.valorMaximo}/>
                    <input type="text" placeholder="Buscar" onChange={this.onChangebuscar} value={this.state.buscar}/>
                    <select name="ordem" onChange={this.onChangeOrder}>
                        <option value="title">Titulo</option>
                        <option value="price">Valor</option>
                        <option value="dueDate">Prazo</option>
                    </select>
                </div>


            <Carrinho cart={this.state.cart} remove={this.removeCarrinho}/>
            
            {allJobs}

        </SessionContainer>
      )
    }
  }  