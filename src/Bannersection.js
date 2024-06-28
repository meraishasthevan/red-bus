import React, { useEffect, useState } from "react";
import './Bannersection.css';
import { useNavigate } from "react-router-dom";
import Carousal from "./carousel.js";
import { useSelector ,useDispatch} from "react-redux";
import "react-calendar/dist/Calendar.css";
import App from "./Datepicker.js";
import { handlelocation } from "./Slice.js";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import tickets from "./Busdetails.json";
import { handleBus } from "./Slice.js";
import { handleName } from "./Slice.js";




function Bannersection(){
    
    
    let[input1,setinput1]=useState("From")
    let[input2,setinput2]=useState("To")
    let state=useSelector((samp)=>samp)

    let dispatch=useDispatch()
    let nav=useNavigate()
    const [date, setDate] = useState(new Date())
   useEffect(()=>{
        dispatch(handleName(tickets.bus))
        dispatch(handleBus(tickets.bus2))
})

     
    function HandleSubmit(){
       console.log(input1);
       console.log(input2); 
       console.log(state.Data.detail.dropping)
       
      if((input1.toLowerCase()==="tenkasi") && (input2.toLowerCase()==="chennai")){
        let drop=state.Data.detail.dropping
               nav(`/bus/${drop}`)
      }       
      else if((input1.toLowerCase()==="tenkasi") && (input2.toLowerCase()==="bangalore")){
        let dropping=state.Data.detail.dropping2
            nav(`/bus/${dropping}`)
      } 
      else{
        nav("/")
      }
      console.log("hi"); 


      
}


    const handle=(e)=>{
        if(e.target.name==="location"){
            setinput1(e.target.value)
        }
        else if(e.target.name==="area"){
            setinput2(e.target.value)
        }
    }
   


    return(
        <div>
             <div className="banner-container">
                <div className="banner-row">
                    <div className="banner-col">
                        
                        <div className="banner-h1">
                          <h1>India's No. 1 Online Bus Ticket Booking Site</h1>
                        </div>
                       
                   </div>
                    <div className="banner-search">
                            <div className="banner-inp">
                               <i class="fa fa-bus"  id="buslogo" aria-hidden="true"></i>
                               <i class="bi bi-person-walking person"></i>
                               <input  type="text" placeholder={input1} name="location" onChange={handle}/> 
                            </div>
                            <div className="banner-inp">
                                <i class="fa fa-bus" id="buslogo" aria-hidden="true"></i>
                                <i class="bi bi-person-walking person"></i>
                                <input  type="text" placeholder={input2} name="area" onChange={handle}/>  
                            </div> 
                            <div className="banner-inp">
                               <i class="fa fa-calendar" id="buslogo" aria-hidden="true"></i>
                             <div className="datepicker">

                              <div className="picker">
                                <DatePicker selected={date} onChange={(date) => setDate(date)} />
                              </div> 
                                
                             </div>
                            </div>

                            <div className="banner-btn">
                                <button onClick={HandleSubmit}> SEARCH BUSES</button>
                            </div>
                                         
                    </div>
                       
                </div> 
            </div>       
           
            <Carousal/>
            
        </div>
    )
}
export default Bannersection ;