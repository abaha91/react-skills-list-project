import React, { Component } from 'react';
import { removeTodo } from '../actions/index';
import { connect } from 'react-redux';

class ReadySkills extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ready-skills">
        <p>Есть опыт работы</p>
        <ul className="ready-skills--list">
          {this.props.readySkills.map((skill, index) => <li key={index} className="ready-skills--item">
            {skill}
            <div className="ready-skill--delete"></div>
          </li>)}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    readySkills: state.readySkills,
  }
}

export default connect(mapStateToProps)(ReadySkills);