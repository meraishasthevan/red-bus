import React from "react";
import "./Navbarsection.css"

function Navbarsection() {
    return(
        <div>
 
        <header>
            <div className="head-container">
                <div className="head-row">
                    <div className="head-col">
                    <i  class="fa fa-bars" id="head-menu" aria-hidden="true"></i>
                        <div className="head-logo">
                        
                            <img src="../image/logo.svg" className="head-img-1" alt=""/>
                        </div>   
                        <div className="head-col-2">
                            <div className="head-background">
                            <img  className=" head-imag-2"src="../image/logo.svg"  alt=""  />
                             <p> Bus Tickets</p>
                            </div>
                        
                        </div> 
                        <div className="head-col-3">
                        <i  class="fa fa-headphones" id="logo-1" aria-hidden="true"></i>
                            <p className="head-col-4"> Help</p>
                                   
                        </div>
                        <div className="head-col-3">
                        <i class="fa fa-user-circle-o" id="logo-2" aria-hidden="true"></i>
                            <p className="head-col-4"> Account</p>
                            <i  class="fa fa-angle-down" id="logo-3" aria-hidden="true"></i>
                                   
                        </div>
                        
                    </div>
                    
                </div>
               
                </div>
            </header>
            <div className="head-col-new">
                            <div className="head-background">
                            <img  className=" head-imag-2"src="https://st.redbus.in/web/images/layout/rb_vertical.svg"  alt=""  />
                             <p> Bus Tickets</p>
                            </div>
                        
                        </div> 
        </div>
    )
}
export default Navbarsection ;