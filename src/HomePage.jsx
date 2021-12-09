import React, { Component } from "react";
import { Container, Form, FormGroup, Button } from "react-bootstrap";
import MainImage from "./Components/ImagesHome";



export default class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="bg-gradient">
          
            {/*-- Main image & 3 images with text --*/}
            
          <MainImage />
            <Container>
              <div className="row row-content align-items-center p-5 pt-md-5 p-md-0">
                <div className="col-12 col-md">
                  <img
                    className="d-md-flex mr-md-3 img-thumbnail shadow-lg"
                    src="images/habitssign.jpg"
                    alt="Old Habits, New Habits"
                  />
                </div>
                <div className="col">
                  <div className="align-self-center mt-3 mt-md-0 ">
                    <h2 className="text-center text-white text-md-left">
                      Which path are you going to take today?
                    </h2>
                    <p className="d-none d-lg-block text-center text-white text-md-left lead">
                      <br />
                      We brush our hair and wash our face every morning to conquer
                      each day. What about grooming your mind? Do you do that every
                      morning as well?{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row row-content align-items-center p-5 p-md-0 pt-md-5">
                <div className="col-12 col-md order-first order-md-last">
                  <img
                    className="d-flex ml-md-3 img-thumbnail shadow-lg"
                    src="images/focusedmind.jpg"
                    alt="Contemplation"
                  />
                </div>
                <div className="col">
                  <div className="align-self-center mt-3 mt-md-0">
                    <h2 className="text-center text-white text-md-left">
                      Take 5 minutes each morning to prime your mind for
                      habit-change
                    </h2>
                    <p className="d-none d-lg-block text-center text-white text-md-left lead">
                      <br />
                      We do this by proactively engaging in tangible actions
                      specific to our goals: reading inspiring quotes, reciting
                      mantras, and writing down our goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row row-content align-items-center p-5 p-md-0 pt-md-5">
                <div className="col-12 col-md">
                  <img
                    className="d-flex mr-md-3 img-thumbnail shadow-lg"
                    src="images/leap.jpg"
                    alt="Leap Across Abyss"
                  />
                </div>
                <div className="col">
                  <div className="align-self-center mt-3 mt-md-0">
                    <h2 className="text-center text-white text-md-left">
                      So you can accomplish your dreams!
                    </h2>
                  </div>
                </div>
              </div>
            </Container>

            {/*-- wave top --*/}
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
              
        
        </section>
        <Container>
          <p class="text-center font-weight-bold mt-5">
              If you had the power to change ONE THING about your life, about yourself, what would it be? Only you know what habit you may need to replace or improve in order to affect long-term change. <br></br><br></br>Close your eyes, sit back, and take a moment to think about that ONE THING and write it down below. The act of writing it down will start a domino effect of positive change in your life!
          </p>

          <Form className="mt-5">
            <Form.Group>
                <Form.Control type="text" name="OneThing" placeholder="One Thing" />
                <Button type="button"  variant="btn btn-primary form-control rounded-pill mt-4" onClick={this.OnSubmit} >Commit!</Button>
            </Form.Group>
          </Form>        
        </Container>
        

        <footer class="bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,256L40,240C80,224,160,192,240,181.3C320,171,400,181,480,202.7C560,224,640,256,720,261.3C800,267,880,245,960,208C1040,171,1120,117,1200,101.3C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
          <div style={{ backgroundColor: "white" }}>
            <h4 class="m-0 text-center pb-3">
              Copyright © 2021. All Rights Reserved
            </h4>
          </div>
        </footer>
        
      </div>
    );
  }
}
