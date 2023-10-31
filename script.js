let players = [];

function addPlayer() {
    const name = document.getElementById("playerName").value;
    const points = parseFloat(document.getElementById("playerPoints").value);

    players.push({ name, points });

    const playersList = document.getElementById("playersList");
    const playerItem = document.createElement("li");
    playerItem.textContent = name + " (" + points + ")";
    playersList.appendChild(playerItem);

    document.getElementById("playerName").value = "";
    document.getElementById("playerPoints").value = "";
}

function calculateBalancedTeams(players) {
    players.sort((a, b) => b.points - a.points);

    let team1 = [];
    let team2 = [];
    let totalPointsTeam1 = 0;
    let totalPointsTeam2 = 0;

    players.forEach((player, index) => {
        if (index % 2 === 0) {
            team1.push(player);
            totalPointsTeam1 += player.points;
        } else {
            team2.push(player);
            totalPointsTeam2 += player.points;
        }
    });

    return { team1, team2, totalPointsTeam1, totalPointsTeam2 };
}

function calculateTeams() {
    const balancedTeams = calculateBalancedTeams(players);

    const team1List = document.getElementById("team1List");
    const team2List = document.getElementById("team2List");

    team1List.innerHTML = "";
    team2List.innerHTML = "";

    balancedTeams.team1.forEach(player => {
        const playerItem = document.createElement("li");
        playerItem.textContent = player.name + " (" + player.points + ")";
        team1List.appendChild(playerItem);
    });

    balancedTeams.team2.forEach(player => {
        const playerItem = document.createElement("li");
        playerItem.textContent = player.name + " (" + player.points + ")";
        team2List.appendChild(playerItem);
    });

    alert("Total Points Team 1: " + balancedTeams.totalPointsTeam1 +
          "\nTotal Points Team 2: " + balancedTeams.totalPointsTeam2);
}

// Function to handle the alert and closing the website
function handleButtonPress() {
    alert("woopsie daisy's");
    window.close();
}

// Modify the event listeners for the buttons to use the new function
document.getElementById("addPlayerButton").addEventListener("click", handleButtonPress);
document.getElementById("calculateTeamsButton").addEventListener("click", handleButtonPress);
