import React from "react";
import "./Globalsection.css"
function Globalsection(){
    return(
        <div>
            <div className="global-container">
            <h1> GLOBAL PRESENCE</h1>
                <div className="global-row">
                    
                    <div className="global-col">
                        <div>
                            <img  className="global-img" src="image/Colombia.svg" alt=""/>
                            <div className="global-btn">
                                <button>Colombia</button>
                            </div>
                        </div>
                    </div>
                    <div className="global-col">    
                        <div>
                            <img    className="global-img" src="image/India.svg" alt=""/>
                            <div className="global-btn">
                                <button>India</button>
                            </div>
                        </div>
                    </div> 
                    <div className="global-col">   
                        <div>
                        <img   className="global-img" src="image/Indonesia.svg" alt=""/>
                            <div className="global-btn">
                                <button>Indonesia</button>
                            </div>
                        </div>
                    </div>
                    <div className="global-col">    
                        <div>
                            <img   className="global-img" src="image/Malaysia.svg" alt=""/>
                            <div className="global-btn">
                                <button>Malaysia</button>
                            </div>
                            </div>
                    </div> 
                    <div className="global-col">   
                        <div>
                            <img   className="global-img" src="image/Peru.svg" alt=""/>
                            <div className="global-btn">
                                <button>Peru</button>
                            </div>
                        </div>
                    </div>  
                    <div className="global-col">  
                        <div>
                            <img   className="global-img" src="image/Singapore.svg" alt=""/>
                            <div className="global-btn">
                                <button>Singapore</button>
                            </div>
                        </div>
                    </div>
                    
                </div> 
             </div>      

        </div>
    )
}

export default Globalsection ;