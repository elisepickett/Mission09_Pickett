import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams09.json';

// Define the interface for the properties of each team
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// function for the welcome message
function WelcomeMessage() {
  return <h1>NCAA Basketball Teams</h1>;
}

// function for displaying an individual team card
function IndividualTeamCard(props: TeamProps) {
  return (
    <div className="team-card-box">
      <div className="team-card">
        <h2>{props.school}</h2>
        <h3>Mascot: {props.name}</h3>
        <h3>City: {props.city}</h3>
        <h3>State: {props.state}</h3>
      </div>
    </div>
  );
}

// function for displaying the list of teams
function TeamListContainer() {
  return (
    <div className="team-list">
      {/* Map over the teams data and render an IndividualTeamCard component for each team */}
      {teamsData.teams.map((team: TeamProps, index: number) => (
        <IndividualTeamCard key={index} {...team} />
      ))}
    </div>
  );
}

// Main App component
function Application() {
  return (
    <div className="App">
      <WelcomeMessage />
      <TeamListContainer />
    </div>
  );
}

export default Application;
