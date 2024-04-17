import React, {useState} from 'react'

export default function Addproduct() {

    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [category, setcategory] = useState('')
    const [company, setcompany] = useState('')
    const [Error, setError] = useState(false)


    const Addproduct= async ()=>{
      
        if(!name || !price || !category || !company){
          setError(true)
          return false;
        }

        let result = await fetch('http://localhost:5000/add-products',{
            method: 'Post',
            body: JSON.stringify({name,price,category,company}),
            headers :{
                    "Content-Type": "application/json"
            }
        })
        result = await result.json()
        console.log(result)
    }

  return (
    <div className="product">
    <div className="col" style={{width:"421px"}}>
      <input type="text" className="form-control" placeholder="Enter Product Name" value={name} onChange={(e)=>setname(e.target.value)} />
    {Error && !name &&<span style={{color:"red"}}>Enter Valid Name</span>}
    </div>
    
    <div className="col my-4" style={{width:"421px"}}>
      <input type="text" className="form-control" placeholder="Enter Product price" value={price} onChange={(e)=>setprice(e.target.value)}/>
      {Error && !price &&<span style={{color:"red",}}>Enter Valid Price</span>}
    </div>
    <div className="col my-2" style={{width:"421px"}}>
      <input type="text" className="form-control" placeholder="Enter Product category" value={category} onChange={(e)=>setcategory(e.target.value)}/>
      {Error && !category &&<span style={{color:"red",}}>Enter Valid Catgory</span>}
    </div>
    <div className="col my-4" style={{width:"421px"}}>
      <input type="text" className="form-control" placeholder="Enter Product company" value={company} onChange={(e)=>setcompany(e.target.value)}/>
      {Error && !company &&<span style={{color:"red",}}>Enter Valid Comopany</span>}
    </div>
    <button  type="button" className="btn btn-primary mx-2" onClick={Addproduct} >Add Product</button>
    </div>
  )
}
