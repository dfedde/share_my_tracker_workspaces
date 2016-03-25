import React from "react";
import Store from "../store";
import TokenForm from "./token_input";
import Workspace from "./workspace";

export default React.createClass({
  getInitialState: function() {
    return { workspaces: [] }
  },

  render: function() {

    return (
      <div >
      <TokenForm onSubmit={this.getWorkspaces}>load my workspaces</TokenForm>
      {
        this.state.workspaces.map(function(ws){
          return <Workspace renderLink key={ws.id} name={ws.name} projects={ws.project_ids}/>
        })
      }
      </div>
    );
  },

  getWorkspaces: function(token){
    let self = this;
    fetch('https://www.pivotaltracker.com/services/v5/my/workspaces', {
      headers: {
        "X-TrackerToken": token
      }
    })
    .then(function(res){
      return res.json();
    }).then(function(json) {
      self.setState({workspaces: json})
    });
  }
});
