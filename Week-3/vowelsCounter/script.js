// Declare sentence
const sentence = 'JavaScript ain\'t so bad!!'

// Conver string to lowercase and then to an array
const sentenceArray = sentence.toLowerCase().split('')

// Declare vowels
const vowelsArray = ['a', 'e', 'i', 'o', 'u']

// Declare vowels count
let vowelsCount = 0

// Loop through the scentence
for (let i=0; i<sentenceArray.length; i++) {
    // Get character
    const character = sentenceArray[i]

    // Check if character is vowel
    if (vowelsArray.includes(character)) {
        // If yes, increment vowelsCount
        vowelsCount += 1;
    }
}

// Display vowels count
console.log('There are ' + vowelsCount + ' vowels in that sentence.')