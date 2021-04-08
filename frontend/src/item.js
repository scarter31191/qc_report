// item class similar to model

class Item{
    static all = [] // contains all item obj in js (this will remove the need to send another request to the backend and hold all the object on the frontend)

    constructor({name, description, item_number, order_qty, damage_qty, id}){
        this.name = name
        this.description = description
        this.item_number = item_number
        this.order_qty = order_qty
        this.damage_qty = damage_qty
        this.id = id
        this.element = document.createElement('div')
        this.element.id = `item-${this.id}`
        // this.itemList = document.getElementById('report-list')
        // this.element.addEventListener('click', this.handleListClick)

        Item.all.push(this)
    }

    attachToDom(){
        // console.log(this)
        this.itemList.append(this.fullRender())
        this.addEventListeners()
    }

    addEventListeners(){
        this.element.addEventListener('click', this.handleListClick)
    }

    get reportList(){
        return document.getElementById('report-list')
    }

    fullRender(){
        this.element.innerHTML = `
            <li>
            <label>Name:</label> <span class="name"> ${this.name}</span> -
            <label>Description:</label>  <span class="description"> ${this.description}</span> -
            <label>Item Number:</label>  <span class="item_number"> ${this.item_number}</span> -
            <label>Order Qty:</label>  <span class="order_qty"> ${this.order_qty}</span> -
            <label>Damage Qty:</label>  <span class="damage_qty"> ${this.damage_qty}</span> 
            </li>
            <button class="delete" data-id="${this.id}">Delete</button>
            <button class="update" data-id="${this.id}">Update</button>
            `
            return this.element
    }

    updateItemOnDom({name, description, item_number, order_qty, damage_qty}){
        this.name = name
        this.description = description
        this.item_number =  item_number
        this.order_qty = order_qty
        this.damage_qty = damage_qty
        this.fullRender()
    }

     addUpdateItemFields(itemId){
        let item = document.querySelector(`#item-${itemId} li`)
        // let name = item.querySelector('.name').innerText
        // let description = item.querySelector('.description').innerText
        // let itemNumber = item.querySelector('.item_number').innerText
        // let orderQty = item.querySelector('.order_qty').innerText
        // let damageQty = item.querySelector('.damage_qty').innerText
    //     let name = item.querySelector('strong').innerText
    
    
        let updateForm = `
        <input type="text" name="name" value="${this.name}" id="update-name-${itemId}">
        <input type="text" name="description" value="${this.description}" id="update-description-${itemId}">
        <input type="number" value="${this.item_number}" name="item_number" id="update-item_number-${itemId}">
        <input type="number" value="${this.order_qty}" name="order_qty" id="update-order_qty-${itemId}">
        <input type="number" value="${this.damage_qty}" name="damage_qty" id="update-damage_qty-${itemId}">
        `
    
        let formDiv = document.createElement('div')
        formDiv.id = `update-form-${itemId}`
        formDiv.innerHTML = updateForm
        item.append(formDiv)
    }

    handleListClick = (e) => {
        console.log(this)
        if (e.target.className === "delete"){
            let id = e.target.dataset.id
             itemsAdapter.deleteItem(id)
        } else if(e.target.className === 'update'){
             let itemId = e.target.dataset.id
             e.target.className = "save"
             e.target.innerText = "Save"
             this.addUpdateItemFields(itemId)
         } else if(e.target.className === 'save'){
             let itemId = e.target.dataset.id
             e.target.className = "update"
             e.target.innerText = "Update"
             itemsAdapter.sendPatchRequest(itemId)
         }
    } 
}

