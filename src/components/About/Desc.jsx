import React from 'react'
import './Desc.css'

function Desc() {
  return (
    <div className='desc-container'>
        <div className='left-Section'>
            <div className='Heading'>Overseas Education Consultancy</div>
            <div className='sub-heading'>About <span className='front-title'>Edu</span><span className='back-title'>Brix</span></div>
            <p>
                EduBrix Overseas Consultancy Private Limited (EduBrix). is a complete end-to-end solution for Global Careers. Our core activities deal with assisting and ensuring that students make the right choice when they decide to pursue education in overseas educational institutions tailoring career paths to suit individual profiles within the required parameters. Since 2008 we have sent hundreds of students to various countries like the USA, UK, Germany, Australia, Canada, New Zealand, Ireland, Poland, etc. We ensure that you get the most hassle-free experience in making the right decision of studying abroad. Most of our counselors have studied, worked, and extensively traveled abroad, each having an average work experience in this industry of 14 years. They are therefore the most reliable, knowledgeable, and experienced in this field of guiding you through this process while always keeping in mind your preferences.
            </p>
        </div>
        <div className='right-Section'>
            <img src="https://edubrixoverseas.com/wp-content/uploads/2023/10/1.5.jpg" alt="Image" />

            <div className='experience-box'>
                <div className='years'>14+</div>
                <div className='tag'>Year's Experience</div>
            </div>
        </div>
    </div>
  )
}

export default Desc