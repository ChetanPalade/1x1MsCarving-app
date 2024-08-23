import React from "react";

import "../styles/about-page.css";
const About = () => {
    return (
      <>
      <div className="about-container">
        <h1>About <br/> MSCarving</h1>
        <p>MSCarving provides placement training to MBA students. 
            One of the activities as part of training is 1x1 Mock Interview. 
            In this activity, a student gets interviewed by a mentor for a set duration
            To schedule this activity, both student and mentor should be free at the same 
            time for the set duration. 
        </p>
        
        <h2>Student:</h2>
        <p>Student is studying in one of the MBA colleges. 
            They have classes during the day mostly from 9AM to 6PM. 
            They also occasionally get guest lectures or quiz or placement
            activity scheduled last minute by college authorities which they can’t skip.
            Sundays are mostly free, but students tend to keep it free for personal requirements. 
            We have over 10,000 students on our portal and any student can choose to book a 1x1 as 
            per the need. Student must choose an area of interest (in MBA) while booking a 1x1 
        </p>

        <h2>Mentor: </h2>
        <p>A mentor is someone working full time with a company in mid to senior level management.
           They volunteer to help MBA students prepare for placements. 
           So, they work with CareerCarve as part time consultants and spend time only as much as they have.            Their regular office job stretches over the weekday mostly from 9AM – 7PM. Most weekends are completely free. Many make plans with friends and family on weekends evening. They also make last minute plans or must deal with last minute requests from their  bosses which they can’t say no.
           We have over 500 mentors on our portal who are expert in one of the areas in MBA. 
        </p>
        <p>
                If you have any questions or would like to learn more about our
                mission, please feel free to <a href="/contact">contact us</a>. We
                would love to hear from you!
        </p>
      </div>
      </>
    )
}


export default About;