var About = React.createClass ({displayName: "About",
    render: function () {
        return (
            React.createElement("p", {id: "about"}, 
                this.props.dataFeed[0].about
            )
        );
    }
});

React.render (
    React.createElement(About, {dataFeed: aboutData}), document.getElementById('bio-box')
);
