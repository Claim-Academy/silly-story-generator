import Form from "./components/Form";
import Story from "./components/Story";
import people from "./db/people";
import places from "./db/places";
import situations from "./db/situations";
import { getRandomIntInclusive, convertToCelsius, convertToKgs } from "./utils";

const root = document.getElementById('root');

// Initial state
const state = {
  name: "",
  person: people[getRandomIntInclusive(0, people.length - 1)],
  place: places[getRandomIntInclusive(0, places.length - 1)],
  situation: situations[getRandomIntInclusive(0, situations.length - 1)],
  degrees: "94°F",
  weight: "300 pounds",
}

function render() {
  root.innerHTML = `
  <main class="container mx-auto mt-8 flex flex-col gap-y-6 items-center">
    ${Form()}
    ${renderStory()}
  </main>
`

  // Make sure that this comes after HTML is updated
  const form = document.querySelector('form');

  // Re-attach the listener as part of each and every render
  form.addEventListener('submit', event => {
    event.preventDefault();

  state.name = event.target.elements[0].value;
  if(event.target.elements[1].value === "UK") {
    state.degrees = convertToCelsius(94) + "°C";
    state.weight = convertToKgs(300) + "kg";
  }

    render()
  });
}

// Conditional rendering
function renderStory() {
  return state.name ? Story(state) : "";
}

// Initial render
render();

// TODO: Work with state.country and our utility functions to render the correct story