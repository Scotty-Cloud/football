"use strict"
const teams = [
{code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
{code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
{code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
{code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
];

const teamsList = document.getElementById("teamsList");

function init() {
   const displayTeamButton = document.getElementById("displayTeamButton");
   displayTeamButton.onclick = displayTeam;

    for(const team of teams){
        const option = document.createElement("option")
        option.value = team.code;
        option.innerText = team.name;
        teamsList.appendChild(option);
    }
}

function displayTeam() {
  console.log(teamsList.value);
  const messageParagraph = document.getElementById("messageParagraph");
  messageParagraph.innerText = teamsList.value;
  }

window.onload = init;