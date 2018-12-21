import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import TextBox from './TextBox';

const styles = {
  root: {
    flexGrow: 1,
    
    
  },
};


export class Panel1 extends Component {
  render() {
// Puling in values (fistName, lastName...)
const { values, handleChange } = this.props;

    return (
     
        
        <MuiThemeProvider>
        <React.Fragment>
        <Header />
          
          <br />
          <TextBox />
          
          <Footer />
        </React.Fragment>
      </MuiThemeProvider>
       
        
    
    )
  }
}
export default Panel1;
