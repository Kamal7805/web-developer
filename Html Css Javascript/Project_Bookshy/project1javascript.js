//Select the overlay, popup and button
var  popupoverlay =document.querySelector(".popup-overlay")
var popup =document.querySelector(".popup-box")
var addpopupbtn =document.querySelector(".add-btn")
addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popup.style.display="block"
})
//Select Cancel btn
var cancel =document.getElementById("cancel-book")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popup.style.display="none"
})
// select the container,add-book, booktitleinput,booktitleinput,book-description
var container =document.querySelector(".container")
var addbook =document.getElementById("add-book")
var booktit =document.getElementById("booktitleinput")
var bookauthor =document.getElementById("bookauthorinput")
var bookdes =document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
 var div = document.createElement("div")
   div.setAttribute("class","book-container")
   div.innerHTML=` <h2>${booktit.value}</h2>
            <h4>${bookauthor.value}</h4>
            <p>${bookdes.value}</p>
            <button onclick="del(event)">Delete</button>`    
   container.append(div)
   popupoverlay.style.display="none"
    popup.style.display="none" 
})

function del(event){
    event.target.parentElement.remove()
}