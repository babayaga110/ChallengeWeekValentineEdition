document.getElementById("btn").addEventListener("click", filterDuplicates)
document.getElementById("sortBtn").addEventListener("click", sortEmojis)
const emojis = [
    "💘","💘","🌞","🧡","🍇",
    "🧁","⚡️","💝","🐱","💘",
    "🧡","💫","🍓","💜","⚡️",
    "⚡️","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡",
    "💕","🍇","💘"
    ]
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

let uniqueEmojis = []
for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

function filterDuplicates() {
    for (let emoji of emojis) {
        if (!uniqueEmojis.includes(emoji)) {
            uniqueEmojis.push(emoji)
        }
        uniqueEmojisP.textContent = uniqueEmojis;
    }
}

function sortEmojis() {
    uniqueEmojisP.textContent = emojis.sort();
}
