
import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ResultList from './Components/ResultList';



// Create context
export const InputContext = createContext();

function App() {
  
  const [inputValue, setInputValue] = useState();

  console.log(inputValue)

  const value = {
    inputValue, setInputValue
  }

  

  return (
    <InputContext.Provider value={value}>
     <div className="App">
      <Header/>
      <ResultList/>
    </div>
    </InputContext.Provider>
   
  );
}

export default App;
