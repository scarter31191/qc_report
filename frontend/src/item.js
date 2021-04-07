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
        this.itemList = document.getElementById('report-list')

        Item.all.push(this)
    }

    attachToDom(){
        console.log(this)
        this.itemList.append(this.fullRender())
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
        this.item_number = item_number
        this.order_qty = order_qty
        this.damage_qty = damage_qty
        this.fullRender()
    }
}

