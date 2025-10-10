// Task 3
// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that
// Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
// . If win equals true, end the list with Pong !.
// . If win equals false, end with Ping! instead.

// Notes:
// · You will always return the ball (i.e. the Pongs are yours).
// · Player 1 serves the ball and makes Ping !.
// · Return an array of strings.

// Examples
// pingPong(["Ping!"], true)-["Ping!", "Pong!"]
// pingPong(["Ping!", "Ping!"], false) -["Ping!", "Pong!", "Ping!"]
// pingPong(["Ping!","Ping!", "Ping!"], true) -["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
function pingPong(pings = [], win){
    // let modifiedPings = pings;
    let modifiedPings = [];
    if(win === true) {
        pings.forEach(ping => {
            modifiedPings.push(ping);
            modifiedPings.push("Pong!");
        });
        // for(let i = pings.length; i > 0; i--){
        //     modifiedPings.splice(i, 0, "Pong!");
        // }
    } else {
        // for(let i = pings.length - 1; i > 0; i--){
        //     modifiedPings.splice(i, 0, "Pong!");
        // }
        pings.forEach((ping, i) => {
            if(i < pings.length - 1){
                modifiedPings.push(ping);
                modifiedPings.push("Pong!");
            }
        })
        modifiedPings.push("Ping!");
    }
    return modifiedPings;
}
console.log(pingPong(["Ping!", "Ping!", "Ping!"], false));