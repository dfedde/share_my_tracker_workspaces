import React from "react";
import Store from "../store";

export default React.createClass({

  render: function() {
    let styles={
      button: {
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '5px 10px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px'
      },
      input: {
        width: '300px'
      }
    }

    return (
      <div >
      <input onstyle={styles.input}type='text'/>
      <div style={styles.button}>load my workspaces</div>
      </div>
    );
  },
});
