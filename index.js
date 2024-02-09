// Get the elements with IDs
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// Initialize a variable 'count'.
let count = 0

// Increment function to increase the count by 1
function increment() {
  count += 1
  countEl.textContent = count
}

// Decrement function to decrease the count by 1
function decrement() {
  if (count > 0) {
    count -= 1
  }
  countEl.textContent = count
}

// Save function to save the current count
function save() {
  if (count > 0) {
    let countEntry = `[${count}] `
    saveEl.textContent += countEntry
    countEl.textContent = 0
    count = 0
  }
}

// Reset function to reset the count to 0
function reset() {
  saveEl.textContent = "Saved Entries: "
}
