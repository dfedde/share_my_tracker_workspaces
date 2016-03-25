import React from "react";
import Store from "../store";

export default React.createClass({
  getInitialState: function(){
    return {token: ''}
  },

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
        width: '500px'
      }
    };

    return (
      <div >
      <input onChange={this.handleInput} style={styles.input} type='text'/>
      <div onClick={this.handleSubmit} style={styles.button}>{this.props.children}</div>
      </div>
    );
  },

  handleSubmit: function(){
    this.props.onSubmit(this.state.token);
  },

  handleInput: function(e){
    this.setState({token: e.target.value});
  },
});
