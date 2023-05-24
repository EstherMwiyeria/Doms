
// Change document background color to
// silver
document.body.style.backgroundColor="silver";

// Change the font color for h1 title tag to
// green
document.getElementById("title").style.color="green";

// Change the font case for h3 title tags to
// uppercase
let h3Tags = document.getElementsByTagName("h3");
for (let i = 0; i < h3Tags.length; i++) {
  h3Tags[i].style.textTransform = "uppercase";
}

// Add one more fruit to the fruits list
let li = document.createElement("li")
li.innerHTML = "Grapes";
document.getElementById("fruList").appendChild(li)

// Add one more vegetable to the vegetables
// list
let newVeggies = document.createElement("li")
newVeggies.innerHTML = "Capsicles";
document.getElementById("vegList").appendChild(newVeggies);