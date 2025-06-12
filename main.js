// 1. Alter the text color of the paragraph to a shade of aqua.
const paragraph = document.querySelector(".text")
paragraph.style.color = "aqua"


// 2. Adjust the font size of the heading to 42 pixels.
const heading = document.querySelector("#title")
heading.style.fontSize = "42px"



// 3. Replace the text in the paragraph with the new Lorem Ipsum content.
paragraph.innerText =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices.";
// 4. Reduce the opacity of the 13th item to 30% transparency.
const thirteen = document.querySelector('#item-13')
thirteen.style.opacity = "30%";

// 5. Modify the text of the 3rd item to read "Greetings!"
const three = document.querySelector('#item-3')
three.innerHTML = "Greetings!"


// 6. Update the image below the list to display the new image.

const img = document.querySelector('img')
img.src = "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="

// 7. Resize the new image to a height of 250 pixels.
img.style.height = "250px"


// 8. Integrate an additional image using innerHTML below the existing image.
const img1 = document.querySelector('.imgDiv')
img1.innerHTML = "<img class="imgDiv" src='https://thumbs.dreamstime.com/z/bring-splash-fun-to-your-next-design-project-charming-cartoon-water-hose-illustration-perfect-creating-engaging-377240959.jpg'> "

// 9. Adjust the height of the new image to 280 pixels programmatically.

img1.style.height = "280px"
// 10. Append a 17th <li> element to the list using innerHTML.
const firstItem = document.querySelector('#item-17')
firstItem.innerHTML += `<li id="item-17">17</li>`
// 11. Assign the same class as the other list items to the new <li> element using JavaScript.
const itemContent = firstItem.innerHtml
firstItem.innerHTML = `<li class="item" id="item-17">17</li>`

// 12. Populate the new <li> with the text "Never gonna give you up."
firstItem.innerHTML = `<li class="item" id="item-17">` + "Never gonna give you up." + `</li>`