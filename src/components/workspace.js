import React from "react";

export default React.createClass({

  render: function() {

    return (
      <div >
      <span>{this.props.name}</span>
      <span> {this.projects()}</span>
      {this.props.renderLink ? <a href={this.link()}>{this.link()}</a>: null}
      </div>
    );
  },

  projects: function(){
    return this.props.projects.reduce(function(prev, curr){
      return prev + ', ' + curr;
    });
  },

  link: function(){
    let url = window.location.origin + window.location.pathname;
    let link = encodeURI(url + "?name=" + this.props.name + "&projects=" + this.projects());
    console.log(link);
    return link
  },
});
