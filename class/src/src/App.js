import logo from './logo.svg';
import './App.css';
import Info from './Info';
import axios from 'axios'
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: null,
      key:''
    }
  }

  getApiData = async () => {
    if(this.state.key == '')
      console.log('Fill input')
    try{
      const response = await axios.get(`https:/api.github.com/users/${this.state.key}`);
      // setData(response.data);
      this.setState({
        data: response.data,
      })
    }
    catch (error){
      throw new Error("Can't get data")
    }
  }

  componentDidMount() {
    console.log('In componentDidMount')
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.key !== prevState.key){
      clearInterval()
      this.getApiData()
      setInterval(() => {
        // this.getApiData()
        console.log(`render again at ${this.state.key}`)
      }, 5000);
    }
}
  

  handleKeyChange = (e) => {
    this.setState({
      key: e.target.value,
    })
  }


  render() {
    return (
      <div>
        <div className="wrapper">
        <div className="content">
          <label htmlFor="inputName">Name:</label>
          <input type="text" name="inputName" id="" onChange={this.handleKeyChange}  />
        </div>
        <Info data = {this.state.data}/>
      </div>
      </div>
    );
  }
}

export default App;
