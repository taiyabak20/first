    //console.dir(document)
    // console.log(document.domain);
    // console.log(document.URL);
    // console.log(document.doctype)
    // console.log(document.all);

    document.title="forms";
    //var headerTitle= document.getElementById("header-title");
    //headerTitle.style.borderBottom ="solid 3px #000000"
    
    var header=document.getElementById("main-header");
    
    header.style.borderBottom="solid 3px #000000"
    var Items= document.getElementsByClassName("title")
    
    
    
    console.log(Items[0].innerHTML);
    Items[0].style.color="green";
    
    var listItems = document.getElementsByClassName('list-group-item');
    console.log(listItems[2].innerHTML);
    listItems[2].style.backgroundColor='green';
    for( var i=0;i<listItems.length;i++){

      listItems[i].style.fontWeight='bold';

    }
    

