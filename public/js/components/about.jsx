import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component {
    render () {
        return (
            <p id="about">
                {this.props.dataFeed[0].about}
            </p>
        );
    }
}

ReactDOM.render (
    <About dataFeed={aboutData}/>, document.getElementById('bio-box')
);
