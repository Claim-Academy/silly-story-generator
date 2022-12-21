const generateStory =

// DESTRUCTURED PARAMETERS
({person, place, situation, degrees, weight}) => {
  return `It was ${degrees} outside, so ${person} went for a walk. When they got to ${place}, they stared in horror for a few moments, then ${situation}. Bob saw the whole thing, but was not surprised — ${person} weighs ${weight}, and it was a hot day.`
}


export default function Story(details) {
  return `<p class="max-w-prose">${generateStory(details)}</p>`
}