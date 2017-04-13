import React from 'react';
import ReactDOM from 'react-dom';

var About = React.createClass ({
    render: function () {
        return (
            <p id="about">
                {this.props.dataFeed[0].about}
            </p>
        );
    }
});

ReactDOM.render (
    <About dataFeed={aboutData}/>, document.getElementById('bio-box')
);
