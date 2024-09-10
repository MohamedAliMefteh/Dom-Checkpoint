const add= document.querySelector(".add-item")
const cart=document.querySelector(".cart-container")
add.addEventListener("click", function(){



  var item= document.createElement("div")
  item.classList.add("items")
  var productImg= document.createElement("img")
  productImg.src="https://placehold.co/200x150"
  var icons= document.createElement("div")
  icons.classList.add("icons")
  var price= document.createElement("p")
  price.classList.add("price")
  price.innerHTML=("Price")
  var quantity= document.createElement("p")
  quantity.classList.add("quantity")
  quantity.innerHTML=1
  var remove= document.createElement("button")
  remove.classList.add("remove")
  remove.innerHTML=("Remove")
  var addingIcons=document.createElement("div")
  addingIcons.classList.add("adding-icons")
  var plus =document.createElement("i")
  plus.classList.add('fa-solid', 'fa-plus')
  var minus =document.createElement("i")
  minus.classList.add('fa-solid' ,'fa-minus')
  var like=document.createElement("i")
  like.classList.add('fa-regular', 'fa-heart')





  item.appendChild(productImg)
  item.appendChild(icons)
  item.appendChild(price)
  item.appendChild(quantity)
  item.appendChild(remove)
  icons.appendChild(addingIcons)
  icons.appendChild(like)
  addingIcons.appendChild(plus)
  addingIcons.appendChild(minus)

  cart.prepend(item)


  plus.addEventListener('click',function(){
    quantity.innerHTML=Number(quantity.innerHTML)+1
  })
  minus.addEventListener('click',function(){
    if (Number(quantity.innerHTML) > 1){
    quantity.innerHTML=Number(quantity.innerHTML)-1
  }
  })
  like.addEventListener('click',function(){
    like.className=('fa-solid fa-heart')
  })



})



// plus.addEventListener("click", function () {
//     quantity.innerHTML = Number(quantity.innerHTML) + 1
// })

// minus.addEventListener("click", function () {
//   if (Number(quantity.innerHTML) > 1) {
//     quantity.innerHTML = Number(quantity.innerHTML) - 1
//   }
// })
// remove.addEventListener("click", function () {
//   items.remove()
// })


