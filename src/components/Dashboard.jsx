import React, { useEffect, useState } from 'react';
import Item from './Item';
import { fetchData } from '../api/fetcher';
import '../css/Dashboard.css';
import '../css/Layout.css';

const Dashboard = () => {
  const [response, setResponse] = useState([]); 
  const [tobeDeleted, setToBeDeleted] = useState([]) 
  const [count, setCount] = useState(0) 

  //call data on page load
  useEffect(() => {
    fetchData(setResponse);
  }, [])


const handleSelectedItem = (id) => {
  if(!tobeDeleted.includes(id)){
    setToBeDeleted(prevState => [...prevState, id])
    setCount(count + 1);
  } else if(tobeDeleted.includes(id)) {
    const i = tobeDeleted.indexOf(id);
    if(i > -1){
      setCount(count - 1);
      const newArray = [...tobeDeleted];
      newArray.splice(i, 1);
      setToBeDeleted(newArray)
    }
  }
}

const removeAllSelectedItems = () => {
  const newResponse = response.filter((f) => !tobeDeleted.includes(f.productId));
    setResponse(newResponse);
    setToBeDeleted([]);
    setCount(0)
}

  return (
    <React.Fragment>
      <div className="layout">
      <div className="buttonContainer">
        <button 
          className="removeAllButton" 
          onClick={() => removeAllSelectedItems()}>
            Remove {count} selected products
        </button>
      </div>
        <div className="innerWrapper">
          {response.map(items => { 
            return (
              <React.Fragment key={items.productId}>
                {items.available === "TRUE" && items.quantity > 0 ? (
                  <Item 
                    prodId={items.productId}
                    image={items.imageUrl}
                    description={items.description}
                    itemName={items.name}
                    discount={items.promotionBadge}
                    price={items.price}
                    priceWas={items.priceWas}
                    stock={items.quantity}
                    onClick={() => {handleSelectedItem(items.productId)}}
                  />
                ): null}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;