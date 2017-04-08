var Skills = React.createClass ({displayName: "Skills",
    render: function () {
        return (
            React.createElement("ul", null, 
                this.props.dataFeed.map(function(data, i) {
                    return (
                        React.createElement("li", {key: i, className: "lato qual-item"}, 
                            data.skill
                        )
                    );
                })
            )
        );
    }
});

React.render (
    React.createElement(Skills, {dataFeed: skillsData}), document.getElementById('skills-box')
);
