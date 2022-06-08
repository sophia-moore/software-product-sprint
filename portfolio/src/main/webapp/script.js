// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */


function addRandomGreeting() {
  const greetings =
      ['We were on a break!', 'Pivot!', 'How you doin\'?', 'You\'re my lobster!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/*
async function getGreeting() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.text();
  
    const displayGreet = document.getElementById('display-greet');
    displayGreet.innerText = textFromResponse;

}
*/
async function addRandomPlace() {
    const responseFromServer = await fetch('/hello');
    const dreamPlace = await responseFromServer.json();
    const displayPlace = document.getElementById('display-place');
   displayPlace.innerHTML = '';
   const rand = await randNum(4);
   
   if (rand == 0) {
     displayPlace.appendChild(
       createListElement('In ' + dreamPlace.place1));
   }

   if (rand == 1) {
   displayPlace.appendChild(
       createListElement('In ' + dreamPlace.place2));
   }

   if (rand == 2) {
    displayPlace.appendChild(
       createListElement('In ' + dreamPlace.place3));
   }

   if (rand == 3) {
    displayPlace.appendChild(
       createListElement('In ' + dreamPlace.place4));
    }
  }

  function randNum(num) {
      return Math.floor(Math.random() * num);
  }
  
  function createListElement(text) {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
  }



    
   // const keys = dreamPlace.keys(names);
   // const randKey = keys[randIndex];
  //  const name = names[randKey];

  //  displayPlace.innerText = dreamPlace.name;


   // const displayPlace = document.getElementById('display-place');
   // displayPlace.innerText = randPlace;
