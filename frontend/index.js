const reportList = document.getElementById('report-list') // best practice is to run this line in the console and call it to see if its pulling the target
const itemsAdapter = new ItemsAdapter
const itemForm = document.getElementById('item-form')
const itemName = document.getElementById('item-name')
const itemDescription = document.getElementById('item-description')
const itemNumber = document.getElementById('item-number')
const orderQty = document.getElementById('order-qty')
const damageQty = document.getElementById('damage-qty')


function fetchItems(){
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(data => addItems(data))
}

function addItems(resp){
    resp.data.forEach(item => 
        addItemToDOM(item))
}

function addItemToDOM(item){
    console.log(item)
    reportList.innerHTML += `
    <div id="report-${item.id}">
        <li>
            <span class="name">Name: ${item.attributes.name}</span>
            <strong class="description">Description: ${item.attributes.description}</strong>
            <span class="item_number">Item Number: ${item.attributes.item_number}</span>
            <strong class="description">Order QTY: ${item.attributes.order_qty}</strong>
            <strong class="description">Damage QTY: ${item.attributes.damage_qty}</strong>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="update" data-id="${this.id}">Update</button>
    </div>
    `
}

function handleFormSubmit(e){
    e.preventDefault() // with forms the page will refresh by default this will prevent that
    debugger
    
    let newItemObj = {
        name: itemName.value,
        description: itemDescription.value,
        number: itemNumber.value,
        order_qty: orderQty.value,
        damage_qty: damageQty.value
    }
    console.log(newItemObj)
}

document.addEventListener('DOMContentLoaded', () => {
    // itemsAdapter.fetchItems()
    fetchItems()
    itemForm.addEventListener('submit', handleFormSubmit)
})