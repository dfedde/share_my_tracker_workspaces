import React from "react";
import Store from "../store";
import WorkspaceSelector from "./load_workspaces";
import WorkspaceRetriever from "./workspace_retriever";

export default React.createClass({

  render: function() {
    let params = decodeURIComponent(window.location.search);
    let values = /\?name=(.*?)&projects=(.*?)$/.exec(params)

    return (
      <div >
      {values ? <WorkspaceRetriever name={values[1]} projects={values[2]} /> : <WorkspaceSelector />}
      </div>
    );
  },
});
