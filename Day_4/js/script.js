document.getElementById("btn").addEventListener("click", filterDuplicates)
document.getElementById("sortBtn").addEventListener("click", sortEmojis)
const emojis = [
    "๐","๐","๐","๐งก","๐",
    "๐ง","โก๏ธ","๐","๐ฑ","๐",
    "๐งก","๐ซ","๐","๐","โก๏ธ",
    "โก๏ธ","๐ถ","๐","๐","๐ฑ",
    "๐","๐ซ","๐","๐","๐",
    "โก๏ธ","๐","๐","๐ฑ","๐",
    "๐ซ","๐","๐","โก๏ธ","๐งก",
    "๐","๐","๐"
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
