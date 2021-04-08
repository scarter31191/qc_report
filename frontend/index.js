const reportList = document.getElementById('report-list') // best practice is to run this line in the console and call it to see if its pulling the target
const itemsAdapter = new ItemsAdapter
const employeesAdapter = new EmployeesAdapter
const itemForm = document.getElementById('item-form')
const itemName = document.getElementById('item-name')
const itemDescription = document.getElementById('item-description')
const itemNumber = document.getElementById('item-number')
const orderQty = document.getElementById('order-qty')
const damageQty = document.getElementById('damage-qty')

const BASE_URL = "http://localhost:3000"


// function fetchItems(){
//     fetch('http://localhost:3000/items')
//     .then(res => res.json())
//     .then(data => addItems(data))
// }

// function addItems(resp){
//     resp.data.forEach(item => 
//         addItemToDOM(item))
// }

// function addItemToDOM(item){
//     // console.log(item)
//     reportList.innerHTML += `
//     <div id="report-${item.id}">
//         <li>
//             <span class="name">Name: ${item.attributes.name}</span>
//             <strong class="description">Description: ${item.attributes.description}</strong>
//             <span class="item_number">Item Number: ${item.attributes.item_number}</span>
//             <strong class="description">Order QTY: ${item.attributes.order_qty}</strong>
//             <strong class="description">Damage QTY: ${item.attributes.damage_qty}</strong>
//         </li>
//         <button class="delete" data-id="${item.id}">Delete</button>
//         <button class="update" data-id="${item.id}">Update</button>
//     </div>
//     `
// }

function handleFormSubmit(e){
    e.preventDefault() // with forms the page will refresh by default this will prevent that
    // debugger
    
    let newItemObj = {
        name: itemName.value,
        description: itemDescription.value,
        item_number: itemNumber.value,
        order_qty: orderQty.value,
        damage_qty: damageQty.value
    }
    // console.log(newItemObj)

    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newItemObj)
    }
    fetch("http://localhost:3000/items", configObj)
    .then(res => res.json())
    .then(res => {
        addItemToDOM(res.data)
    })

    itemForm.reset()
}

// function addUpdateItemFields(itemId){
//         let item = document.querySelector(`#item-${itemId} li`)
//         let name = item.querySelector('.name').innerText
//         let description = item.querySelector('.description').innerText
//         let itemNumber = item.querySelector('.item_number').innerText
//         let orderQty = item.querySelector('.order_qty').innerText
//         let damageQty = item.querySelector('.damage_qty').innerText
//     //     let name = item.querySelector('strong').innerText
    
    
//         let updateForm = `
//         <input type="text" name="name" value="${name}" id="update-name-${itemId}">
//         <input type="text" name="description" value="${description}" id="update-description-${itemId}">
//         <input type="number" value="${itemNumber}" name="item_number" id="update-item_number-${itemId}">
//         <input type="number" value="${orderQty}" name="order_qty" id="update-order_qty-${itemId}">
//         <input type="number" value="${damageQty}" name="damage_qty" id="update-damage_qty-${itemId}">
//         `
    
//         let formDiv = document.createElement('div')
//         formDiv.id = `update-form-${itemId}`
//         formDiv.innerHTML = updateForm
//         item.append(formDiv)
//     }

// function deleteItem(id){
//     // remover from the db
//     let configObj = {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         } // YOU DONT NEED A body: like in rails you never sent delete to params just a specific url
//     }
//     fetch(`http://localhost:3000/items/${id}`, configObj)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//     })

//     // remover fomr the dom
//     let item = document.getElementById(`report-${id}`)
//     item.remove()
// }

// function handleClick(e){
//    if (e.target.className === "delete"){
//        let id = e.target.dataset.id
//         deleteItem(id)
//    } else if(e.target.className === 'update'){
//         let itemId = e.target.dataset.id
//         e.target.className = "save"
//         e.target.innerText = "Save"
//         addUpdateItemFields(itemId)
//     } else if(e.target.className === 'save'){
//         let itemId = e.target.dataset.id
//         e.target.className = "update"
//         e.target.innerText = "Update"
//         itemsAdapter.sendPatchRequest(itemId)
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    itemsAdapter.fetchItems()
    employeesAdapter.fetchEmployees()
    itemForm.addEventListener('submit', handleFormSubmit)
    // reportList.addEventListener('click', handleClick)
    // itemsAdapter.sendPatchRequest(itemId)
    // fetchItems()
})