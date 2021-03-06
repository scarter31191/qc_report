// communicates with our backend
// post, patch, delete
class ItemsAdapter{
    constructor(){
        this.baseurl = 'http://localhost:3000/items' //API endpoint
    }
    // no need for the function keyword since its already inside of a class 
    fetchItems(){ //a promise is an object that may produce a single value some time in the future, a promise may be in 3 possible states: fulfilled, rejected, or pending
        fetch(this.baseurl)
        .then(res => res.json()) // handles async operations 
        .then(data => {
            data.data.forEach(el => {
                // append to DOM
                let item = new Item(el.attributes)
                item.attachToDom(el)
            })

        })
    }

    sendPatchRequest(itemId){
        const name = document.getElementById(`update-name-${itemId}`).value
        const description = document.getElementById(`update-description-${itemId}`).value
        const item_number = document.getElementById(`update-item_number-${itemId}`).value
        const order_qty = document.getElementById(`update-order_qty-${itemId}`).value
        const damage_qty = document.getElementById(`update-damage_qty-${itemId}`).value

        let itemObj = {
            name,
            description,
            item_number,
            order_qty,
            damage_qty
        }

        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(itemObj)
        } 

        fetch(this.baseurl + `/${itemId}`, configObj)
        .then(res => res.json())
        .then(response => {
            let item = Item.all.find(i => i.id == response.data.attributes.id)
            item.updateItemOnDom(response.data.attributes)
        })
        

        let form = document.getElementById(`update-form-${itemId}`)
        form.remove()

    }

    deleteItem(id){
        // remover from the db
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            } // YOU DONT NEED A body: like in rails you never sent delete to params just a specific url
        }
        fetch(this.baseurl + `/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })
        Item.all = Item.all.filter(i => i.id != id)
    
        // remover fomr the dom
        let item = document.getElementById(`item-${id}`)
        item.remove()
    }

    handleFormSubmit = (e) => {
        e.preventDefault() // with forms the page will refresh by default this will prevent that
        // debugger
        
        const employee_id = document.getElementById('employee').value
        
        
        let newItemObj = {
            name: itemName.value,
            description: itemDescription.value,
            item_number: itemNumber.value,
            order_qty: orderQty.value,
            damage_qty: damageQty.value,
            employee_id
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
        fetch(this.baseurl, configObj)
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            let item = new Item(json.data.attributes)
            item.attachToDom()
            // debugger
        })
        const emplyAdapter =  new EmployeesAdapter();
        emplyAdapter.fetchEmployees
        itemForm.reset()
    }
}