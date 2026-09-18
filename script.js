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