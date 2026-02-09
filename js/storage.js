export let plan = JSON.parse(localStorage.getItem('valentinePlan')) || {};

export function savePlan() {
  localStorage.setItem('valentinePlan', JSON.stringify(plan));
}
