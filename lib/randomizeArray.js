// Unbiased shuffle algorithm: Fisher-Yates (aka Knuth) Shuffle.
// Shuffles array in place.
export function randomize(array) {
  var currentIndex = array.length;
  var randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
