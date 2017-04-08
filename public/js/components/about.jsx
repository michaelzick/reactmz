var About = React.createClass ({
    render: function () {
        return (
            <p id="about">
                {this.props.dataFeed[0].about}
            </p>
        );
    }
});

React.render (
    <About dataFeed={aboutData}/>, document.getElementById('bio-box')
);
