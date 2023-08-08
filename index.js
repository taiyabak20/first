    //console.dir(document)
    // console.log(document.domain);
    // console.log(document.URL);
    // console.log(document.doctype)
    // console.log(document.all);

    //document.title="forms";
    //var headerTitle= document.getElementById("header-title");
    //headerTitle.style.borderBottom ="solid 3px #000000"
    
    var header=document.getElementById("main-header");
    
    header.style.borderBottom="solid 3px #000000"
    var Items= document.getElementsByClassName("title")
    
    
    
    console.log(Items[0].innerHTML);
    Items[0].style.color="green";
    
    var listItems = document.getElementsByClassName('list-group-item');
    console.log(listItems[2].innerHTML);
    console.log(listItems)
    //listItems[2].style.backgroundColor='green';
    for( var i=0;i<listItems.length;i++){

      listItems[i].style.fontWeight='bold';

    }
    
    var item5= document.getElementsByClassName('item5');
console.log(item5)
    item5[0].style.border= "solid 1px lightgray";
    item5[0].style.padding = "12px 20px";
    item5[0].style.fontWeight= "bold";
    item5[0].style.listStyle = "none";

var item2 = document.querySelector('li:nth-child(2)');

item2.style.backgroundColor ='green';

var item3 = document.querySelector('li:nth-child(3)');

item3.style.color = 'transparent';

var allItems = document.querySelectorAll('li')

  allItems[1].style.color = 'green';


var oddItems = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<oddItems.length;i++){

  oddItems[i].style.backgroundColor = 'green';
}
