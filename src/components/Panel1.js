import React, { Component } from 'react'

import Header from './Header';
import Footer from './Footer';
import TextBox from './TextBox';
import ContButton from './ContButton';
import PrevButton from './PrevButton';

const styles = {
  root: {
    flexGrow: 1,
    
    
  },
};


export class Panel1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
// Puling in values (fistName, lastName...)
// const {  handleChange } = this.props;

    return (
        
        <React.Fragment>
        <Header />
        <TextBox />
        <ContButton />
        <PrevButton />
        <Footer />
        </React.Fragment>
      
       
        
    
    )
  }
}


export default Panel1;
