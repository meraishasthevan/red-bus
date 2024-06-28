import React from "react";
import './Footersection.css';

function Footersection() {
    return(
        <div>
 <footer id="footer">
        <div className="footer-container">
            <div className="footer-row">
                <div className="footer-col">
                    <div className="footer-col-1">
                    <div className="footer-logo">
                    <img src="../image/logo.svg" height="70px" width="100px"  alt="wait"/>
                    <p id="foot-para">redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. 
                        redBus offers bus ticket booking through its website,
                         iOS and Android mobile apps for all major routes.</p>
                    </div>
                            
                </div>
                <div className="footer-col-1">
                    <h3>About redBus</h3>
                    <p>About us</p>
                    <p>Invartor Relations</p>
                    <p>Contacts </p>
                    <p>mobile Version</p>
                    <p>redBus on mobile</p>
                    <p>Site Map</p>
                    <p>Offters</p>
                    <p>Career</p>
                    <p>Values</p>

                </div>
                <div className="footer-col-1">
                   
                        <h3>Info</h3>
                        <p>T&C</p>
                        <p>Privacy  policy</p>
                        <p>FAQ</p>
                        <p>Blog</p>
                        <p>Bag operator registration</p>
                        <p> Agent registration</p>
                        <p>Insurance  partner</p>
                        <p>User agreement</p>
                        
                    </div>
                    <div className="footer-col-1">
                        <h3>Global Sites</h3>
                        <p>India</p>
                        <p>Singapore</p>
                        <p>Malaysia</p>
                        <p>Indonesia</p>
                        <p>Peru</p>
                        <p>Colombia</p>
                    </div>
                
                <div className="footer-col-1">
                    <h3>Ours Partners</h3>
                    <p>Goibibo Bus</p>
                    <p>Goibibo Bus Hotels</p>
                    <p>Makemytrip Bus</p>
                    <p>Makemytrip Hotels</p>
                </div>
             </div>

            
            </div>
            <hr/>
            <div className="foot-copy">
                <p><i class="fa fa-copyright" aria-hidden="true"></i>2023 Redbus India Pvt Ltd. All rights reserved</p>
             <div className="foot-logo">
                        <i class="fa fa-facebook-official"  id="foot-img"aria-hidden="true"></i>
                        <i class="fa fa-linkedin"  id="foot-img"aria-hidden="true"></i>
                        <i class="fa fa-twitter"  id="foot-img"aria-hidden="true"></i>
                         <i class="fa fa-instagram" id="foot-img" aria-hidden="true"></i>
             </div>
             </div>
             
        </div>

    </footer>
        </div>
    )
}
export default Footersection;