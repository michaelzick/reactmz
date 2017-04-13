var MainComponent = React.createClass ({displayName: "MainComponent",
    render: function () {
        return (
            React.createElement("ul", {className: "thumbnails"},
                this.props.dataFeed.map(function(data, i) {
                    var newLine = "",
                        fancyBox = "fancybox",
                        targetBlank = "",
                        isIframe = "",
                        span = "span3";

                    if (data.proj_is_url == true) {
                        targetBlank = "_blank";
                        fancyBox = "";
                    }
                    if (data.proj_new_line === true) {
                        newLine = "thumb-new-line";
                    }
                    if (data.proj_is_iframe === true) {
                        isIframe = "iframe";
                    }
                    if (data.art_radio || data.pics_radio) {
                        span = "span4";
                    }

                    return (
                        React.createElement("li", {key: i, className: newLine + " " + span},
                            React.createElement("a", {href: data.proj_link_0,
                                className: fancyBox + " thumbnail",
                                target: targetBlank,
                                "data-fancybox-type": isIframe,
                                rel: data.proj_rel,
                                title: data.proj_title + "</br>" + data.proj_role},
                                React.createElement("img", {src: data.proj_thumb})
                            ),
                            React.createElement("div", {className: "caption"},
                                React.createElement("h2", null, data.proj_header),
                                React.createElement("h3", {className: "lato description"}, data.proj_desc)
                            )
                        )
                    );
                })
            )
        );
    }
});

React.render (
    React.createElement(MainComponent, {dataFeed: workData}), document.getElementById('work')
);

React.render (
    React.createElement(MainComponent, {dataFeed: artData}), document.getElementById('art')
);

React.render (
    React.createElement(MainComponent, {dataFeed: picsData}), document.getElementById('pics')
);
