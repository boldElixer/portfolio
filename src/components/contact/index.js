import React from 'react'
import './contact.css'
import contactlogo from '../../assets/contact.png'

function contact() {
    return (
        <div>
            <div className='contact'>
                <div className='left_contact'>
                    <img src={contactlogo} draggable="false" />
                    <div className='social contact_social'>
                    <a href="https://github.com/boldElixer" target="_blank"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ashwin-korade-7a7ba120a/" target="_blank"><i class="fa fa-linkedin"></i></a>
                    <a href = "mailto: ashwinsrk77@gmail.com"><i class="fa fa-google"></i></a>
                    <a href="https://www.facebook.com/ashwin.korade.7/" target="_blank"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/ashwin101/" target="_blank"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
                <div className='right_contact'>
                    <h2>Contact Me</h2>
                    <p className='con_com'>If anyone from IITR is stumbled here, you can reach me at:</p>
                    <p>BF-25, Govind Bhawan</p>
                    <p>Indian Institute of Technology, Roorkee</p>
                    <p>Roorkee, Uttarakhand</p>
                    <p>INDIA - 247667</p>
                    <p className='con_com'>Feel free to contact me through any of my social media accounts. I'll try my best to revert back to you within a day or two :)</p>
                    <a href="https://drive.google.com/file/d/1-kvg8k0x6tCkYfyEMYmhEl2Lq4q7789b/view?usp=sharing" target="_blank"><button className='resume'>My Resume</button></a>
                </div>
            </div>
        </div>
    )
}

export default contact
