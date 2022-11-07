import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

//import hooks
import useItems from '../hooks/useItems';

//import page
import { Home, FormUpload } from './index';


const AppLayout = () => {

  const itemsList = useItems();
  console.log(itemsList);
  return (
    <div className='m-5 lg:m-10'>
        <BrowserRouter>
        <div className="my-3 lg:my-5">
            <h1 className='text-lg font-extrabold'>Items List Status ({itemsList?.filter((i)=>i.checkStatus !== 2).length}/{itemsList?.length})</h1>
        </div>
        <div>
            <Routes>
              <Route 
                exact path='/' 
                element={
                  <Home
                    items={itemsList}
                  />
                }
              />
                
  
              <Route 
                path='/upload' 
                element={
                  <FormUpload />
                }
              />
                
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default AppLayout