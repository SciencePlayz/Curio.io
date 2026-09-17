let currentScenario = 0;

const scenarios = [
    {
        emoji: "🌋",
        title: "A VOLCANO SUDDENLY ERUPTS!",
        description: "You have 30 seconds to decide what to do.",

        choices: [
            {
                text: "🏃 RUN DOWNHILL",
                title: "⚠️ NOT THE BEST CHOICE",
                explanation:
                    "Some volcanic hazards can travel downhill because of gravity. Moving away from the danger zone is generally safer than heading toward lower ground."
            },

            {
                text: "↔️ RUN SIDEWAYS",
                title: "✅ BETTER CHOICE",
                explanation:
                    "Moving sideways, away from the path of a dangerous volcanic flow, can help increase your distance from the hazard."
            },

            {
                text: "📸 TAKE A SELFIE",
                title: "💀 BRO...",
                explanation:
                    "Your phone is definitely not a volcanic safety device."
            }
        ]
    },

    {
        emoji: "⚡",
        title: "LIGHTNING STRIKES NEARBY",
        description: "You're caught outside during a thunderstorm. What should you do?",

        choices: [
            {
                text: "🌳 HIDE UNDER A TREE",
                title: "⚠️ BAD IDEA",
                explanation:
                    "A lone or tall tree can be dangerous during a thunderstorm. Get away from isolated tall objects and seek proper shelter."
            },

            {
                text: "🏠 RUN INTO A BUILDING",
                title: "✅ SMART MOVE",
                explanation:
                    "A substantial enclosed building is one of the safest places to be during a thunderstorm. If safe shelter is nearby, get inside."
            },

            {
                text: "🧎 CROUCH DOWN IN AN OPEN FIELD",
                title: "🧠 SOUNDS SMART... BUT IS IT?",
                explanation:
                    "You may have heard of a 'lightning crouch.' But the main safety advice is to get inside a substantial building or enclosed vehicle. If you're outside, move toward proper shelter."
            }
        ]
    }
];


function loadScenario() {

    const scenario = scenarios[currentScenario];

    document.querySelector(".emoji").textContent =
        scenario.emoji;

    document.querySelector(".scenario h2").textContent =
        scenario.title;

    document.querySelector(".scenario p").textContent =
        scenario.description;

    const buttons =
        document.querySelectorAll(".choices button");

    scenario.choices.forEach((choice, index) => {
        buttons[index].textContent = choice.text;
    });

    document.getElementById("result").style.display = "none";
}


function survive(choice) {

    const scenario = scenarios[currentScenario];

    const selectedChoice = scenario.choices[choice - 1];

    document.getElementById("resultTitle").textContent =
        selectedChoice.title;

    document.getElementById("resultText").textContent =
        selectedChoice.explanation;

    document.getElementById("result").style.display = "block";
}

function nextScenario() {

    currentScenario++;

    if (currentScenario >= scenarios.length) {
        currentScenario = 0;
    }

    loadScenario();
}

loadScenario();