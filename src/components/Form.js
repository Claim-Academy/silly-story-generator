import Button from "./Button";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";

export default function Form() {
  return `
  <form class="flex flex-col gap-y-4 items-center">
    ${TextInput()}
    <div class="flex gap-x-4">
      ${RadioInput({label: "US", name: "country", checked: true})}
      ${RadioInput({label: "UK", name: "country", checked: false})}
    </div>

    ${Button("Submit")}
</form>
  `
}