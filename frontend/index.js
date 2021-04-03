const reportList = document.getElementById('report-list') // best practice is to run this line in the console and call it to see if its pulling the target

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
            <span class="name">Name: ${item.attributes.name}</span><br>
            <strong class="description">Description: ${item.attributes.description}</strong><br>
            <span class="item_number">Item Number: ${item.attributes.item_number}</span><br>
            <strong class="description">Order QTY: ${item.attributes.order_qty}</strong><br>
            <strong class="description">Damage QTY: ${item.attributes.damage_qty}</strong><br><br>
        </li>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    fetchItems()
})