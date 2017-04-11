import React from 'react';
import ReactDOM from 'react-dom';

var Skills = React.createClass ({
    render: function () {
        return (
            <ul>
                {this.props.dataFeed.map(function(data, i) {
                    return (
                        <li key={i} className="lato qual-item">
                            {data.skill}
                        </li>
                    );
                })}
            </ul>
        );
    }
});

ReactDOM.render (
    <Skills dataFeed={skillsData}/>, document.getElementById('skills-box')
);
