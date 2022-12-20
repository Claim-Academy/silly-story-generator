import Button from "./components/Button";
import RadioInput from "./components/RadioInput";
import Story from "./components/Story";
import TextInput from "./components/TextInput";

const root = document.getElementById('root');

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

    ${Story({person: "Bob", place: "the store", situation: "they bought a gallon of milk", degrees: "degrees", weight: "pounds"})}
  </main>
`

// Make sure that this comes after HTML is updated
const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const submission = {
    name: event.target.elements[0].value,
    country: event.target.elements[1].value
  }

  console.log(submission);
});