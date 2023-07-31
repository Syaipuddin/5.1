
import './App.css'
import {useEffect, useState} from 'react';

const families = [
  {
    id : 0,
    name : "Big Smoke",
    gender : "Male",
    icon : 'fa fa-cloud'
  },
  {
    id : 1,
    name : "Ucok",
    gender : "Male",
    icon : 'fa fa-bomb'
  },
  {
    id : 2,
    name : "Fulanah",
    gender : "Female",
    icon : 'fa fa-music'
  },
  {
    id : 3,
    name : "Rihanna",
    gender : "Female",
    icon : 'fa fa-hippo'
  }
]

function ListFamily(){
  const [data, setData] = useState(null);


  useEffect(()=> {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetcher = async() => {
      if(!data) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();

        console.log(`test`);
        setData(json);
        return data;
      }
    }
    
    fetcher();
    console.log(data);
    
    return () => {
      if(data){
        controller.abort();
      }
     
    }

  }, []);

  if(data) {
    const lists = data.map((e) => <li key={e.id}>{e.name}</li>);
    return(
      <>
        <ul> {lists} </ul>
      </>
    )
  }
}


function App() {

  return (
    <>
      <h2>Greet All My Family Members</h2>
      <ul>
        <ListFamily/>
      </ul>
    </>
  )
}

export default App
