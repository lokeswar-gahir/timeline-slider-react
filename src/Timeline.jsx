import React, { useState } from "react"
import f1 from "./img/d1.jpg"
import f2 from "./img/d2.jpg"
import f3 from "./img/d3.jpg"
import f4 from "./img/d4.jpg"
import f5 from "./img/d5.jpg"
import f6 from "./img/d6.jpg"
import f7 from "./img/d7.jpg"
import InfoCard from "./InfoCard"

const Timeline = () => {
    const imageList = [
        {img: f1, title: 'April 2018', desc: 'We are one of India\'s leading drone firms in providing end-to-end drone solution.'},
        {img: f2, title: 'April 2019', desc: 'We are the best in the market.'},
        {img: f3, title: 'April 2020', desc: 'Total sales increased by 55% in last finalcial Year.'},
        {img: f4, title: 'April 2021', desc: 'We provide world class drones for both commercial and personal uses.'},
        {img: f5, title: 'April 2022', desc: 'We are one of India\'s leading drone firms in providing end-to-end drone solution.'},
        {img: f6, title: 'April 2023', desc: 'We are one of India\'s leading drone firms in providing end-to-end drone solution.'},
        {img: f7, title: 'April 2024', desc: 'We are one of India\'s leading drone firms in providing end-to-end drone solution.'}
    ]
    const [currIndex, setIndex] = useState(0)

    return (
        <div className="timeline-wrapper">
            <h2>Timeline IG Drone.</h2>
            <div className="main-info-wrapper">
                {
                    imageList.map((item, index)=>{
                        return <InfoCard key={index} index={currIndex} imgSrc={item.img} title={item.title} description={item.desc} />
                    })
                }
            </div>
            <div className="timeline">
                <div className="timeline-bar"></div>
                <div className="timeline-btn">
                    {imageList.map((_, index) => {
                        return <span key={index} style={{position: 'relative'}}>
                            <span className="month-year">{_.title}</span>
                            <button className={`timeline-button-icons ${currIndex === index ? "focused-icon" : ""}`} onClick={()=> setIndex(index)}></button>
                        </span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Timeline
