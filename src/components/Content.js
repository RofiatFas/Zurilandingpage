import React from "react";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css'



function Content(){
    return(
        <div className="content-container">
            <h6 className="text-center pt-5">BY ZURI Team</h6>
            <h3 className="text-center pt-3 zuriteam-text">We cater for every level of <br/> expertise and needs in the industry.</h3>



            <div className="cards">
         <div className="services">
            <div className="content content-1">
               <div className="zuribox1 zuribox">
               <h5 className="zuribox-text">Zuri<span>.</span>Training</h5>
               </div>
               <p className="pt-5">
               We understand a complete beginner 
               cannot become a professional after a 
               few weeks, the aim here is to get you 
               familiar enough with each the tools such 
               that you’ll be able to continue learning 
               on your own with minimal support.
               </p>
               <a href="#">I want to be trained ></a>
            </div>
            <div className="content content-2">
             <div className="zuribox2 zuribox">
               <h5>Zuri<span>.</span>Internship</h5>
               </div>
               <p className="pt-5">
                 We place you in a work simulation. We 
                 give you tasks every week, the tasks 
                 ranges from easy to hard as you 
                 progress from stage to stage, making it 
                 to the final stage means you are ready 
                 for actual work.
               </p>
               <a href="#">I want to join the internship ></a>
            </div>
            <div className="content content-3">
               <div className="zuribox3 zuribox">
               <h5>Zuri<span>.</span>Talent</h5>
               </div>
               <p className="pt-5">
               Keeping pace with projects and being 
               on the look out for the extremely 
               talented individuals has become ever 
               more challenging. Here is where Zuri 
               Team comes into play to bring the best 
               suited talent for your company
               </p>
               <a href="#">I am looking for talent ></a>
            </div>
         </div>
      </div>

  {/* <div className="whole-card">
     <CardGroup style={{ width: '58rem' }} className="zuri-card pt-5  container-fluid d-flex justify-content-center d-grid gap-3">
      <Card className="card h-100">
        <div className="box">
        <h5 className="zuri-box">Zuri<span>.</span>Training</h5>
        </div>
        <Card.Body>
          <Card.Text>
          We understand a complete beginner 
          cannot become a professional after a 
          few weeks, the aim here is to get you 
          familiar enough with each the tools such 
          that you’ll be able to continue learning 
          on your own with minimal support.
          </Card.Text>
        </Card.Body>
        <Card.Link href="#">I want to be trained ></Card.Link>
      </Card>
      <Card className="h-100">
      <div className="box">
        <h5>Zuri<span>.</span>Internship</h5>
        </div>
        <Card.Body>
          <Card.Text>
          We place you in a work simulation. We 
          give you tasks every week, the tasks 
          ranges from easy to hard as you 
          progress from stage to stage, making it 
          to the final stage means you are ready 
          for actual work.
          </Card.Text>
        </Card.Body>
        <Card.Link href="#">I want to join the internship ></Card.Link>
      </Card>
      <Card className=" h-100">
      <div className="box">
        <h5>Zuri<span>.</span>Talent</h5>
        </div>
        <Card.Body>
          <Card.Text>
          Keeping pace with projects and being 
          on the look out for the extremely 
          talented individuals has become ever 
          more challenging. Here is where Zuri 
          Team comes into play to bring the best 
          suited talent for your company

          </Card.Text>
        </Card.Body>
        <Card.Link href="#">I am looking for talent ></Card.Link>
      </Card>
    </CardGroup>
        </div> */}
    </div>
    )
}
export default Content;