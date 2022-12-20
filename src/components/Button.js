export default function Button(text, type="submit") {
  return `<button class="bg-green-500 text-white rounded px-4 py-2" type="${type}">${text}</button>`;
}