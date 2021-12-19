import React, { useEffect } from 'react'
import './intro.css'
import homelogo from '../../assets/home.png'
import cf from '../../assets/cf.png'
import 'font-awesome/css/font-awesome.min.css'
import { FaNodeJs } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaYarn } from 'react-icons/fa';
import { FaNpm } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FcNext } from 'react-icons/fc';
import { SiCodechef } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Intro() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div>
            <div className='main-home'>
            <div className='left-content'>
                <p className='common'>Hey, I'm</p>
                <p className='name'>Ashwin Korade</p>
                <p className='common'><i>(boldElixer)</i></p>
                <p className='desc'>Challenges make life interesting and overcoming them makes life meaningful. A dedicated and organized individual who strives to learn newer skills and upscale them.</p>
                <div className='social'>
                    <a href="https://github.com/boldElixer" target="_blank"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ashwin-korade-7a7ba120a/" target="_blank"><i class="fa fa-linkedin"></i></a>
                    <a href = "mailto: ashwinsrk77@gmail.com"><i class="fa fa-google"></i></a>
                    <a href="https://www.facebook.com/ashwin.korade.7/" target="_blank"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/ashwin101/" target="_blank"><i class="fa fa-instagram"></i></a>
                </div>
            </div>
            <div className='right-content'>
                <img draggable="false" src={homelogo} className='homelogo'/>
            </div>
            </div>
            <div className='what'>
                <p className='what_head'>What I do?</p>
                <div className='webd'>
                    <div className='left_webd' data-aos="slide-right" data-aos-once="true">
                        <FaHtml5 color='#E34F26' title="HTML 5"/>
                        <FaCss3Alt color='#1572B6' title="CSS"/>
                        <FaSass color='#CC6699' title="Sass"/>
                        <SiJavascript color='#F7DF1E' title="JavaScript"/>
                        <FaReact color='#6EDCF9' title="ReactJS"/>
                        <FaNodeJs color='#339933' title="NodeJS"/>
                        <FaYarn color='#2C8EBB' title="Yarn"/>
                        <FaNpm color='#CB3837' title="NPM"/>
                        <SiMongodb color='#0FA64D' title="MongoDB"/>
                    </div>
                    <div className='right_webd' data-aos="slide-left" data-aos-once="true">
                        <h2>Web Development</h2><br/>
                        <p>Love to code things from scratch in developing responsive Front-end websites mainly in React. Application backend using Node and Express.</p>
                        <br/><p className='link_project'><Link to="/projects" className='proj_link'>My Projects<FcNext /></Link></p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='webd'>
                    <div className='right_webd' data-aos="slide-right" data-aos-once="true">
                        <h2>
                            Competitive Programming
                        </h2><br/>
                        <p>Another of my favourite hobbies is to solve questions in the hunger of getting that <i>AC</i>. Sometimes rework it for reduced space and time complexity.</p>
                    </div>
                    <div className='left_webd' data-aos="slide-left" data-aos-once="true">
                        <a href="https://codeforces.com/profile/koraash" target="_blank">
                            <img src={ cf } title="View Profile"/>
                        </a>
                        <a href="https://www.codechef.com/users/ashk_00" target="_blank">
                            <SiCodechef color='#743E1D' title="View Profile"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
