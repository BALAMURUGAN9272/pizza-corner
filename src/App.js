import './App.css';
import AppBar from './components/AppBar';
import './css/mainmin.css';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Pic from './components/Pic';
import Jogo from './components/Jogo';
import Sasuke from './components/Sakura';
import  Form  from './components/Form';
import Testreduce from './Testreduce';
import Leo from './components/Leo';
import { BrowserRouter, Routes } from 'react-router-dom';


import { Route } from 'react-router-dom';

import Home from './components/Home';
import Musttry from './components/Musttry'
import Menucard from './components/Menucard';
import Comments from './components/Comments';

function App() {
  return (
 <div>
  <BrowserRouter>
  <AppBar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
       <Route path='/Menucard' element={<Menucard/>}/>
       <Route path='/Pic' element={<Pic/>}/>
       <Route path='/Comments' element={<Comments/>}/>
       
    
       
   
        
    
  </Routes>
  </BrowserRouter>

  <div className='text-center my-3 text-primary small'>copyright@2022-2023</div>


  
 
  
  {/* <Jogo/> */}
  {/* <Sasuke/> */}
  {/* <Testreduce />
  <Form/> */}
  {/* <Leo/> */}
 </div>
  );
}

export default App;
