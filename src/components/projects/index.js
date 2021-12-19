import React, { useEffect } from 'react'
import './projects.css'
import projectlogo from '../../assets/project.png'
import { FcNext } from 'react-icons/fc'
import { IoChevronBack } from 'react-icons/io5'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Project() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div>
            <div className='main_project'>
                <div className='left_project'>
                    <p className='name'>Projects</p><br/><br/>
                    <p className='desc'>Some of my projects are deployed shown below, while others are available on my Github</p><br/><br/>
                    <a href="https://github.com/boldElixer" target="_blank"><button className='resume'>My Github</button></a>
                </div>
                <div className='right_project'>
                    <img draggable="false" src={projectlogo} className='homelogo'/>
                </div>
            </div>
            <div className='projects'>
                <div className='ongoing' data-aos="slide-right" data-aos-once="true">
                    <div className='proj_head'>Ongoing Projects&nbsp;<FcNext /></div>
                    <div className='proj_card'>
                        <a href="https://asme-iitr-dev.netlify.app/" target="_blank">
                            <div className='card'>
                            <p>ASME IIT Roorkee Chapter</p>
                            </div>
                        </a>
                        <a href="https://talkthattalk.in/" target="_blank">
                            <div className='card'>
                            <p>Talk That Talk</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='ongoing' data-aos="slide-left" data-aos-once="true">
                    <div className='proj_card mini'>
                        <a href="https://quoterrr.netlify.app/" target="_blank">
                            <div className='card'>
                            <p>Quote Generator</p>
                            </div>
                        </a>
                        <a href="https://simon00game.netlify.app/" target="_blank">
                            <div className='card'>
                            <p>Simon Game</p>
                            </div>
                        </a>
                    </div>
                    <div className='proj_head'><IoChevronBack />Small Fun Projects</div>
                </div>
            </div>
        </div>
    )
}

export default Project
