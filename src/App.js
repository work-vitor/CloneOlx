import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { Routes } from './Routes';
import {Template} from './components/MainComponents';
import Header from './components/partials/Footer';

const Page = (props) => {
  return (
    <BrowserRouter>
      <template>
        <header/>
        <Routes/>
        <Footer />
      </template>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) =>{
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Page)

