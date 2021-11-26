import React, { Component } from "react";
import SiteNav from "./components/SiteNav";



export default class HomePage extends Component {
    render() {
        return (
            <section className="bg-gradient">
                <SiteNav />

                {/*-- Main image & 3 images with text --*/}
                <div class="container" id="main-image">
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


            </section>
        );
        
    }

}


