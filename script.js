let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cubeWrapper = document.getElementById('cube-container'), appendCubeElement;

numbersArray.forEach((item, index) => {
  cubeWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})
shuffleArray = () => {
  let index = 0
  numbersArray = numbersArray.sort(() => { return .5 - Math.random() });
  cubeWrapper.innerHTML = ''
  while (index < numbersArray.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbersArray[index]
    cubeItem.setAttribute('data-item', numbersArray[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
}
sortArray = () => {
  let index = 0
  numbersArray = numbersArray.sort((a, b) => { return a - b });
  cubeWrapper.innerHTML = ''
  while (index < numbersArray.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbersArray[index]
    cubeItem.setAttribute('data-item', numbersArray[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
}

//Another way of shuffling items
shuffleValues = (numbersArray) => {
  let index = 0
  numbersArray = numbersArray;
  cubeWrapper.innerHTML = ''
  for (let i = numbersArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbersArray[i], numbersArray[j]] = [numbersArray[j], numbersArray[i]];
  }
}
//using callback to sufflearray value
shufflingArray = () => {
  let index = 0
  shuffleValues(numbersArray)
  cubeWrapper.innerHTML = ''
  while (index < numbersArray.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbersArray[index]
    cubeItem.setAttribute('data-item', numbersArray[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
};