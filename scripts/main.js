/*Create a grocery list application where users can add and remove items from a list. The list should be displayed as a bulleted unordered list*/

var items=[];

function displayList(){
	document.getElementById("showList").innerHTML="";
	for(i=0;i<items.length;i++){
		document.getElementById("showList").innerHTML+="<li class='list-item'>"+items[i]+" <button class='list-btn' id="+i+" onclick='remove(this.id)'>Remove</button></li>";
	}
}

function addItem(){
	items.push(prompt("Enter item"));
	displayList();
}

function removeLastItem(){
	items.pop();
	displayList();
}

function removeFirstItem(){
	items.shift();
	displayList();
}

function remove(clicked){
	items.splice(clicked,1);
	displayList();
}