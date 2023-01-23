
import { Component } from "react";
import axios from 'axios';
import Navbar1 from "./Navbar1";



const api=axios.create({
    baseURL:"http://localhost:7000/"
})

class OrderPizza extends Component{
    constructor(){
        super();
    this.state={
        data:[]
        
    }
}


componentDidMount(){
    api.get("/fetchPizza").then((res)=>{
        console.log(res.data)
        this.setState({data:res.data})
       
    }).catch(err=>{
        console.log(err)
    })
}



render(){

var items=this.state.data.map((data,key)=>{
return <div className="col-6" style={{'borderStyle':"solid"}}>
<div className="p-3 border light">
    <div>
<div className="container"> 
<div className="row">
                        <div className="col">
                            <div className='row'>
                                <h3>{data.name}</h3>
                            </div>
                            <div className='row'>
                                <b><div style={data.type==='veg' ? {height:'20px',width:'20px',backgroundColor:'#33cc33'}:{height:'20px',width:'20px',backgroundColor:'red'}}></div>{data.type.charAt(0).toUpperCase()+data.type.slice(1)}</b>
                            </div>
                            <br/><br/>
                            <div className='row'>
                                <p><b>{'\u20B9'}  {data.price}</b></p>    
                            </div>
                            <div className="w-100"></div>
                        </div>


                            <div className="col-6">
                                <div className='row'>
                                    <p>{data.description}</p>
                                </div>
                                <div className='row'>
                                    <p><b>Ingredients:</b> {data.ingredients.join(",")}</p> 
                                </div>
                                <div className='row'>
                                    <p><b>Topping: </b>{data.topping.join(",")}</p>
                                </div>

                            </div>

                            <div className="col">

                                <div className='row'>
                                    <img src={data.image} style={{height:'100px',width:'120px'}}/>
                                </div>
                                <br/>
                                <div className='row'>
                                    <button className="btn btn-warning">Add to Cart</button>
                                </div>
                            </div>

                            <div className="w-100"></div>
</div>
</div>
</div>
    </div>      
    </div>              
})


return(
    <div>
      
        <div className="container" style={{'padding':'20px'}}>
            <div className="row g-1 " >
                  
                    {items} 
                
            </div>
        </div>
    </div>
       
)
}
}

export default OrderPizza;

