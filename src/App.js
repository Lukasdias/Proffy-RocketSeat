import React, {useState, useEffect} from 'react';
import Routes from './routes'

function App() {

  const [response, setResponse] = useState('')
  
  const callAPI = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();

    if (response.status !== 200) 
      throw Error(body.message)

    return body
  } 

  useEffect(() => {
    callAPI()
      .then(res => setResponse(res.express))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
