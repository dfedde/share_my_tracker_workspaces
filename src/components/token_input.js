import React from "react";
import Store from "../store";

export default React.createClass({

  render: function() {
    styles={
      button: {
        display: 'inline-block',
        paddingLeft: 5
      }
    }

    return (
      <div >
      <input type='text'/>
      <div style={styles.button}>load my workspaces</div>
      </div>
    );
  },
});
