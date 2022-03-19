// Packages
import React from 'react';
import { Route, Routes } from 'react-router-dom';


// Styles
import styles from './App.module.css'

// Components
import Menu from './Components/Menu/layout';
import Body from './Components/Body/layout';
import Detail from './Components/DetailPage/layout';
import ExChange from './Components//Exchange/layout'; 
import Calculator from './Components/Calculator/layout';
import Chats from './Components/Chat/layout';
import Setting from './Components//Setting/layout';
import RightMenu from './Components/RightMenu/layout';
import Footer from './Components/Footer/layout';

// Contexts
import CoinsContext from './Context/CoinContext';
import  AllCoin from './Context/AllCoin';
import Calculators from './Context/Calculators';


const App = () => {




  return (
    <CoinsContext>
      <AllCoin>
        <Calculators>
          <>
            <div className={styles.container}>
              <Menu />
                <Routes >
                  <Route path='/' element={<Body />} / >
                  <Route path="/detail/:id" element={<Detail />} / >
                  <Route path="/Exchange" element={<ExChange />} / >
                  <Route path="/Calculator" element={<Calculator />} / >
                  <Route path="/ChatRoom" element={<Chats />} / >
                  <Route path="/Setting" element={<Setting />} / >
                </Routes>
              <RightMenu />
            </div> 
            <div>
              {/* <Footer /> */}
            </div>
          </>
        </Calculators>
      </AllCoin>
    </CoinsContext>
  );
};

export default App;