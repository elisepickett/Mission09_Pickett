//Elise Pickett Mission 9 section 1

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

// Component for the welcome message
function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

// Component for displaying an individual team card
function TeamCard(props: TeamProps) {
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

// Component for displaying the list of teams
function TeamList() {
  return (
    <div className="team-list">
      {/* Map over the teams data and render a TeamCard component for each team */}
      {teamsData.teams.map((team: TeamProps, index: number) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      {/* Render the welcome message */}
      <Welcome />
      {/* Render the list of teams */}
      <TeamList />
    </div>
  );
}

export default App;
