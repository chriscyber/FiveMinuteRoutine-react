import React, { Component } from "react";
import SiteNav from "./components/SiteNav";



export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-gradient">
                    <SiteNav />

                    {/*-- Main image & 3 images with text --*/}
                    <div class="container">
                        <div class="position-relative">
                            <img class="image-fluid h-90 rounded border-hero-image shadow-lg" src="images/sunriseoverclouds.jpg" alt="" style={{width:'100%'}} />
                            <div class="centered">
                                <h2 class="text-white text-center">Five Minute Morning Routine!</h2>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row row-content align-items-center p-5 pt-md-5 p-md-0">
                            <div class="col-12 col-md">
                                <img class="d-md-flex mr-md-3 img-thumbnail shadow-lg" src="images/habitssign.jpg" alt="Old Habits, New Habits" />
                            </div>
                            <div class="col">
                                <div class="align-self-center mt-3 mt-md-0 ">
                                    <h2 class="text-center text-md-left">Which path are you going to take today?</h2>
                                    <p class="d-none d-lg-block text-center text-md-left lead"><br />We brush our hair and wash our face every morning to conquer each day. What about grooming your mind? Do you do that every morning0 as well? </p>
                                </div>
                            </div>
                        </div>

                        <div class="row row-content align-items-center p-5 p-md-0 pt-md-5">
                            <div class="col-12 col-md order-first order-md-last">
                                <img class="d-flex ml-md-3 img-thumbnail shadow-lg" src="images/focusedmind.jpg" alt="Contemplation" />
                            </div>
                            <div class="col">
                                <div class="align-self-center mt-3 mt-md-0">
                                    <h2 class="text-center text-md-left">Take 5 minutes each morning to prime your mind for habit-change</h2>
                                    <p class="d-none d-lg-block text-center text-md-left lead"><br />We do this by proactively engaging in tangible actions specific to our goals: reading inspiring quotes, reciting mantras, and writing down our goals.</p>
                                </div>
                            </div>
                        </div>

                        <div class="row row-content align-items-center p-5 p-md-0 pt-md-5">
                            <div class="col-12 col-md">
                                <img class="d-flex mr-md-3 img-thumbnail shadow-lg" src="images/leap.jpg" alt="Leap Across Abyss" />
                            </div>
                            <div class="col">
                                <div class="align-self-center mt-3 mt-md-0">
                                    <h2 class="text-center text-md-left">So you can accomplish your dreams!</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-- wave --*/}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>

                </section>

                <div class="container one-thing-section">
                    <p class="text-center font-weight-bold">
                        If you had the power to change ONE THING about your life, about yourself, what would it be? Only you know what habit you may need to replace or improve in order to affect long-term change. <br></br>Close your eyes, sit back, and take a moment to think about that ONE THING and write it down below. The act of writing it down will start a domino effect of positive change in your life!
                    </p>

                    <form class="mt-5">
                        <div class="form-group">
                            <input class="bg-light text-dark rounded form-control" type="text" name="OneThing" placeholder="One Thing" />
                            <button type="button"  class="btn btn-primary form-control rounded-pill mt-4">Commit!</button>
                        </div>
                    </form>
                </div>

                <footer>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ff7c43" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,144C672,117,768,107,864,112C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </footer>
            </React.Fragment>

        );
        
    }

}




