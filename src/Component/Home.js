import React from "react";
import introImg from '../Images/Sponsor-amico2.png';
import back from '../Images/back.png';
import urgentBro from '../Images/urgent-bro.png';
import '../Css/Home.css'
import Navbar from "./Navbar";

const Home = ()=>{
    return (
        <>
        <header>
        </header>
        <Navbar />
        <div className="intro">
            <img src={introImg} alt="intro" className="introImg" />
            <div className="introTextTitle">
            IIT BHU Seed Fund
            <p className="introText">
            The IIT BHU Seed Fund aims to foster a startup ecosystem within the IIT BHU community of students, professors, and alumni. The goal of the fund is to prepare the startups for an external
financing round on graduating from the seed fund scheme. The selected startups will be guided
by alumni venture capitalists and serial entrepreneurs. This year we will support 5 startups with
a seed funding of INR 25,00,000 against 5% equity.
            </p>
            </div>
        </div>
        {/* <section>
            <div className="curve"></div>
        </section> */}
        <div className="apply">
            <img src={back} alt="background" className="back" />
            <img src={urgentBro} alt="urgent-bro" className="applyImage" />
            <div className="applyText">Application Deadline : 1 February 2023
            <div className="applyButton">
                Apply Now
            </div>
            </div>
        </div>
        </>
    )
}

export default Home;