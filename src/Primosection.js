import React from "react";
import'./Primosection.css';
import Globalsection from './Globalsection.js';

function Primosection(){
    return(
        <div>
            <div className="primo-container">
            <div className="primo-img">
                    <img src="image/primo.svg" alt=""/>
                    </div>
                    
                <div className="primo-row">
                    <div className="primo-col">
                        <div className="primo-img-1">
                                <img src="image/primo1.svg" alt=""/>
                            <div className="primo-para">
                                <h2>1 of 5 buses qualify</h2>
                                <p>Primo’s strict safety qualification ensures a safer travel for you</p>
                            </div>
                       
                        </div>
                    </div>

                    <div className="primo-col">
                         <div className="primo-img-1">
                                 <img src="image/primo2.svg" alt=""/>
                            <div className="primo-para">
                                 <h2>Preferred by 90%</h2>
                                <p>90% of travellers re-book Primo buses for its punctuality and comfort</p>
                            </div>
                    </div>
                    </div>
                    <div className="primo-col">
                        <div className="primo-img-1">
                                 <img src="image/primo3.svg" alt=""/>
                            <div className="primo-para">
                                <h2>9 Lac+ monthly travellers</h2>
                                <p>In 2022, 9 Lac+ people traveled with Primo every month</p>
                            </div>
                        </div>
                
                    </div>        
                </div>
        </div>
        <Globalsection/>
    </div>    
    )
}

export default Primosection ;