import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Nav from './Components/Nav/Nav'
import Players from './Components/Players.jsx/Players';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Selections from './Components/Selections/Selections';


function App() {
  const notify = () => toast('Wow so easy !');

  const [addMoney, setAddMoney] = useState(0);

  const [playerSelect , setPlayerSelect] = useState([]);

  const [playerPrice, setPlayerPrice] = useState(null);

  const [clicked, setClicked] = useState('Available');

  const handleClick = (button) => {
    if( clicked !== button){
      setClicked(button)
    }
  }
  
  const handleSelectPlayer = (card, playerPrice) => {

    if(playerPrice > addMoney){
      toast.error("not enough money");
      return false;
    }

    else if(playerSelect.includes(card)){
      return;
    }

    else if(playerSelect.length >= 6) {
      alert("you can only select 6 players");
      return;
    }

    else{
    setPlayerSelect([...playerSelect , card]);
    setAddMoney(addMoney - playerPrice);
      return true;
    }
  }

  const claimMoney = () => {
    setAddMoney(addMoney + 6000000);
  }

  return (
    <>
      <div>
        <Nav addMoney={addMoney}></Nav>
        <Banner claimMoney={claimMoney}></Banner>

        <div className="flex justify-between w-9/10 mx-auto  my-8">
          <h2 className="text-2xl font-bold">Available Players</h2>
          <div>
            <button onClick={()=> handleClick('Available')} className={`py-2 cursor-pointer px-3 rounded-l-xl ${clicked ==='Available' ? 'bg-[#E7FE29]':'bg-gray-200'}  font-bold`}>
              Available
            </button>
            <button onClick={()=> handleClick('selected')} className={`py-2 cursor-pointer px-3 rounded-r-xl ${clicked === 'selected' ? 'bg-[#E7FE29]' :'bg-gray-200' } font-bold `}>Selected
            </button>
          </div>
        </div>
        <Players setPlayerPrice={setPlayerPrice} handleSelectPlayer={handleSelectPlayer} ></Players>
        
        <Selections playerSelect={playerSelect}></Selections>
        

        
      </div>
      
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
