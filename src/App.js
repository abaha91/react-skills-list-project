import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Header from "./Header-component/header-component";
import TodoSkills from "./Todo-skills-component/todo-skills-component";
import ReadySkills from "./Ready-skills-component/ready-skills-component";
import NewSkill from "./New-skill-component/new-skill-component";

export class App extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Header />
        <div className="todo-lists--wrapper">
          <TodoSkills skills={this.props.tasks}/>
          <ReadySkills skills={this.props.readyTasks}/>
        </div>
        <NewSkill />
      </div>
    );
  }

}

let mapStateToProps = state => {
  return {
    tasks: state.tasks,
    readyTasks: state.readyTasks,
  };
};

const WrappedApp = connect(mapStateToProps)(App);
export default WrappedApp;
