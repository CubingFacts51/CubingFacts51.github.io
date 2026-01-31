const facts = [
    "Did you know that the world record for solving a 3x3 Rubik's Cube is 3.05 seconds?",
    "Did you know that the Rubik's Cube was invented in 1974 by Ernő Rubik?",
    "Did you know that there are over 43 quintillion possible combinations of a standard 3x3 Rubik's Cube?",
    "Did you know that the first speedcubing competition was held in 1982 in Budapest, Hungary?",
    "Did you know that the largest Rubik's Cube that you can buy is a 21x21 cube?",
    "Did you know that the Rubik's Cube was created to help students understand three-dimensional geometry?",
    "Did you know that the world record for One-Handed solving is 5.66 seconds?",
    "Did you know that Rubik's Cubes are sold in over 100 countries worldwide?",
    "Did you know that the Rubik's Cube has been featured in numerous movies and TV shows?",
    "Did you know that there is a world championship for speedcubing held every two years?",
    "Did you know that the speedcubing competitions have different categories, including 2x2, 3x3, 4x4, and more?",
    "Did you know that the speedcubing competitions also include blindfolded solving?",
    "Did you know that the Rubik's Cube has inspired various art forms, including sculptures and paintings?",
    "Did you know that the Rubik's Cube has its own official notation for moves?",
    "Did you know that the speedcubes were first started in the 2010s when the Rubik's Cube patent expired?",
    "Did you know that there are many different methods for solving the Rubik's Cube, including CFOP, Roux, and ZZ?",
    "Did you know that the CFOP method is the most popular method used by speedcubers?",
    "Did you know that the Roux method focuses on building blocks rather than layers?",
    "Did you know that the ZZ method is known for its efficiency in reducing the number of moves?",
    "Did you know there is a variation of the Rubik's Cube called the Pyraminx, which is pyramid-shaped?",
    "Did you know that the Megaminx is a dodecahedron-shaped twisty puzzle similar to the Rubik's Cube?",
    "Did you know that the Skewb is a cube-shaped puzzle that twists around its corners?",
    "Did you know that the Square-1 is a shape-shifting puzzle that can change its shape as you twist it?",
    "Did you know that the speedcube community has its own slang and terminology?",
    "Did you know that 'alg' is short for algorithm, which is a sequence of moves used to solve the cube?",
    "Did you know that 'PLL' stands for Permutation of the Last Layer?",
    "Did you know that 'OLL' stands for Orientation of the Last Layer?",
    "Did you know that 'F2L' stands for First Two Layers?",
    "Did you know that 'cubers' is a term used to refer to people who solve Rubik's Cubes?",
    "Did you know that the World Cube Association (WCA) is the governing body for official speedcubing competitions?",
    "Did you know that the World Cube Association (WCA) was founded in 2004?",
    "Did you know that there are over 1,000 official WCA competitions held worldwide each year?",
    "Did you know that there are over 100,000 registered WCA competitors?",
    "Did you know that the WCA maintains official records for various cube sizes and categories?",
    "Did you know that the Rubik's Cube has been used to teach problem-solving skills in schools?",
    "Did you know that there are online communities and forums dedicated to speedcubing?",
    "Did you know that there are YouTube channels and tutorials dedicated to teaching people how to solve the Rubik's Cube?",
    "Did you know that there are mobile apps that help you learn how to solve the Rubik's Cube?",
    "Did you know that a lot of speedcubers can solve the Rubik's Cube in under 10 seconds?",
    "Did you know that the Rubik's Cube has been used for a variety of world records, including solving it while juggling?",
    "Did you know that the Rubik's Cube has been used in robotics competitions?",
    "Did you know that there are custom stickers and designs available for Rubik's Cubes?",
    "Did you know that almost every speedcubers lubricate their cubes?",
    "Did you know that the Rubik's Cube has been featured in music videos?",
    "Did you know that the Rubik's Cube has been used in psychological studies on problem-solving and cognition?",
    "Did you know that the Rubik's Cube has a dedicated museum in Budapest, Hungary?",
    "Did you know that the Rubik's Cube has been used in various educational programs to teach math and spatial reasoning?",
    "Did you know that the Rubik's Cube has inspired various competitions, including solving it with feet?",
    "Did you know that the Rubik's Cube has been used in art installations around the world?",
    "Did you know that the Rubik's Cube has a dedicated day called 'Rubik's Cube Day' celebrated on July 13th?",
    "Did you know that the Rubik's Cube continues to inspire new generations of puzzlers and enthusiasts around the world?"
];

function lookupValue() {
    const val = parseInt(document.getElementById("INT").value);
    const display = document.getElementById("display_area");

    if (val >= 1 && val <= facts.length) {
        display.innerText = facts[val - 1];
        display.style.color = "#333";
    } else {
        display.innerText = "Please enter a valid number between 1 and 51.";
        display.style.color = "red";
    }
}

function showPdf(pdfName) {
    document.getElementById('pdfFrame').src = pdfName;
}

document.getElementById("INT").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    lookupValue();
  }
});
