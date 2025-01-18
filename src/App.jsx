import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from '@/pages/Home';
import Header from '@/components/Header';
import Jobs from '@/pages/Jobs';
import Add from '@/pages/Add';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Details from '@/pages/Details';
import Update from '@/pages/Update';
import { Provider } from 'react-redux';
import store from '@/app/store';
import PrivateRoute from '@/components/PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
          <Routes>
              <Route element={<PrivateRoute />}>
                  <Route path='/' element={<Home />}/>
                  <Route path='/jobs' element={<Jobs />}/>
                  <Route path='/jobs/:id' element={<Details/>}/>
                  <Route path='/update/:id' element={<Update/>}/>
                  <Route path='/add' element={<Add />}/>
                  {/* <Route path='*' element={<Home />}/> */}
              </Route>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
          </Routes>
      </Router>
    </Provider>
    // <div className='text-red-600'>App</div>
  )
}

export default App;