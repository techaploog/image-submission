import React from 'react';

import Card from '../components/Card';

const Home = (props) => {
  const sortedItems = props?.items.sort((a,b) => a.checkStatus - b.checkStatus);
  return (
    <div className='flex justify-center'>
      <div className='w-full lg:w-1/3'>
        {sortedItems?.map((item)=> (
          <Card key={item.itemNo}>
            {item}
          </Card>
        ))}
      </div >
    </div>
  )
}

export default Home;