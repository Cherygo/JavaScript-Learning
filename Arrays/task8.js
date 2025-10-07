// Task 8

// Write a function that returns the number of users in a chatroom based on the following rules:
// . If there is no one, return no one online .
// . If there is 1 person, return user1 online
// . If there are 2 people, return user1 and user2 online.
// . If there are n>2 people, return the first two names and add "and n-2 more online".

// For example, if there are 5 users, return:
// "user1, user2 and 3 more online"

// Examples
// chatroomStatus([]) - "no one online"
// chatroomStatus(["Nate"]) - "Nate online"
// chatroomStatus(["Nate", "Zack"]) - "Nate and Zack online"
// chatroomStatus(["Nate", "Zack", "Simon", "Stefan", "Matt", "Nick"])
// -+ "Nate, Zack and 4 more online"

function chatroomStatus(users = []){
    switch(true){
        case users.length == 0:
            return "no one online";

        case users.length == 1:
            return `${users[0]} online`

        case users.length == 2:
            return `${users[0]} and ${users[1]} online`;

        case users.length > 2:
            return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
    }
}
console.log(chatroomStatus(["Nate", "Zack", "Simon", "Stefan", "Matt", "Nick"]));