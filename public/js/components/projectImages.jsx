import React from 'react';
import ReactDOM from 'react-dom';

var ProjectImages = React.createClass ({
    render: function () {
        return (
            <span>
                {this.props.dataFeed.map(function(data, i) {
                    var projLink1,
                        projLink2,
                        projLink3;

                    if (data.proj_link_1 != "" && data.proj_link_1 != null) {
                        projLink1 = <a href={data.proj_link_1}
                        className="fancybox"
                        rel={data.proj_rel}
                        title={data.proj_link_1_title + "</br>" + data.proj_link_1_role}></a>
                    }
                    if (data.proj_link_2 != "" && data.proj_link_2 != null) {
                        projLink2 = <a href={data.proj_link_2}
                        className="fancybox"
                        rel={data.proj_rel}
                        title={data.proj_link_2_title + "</br>" + data.proj_link_2_role}></a>
                    }
                    if (data.proj_link_3 != "" && data.proj_link_3 != null) {
                        projLink3 = <a href={data.proj_link_3}
                        className="fancybox"
                        rel={data.proj_rel}
                        title={data.proj_link_3_title + "</br>" + data.proj_link_3_role}></a>
                    }
                    return (
                        <span key={i}>
                            {projLink1}
                            {projLink2}
                            {projLink3}
                        </span>
                    );
                })}
            </span>
        );
    }
});

ReactDOM.render (
    <ProjectImages dataFeed={workData}/>, document.getElementById('proj-imgs-1')
);

ReactDOM.render (
    <ProjectImages dataFeed={artData}/>, document.getElementById('proj-imgs-2')
);

ReactDOM.render (
    <ProjectImages dataFeed={picsData}/>, document.getElementById('proj-imgs-3')
);
