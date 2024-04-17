import React,{useEffect, useState} from 'react'

export default function Products() {
    const [Products, setProducts] = useState([]);

  useEffect(() => {
    getproduct();
  },[]);
  

  const getproduct = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  console.log(Products);

const deleteProduct = async (id)=>{
  let result = fetch(`http://localhost:5000/products/${id}`,{
    method:'Delete'
  })
  result = await result.json()
  console.log(result)
}

  return (
    <div className='ProductList'>
    <ul className='header'>
        <li>sl no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
    </ul>
    
    { Products.map((item,index)=>
        <ul>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li><button onClick={()=>deleteProduct(item._id)}>Delete</button></li>
        </ul>
        )
    }
    </div>
  )
}
