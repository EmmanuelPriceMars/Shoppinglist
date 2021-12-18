window.onload = function (){
    initshoppinglist();
}

function initshoppinglist () {
    let form = document.getElementById("item-form");

    form.addEventListener("submit",(event) => {
        handleitemform(event, form);

    });
}

function handleitemform(event, itemlistref) {
    if(event.preventDefault){
        event.preventDefault();

    }
     additemtoshoppinglist()
    itemlistref.reset();

    return false;
function additemtoshoppinglist(){
    let itemname = document.getElementById("item-name")
    let itemamount = document.getElementById("item-amount")
    let id=getrandomint(0, 100000000)

    let itemhtml= creatlistitemhtml(itemname.value, itemamount.value, id);
    let itemlistref = document.getElementById("shopping-list");
    itemlistref.insertAdjacentHTML("afterend", itemhtml);

    setdelebutton(id);


}

function  setdelebutton (id){
    let deletebutton = document.getElementById("button"+id);
    deletebutton.addEventListener("click", () => {removelistitem(id);
    });
    }

}

function creatlistitemhtml(itemname, iteamount, id) {
    return `<li id="item${id}">
       ${itemname} - ${iteamount}
       <button id="button${id}" type="button">delete item</button>
    </li>`;

}

function removelistitem(id) {
    let listitem = document.getElementById("item"+id)
    listitem.parentNode.removeChild(listitem);
}

function getrandomint (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min; }
