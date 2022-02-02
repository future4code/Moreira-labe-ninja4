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
      cart: [{
        "id": "1d3957ce-b0dd-45e5-b2c2-2986f9f89bfe",
        "title": "Teste",
        "description": "Teste",
        "price": 10,
        "paymentMethods": [
            "Dinheiro"
        ],
        "dueDate": "2022-02-27T00:00:00.000Z",
        "taken": false
    },
    {
        "id": "6750634a-2250-49b0-b336-d3ad0954111f",
        "title": "Teste 2",
        "description": "Teste 2",
        "price": 123,
        "paymentMethods": [
            "Troca"
        ],
        "dueDate": "2022-02-17T00:00:00.000Z",
        "taken": false
    }
]
    }

    getJobs = () => {
        Axios.get(baseURL+"jobs", headersAPI)
        .then((res) => {this.setState(res.data)})
        .catch((err) => console.log(err.response))
    }

    addToCart = () => {

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
          addToCart={this.addToCart}/>
        })
      }

      return <SessionContainer>
            <Carrinho cart={this.state.cart}/>

            {allJobs}
        </SessionContainer>
    }
  }  