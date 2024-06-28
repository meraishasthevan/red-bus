import React, { useState } from "react";
import Buscarousal from "./Buscarousal.js";
import "./Bustickets.css"
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6"
import { FaUserFriends } from "react-icons/fa";
import {handleName,handleBus,handleCount} from "./Slice.js";
import { useParams } from "react-router-dom"; 
// import zIndex from "@mui/material/styles/zIndex.js"; 
import tickets from "./Busdetails.json"



function Bustickets(){

    let params=useParams()
    console.log(params);

    let state=useSelector((samp)=>samp)
    let dispatch=useDispatch()
    console.log(state.Data.detail);


    let [boardbool,setBoardbool]=useState(false)
    let [dropbool,setDropbool]=useState(false)
    let [divvisible,setDivvisible]=useState(true)
    let [contbool,setContbool]=useState(false)
    let [filterbool,setFilterbool]=useState(false)
    let [colorbool,setColorbool]=useState("black")
    let [color2bool,setColor2bool]=useState("black")
    let [divhidde,setDivhide]=useState([])
    let [includebool,setincludebool]=useState([])
    let [formname,setFormname]=useState()
    let [formage,setFormage]=useState()
    let [namebool,setNamebool]=useState(false)
    let [agebool,setAgebool]=useState(false)
    let [checkboxfilter,setCheckboxfilter]=useState(state.Data.detail.bus)
    let [filtercheckboxbool,setFltercheckboxbool]=useState(false)
    let [filterCheckbox,setFiltercheckbox]=useState(state.Data.detail.bus2)


    const viewseat=(id)=>{
      let x= state.Data.detail.bus.map((e,i)=>{
            return  e.id===id?e.bool===false?{...e,bool:true}:{...e,bool:false}:e
       })
       console.log(x);
       dispatch(handleName(x))
       let a= state.Data.detail.bus2.map((e,i)=>{
        return  e.id===id?e.bool===false?{...e,bool:true}:{...e,bool:false}:e
       })
       console.log(a);
   dispatch(handleBus(a))
    }
    const drop=()=>{
        setDropbool(true)
        setBoardbool(true)
       
    }
    const board=()=>{
        setBoardbool(false)
        setDropbool(false)
    }
   const gotoform=(busid)=>{
     let form= state.Data.detail.bus.map((e)=>{
            return e.id===busid?e.formvisiblebool===false?{...e,formvisiblebool:true}:{...e,formvisiblebool:false}:e
        })
        console.log(form);
        dispatch(handleName(form))
            setDivvisible(true)
       }
    const gotoformbus=(busid)=>{
       let form2=state.Data.detail.bus2.map((e)=>{
            return e.id===busid?e.formvisiblebool===false?{...e,formvisiblebool:true}:{...e,formvisiblebool:false}:e
        })
        console.log(form2);
        dispatch(handleBus(form2))
        setDivvisible(true)
    }

    const handle=(id)=>{
       let board = state.Data.detail.bus.map((e,i)=>{
            return e.boardingpoint.map((v,i)=>{
                return v.id===id
            })
        })
        console.log(board);
    }
    const handler=(id)=>{
        setContbool(true)
    }
    const color=(e)=>{
        console.log(e.target.value);
        if(e.target.value==="Male"){
            setColorbool("gray")
        }
        else{
            setColorbool("rgb(216, 78, 85)")
            
        }
    }
   const color2=(e)=>{
    console.log(e.target.value);
    if(e.target.value==="Male"){
        setColor2bool("gray")
    }
    else{
        setColor2bool("rgb(216, 78, 85)")
        
    }
   }

    const booking=(busid,id,index)=>{
        let y=  state.Data.detail.bus.map((e,i)=>{
        return e.id===busid?(
            
            {   
                ...e,ticket:(e.ticket.map((v,i)=>{
                    if(v.id===id){
                        
                        if(divhidde.includes(v.id)){
                            includebool.push(v.id)
                        }
                        else{
                            divhidde.push(v.id)
                            setDivvisible(false)
                        }
                        if(v.isselect===false){
                            return {...v,isselect:true}
                        }
                        else{
                            return {...v,isselect:false}
                        }
                       
                    }
                    else{
                        return v
                    }
                    
                })),seatbool:!e.seatbool?true:e.seatbool
            }
        ):e
    })
        console.log(y);
        console.log(divhidde);
        console.log(divhidde.length);
        dispatch(handleName(y)) 
       if (divhidde.length>6){
        alert("The maximum number of seats that can be selected is 6")
       }
      
    }


const booking2=(busid,id)=>{
   
        let b=  state.Data.detail.bus2.map((e,i)=>{
            return e.id===busid?(
                {
                    ...e,ticket:(e.ticket.map((v,i)=>{
                        if(v.id===id){
                            if(divhidde.includes(v.id)){
                                includebool.push(v.id)
                            }
                            else{
                                divhidde.push(v.id)
                                setDivvisible(false)
                            }
                            if(v.isselect===false){
                                
                                return {...v,isselect:true}
                            }
                            else{
                                return {...v,isselect:false}
                            }
                        }
                        else{
                            return v
                        }
                    })),seatbool:!e.seatbool?true:e.seatbool
                }
            ):e
        })
      
        console.log(b);
        dispatch(handleBus(b)) 
        console.log(divhidde);
        console.log(divhidde.length);
        if (divhidde.length>6){
            alert("The maximum number of seats that can be selected is 6")
           }
}
 console.log(state.Data.end);

//  buses found functionality
const filtersort=(e)=>{
    console.log(e.target.value);
    if(e.target.value==="Depature"){
        let dep=state.Data.detail.bus.slice().sort((a,b)=>{
            return b.depature-a.depature
        })
        console.log(dep);
        dispatch(handleName(dep))
    }
    else if(e.target.value==="Duration"){
        let dur=state.Data.detail.bus.slice().sort((a,b)=>{
            return b.duration-a.duration
        })
        console.log(dur);
        dispatch((handleName(dur)))
    }
    else if(e.target.value==="Arrival"){
        let arrival=state.Data.detail.bus.slice().sort((a,b)=>{
            return b.arival-a.arival
        })
        console.log(arrival);
        dispatch((handleName(arrival)))
    }
    else if(e.target.value==="Fare"){
        let price=state.Data.detail.bus.slice().sort((a,b)=>{
            return b.price-a.price
        })
        console.log(price);
        dispatch((handleName(price)))
    }
    else if(e.target.value==="Seat available"){
        let seat =state.Data.detail.bus.slice().sort((a,b)=>{
            return b.seatava-a.seatava
        })
        console.log(seat);
        dispatch(handleName(seat))
    }
    else if(e.target.value==="Ratings"){
        let rate =state.Data.detail.bus.slice().sort((a,b)=>{
            return b.rating-a.rating
        })
        console.log(rate);
        dispatch(handleName(rate))
    }
    else if(e.target.value==="Sort by"){
        let filter=state.Data.detail.bus.filter((e)=> {
            return e
        })
        dispatch(handleName(filter))
    }
}



const sortbyfilter=(e)=>{
    console.log(e.target.value);
    if(e.target.value==="Depature"){
        let dep2=state.Data.detail.bus2.slice().sort((a,b)=>{
            return b.depature-a.depature
        })
        console.log(dep2);
        dispatch(handleBus(dep2))
    }
    else if(e.target.value==="Duration"){
        let dur2=state.Data.detail.bus2.slice().sort((a,b)=>{
            return b.duration-a.duration
        })
        console.log(dur2);
        dispatch(handleBus(dur2))
    }
    else if(e.target.value==="Arrival"){
        let arrival2=state.Data.detail.bus2.slice().sort((a,b)=>{
            return b.arrival-a.arrival
        })
        dispatch(handleBus(arrival2))
    }
    else if(e.target.value==="Ratings"){
        let rate2 =state.Data.detail.bus2.slice().sort((a,b)=>{
            return b.rating-a.rating
        })
        dispatch(handleBus(rate2))
    }
    else if(e.target.value==="Fare"){
        let price2=state.Data.detail.bus2.slice().sort((a,b)=>{
            return b.price-a.price
        })
        dispatch(handleBus(price2))
    }
    else if(e.target.value==="Seat available"){
        let seat2 =state.Data.detail.bus2.slice().sort((a,b)=>{
            return b.seatava-a.seatava
        })
        dispatch(handleBus(seat2))
    }
    else if(e.target.value==="Sort by"){
        let sort=state.Data.detail.bus2.filter((e)=> {
            return e
        })
        dispatch(handleBus(sort))
    }
}

const setvalue=(e)=>{
    // console.log(e);
    if(e.target.name==="name"){
        setFormname(e.target.value)
    }
    else if(e.target.name==="age"){
        setFormage(e.target.value)
    }
}
const suceessful=(e)=>{
    e.preventDefault()
    if(formname===undefined){
        setNamebool(true)
        if(formage===undefined){
            setAgebool(true)
        }
    }
    else{
        alert("successfully booked");
        dispatch(handleName(tickets.bus))
        dispatch(handleBus(tickets.bus2))
    }
    
   console.log(formname);
   console.log(formage);
} 
// departure time functionality
var arr=[]
const bustype_in_bus1=(e)=>{
    console.log(e.target.value);
    let a=e.target.value
    setFilterbool(true)
    let x
        if(a==="SEATER"){
            x= state.Data.detail.bus.filter((e)=>{
                return e.bustype==="SEATER"
            })
        }
        else if(a==="SLEEPER"){
          x= state.Data.detail.bus.filter((e)=>{
                return e.bustype==="SLEEPER"
            })
        }
        else if(a==="AC"){
            x=state.Data.detail.bus.filter((e)=>{
                return e.bustype==="AC"
            })
        }
        else if(a==="NONAC"){
            x=state.Data.detail.bus.filter((e)=>{
                return e.bustype==="NONAC"
            })
        }
        else if(a==="Before 6 am"){
            x=state.Data.detail.bus.filter((e)=>{
                return e.bustime<6
            })
        }
        else if(a==="6 am to 12 pm"){
            x=state.Data.detail.bus.filter((e)=>{
                return e.bustime>6 && e.bustime<12
            })
        }
        else if(a==="12 pm to 6 pm"){
            x=state.Data.detail.bus.filter((e)=>{
                return e.bustime>12 && e.bustime<18
            })
        }
        else if(a==="After 6 pm"){
            x=state.Data.detail.bus.filter((e)=>{
                return e.bustime>18
            })
        }
        
        setCheckboxfilter(x)
        
    }
    const bustype_in_bus2=(e)=>{
        let b=e.target.value
        console.log(b);
        var y
        setFltercheckboxbool(true)
        if(b==="Before 6 am"){
            y=state.Data.detail.bus2.filter((e)=>{
                return e.bustime<6
            })
        }
        else if(b==="6 am to 12 pm"){
            y=state.Data.detail.bus2.filter((e)=>{
                return e.bustime>6 && e.bustime<12
            })
        }
        else if(b==="12 pm to 6 pm"){
            y=state.Data.detail.bus2.filter((e)=>{
                return e.bustime>12 && e.bustime<18
            })
        }
        else if(b==="After 6 pm"){
            y=state.Data.detail.bus2.filter((e)=>{
                return e.bustime>18
            })
        }
        else if(b==="SEATER"){
            y= state.Data.detail.bus2.filter((e)=>{
                return e.bustype==="SEATER"
            })
        }
        else if(b==="SLEEPER"){
          y= state.Data.detail.bus2.filter((e)=>{
                return e.bustype==="SLEEPER"
            })
        }
        else if(b==="AC"){
            y=state.Data.detail.bus2.filter((e)=>{
                return e.bustype==="AC"
            })
        }
        else if(b==="NONAC"){
            y=state.Data.detail.bus2.filter((e)=>{
                return e.bustype==="NONAC"
            })
        }
        setFiltercheckbox(y) 
    }
    const back_to_normal=()=>{
      var a=  state.Data.detail.bus.map((e)=>{
            return e
        })
        setCheckboxfilter(a)
    }
    const back_to_normal2=()=>{
      var b=  state.Data.detail.bus2.map((e)=>{
            return e
        })
        setFiltercheckbox(b)
    }
    return(
        <div>
            <div className="busticket-container">
            <div className="type-of-bus">
                        {
                            state.Data.end===params.location?<div className="bustickets-name">
                                <h3>Tenkasi</h3><span><h3>&nbsp; to &nbsp;</h3></span>
                                <h3> Chennai</h3>
                            </div>:""
                        }
                        {
                             state.Data.end2===params.location?<div className="bustickets-name">
                                    <h3>Tenkasi </h3><span><h3>&nbsp; to &nbsp;</h3></span>
                                    <h3> Bangalore</h3>
                             </div>:""
                        }
                    </div>
                <div className="busticket-row">
                    {
                         state.Data.end===params.location?
                         <div className="busticket-col-1">
                        <h5 onClick={back_to_normal}>DEPARTURE TIME</h5>
                        {
                            state.Data.detail.depaturetime.map((e)=>{
                                return <ul className="departure">
                                <li><input type="checkbox" className="check" onClick={bustype_in_bus1} value={e}/><label>{e}</label></li>
                            </ul>
                            })
                        }
                        <h5 onClick={back_to_normal}>BUS TYPES</h5>
                        {
                            state.Data.detail.bustype.map((v)=>{
                                return <ul className="bustype">
                                <li><input type="checkbox" value={v}  onClick={bustype_in_bus1}/><label>{v}</label></li>
                            </ul>
                            })
                        }
                        </div>:""
                    }
                    {
                        state.Data.end2===params.location?
                        <div className="busticket-col-1">
                        <h5 onClick={back_to_normal2}>DEPARTURE TIME</h5>
                        {
                            state.Data.detail.depaturetime.map((e)=>{
                                return <ul className="departure">
                                <li><input type="checkbox" className="check" onClick={bustype_in_bus2} value={e}/><label>{e}</label></li>
                            </ul>
                            })
                        }
                        <h5 onClick={back_to_normal2}>BUS TYPES</h5>
                        {
                            state.Data.detail.bustype.map((v)=>{
                                return <ul className="bustype">
                                <li><input type="checkbox" value={v} onClick={bustype_in_bus2}/><label>{v}</label></li>
                            </ul>
                            })
                        }
                        </div>:""
                    }
                    
                        <div className="busticket-col-2">
                            <div className="bustickets-carosal">
                            <Buscarousal/>
                            </div>
                            <div>
                               {
                                     state.Data.end===params.location?<div className="bustickets-list">
                                
                                     <ul>
                                     <h3>6 Buses found </h3>
                                        {
                                            state.Data.detail.filterbtn.map((e,i)=>{
                                                return <li><button className="filter-btn" onClick={filtersort} value={e}>{e}</button></li>
                                            })
                                         }
                                     </ul>
                                 </div>:""
                               } 
                               {
                                 state.Data.end2===params.location?<div className="bustickets-list">
                                
                                 <ul>
                                 <h3>6 Buses found</h3>
                                     {
                                        state.Data.detail.filterbtn.map((e)=>{
                                            return <li><button className="filter-btn" onClick={sortbyfilter} value={e}>{e}</button></li>
                                        })
                                     }
                                 </ul>
                             </div>:""
                             
                               }
                                
                            </div>
                          {
                            state.Data.end===params.location?
                            <div className="bustickets-col">
                            {
                               filterbool?checkboxfilter.map((e)=>{
                                    return  <div>
                                    <div className="businfo">
                                       <div className="bustickets-card">
                                        <div className="busname">
                                            <img src="../image/primo_logo.svg" alt="loading"/>
                                            <h4>{e.travelsname}</h4>
                                            <p>{e.type}</p>
                                        </div>
                                        <div className="bus-details">
                                                <div className="busstart-time">
                                                    <h3>{e.starttime}</h3>
                                                    <p>{e.location1}</p>
                                                </div>
                                                <div className="bus-minutes">
                                                    <p>{e.minutes}</p>
                                                </div>
                                                <div className="busend-time">
                                                    <h3>{e.endtime}</h3>
                                                    <p>{e.location2}</p>
                                                </div>
                                                <div>
                                                    <div className="bus-rating">
                                                        <FaStar className="bus-start"/>
                                                        <p>{e.rating}</p>
                                                    </div>
                                                    <div className="bus-people">
                                                        <FaUserFriends className="bus-user"/>
                                                        <p>{e.people}</p>
                                                    </div>
                                                </div>
                                                <div className="bus-price">
                                                    <p>Starts from <br/> INR <span>{e.price}</span></p>
                                                </div>
                                        </div>
                                        <div className="bus-seats">
                                            <p>{e.seat} <br/>{e.window}</p>
                                            <div className="bustickets-btn">
                                               {
                                                e.bool?<button onClick={()=>viewseat(e.id)}>HIDE SEATS</button>:<button onClick={()=>viewseat(e.id)}>VIEW SEATS</button>
                                               } 
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                   </div>
                                    
                                <div className="busticket-media">
                                    <div className="busticket-media-time">
                                        <div>
                                        <h3>{e.starttime} - {e.endtime}</h3>
                                        <p>{e.minutes} - {e.seat}</p>
                                        </div>
                                        <div className="media-price">
                                             <h3><span>From</span>&#8377;{e.price}</h3>
                                        </div>
                                    </div>
                                    <div className="busticket-media-rate">
                                        <div className="media-type">
                                            <h4>{e.travelsname}</h4>
                                            <p>{e.type}</p>
                                        </div>
                                        <div className="bus-rating">
                                            <FaStar className="bus-start"/>
                                            <p>{e.rating}</p>
                                        </div>
                                    </div>
                                    <div className="busticket-media-btn">
                                    {
                                        e.bool?<button onClick={()=>viewseat(e.id)}>HIDE SEATS</button>:<button onClick={()=>viewseat(e.id)}>VIEW SEATS</button>
                                    }
                                    </div>
                                </div>
                                    {
                                        e.bool?<div className="bus-seat-show">
                                            
                                            <div>
                                                <h3>Lower Deck</h3>
                                            </div> 
                                            <div className="lower-bus">   
                                            <div className="seat-row"> 
                                            {
                                              e.ticket.map((v,index)=>{
                                                        return  v.isselect===true?<div className="seat-col">
                                                                    <div className="seat" onClick={()=>booking(e.id, v.id,index)} style={{backgroundColor:"gray"}}>{v.seats}</div>
                                                                </div>:<div className="seat-col">
                                                                    <div className="seat" onClick={()=>booking(e.id, v.id,index)}>{v.seats}</div>
                                                                </div>
                                                                
                                                    })
                                            } 
                                            </div>
                                            <div className="seat-legend">
                                                <h3>SEAT LEGEND</h3>
                                                <div className="seat-available">
                                                    <div className="seat-type">
                                                        <div></div><p>Available</p>
                                                        <div></div><p>Unavailable</p>
                                                    </div>
                                                    <div className="seat-type">
                                                        <div></div><p>Female</p>
                                                        <div></div><p>Male</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                { 
                                                    divvisible===false && e.seatbool===true && divhidde.length<=6?<div>
                                                  <div className="select-boarding">
                                                            <h5>Select the boarding and dropping point</h5>
                                                            <div className="boarding">
                                                                <div className="board">
                                                                    <div >
                                                                    <h5 onClick={board}>BOARDING POINT</h5>
                                                                    </div>
                                                                    {
                                                                     boardbool===false?e.boardingpoint.map((a,i)=>{
                                                                            return <div className="board-info">
                                                                                <input type="radio" value={a.time} onChange={()=>handle(a.id)} name="time"/><label><h6>{a.time}</h6></label>
                                                                                <div className="place">
                                                                                <h6>{a.busstart}</h6>
                                                                                <p>{a.from}</p>
                                                                                </div>
                                                                            </div>
                                                                        }):""
                                                                    }
                                                                </div>
                                                                <div className="board">
                                                                    <div>
                                                                    <h5 onClick={drop}>DROPPING POINT</h5>
                                                                    </div>
                                                                    {
                                                                      dropbool ?e.droppingpoimt.map((v,i)=>{
                                                                            return <div className="board-info">
                                                                                <input type="radio" value={v.time} onChange={()=>handler(v.id)} name="time"/><label><h6>{v.time}</h6></label>
                                                                                <div className="place">
                                                                                <h6>{v.busend}</h6>
                                                                                <p>{v.to}</p>
                                                                                </div>
                                                                            </div>
                                                                        }):""
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {
                                                                    contbool?<div className="continue-btn">
                                                                        <button onClick={()=>gotoform(e.id)}>Continue</button>
                                                                    </div>:""
                                                                }
                                                            </div>
                                                            </div>
                                                    </div>:""
                                                }
                                            </div>
                                            <div>
                                                {
                                                    e.formvisiblebool===true && e.seatbool===true ?<div className="formdetailsvisible">
                                                        <h3>Passenger information</h3>
                                                        <form onSubmit={suceessful}>
                                                        <label>Name </label>
                                                        <br/>
                                                        <input className="formname" type="text" placeholder="Name" onChange={setvalue} name="name"/>
                                                        {
                                                            namebool===true?<p className="formpara">please enter the name</p>:""
                                                        }
                                                        <div>
                                                            <div>
                                                                <label>Gender</label> 
                                                                <div className="formgender">
                                                                <input type="radio" name="gender" value="Male" onChange={color}/><label>Male</label>
                                                                <input type="radio" name="gender" value="Female" onChange={color}/><label>Female</label>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label>Age</label>
                                                                <br/>
                                                                <input className="formname" type="text" placeholder="Age" onChange={setvalue} name="age"/>
                                                                {
                                                                    agebool===true?<p className="formpara">please enter the age</p>:""
                                                                }
                                                            </div>
                                                            
                                                            <div className="seat-form-btn">
                                                                <button  >Proceed to pay</button>
                                                            </div>
                                                            
                                                        </div>
                                                        </form>
                                                    </div>:""
                                                }
                                            </div>
                                            </div>
                                        </div>:""
                                    }
                                    
                                </div>
                               }):
                                state.Data.detail.bus.map((e,i)=>{ 
                                    return <div >
                                        <div className="businfo">
                                           <div className="bustickets-card">
                                            <div className="busname">
                                                <img src="../image/primo_logo.svg" alt="loading"/>
                                                <h4>{e.travelsname}</h4>
                                                <p>{e.type}</p>
                                            </div>
                                            <div className="bus-details">
                                                    <div className="busstart-time">
                                                        <h3>{e.starttime}</h3>
                                                        <p>{e.location1}</p>
                                                    </div>
                                                    <div className="bus-minutes">
                                                        <p>{e.minutes}</p>
                                                    </div>
                                                    <div className="busend-time">
                                                        <h3>{e.endtime}</h3>
                                                        <p>{e.location2}</p>
                                                    </div>
                                                    <div>
                                                        <div className="bus-rating">
                                                            <FaStar className="bus-start"/>
                                                            <p>{e.rating}</p>
                                                        </div>
                                                        <div className="bus-people">
                                                            <FaUserFriends className="bus-user"/>
                                                            <p>{e.people}</p>
                                                        </div>
                                                    </div>
                                                    <div className="bus-price">
                                                        <p>Starts from <br/> INR <span>{e.price}</span></p>
                                                    </div>
                                            </div>
                                            <div className="bus-seats">
                                                <p>{e.seat} <br/>{e.window}</p>
                                                <div className="bustickets-btn">
                                                   {
                                                    e.bool?<button onClick={()=>viewseat(e.id)}>HIDE SEATS</button>:<button onClick={()=>viewseat(e.id)}>VIEW SEATS</button>
                                                   } 
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                       </div>
                                        
                                    <div className="busticket-media">
                                        <div className="busticket-media-time">
                                            <div>
                                            <h3>{e.starttime} - {e.endtime}</h3>
                                            <p>{e.minutes} - {e.seat}</p>
                                            </div>
                                            <div className="media-price">
                                                 <h3><span>From</span>&#8377;{e.price}</h3>
                                            </div>
                                        </div>
                                        <div className="busticket-media-rate">
                                            <div className="media-type">
                                                <h4>{e.travelsname}</h4>
                                                <p>{e.type}</p>
                                            </div>
                                            <div className="bus-rating">
                                                <FaStar className="bus-start"/>
                                                <p>{e.rating}</p>
                                            </div>
                                        </div>
                                        <div className="busticket-media-btn">
                                        {
                                            e.bool?<button onClick={()=>viewseat(e.id)}>HIDE SEATS</button>:<button onClick={()=>viewseat(e.id)}>VIEW SEATS</button>
                                        }
                                        </div>
                                    </div>
                                        {
                                            e.bool?<div className="bus-seat-show">
                                                
                                                <div>
                                                    <h3>Lower Deck</h3>
                                                </div> 
                                                <div className="lower-bus">   
                                                <div className="seat-row"> 
                                                {
                                                  e.ticket.map((v,index)=>{
                                                    console.log(v.isselect);
                                                            return v.isselect? <div className="seat-col">
                                                                        <div className="seat" onClick={()=>booking(e.id, v.id,index)} style={{backgroundColor:colorbool}}>{v.seats}</div> 
                                                                    </div>: <div className="seat-col">
                                                                        <div className="seat" onClick={()=>booking(e.id, v.id,index)}>{v.seats}</div> 
                                                                    </div>
                                                                    
                                                        })
                                                } 
                                                </div>
                                                <div className="seat-legend">
                                                    <h3>SEAT LEGEND</h3>
                                                    <div className="seat-available">
                                                        <div className="seat-type">
                                                            <div className="seat-avil"></div><p>Available</p>
                                                            <div className="seat-unavil"></div><p>Unavailable</p>
                                                        </div>
                                                        <div className="seat-type">
                                                            <div className="seat-female"></div><p>Female</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    { 
                                                        divvisible===false && e.seatbool===true && divhidde.length<=6?<div>
                                                      <div className="select-boarding">
                                                                <h5>Select the boarding and dropping point</h5>
                                                                <div className="boarding">
                                                                    <div className="board">
                                                                        <div >
                                                                        <h5 onClick={board}>BOARDING POINT</h5>
                                                                        </div>
                                                                        {
                                                                         boardbool===false?e.boardingpoint.map((a,i)=>{
                                                                                return <div className="board-info">
                                                                                    <input type="radio" value={a.time} onChange={()=>handle(a.id)} name="time"/><label><h6>{a.time}</h6></label>
                                                                                    <div className="place">
                                                                                    <h6>{a.busstart}</h6>
                                                                                    <p>{a.from}</p>
                                                                                    </div>
                                                                                </div>
                                                                            }):""
                                                                        }
                                                                    </div>
                                                                    <div className="board">
                                                                        <div>
                                                                        <h5 onClick={drop}>DROPPING POINT</h5>
                                                                        </div>
                                                                        {
                                                                          dropbool ?e.droppingpoimt.map((v,i)=>{
                                                                                return <div className="board-info">
                                                                                    <input type="radio" value={v.time} onChange={()=>handler(v.id)} name="time"/><label><h6>{v.time}</h6></label>
                                                                                    <div className="place">
                                                                                    <h6>{v.busend}</h6>
                                                                                    <p>{v.to}</p>
                                                                                    </div>
                                                                                </div>
                                                                            }):""
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    {
                                                                        contbool?<div className="continue-btn">
                                                                            <button onClick={()=>gotoform(e.id)}>Continue</button>
                                                                        </div>:""
                                                                    }
                                                                </div>
                                                                </div>
                                                        </div>:""
                                                    }
                                                </div>
                                                <div>
                                                    {
                                                        e.formvisiblebool===true && e.seatbool===true ?<div ClassName="formdetailsvisible">
                                                            
                                                            <h3>Passenger information</h3>
                                                            <form onSubmit={suceessful}>
                                                            <label>Name </label>
                                                            <div className="formval">
                                                            <input ClassName="forminfo" type="text" placeholder="Name" onChange={setvalue} name="name"/>
                                                            {
                                                                namebool===true?<p ClassName="formpara">please enter the name</p>:""
                                                            }
                                                            </div>
                                                            <div>
                                                                <div className="genderinfo">
                                                                    <label>Gender</label> 
                                                                    <div ClassName="formgender">
                                                                    <input type="radio" name="gender" value="Male" onClick={color}/><label>Male</label>
                                                                    <input type="radio" name="gender" value="Female" onClick={color}/><label>Female</label>
                                                                    </div>
                                                                </div>
                                                                <div className="ageinfo">
                                                                    <label>Age</label>
                                                                    <br/>
                                                                    <input ClassName="formname" type="text" placeholder="Age" onChange={setvalue} name="age"/>
                                                                    {
                                                                        agebool===true?<p ClassName="formpara">please enter the age</p>:""
                                                                    }
                                                                </div>
                                                               
                                                                <div ClassName="">
                                                                    <div className="formsubmit">
                                                                    <button  >Proceed to pay</button>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                            </form>
                                                            
                                                        </div>:""
                                                    }
                                                </div>
                                                </div>
                                            </div>:""
                                        }
                                        
                                    </div>
                                })
                            }
                        </div>:""
                          }  
                        {
                            state.Data.end2===params.location?
                            <div className="bustickets-col">
                            {
                                filtercheckboxbool?filterCheckbox.map((a)=>{
                                    return <div >
                                    <div className="businfo">
                                       <div className="bustickets-card">
                                        <div className="busname">
                                            <img src="../image/primo_logo.svg" alt="loading"/>
                                            <h4>{a.travelsname}</h4>
                                            <p>{a.type}</p>
                                        </div>
                                        <div className="bus-details">
                                                <div className="busstart-time">
                                                    <h3>{a.starttime}</h3>
                                                    <p>{a.location1}</p>
                                                </div>
                                                <div className="bus-minutes">
                                                    <p>{a.minutes}</p>
                                                </div>
                                                <div className="busend-time">
                                                    <h3>{a.endtime}</h3>
                                                    <p>{a.location2}</p>
                                                </div>
                                                <div>
                                                    <div className="bus-rating">
                                                        <FaStar className="bus-start"/>
                                                        <p>{a.rating}</p>
                                                    </div>
                                                    <div className="bus-people">
                                                        <FaUserFriends className="bus-user"/>
                                                        <p>{a.people}</p>
                                                    </div>
                                                </div>
                                                <div className="bus-price">
                                                    <p>Starts from <br/> INR <span>{a.price}</span></p>
                                                </div>
                                        </div>
                                        <div className="bus-seats">
                                            <p>{a.seat} <br/>{a.window}</p>
                                            <div className="bustickets-btn">
                                               {
                                                a.bool?<button onClick={()=>viewseat(a.id)}>HIDE SEATS</button>:<button onClick={()=>viewseat(a.id)}>VIEW SEATS</button>
                                               } 
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                   </div>
                                    
                                <div className="busticket-media">
                                    <div className="busticket-media-time">
                                        <div>
                                        <h3>{a.starttime} - {a.endtime}</h3>
                                        <p>{a.minutes} - {a.seat}</p>
                                        </div>
                                        <div className="media-price">
                                             <h3><span>From</span>&#8377;{a.price}</h3>
                                        </div>
                                    </div>
                                    <div className="busticket-media-rate">
                                        <div className="media-type">
                                            <h4>{a.travelsname}</h4>
                                            <p>{a.type}</p>
                                        </div>
                                        <div className="bus-rating">
                                            <FaStar className="bus-start"/>
                                            <p>{a.rating}</p>
                                        </div>
                                    </div>
                                    <div className="busticket-media-btn">
                                    {
                                                a.bool?<button onClick={()=>viewseat(a.id)}>HIDE SEATS</button>:<button onClick={()=>viewseat(a.id)}>VIEW SEATS</button>
                                               }
                                    </div>
                                </div>
                                    {
                                        a.bool?<div className="bus-seat-show">
                                            
                                            <div>
                                                <h3>Lower Deck</h3>
                                            </div> 
                                            <div className="lower-bus">   
                                            <div className="seat-row">
                                            {
                                               a.ticket.map((v,i)=>{
                                                        return v.isselect?<div className="seat-col">
                                                            <div className="seat" onClick={()=>booking2(a.id,v.id)} style={{backgroundColor:color2bool}}>{v.seats}</div>
                                                        </div>:<div className="seat-col">
                                                            <div className="seat" onClick={()=>booking2(a.id,v.id)}>{v.seats}</div>
                                                        </div>
                                                    })
                                            }
                                            </div>
                                            <div>
                                                <h3>SEAT LEGEND</h3>
                                                <div className="seat-available">
                                                    <div className="seat-type">
                                                        <div></div><p>Available</p>
                                                        <div></div><p>Unavailable</p>
                                                    </div>
                                                    <div className="seat-type">
                                                        <div></div><p>Female</p>
                                                        <div></div><p>Male</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                     divvisible===false && a.seatbool===true && divhidde.length<=6?<div className="select-boarding">
                                                            <h5>Select the boarding and dropping point</h5>
                                                            <div className="boarding">
                                                                <div className="board">
                                                                    <div>
                                                                        <h5 onClick={board}>BOARDING POINT</h5>
                                                                    </div>
                                                                {
                                                                   boardbool===false? a.boardingpoint.map((e,i)=>{
                                                                        return <div className="board-info">
                                                                            <input type="radio" onChange={()=>handle(a.id)} name="time"/><label>{e.time}</label>
                                                                            <div>
                                                                            <h6>{e.busstart}</h6>
                                                                            <p>{e.from}</p>
                                                                            </div>
                                                                        </div>
                                                                    }):""
                                                                }
                                                                
                                                                </div>
                                                                <div className="board">
                                                                    <div>
                                                                        <h5 onClick={drop}>DROPPING POINT</h5>
                                                                    </div>
                                                            
                                                                {
                                                                   dropbool ? a.droppingpoimt.map((e,i)=>{
                                                                        return <div className="board-info">
                                                                            <input type="radio" onChange={()=>handler(a.id)} name="time"/><label>{e.time}</label>
                                                                            <div>
                                                                            <h6>{e.busend}</h6>
                                                                            <p>{e.to}</p>
                                                                            </div>
                                                                        </div>
                                                                    }):""
                                                                }
                                                                
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {
                                                                    contbool?<div className="continue-btn">
                                                                        <button onClick={()=>gotoformbus(a.id)}>Continue</button>
                                                                    </div>:""
                                                                }
                                                            </div>
                                                            </div>:""
                                                    
                                                }
                                            </div>
                                            <div>
                                                {
                                                    a.formvisiblebool===true && a.seatbool===true?<div ClassName="formdetailsvisible-bang">
                                                        <h3>Passenger information</h3>
                                                        <label>Name </label>
                                                        <br/>
                                                        <input  ClassName="formname-1"type="text" placeholder="Name"/>
                                                        <div>
                                                            <div>
                                                                <label>Gender</label>
                                                                <br/>
                                                                
                                                                     <input type="radio" name="gen" value="Male" onChange={color2}/><label>Male</label>
                                                                     <input type="radio" name="gen" value="Female" onChange={color2}/><label>Female</label>
                                                                 
                                                            </div>
                                                            <div>
                                                                <label>Age</label>
                                                                <br/>
                                                                <input  type="text" placeholder="Age"/>
                                                            </div>
                                                            <div ClassName="seat-form-btn">
                                                                <button onClick={suceessful}>Proceed to pay</button>
                                                            </div>
                                                        </div>
                                                    </div>:""
                                                }
                                            </div>
                                            </div>
                                        </div>:""
                                    }
                                    
                                </div>
                                }):
                                state.Data.detail.bus2.map((a,i)=>{
                                    return <div >
                                        <div className="businfo">
                                           <div className="bustickets-card">
                                            <div className="busname">
                                                <img src="../image/primo_logo.svg" alt="loading"/>
                                                <h4>{a.travelsname}</h4>
                                                <p>{a.type}</p>
                                            </div>
                                            <div className="bus-details">
                                                    <div className="busstart-time">
                                                        <h3>{a.starttime}</h3>
                                                        <p>{a.location1}</p>
                                                    </div>
                                                    <div className="bus-minutes">
                                                        <p>{a.minutes}</p>
                                                    </div>
                                                    <div className="busend-time">
                                                        <h3>{a.endtime}</h3>
                                                        <p>{a.location2}</p>
                                                    </div>
                                                    <div>
                                                        <div className="bus-rating">
                                                            <FaStar className="bus-start"/>
                                                            <p>{a.rating}</p>
                                                        </div>
                                                        <div className="bus-people">
                                                            <FaUserFriends className="bus-user"/>
                                                            <p>{a.people}</p>
                                                        </div>
                                                    </div>
                                                    <div className="bus-price">
                                                        <p>Starts from <br/> INR <span>{a.price}</span></p>
                                                    </div>
                                            </div>
                                            <div className="bus-seats">
                                                <p>{a.seat} <br/>{a.window}</p>
                                                <div className="bustickets-btn">
                                                   {
                                                    a.bool?<button onClick={()=>viewseat(a.id)}>HIDE SEATS</button>:<button onClick={()=>viewseat(a.id)}>VIEW SEATS</button>
                                                   } 
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                       </div>
                                        
                                    <div className="busticket-media">
                                        <div className="busticket-media-time">
                                            <div>
                                            <h3>{a.starttime} - {a.endtime}</h3>
                                            <p>{a.minutes} - {a.seat}</p>
                                            </div>
                                            <div className="media-price">
                                                 <h3><span>From</span>&#8377;{a.price}</h3>
                                            </div>
                                        </div>
                                        <div className="busticket-media-rate">
                                            <div className="media-type">
                                                <h4>{a.travelsname}</h4>
                                                <p>{a.type}</p>
                                            </div>
                                            <div className="bus-rating">
                                                <FaStar className="bus-start"/>
                                                <p>{a.rating}</p>
                                            </div>
                                        </div>
                                        <div className="busticket-media-btn">
                                        {
                                                    a.bool?<button onClick={()=>viewseat(a.id)}>HIDE SEATS</button>:<button onClick={()=>viewseat(a.id)}>VIEW SEATS</button>
                                                   }
                                        </div>
                                    </div>
                                        {
                                            a.bool?<div className="bus-seat-show">
                                                
                                                <div>
                                                    <h3>Lower Deck</h3>
                                                </div> 
                                                <div className="lower-bus">   
                                                <div className="seat-row">
                                                {
                                                   a.ticket.map((v,i)=>{
                                                            return v.isselect?<div className="seat-col">
                                                                <div className="seat" onClick={()=>booking2(a.id,v.id)} style={{backgroundColor:color2bool}}>{v.seats}</div>
                                                            </div>:<div className="seat-col">
                                                                <div className="seat" onClick={()=>booking2(a.id,v.id)}>{v.seats}</div>
                                                            </div>
                                                        })
                                                }
                                                </div>
                                                <div>
                                                    <h3>SEAT LEGEND</h3>
                                                    <div className="seat-available">
                                                        <div className="seat-type">
                                                            <div className="seat-avil"></div><p>Available</p>
                                                            <div className="seat-unavil"></div><p>Unavailable</p>
                                                        </div>
                                                        <div className="seat-type">
                                                            <div className="seat-female"></div><p>Female</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    {
                                                         divvisible===false && a.seatbool===true && divhidde.length<=6?<div className="select-boarding">
                                                                <h5>Select the boarding and dropping point</h5>
                                                                <div className="boarding">
                                                                    <div className="board">
                                                                        <div>
                                                                            <h5 onClick={board}>BOARDING POINT</h5>
                                                                        </div>
                                                                    {
                                                                       boardbool===false? a.boardingpoint.map((e,i)=>{
                                                                            return <div className="board-info">
                                                                                <input type="radio" onChange={()=>handle(a.id)} name="time"/><label>{e.time}</label>
                                                                                <div>
                                                                                <h6>{e.busstart}</h6>
                                                                                <p>{e.from}</p>
                                                                                </div>
                                                                            </div>
                                                                        }):""
                                                                    }
                                                                    
                                                                    </div>
                                                                    <div className="board">
                                                                        <div>
                                                                            <h5 onClick={drop}>DROPPING POINT</h5>
                                                                        </div>
                                                                
                                                                    {
                                                                       dropbool ? a.droppingpoimt.map((e,i)=>{
                                                                            return <div className="board-info">
                                                                                <input type="radio" onChange={()=>handler(a.id)} name="time"/><label>{e.time}</label>
                                                                                <div>
                                                                                <h6>{e.busend}</h6>
                                                                                <p>{e.to}</p>
                                                                                </div>
                                                                            </div>
                                                                        }):""
                                                                    }
                                                                    
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    {
                                                                        contbool?<div className="continue-btn">
                                                                            <button onClick={()=>gotoformbus(a.id)}>Continue</button>
                                                                        </div>:""
                                                                    }
                                                                </div>
                                                                </div>:""
                                                        
                                                    }
                                                </div>
                                                <div>
                                                    {
                                                        a.formvisiblebool===true && a.seatbool===true?<div className="seat2-personal-info">
                                                            <h3>Passenger information</h3>
                                                            <form onSubmit={suceessful}>
                                                            <label>Name </label>
                                                            <div className="bus2-form">
                                                            <input  className="formname"type="text" placeholder="Name"  onChange={setvalue} name="name"/>
                                                            {
                                                                namebool===true?<p className="formpara">please enter the name</p>:""
                                                            }
                                                            </div>
                                                            <div>
                                                            <label>Gender</label>
                                                                <div className="formgender">
                                                                   
                                                                  
                                                                    <input type="radio" name="gender" value="Male" onChange={color2}/><label>Male</label>
                                                                    <input type="radio" name="gender" value="Female" onChange={color2}/><label>Female</label>
                                                                </div>
                                                                <div className="bus2-form">
                                                                    <label>Age</label>
                                                                    <br/>
                                                                    <input className="formname" type="text" placeholder="Age" onChange={setvalue} name="age"/>
                                                                    {
                                                                        agebool===true?<p className="formpara">please enter the age</p>:""
                                                                    }
                                                                </div>
                                                                <div className="seat2-form2-btn">
                                                                    <button onClick={suceessful}>Proceed to pay</button>
                                                                </div>
                                                            </div>
                                                            </form>
                                                        </div>:""
                                                    }
                                                </div>
                                                </div>
                                            </div>:""
                                        }
                                        
                                    </div>
                                })
                            }
                        </div>:""
                     }
                        </div>
                        
                </div>
            </div>
            
        </div>
    )
}
export default Bustickets ;  