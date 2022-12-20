import TextInput from "./components/TextInput";
import RadioInput from "./components/RadioInput";
import Button from "./components/Button";

const root = document.getElementById('root');

root.innerHTML = `
  <main class="container mx-auto mt-8">
    <form class="flex flex-col gap-y-4 items-center">
      ${TextInput()}
      <div class="flex gap-x-4">
        ${RadioInput({label: "US", name: "country", checked: true})}
        ${RadioInput({label: "UK", name: "country", checked: false})}
      </div>

      ${Button("Submit")}
    </form
  </main>
`