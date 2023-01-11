const Dinos = [
  {
    species: "Triceratops",
    weight: 13000,
    height: 114,
    diet: "herbavor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "First discovered in 1889 by Othniel Charles Marsh",
  },
  {
    species: "Tyrannosaurus Rex",
    weight: 11905,
    height: 144,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "The largest known skull measures in at 5 feet long.",
  },
  {
    species: "Anklyosaurus",
    weight: 10500,
    height: 55,
    diet: "herbavor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Anklyosaurus survived for approximately 135 million years.",
  },
  {
    species: "Brachiosaurus",
    weight: 70000,
    height: "372",
    diet: "herbavor",
    where: "North America",
    when: "Late Jurasic",
    fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
  },
  {
    species: "Stegosaurus",
    weight: 11600,
    height: 79,
    diet: "herbavor",
    where: "North America, Europe, Asia",
    when: "Late Jurasic to Early Cretaceous",
    fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
  },
  {
    species: "Elasmosaurus",
    weight: 16000,
    height: 59,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
  },
  {
    species: "Pteranodon",
    weight: 44,
    height: 20,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
  },
  {
    species: "Pigeon",
    weight: 0.5,
    height: 9,
    diet: "herbavor",
    where: "World Wide",
    when: "Holocene",
    fact: "All birds are living dinosaurs.",
  },
];

// Create Dino Constructor
function Dino(image, weight, height, diet, species, fact) {
  this.image = image;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.species = species;
  this.fact = [fact];
}

// Create Dino Objects
let DinoObjects = Dinos.map((dino) => {
  let dinos = new Dino(
    `images/${dino.species}.png`,
    dino.weight,
    dino.height,
    dino.diet,
    dino.species,
    dino.fact
  );
  return dinos;
});

// Create Human Object
let human;
// Use IIFE to get human data from form
function humanData() {
  human = {
    name: document.getElementById("name").value,
    height:
      parseInt(document.getElementById("feet").value) * 12 +
      parseInt(document.getElementById("inches").value),
    weight: document.getElementById("weight").value,
    diet: document.getElementById("diet").value,
    fact: [""],
    image: "images/human.png",
    species: "human",
  };
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(human, dino) {
  // Dino.prototype.compareHeight = (human, dino) => {
  human.height > dino.height
    ? dino.fact.push(
        `did you know that you are taller than ${dino.species} by ${
          human.height - dino.height
        }.`
      )
    : dino.fact.push(
        `did you know that ${dino.species} is taller than you by ${
          dino.height - human.height
        }.`
      );
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
// Dino.prototype.compareWeight = (human, dino) => {
function compareWeight(human, dino) {
  human.weight > dino.weight
    ? dino.fact.push(
        `did you know that you weigh ${human.weight - dino.weight} more than ${
          dino.species
        }`
      )
    : dino.fact.push(
        `did you know that ${dino.species} weigh ${
          dino.weight - human.weight
        } more than you`
      );
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
// Dino.prototype.compareDiet = (human, dino) => {
function compareDiet(human, dino) {
  human.diet === dino.diet
    ? dino.fact.push(
        `did you know that you and ${dino.species} have the same diet`
      )
    : dino.fact.push(
        `did you know that ${dino.species}'s diet is ${dino.diet}`
      );
}

function compare() {
  DinoObjects.forEach((dino) => {
    if (dino.species != "Pigeon") {
      compareHeight(human, dino);
      compareWeight(human, dino);
      compareDiet(human, dino);
    }
  });
}

function remove() {
  let dinoCompare = document.getElementById("dino-compare");
  humanData();
  dinoCompare.remove();
  document.getElementById("grid").style.display = "flex";
  let dinoGrid = document.getElementById("grid");
  let i = 0;
  compare();
  DinoObjects.splice(4, 0, human);
  for (let child of dinoGrid.children) {
    const title = document.createElement("h3");
    const image = document.createElement("img");
    image.src = DinoObjects[i].image;
    const body = document.createElement("P");
    title.appendChild(document.createTextNode(DinoObjects[i].species));
    image.appendChild(document.createTextNode(DinoObjects[i].image));
    body.appendChild(
      document.createTextNode(
        DinoObjects[i].fact[
          Math.floor(Math.random() * DinoObjects[i].fact.length)
        ]
      )
    );
    child.append(title, image, body);
    i++;
  }
}

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
