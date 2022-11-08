import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

const Home = (props) => {
  const sortedItems = props?.items.sort((a,b) => a.checkStatus - b.checkStatus);
  
  return (
    <div className='flex justify-center'>
      <div className='w-full lg:w-1/3'>
        {sortedItems?.map((item)=> (
          <Link key={item.itemNo} to={`/${item.itemNo}`} onClick={(e)=> props.onItemClick(item.itemNo)}>
            <Card key={item.itemNo}>
              {item}
            </Card>
          </Link>
        ))}
      </div >
    </div>
  )
}

export default Home;