import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.css"

function App() {
    return <Container />
}

function Container() {
    return <div className="container">
        <AboutSection />
        <OtherInfo />
    </div>
}

function AboutSection() {
    return <div>
        <img src="../../github.jpeg" />
    </div>
}

function OtherInfo() {

    return <div className="otherInfo">
        <h1 className="heading">Ankita Sood</h1>
        <p className="information">Hello, I’m Ankita and I work as a web developer. I have been working as a web developer for quite some time now. I believe I am a very ambitious person who loves to work on making the website work well. Working on the web is my passion as I love to work on exciting projects. This is the field I get to express my creativity. I would love to work in your esteemed organisation.
        </p>
        <div className="skill">
            <Skill skill="HTML+CSS" emoji="💪🏻" color="cyan" />
            <Skill skill="Javascript" emoji="💪🏻" color="lightGreen" />
            <Skill skill="Web Design" emoji="👍🏻" color="lightBlue" />
            <Skill skill="Git & Github" emoji="👍🏻" color="orange" />
            <Skill skill="React" emoji="💪🏻" color="pink" />
        </div>
    </div>
}

function Skill(props) {
    const style = {
        backgroundColor: props.color,
        margin: '3px',
        height: '25px',
        padding: '0.25em',
        borderRadius: '5px',
        fontWeight: 'bold'
    }
    return <p style={style}>{props.skill} {props.emoji} </p>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode >
);