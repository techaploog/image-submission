import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { Home,FormUpload } from './index';

const AppLayout = () => {
  return (
    <div>
        <BrowserRouter>
        <div className="my-3 lg:my-5">
            <h1 className='hover:text-red-300'>Menu Bar</h1>
        </div>
        <div>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/upload' element={<FormUpload />} />
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default AppLayout