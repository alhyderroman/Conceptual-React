import { useEffect, useState } from 'react'

import './App.css'
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleCart = (p) => {
    const isExist=cart.find(item=>item.id==p.id);
    if(!isExist){
      setCart([...cart,p]);

    }
    else {
      alert('cart already exist');
    }
    
  }

  const handleDelete=(id)=>{
    const newCart=cart.filter(item=>item.id!==id);
    setCart(newCart);
  }


  return (
    <>

      <div className="main-container">
        <div className="cards-container">
          {
            products.map((product, index) => <SingleProduct
              key={index}
              product={product}
              handleCart={handleCart}
            ></SingleProduct>)
          }
        </div>
        <div className="cart-container">
          <h1>This is cart</h1>
          <div className='cart-title'>
            <h5>Name:</h5>
            <h5>Price:</h5>
           
          </div>
         <div >
         {
                cart.map((item, idx) => (
                  <div key={idx} className='cart-info'>
                    <p>{idx+1}</p>
                    <h5>{item.title.slice(0,10)}</h5>
                    <h5>{item.price}</h5>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                  </div>
                ))
              }
         </div>


        </div>

      </div>

    </>
  )
}

export default App
