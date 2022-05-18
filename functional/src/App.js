import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Info from "./components/Info"

import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [key, setKey] = useState('');
  // // const url = 'https:/api.github.com/users/ma '

  const getUserData = () => {
    return axios.get(`https:/api.github.com/users/${key}`);
  };

  async function getApiData() {
    try{
      const response = await getUserData();
      setData(response.data);
    }
    catch (error){
      throw new Error("Can't get data")
    }
  }
  
  useEffect(() => {
    console.log('render first time')
  }, []);
  useEffect(() => {
    getApiData()
    setInterval(() => {
      getApiData()
      console.log('render update')
    }, 5000);
  }, [key]);
  
  const handleInputChange = (e) => {
    setKey(e.target.value)
    getApiData()
  }
  

  return (
    
    <div>
      <div className="wrapper">
        <div className="content">
          <label htmlFor="inputName">Name:</label>
          <input type="text" name="inputName" id="" onChange={handleInputChange} />
        </div>
        <Info data = {data}/>
      </div>
    </div>
  );
}
