import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import TextBox from './TextBox';
import ContButton from './ContButton';
import PrevButton from './PrevButton';
//import Background from './Background';




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
        <div className="body">
          {/* <Background /> */}
        <Header />
        <TextBox />
        <div className="button">
        <PrevButton />
        <ContButton />
        </div>
        <Footer />
        </div>
      
       
        
    
    )
  }
}


export default Panel1;
