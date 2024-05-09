"use strict"
let teams = [
{code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
{code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
{code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
{code:"KAN", name:"Kansas City Chiefs",
plays:"Kansas City, MO"},
];

function init() {
    const teamsList = document.getElementById("teamsList");

    for(const team of teams){
        const option = document.createElement("option")
        option.value = team.plays;
        option.innerText = team.name;
        teamsList.appendChild(option)
    }
}

window.onload = init;