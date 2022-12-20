import TextInput from "./components/TextInput";
import RadioInput from "./components/RadioInput";
import Button from "./components/Button";
import Story from "./components/Story";

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