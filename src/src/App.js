import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import List from './components/List'
import Navbar from './components/Navbar'

function App() {
  
  const [data,setdata] = useState([]);
  const [isloaded , setloaded] = useState(false);

  const apicall = () => {
    axios
    .get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c616b3ddb19f4ebd923c3f3a7d354319')
    .then(
      res=>{
        setdata(res.data.articles);
        setloaded(true);
      }
    )
    .catch(error => console.log(error));
  }
  
  useEffect(() => {
    apicall();
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className="card-container">
        <h2>Headlines</h2>
        {
        isloaded?(<List data={data}/>):(<h1>false</h1>)
      }
      </div>
    </div>
  );
}

export default App;
