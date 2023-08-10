//console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype)
// console.log(document.all);

//document.title="forms";
//var headerTitle= document.getElementById("header-title");
//headerTitle.style.borderBottom ="solid 3px #000000"

//var header=document.getElementById("main-header");

//header.style.borderBottom="solid 3px #000000"
//var Items= document.getElementsByClassName("title")


//console.log(Items[0].innerHTML);
//Items[0].style.color="green";

//var listItems = document.getElementsByClassName('list-group-item');
//console.log(listItems[2].innerHTML);
//console.log(listItems)
//listItems[2].style.backgroundColor='green';
//for( var i=0;i<listItems.length;i++){

//listItems[i].style.fontWeight='bold';}


//var item5= document.getElementsByClassName('item5');
//console.log(item5)
//item5[0].style.border= "solid 1px lightgray";
//item5[0].style.padding = "12px 20px";
//item5[0].style.fontWeight= "bold";
//item5[0].style.listStyle = "none";

// var item2 = document.querySelector('li:nth-child(2)');

// item2.style.backgroundColor ='green';
// var item3 = document.querySelector('li:nth-child(3)');
// item3.style.color = 'transparent';
// var allItems = document.querySelectorAll('li')
//   allItems[1].style.color = 'green';
// var oddItems = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0; i<oddItems.length;i++){

//   oddItems[i].style.backgroundColor = 'green';}



// var itemList = document.querySelector('#items')

// //parentelement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "lightgray";

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = "gray";

// //lastChild 
// // not really useful
// console.log(itemList.lastChild);

// // firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor ="gray"

// // firstchild
// console.log(itemList.firstChild);

// // nextsibling
// console.log(itemList.nextSibling);

// // nextelementsibling
// //since it doesnt a have a next element it will show null
// console.log(itemList.nextElementSibling);

// // previoussibling
// console.log(itemList.previousSibling);

// previouselementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color ="green";

//createchild


// createelement
// var newDiv = document.createElement('div');


// setAttribute
// newDiv.setAttribute('title', 'hello div');

// createtesxtnode
// var newDivText = document.createTextNode("hello World");

// appendchild
// newDiv.appendChild(newDivText);

// add class
// newDiv.className="hello"

// var container= document.querySelector('header .container');
// var h1= document.querySelector('header h1');


// console.log(newDiv);

// container.insertBefore(newDiv, h1);


// var newDiv2 = document.createElement('div')

// var newDiv2Text = document.createTextNode("hello World");

// newDiv2.setAttribute('title', 'hello div2');

// newDiv2.appendChild(newDiv2Text)

// newDiv2.className="hello2";

// var item1 = document.querySelector('#items li:first-child'); 

//  item1.insertBefore(newDiv2, item1.firstChild);
// console.log(newDiv2);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItemDescription = document.getElementById('itemDesc').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  var deleteBtn = document.createElement('button');
  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);

  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-info btn-sm float-right edit';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);

var itemDescDiv = document.createElement('div');
itemDescDiv.className = 'item-description';
itemDescDiv.appendChild(document.createTextNode(newItemDescription));
li.appendChild(itemDescDiv);

}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.textContent;
    
    if (itemName.toLowerCase().indexOf(text) != -1 ) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}