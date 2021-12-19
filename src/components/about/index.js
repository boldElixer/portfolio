import React from 'react'
import './about.css'
import aboutlogo from '../../assets/about.png'

function about() {
    return (
        <div>
            <div className='About'>
                <p className='about_head'>About Me</p>
                <img src={aboutlogo} />
                <p className='about_content'>I'm a sophomore at the Indian Institute of Technology(IIT), Roorkee pursuing a B.Tech degree in Mechanical Engineering. A focussed individual and have developed planning and organizational skills in course of my JEE journey.</p>
                <p className='about_content'>Initially dreamt of pursuing an actuary because of my evergreen love for mathematics. It has always been my strength and has helped me understand various things in a better way. But, looking at the time taken to become an actuary, I convinced myself to prepare for JEE.</p>
                <p className='about_content'>Well, after getting into IIT, I decided to learn new skills apart from academics. Thus, the webd journey began. I was fascinated by how websites are made, how things process in the background. Initially, I did only front-end development and eventually learned React too. Though spending hours in fixing the CSS is very painful :(</p>
                <p className='about_content'>CP was another hobby as I already love to solve challenging questions. Learned some basic C++ during my first year and began solving questions. The ratings went up and down yet I feel somewhat I have slightly excelled in it. There's a lot I still have to learn.</p>
                <p className='about_content'>Apart from this geeky stuff, I am a Bollywood buff. Love binge watching, listening to songs to calm me. I am quite a helpful and fun-loving person. Hence, Baburao Ganpatrao Apte is my true idol<i>(lol)</i>.</p>
            </div>
        </div>
    )
}

export default about
