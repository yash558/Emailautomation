import React from 'react'
import './Feature.css'
import ai from '../../assets/ai.png'
const Feature = () => {
    return (
        <div className="feature">
            <div className="feature_title">
                <h1>AI <span>framework</span></h1>
            </div>
            <div className="feature_details">
                <div className="details_info">
                    <div className="info-1">
                    <div className="vertical_line-1"></div>
                        <div className="info-1-heading">
                            <h5>Personalisation</h5>
                        </div>
                        <div className="info-1-para">
                            <p>The advanced intelligent system assists in reaching out to customers and increasing conversion funnel.</p>
                        </div>


                    </div>
                    <div className="info-2">
                    <div className="vertical_line-1"></div>
                        <div className="info-2-heading">
                            <h5>Efficiency</h5>
                        </div>
                        <div className="info-2-para">
                            <p>Our data models help improve the content. Real-time delivery insights are monitored using AI and provide meaningful actions.</p>
                        </div>
                    </div>
                    <div className="info-3">
                    <div className="vertical_line-1"></div>
                        <div className="info-3-heading">
                            <h5>Automation</h5>
                        </div>
                        <div className="info-3-para">
                            <p>Send email at scale using code written in your preferred programming language, such as Python, Java, or Curl.</p>
                        </div>
                    </div>
                </div>
                <div className="feature_details_img">
                    <img src={ai} alt="" height={700} width={750} />
                </div>
            </div>
            <div className="space">
                
            </div>

        </div>
    )
}

export default Feature