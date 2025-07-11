import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Nav from './Components/Nav/Nav'
import Players from './Components/Players.jsx/Players';

function App() {

  const [addMoney, setAddMoney] = useState(0);

  const claimMoney = () => {
    setAddMoney(addMoney + 6000000);
  }

  return (
    <>
      
      <div>
        <Nav addMoney={addMoney}></Nav>
        <Banner claimMoney={claimMoney} ></Banner>
        <Players></Players>
        
      </div>
      
    </>
  )
}

export default App;
