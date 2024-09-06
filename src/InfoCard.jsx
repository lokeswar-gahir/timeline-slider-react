import React from "react"

const InfoCard = ({index, imgSrc, alt, title, description}) => {
    return (
        <div className="info-wrapper" style={{ translate: `${-100 * index}%` }}>
            <div className="info">
                <img src={imgSrc} alt={alt} className="info-img" />
                <div>
                    <h1 style={{ margin: "10px 0", borderBottom: '3px solid rgba(128, 128, 128, 0.3)', width: 'max-content' }}>{title}</h1>
                    <p style={{maxWidth: '280px', fontWeight: 700}}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
