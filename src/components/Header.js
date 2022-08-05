import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function Header(){
    return(
        <div className="header">
            <h3 className="header-text text-center">Zuri<span>.</span>Team</h3>

            <h1 className="text-center pt-5">Learn, Build, Grow.</h1>

            <p className="text-center pt-4">Unlock your Brilliance with our hands-on <span>beginner</span> and <span>expert training</span>. Zuri Team has been<br/> 
                immensely successful in creating a global network of a highly adept intelligent workforce<br/> 
                that can help your company achieve their mission-critical <span>projects and goals</span></p>

            <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center buttons pt-5">
                 <ButtonGroup className="me-2" aria-label="First group">
                 <Button variant="danger" className="border-0">I'm new to the industry</Button> 

                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                <Button variant="danger">I need industry experience</Button>
               </ButtonGroup>
            </ButtonToolbar>   
           
        </div>
    )
}

export default Header;