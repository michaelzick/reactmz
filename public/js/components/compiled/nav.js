var Nav = React.createClass ({displayName: "Nav",
  render: function () {
    return (
      React.createElement("nav", {id: "navigationMap"},
          React.createElement("ul", null,
            React.createElement("li", {id: "nav1", className: "ascensorLink ascensorLink1 remove-hover"}),
            React.createElement("li", {id: "nav2", className: "ascensorLink ascensorLink2 remove-hover"}),
            React.createElement("li", {id: "nav3", className: "ascensorLink ascensorLink3 remove-hover"}),
            React.createElement("li", {id: "nav4", className: "ascensorLink ascensorLink4 remove-hover"}),
            React.createElement("li", {id: "nav5", className: "ascensorLink ascensorLink5 remove-hover"})
          )
      )
    );
  }
});

React.render (
	React.createElement(Nav, null), document.getElementById('navComponent')
);