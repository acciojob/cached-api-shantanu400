
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';

const App = () => {

async function getData(){
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();
    setData(jsonData);
    setLoading(false);
  
  } catch (error) {
    console.error("Error fetching data: ", error);
    setval("Error loading data");
  }   
}

const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    const memoData = useMemo(() =>getData(data) , [data]);
  }, []);

  

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {memoData && memoData.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
