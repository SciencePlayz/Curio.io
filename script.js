/* =========================
   GAME 1
   HOW WOULD YOU SURVIVE?
========================= */

let currentScenario = 0;


const scenarios = [

    {
        emoji: "🌋",

        title: "A VOLCANO SUDDENLY ERUPTS!",

        description:
            "YOU HAVE 30 SECONDS TO DECIDE WHAT TO DO.",

        choices: [

            {
                text: "🏃 RUN DOWNHILL",

                title: "⚠️ NOT THE BEST CHOICE",

                explanation:
                    "SOME VOLCANIC HAZARDS CAN TRAVEL DOWNHILL BECAUSE OF GRAVITY. MOVING AWAY FROM THE DANGER ZONE IS GENERALLY SAFER THAN HEADING TOWARD LOWER GROUND."
            },

            {
                text: "↔️ RUN SIDEWAYS",

                title: "✅ BETTER CHOICE",

                explanation:
                    "MOVING SIDEWAYS, AWAY FROM THE PATH OF A DANGEROUS VOLCANIC FLOW, CAN HELP INCREASE YOUR DISTANCE FROM THE HAZARD."
            },

            {
                text: "📸 TAKE A SELFIE",

                title: "💀 BRO...",

                explanation:
                    "YOUR PHONE IS DEFINITELY NOT A VOLCANIC SAFETY DEVICE."
            }

        ]
    },


    {
        emoji: "⚡",

        title: "LIGHTNING STRIKES NEARBY",

        description:
            "YOU'RE CAUGHT OUTSIDE DURING A THUNDERSTORM. WHAT SHOULD YOU DO?",

        choices: [

            {
                text: "🌳 HIDE UNDER A TREE",

                title: "⚠️ BAD IDEA",

                explanation:
                    "A LONE OR TALL TREE CAN BE DANGEROUS DURING A THUNDERSTORM. GET AWAY FROM ISOLATED TALL OBJECTS AND SEEK PROPER SHELTER."
            },

            {
                text: "🏠 RUN INTO A BUILDING",

                title: "✅ SMART MOVE",

                explanation:
                    "A SUBSTANTIAL ENCLOSED BUILDING IS ONE OF THE SAFEST PLACES TO BE DURING A THUNDERSTORM. IF SAFE SHELTER IS NEARBY, GET INSIDE."
            },

            {
                text: "🧎 CROUCH DOWN IN AN OPEN FIELD",

                title: "🧠 SOUNDS SMART... BUT IS IT?",

                explanation:
                    "YOU MAY HAVE HEARD OF A 'LIGHTNING CROUCH.' BUT THE MAIN SAFETY ADVICE IS TO GET INSIDE A SUBSTANTIAL BUILDING OR ENCLOSED VEHICLE."
            }

        ]
    }

];


function loadScenario() {

    const scenario = scenarios[currentScenario];


    document.querySelector(".emoji").textContent =
        scenario.emoji;


    document.getElementById("survivalTitle").textContent =
        scenario.title;


    document.getElementById("survivalDescription").textContent =
        scenario.description;


    const buttons =
        document.querySelectorAll(".choices button");


    scenario.choices.forEach((choice, index) => {

        buttons[index].textContent =
            choice.text;

    });


    document.getElementById("result").style.display =
        "none";

}


function survive(choice) {

    const scenario =
        scenarios[currentScenario];


    const selectedChoice =
        scenario.choices[choice - 1];


    document.getElementById("resultTitle").textContent =
        selectedChoice.title;


    document.getElementById("resultText").textContent =
        selectedChoice.explanation;


    document.getElementById("result").style.display =
        "block";

}


function nextScenario() {

    currentScenario++;


    if (currentScenario >= scenarios.length) {

        currentScenario = 0;

    }


    loadScenario();

}


/* =========================
   GAME 2
   WEIRD SITUATIONS
========================= */


const experiences = [

    {
        title: "🚪 DOORWAY EFFECT",

        description:
            "YOU WALK INTO A ROOM AND SUDDENLY FORGET WHY YOU WENT THERE.",

        theory:
            "ONE EXPLANATION IS THAT MOVING THROUGH A DOORWAY CAN ACT AS A CONTEXT SHIFT. YOUR BRAIN UPDATES THE CURRENT CONTEXT, WHICH CAN SOMETIMES MAKE THE PREVIOUS INTENTION HARDER TO RECALL."
    },


    {
        title: "🌀 DÉJÀ VU",

        description:
            "YOU EXPERIENCE A MOMENT THAT FEELS STRANGELY FAMILIAR — EVEN THOUGH YOU KNOW YOU HAVE NEVER EXPERIENCED IT BEFORE.",

        theory:
            "DÉJÀ VU IS A FEELING OF FAMILIARITY WITHOUT A CLEAR MEMORY OF THE EVENT. ONE THEORY IS THAT A SMALL TIMING OR MEMORY-PROCESSING MISMATCH CAN MAKE A NEW EXPERIENCE FEEL FAMILIAR."
    },


    {
        title: "💭 TIP-OF-THE-TONGUE",

        description:
            "YOU KNOW A WORD. YOU CAN ALMOST SAY IT. BUT YOUR BRAIN REFUSES TO GIVE IT TO YOU.",

        theory:
            "THE TIP-OF-THE-TONGUE STATE CAN HAPPEN WHEN YOU CAN ACCESS PARTS OF A WORD'S INFORMATION BUT CANNOT FULLY RETRIEVE THE WORD ITSELF. YOUR BRAIN MAY EVEN GIVE YOU CLUES ABOUT ITS SOUND OR FIRST LETTER."
    },


    {
        title: "👀 FEELING OF BEING WATCHED",

        description:
            "YOU SUDDENLY GET THE FEELING THAT SOMEONE IS WATCHING YOU — EVEN WHEN YOU CANNOT SEE ANYONE.",

        theory:
            "YOUR BRAIN CONSTANTLY MONITORS SMALL CUES FROM YOUR ENVIRONMENT. WHEN INFORMATION IS UNCLEAR, IT CAN SOMETIMES USE EXPECTATIONS AND PREVIOUS EXPERIENCES TO INTERPRET WHAT IS HAPPENING."
    }

];


let selectedExperience = null;


function showExperience(index) {

    selectedExperience =
        experiences[index];


    document.getElementById("experienceTitle").textContent =
        selectedExperience.title;


    document.getElementById("experienceDescription").textContent =
        selectedExperience.description;


    document.getElementById("theoryText").textContent =
        selectedExperience.theory;


    document.getElementById("psychologyResult").style.display =
        "block";


    document.getElementById("theory").style.display =
        "none";

}


function showWhy() {

    document.getElementById("theory").style.display =
        "block";

}


/* START GAME */

loadScenario();
// ================================
// GAME 3 — WHAT IF EARTH CHANGED?
// ================================

const earthScenarios = [

    {
        emoji: "🌙",

        title: "WHAT IF THE MOON DISAPPEARED?",

        question: "WHAT WOULD HAPPEN TO EARTH?",

        options: [
            "NOTHING MUCH",
            "EARTH'S TIDES WOULD CHANGE DRAMATICALLY",
            "EARTH WOULD IMMEDIATELY EXPLODE"
        ],

        correct: 1,

        explanations: [
            "NOT QUITE. The Moon has a major effect on Earth's tides. If it suddenly disappeared, the Sun would still create tides, but they would be much weaker. Earth's oceans and coastal ecosystems would be affected.",

            "CORRECT! The Moon's gravity is responsible for most of Earth's tides. Without the Moon, tides would become much weaker. The Moon also helps stabilize Earth's rotation over very long periods of time.",

            "WRONG. The Moon's disappearance would NOT make Earth explode. Earth's gravity and structure do not depend on the Moon holding the planet together. Earth would continue orbiting the Sun."
        ]
    },


    {
        emoji: "🌊",

        title: "WHAT IF EARTH'S OCEANS SUDDENLY BECAME FRESHWATER?",

        question: "WHAT WOULD HAPPEN TO LIFE IN THE OCEANS?",

        options: [
            "MOST MARINE ECOSYSTEMS WOULD BE MASSIVELY DISRUPTED",
            "ALMOST NOTHING WOULD CHANGE",
            "ALL OCEAN LIFE WOULD IMMEDIATELY TURN INTO FRESHWATER SPECIES"
        ],

        correct: 0,

        explanations: [
            "CORRECT! Most marine organisms are adapted to salty water. A sudden change to freshwater would drastically change the conditions they live in and could cause enormous disruption to marine food webs.",

            "WRONG. Salt concentration is extremely important to marine organisms. Many species are adapted specifically to seawater, so suddenly removing the salt would create a huge environmental shock.",

            "WRONG. Organisms cannot simply transform themselves into freshwater species. Adaptation happens across generations, not instantly. A sudden change would instead put many existing species under extreme environmental stress."
        ]
    },


    {
        emoji: "🌬️",

        title: "WHAT IF EARTH'S ATMOSPHERE BECAME TWICE AS THICK?",

        question: "WHAT WOULD CHANGE?",

        options: [
            "AIR RESISTANCE AND AIR PRESSURE WOULD INCREASE",
            "EARTH WOULD STOP ROTATING",
            "NOTHING WOULD CHANGE BECAUSE AIR IS INVISIBLE"
        ],

        correct: 0,

        explanations: [
            "CORRECT! A much denser atmosphere would produce greater air pressure and more air resistance. Aircraft, weather, falling objects and even the way sound travels through the atmosphere could be affected.",

            "WRONG. Making the atmosphere thicker would not suddenly stop Earth's rotation. Earth's rotation is controlled by the planet's angular momentum, not simply by the thickness of its atmosphere.",

            "WRONG. Invisible does not mean it has no physical effects. Air has mass and takes up space. A denser atmosphere would have measurable effects on pressure, motion and weather."
        ]
    }

];


let currentEarthScenario = 0;
let selectedEarthAnswer = null;


function loadEarthScenario() {

    const scenario = earthScenarios[currentEarthScenario];

    document.getElementById("earthEmoji").textContent =
        scenario.emoji;

    document.getElementById("earthTitle").textContent =
        scenario.title;

    document.getElementById("earthQuestion").textContent =
        scenario.question;


    const buttons =
        document.querySelectorAll(".earth-choices button");


    buttons.forEach((button, index) => {

        button.textContent =
            String.fromCharCode(65 + index) +
            ") " +
            scenario.options[index];

        button.disabled = false;
    });


    document.getElementById("earthResult").style.display =
        "none";

    document.getElementById("earthWhy").style.display =
        "none";

    selectedEarthAnswer = null;
}


function answerEarth(choice) {

    const scenario = earthScenarios[currentEarthScenario];

    selectedEarthAnswer = choice;


    const result =
        document.getElementById("earthResult");

    const resultTitle =
        document.getElementById("earthResultTitle");

    const resultText =
        document.getElementById("earthResultText");

    const whyText =
        document.getElementById("earthWhyText");


    result.style.display = "block";


    if (choice === scenario.correct) {

        resultTitle.textContent = "✅ CORRECT!";

        resultText.textContent =
            "THAT'S WHAT WOULD HAPPEN.";

    } else {

        resultTitle.textContent = "❌ NOT QUITE!";

        resultText.textContent =
            "TRY ANOTHER ANSWER OR CHECK WHY.";

    }


    // Hide the previous explanation
    document.getElementById("earthWhy").style.display =
        "none";


    // Load the explanation for THIS specific answer
    whyText.textContent =
        scenario.explanations[choice];
}


function showEarthWhy() {

    if (selectedEarthAnswer === null) {
        return;
    }

    document.getElementById("earthWhy").style.display =
        "block";
}


function nextEarthScenario() {

    currentEarthScenario++;

    if (currentEarthScenario >= earthScenarios.length) {
        currentEarthScenario = 0;
    }

    loadEarthScenario();
}


loadEarthScenario();