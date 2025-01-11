import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from '@/pages/Home';
import Header from '@/components/Header';
import Jobs from '@/pages/Jobs';
import Add from '@/pages/Add';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
            <Route path='*' element={<Home />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/jobs' element={<Jobs />}/>
            <Route path='/add' element={<Add />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
    </Router>
    // <div className='text-red-600'>App</div>
  )
}

export default App;