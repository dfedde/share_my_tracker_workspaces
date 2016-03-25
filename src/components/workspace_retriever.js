import React from "react";
import Store from "../store";
import TokenForm from "./token_input";
import Workspace from "./workspace";

export default React.createClass({

  render: function() {
    console.log(this.props)
    let name = this.props.name
    let projects = this.props.projects.split(', ')

    return (
      <div >
        <TokenForm onSubmit={this.addWorkspace}>Take Workspace</TokenForm>
        <Workspace name={name} projects={projects}/>
      </div>
    );
  },

  addWorkspace: function(token){
    let self = this;
    let name = this.props.name;
    let projects = this.props.projects.split(', ');

    payload = {name: name, project_ids: projects}
    fetch('https://www.pivotaltracker.com/services/v5/my/workspaces', {
      method: 'post',
      body: '',
      headers: {
        "X-TrackerToken": token,
        'Content-Type': 'application/json'
      }
    })
  }
});
