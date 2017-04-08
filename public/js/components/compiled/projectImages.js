var ProjectImages = React.createClass ({displayName: "ProjectImages",
    render: function () {
        return (
            React.createElement("span", null, 
                this.props.dataFeed.map(function(data, i) {
                    var projLink1,
                        projLink2,
                        projLink3;

                    if (data.proj_link_1 != "" && data.proj_link_1 != null) {
                        projLink1 = React.createElement("a", {href: data.proj_link_1, 
                        className: "fancybox", 
                        rel: data.proj_rel, 
                        title: data.proj_link_1_title + "</br>" + data.proj_link_1_role})
                    }
                    if (data.proj_link_2 != "" && data.proj_link_2 != null) {
                        projLink2 = React.createElement("a", {href: data.proj_link_2, 
                        className: "fancybox", 
                        rel: data.proj_rel, 
                        title: data.proj_link_2_title + "</br>" + data.proj_link_2_role})
                    }
                    if (data.proj_link_3 != "" && data.proj_link_3 != null) {
                        projLink3 = React.createElement("a", {href: data.proj_link_3, 
                        className: "fancybox", 
                        rel: data.proj_rel, 
                        title: data.proj_link_3_title + "</br>" + data.proj_link_3_role})
                    }
                    return (
                        React.createElement("span", {key: i}, 
                            projLink1, 
                            projLink2, 
                            projLink3
                        )
                    );
                })
            )
        );
    }
});

React.render (
    React.createElement(ProjectImages, {dataFeed: workData}), document.getElementById('proj-imgs-1')
);

React.render (
    React.createElement(ProjectImages, {dataFeed: artData}), document.getElementById('proj-imgs-2')
);

React.render (
    React.createElement(ProjectImages, {dataFeed: picsData}), document.getElementById('proj-imgs-3')
);
