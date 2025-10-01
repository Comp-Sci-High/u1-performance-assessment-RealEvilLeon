// 1st Floor
let gymatoriumLock = false;

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 2nd Floor
// Do not modify these arrays directly
let weworkItems = ["loaner laptop", "whiteboard", "conference room", "couch", "printer", "shared table", "Wi-Fi router", "plants", "office chair", "power outlets"];
let computerLabItems = ["desktop computers", "monitors", "broken laptop", "mice", "Wi-Fi router", "printer", "power strips", "headphones", "USB drives", "chairs", "desks"];
let mprItems = ["mirrors", "speakers", "chairs", "portable stereo", "projector", "chairs", "posters"];


// Commit and show us to unlock the next floor's instructions

let firstItem = weworkItems.shift()
computerLabItems.push(firstItem)

computerLabItems[2] = "fixed laptop";

let mprLength = toString(mprItems.length)
let clLength = toString(computerLabItems.length)
let weWorkLength = toString(weworkItems.length)

let allLength = mprLength + clLength + weWorkLength
// ----------------------------
// 3rd Floor
// Do not modify these objects directly
let scoreValues = {
    "S": "Self-awareness",
    "C": "Challenge",
    "O": "Organization",
    "R": "Resilience"
}

scoreValues["C"] = "Consistency"
scoreValues["O"] = "Ownership"

scoreValues["E"] = "Excellence"

let afterSchoolClubs = {
    athletic: [
        {
            club: "Soccer Club",
            location: "St. Mary's Park"
        },
        {
            club: "Flag Football",
            location: "St. Mary's Park"
        },
        {
            club: "Volleyball",
            location: "Gymnatorium"
        }
    ],
    social: [
        {
            club: "Gaming Club",
            location: 305
        },
        {
            club: "Art Club",
            location: 417
        },
        {
            club: "Gardening Club",
            location: 311
        }     
    ]
}

afterSchoolClubs.athletic[0].club = "British Football Club"
afterSchoolClubs.social[0].location = "Balcony"





// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 4th Floor
// Uncomment the code below to begin this task
 function takeCareOfPet(snacks, pets) {

    if (snacks[2] === "hotdogs" && pets > 10) {
        return "Raccoon has been appeased"
    } else {
        return "The raccoon bit you and you died of rabies."
    
}

}

console.log(takeCareOfPet(["Burgers", "Hotdogs","Pizza"], 17))


// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 5th Floor





// Commit and show us to unlock the next floor's instructions
