import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Nav from './Components/Nav/Nav'
import Players from './Components/Players.jsx/Players';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Selections from './Components/Selections/Selections';
import Footer from './Components/Footer/Footer';


function App() {
  const notify = () => toast('Wow so easy !');

  const [addMoney, setAddMoney] = useState(0);

  const [playerSelect , setPlayerSelect] = useState([]);

  const [playerPrice, setPlayerPrice] = useState(null);

  const [clicked, setClicked] = useState('Available');

  const [showDiv, setShowDiv] = useState(true);

  const handleClick = (button) => {
    if( clicked !== button){
      setClicked(button)
    }
  }

  const deleteBtn = (id) => {
    const remainingSet = playerSelect.filter(playerSelect => playerSelect.playerId !== id);
    setPlayerSelect(remainingSet);
  }
  
  const handleSelectPlayer = (card, playerPrice,playerName) => {

    if(playerPrice > addMoney){
      toast.error("not enough money");
      return false;
    }

    else if(playerSelect.includes(card)){
      toast.error(`You have already choosed ${playerName} in your squad`)
      return;
    }

    else if(playerSelect.length >= 6) {
      toast.error("You have already selected 6 players");
      return;
    }

    else{
    setPlayerSelect([...playerSelect , card]);
    setAddMoney(addMoney - playerPrice);
    toast.success(`Congratulations!!! You have added ${playerName} in your squad`)
      return true;
    }
  }

  const claimMoney = () => {
    setAddMoney(addMoney + 6000000);
    toast.success(" Congratulations !!! You have claimed 6000000 free coins")
  }

  return (
    <>
      <div>
        <Nav addMoney={addMoney}></Nav>
        <Banner claimMoney={claimMoney}></Banner>

        <div className="flex justify-between w-9/10 mx-auto  my-8 items-center">

         {
          showDiv ? <h2 className=" sm:text-2xl font-bold">Available Players</h2> : <h2 className="sm:text-2xl font-bold">Selected player {playerSelect.length}/6</h2>
         }

          
          <div>
            <button onClick={
              ()=> {
                handleClick('Available');
                setShowDiv(true)

              }
            } className={`sm:py-2 text-sm sm:text-lg cursor-pointer p-2 sm:px-3 rounded-l-xl ${clicked ==='Available' ? 'bg-[#E7FE29]':'bg-gray-200'}  font-bold`}>
              Available
            </button>
            <button onClick={()=> {
              handleClick('selected');
              setShowDiv(false)
              
              }} className={`sm:py-2 text-sm sm:text-lg cursor-pointer p-2 sm:px-3 rounded-r-xl ${clicked === 'selected' ? 'bg-[#E7FE29]' :'bg-gray-200' } font-bold `}>Selected ({playerSelect.length})
            </button>
          </div>
        </div>

        {
          showDiv ? <Players setPlayerPrice={setPlayerPrice} handleSelectPlayer={handleSelectPlayer} ></Players> :  <Selections deleteBtn={deleteBtn} setShowDiv={setShowDiv} handleClick={handleClick} playerSelect={playerSelect}></Selections>

        }

        <Footer></Footer>
        

        
      </div>
      
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
