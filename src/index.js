import Button from "./components/Button";
import RadioInput from "./components/RadioInput";
import Story from "./components/Story";
import TextInput from "./components/TextInput";

const root = document.getElementById('root');

// Initial state
const state = {
  name: "",
  country: "US"
}

function render() {
  root.innerHTML = `
  <main class="container mx-auto mt-8 flex flex-col gap-y-6 items-center">
    <form class="flex flex-col gap-y-4 items-center">
      ${TextInput()}
      <div class="flex gap-x-4">
        ${RadioInput({label: "US", name: "country", checked: true})}
        ${RadioInput({label: "UK", name: "country", checked: false})}
      </div>

      ${Button("Submit")}
    </form>

    ${renderStory()}
  </main>
`

  // Make sure that this comes after HTML is updated
  const form = document.querySelector('form');

  // Re-attach the listener as part of each and every render
  form.addEventListener('submit', event => {
    event.preventDefault();

  state.name = event.target.elements[0].value
    render()
  });
}

// Conditional rendering
function renderStory() {
  return state.name ? Story({person: state.name, place: "the store", situation: "they bought a gallon of milk", degrees: "degrees", weight: "pounds"}) : "";
}

// Initial render
render();

// TODO: Work with state.country and our utility functions to render the correct story