import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

//import hooks
import useItems from '../hooks/useItems';
import useForm from '../hooks/useForm';

//import page
import { Home, FormUpload } from './index';

const AppLayout = () => {

  const {itemsList,loadItems} = useItems();

  const {itemsDetails,loadDetails,cancelCheck,submitCheck} = useForm();

  const completed = itemsList ? itemsList.filter((i)=> (i.checkStatus !== 0)).length : 0 ;
  const total = itemsList ? itemsList.length : 0;

  const onSubmitCheck = (id) => {
    submitCheck(id);
    loadItems();
  }

  const onCancelCheck = (id) => {
    cancelCheck(id);
    loadItems();
  }
  
  return (
    <div className='m-5 lg:m-10'>
        <BrowserRouter>
        <div className="my-3 lg:my-5">
            <h1 className='text-lg font-extrabold'>Items List Status ({completed}/{total})</h1>
        </div>
        <div>
            <Routes>
              <Route 
                exact path='/' 
                element={
                  <Home
                    items={itemsList}
                    onItemClick = {loadDetails}
                  />
                }
              />
                
              <Route 
                path='/:id' 
                element={
                  <FormUpload 
                    itemsDetails = {itemsDetails}
                    onCancelCheck = {onCancelCheck}
                    onSubmitCheck = {onSubmitCheck}
                  />
                }
              />
                
            </Routes>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default AppLayout