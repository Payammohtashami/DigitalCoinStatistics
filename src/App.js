// Packages
import React from 'react';
import { Route, Routes } from 'react-router-dom';


// Styles
import styled from 'styled-components'

// Components
import Sidebar from './Components/Sidebar/index';
import Body from './Components/Body/layout';
import Detail from './Components/DetailPage/layout';
import ExChange from './Components//Exchange/index'; 
import Calculator from './Components/Calculator/layout';
import Setting from './Components//Setting/layout';
import Footer from './Components/Footer/layout';
import News from './Components/News/index'
import NewsDetail from './Components//News/NewsDetial'

// Contexts
import CoinsContext from './Context/CoinContext';
import AllCoin from './Context/AllCoin';
import Calculators from './Context/Calculators';
import Currency from './Context/Currency';
import PageManage from './Context/PageMangeContext';
import ThemeContext from './Context/ThemeContext';

const App = () => {




  return (
    <ThemeContext>
      <Currency>
        <PageManage>
          <CoinsContext>
            <AllCoin>
              <Calculators>
            <>
              <Div>
                <Sidebar />
                  <Routes >
                    <Route path='/' element={<Body />} / >
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/Exchange" element={<ExChange />} />
                    <Route path="/Calculator" element={<Calculator />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/Setting" element={<Setting />} />
                    <Route path="/News/:id" element={<NewsDetail/>} />
                    <Route path="/Setting" element={<Setting />} />
                    <Route path="/*" element={<Body />} Navigate to="/"/>
                  </Routes>
              </Div> 
              <div>
                <Footer />
              </div>
            </>
            </Calculators>
          </AllCoin>
        </CoinsContext>
      </PageManage>
    </Currency>
    </ThemeContext>
  );
};

const Div = styled.div`
  display: flex;
`

export default App;