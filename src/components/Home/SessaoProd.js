import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { CardProd } from "./CardProd";
import { baseURL, headersAPI } from "../../services/urls";

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
            {allJobs}
        </SessionContainer>
    }
  }  