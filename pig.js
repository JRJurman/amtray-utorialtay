englishWordToPigLatin = (word) => {
  const vowels = 'aeiouy'
  const vowelIndex = word
    .split('')
    .findIndex((char) =>
      vowels.indexOf(char) !== -1
    )
  return [
    word.slice(vowelIndex),
    word.slice(0, vowelIndex),
    vowelIndex === 0 ? 'yay' : 'ay'
  ].join('')
}

module.exports = (english) => {
  return english.length === 0 ? '' : english
    .split(' ')
    .map(word => word.toLowerCase())
    .map(englishWordToPigLatin)
    .join(' ')
}
