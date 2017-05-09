import React from 'react';
import ReactDOM from 'react-dom';

const About = (props) => (
    <p id="about">
        {props.dataFeed[0].about}
    </p>
);

ReactDOM.render (
    <About dataFeed={aboutData}/>, document.getElementById('bio-box')
);
