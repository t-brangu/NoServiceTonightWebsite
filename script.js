const sanityStates = {
  steady: {
    image: "assets/sanity_60-80.png",
    alt: "Steady sanity portrait",
    meter: "68%",
    label: "Steady enough to move",
    copy:
      "The player can read clues clearly and keep a normal pace, but the office is already starting to feel personally targeted."
  },
  strained: {
    image: "assets/sanity_40-60.png",
    alt: "Strained sanity portrait",
    meter: "42%",
    label: "Strained, but still searching",
    copy:
      "The screen darkens, self-doubt creeps into the dialogue, and every route decision feels like it might be a trap."
  },
  fractured: {
    image: "assets/sanity_20-40.png",
    alt: "Low sanity portrait",
    meter: "18%",
    label: "Fractured and slowing down",
    copy:
      "Movement becomes heavier, audio pressure rises, and the game can hide or distort the way forward without breaking the rules."
  }
};

const sanityButtons = document.querySelectorAll(".sanity-button");
const sanityPortrait = document.querySelector("#sanity-portrait");
const sanityMeter = document.querySelector("#sanity-meter");
const sanityLabel = document.querySelector("#sanity-label");
const sanityCopy = document.querySelector("#sanity-copy");

sanityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextState = sanityStates[button.dataset.sanity];

    if (!nextState) {
      return;
    }

    sanityButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    sanityPortrait.src = nextState.image;
    sanityPortrait.alt = nextState.alt;
    sanityMeter.style.width = nextState.meter;
    sanityLabel.textContent = nextState.label;
    sanityCopy.textContent = nextState.copy;
  });
});

const tabButtons = document.querySelectorAll(".tab-button");
const worldPanels = document.querySelectorAll("[data-world-panel]");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedWorld = button.dataset.world;

    tabButtons.forEach((item) => item.classList.remove("active"));
    worldPanels.forEach((panel) => {
      panel.classList.toggle(
        "active",
        panel.dataset.worldPanel === selectedWorld
      );
    });

    button.classList.add("active");
  });
});
