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
    
    render() {

      let allJobs

      if (this.state.jobs !== []){
        allJobs = this.state.jobs.map((job) => {
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
      
      return <SessionContainer>
            <Carrinho cart={this.state.cart}/>

            {allJobs}
        </SessionContainer>
    }
  }  