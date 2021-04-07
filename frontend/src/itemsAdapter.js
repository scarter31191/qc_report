// communicates with our backend
// post, patch, delete
class ItemsAdapter{
    constructor(){
        this.baseurl = 'http://localhost:3000/items'
    }
    // no need for the function keyword since its already inside of a class 
    fetchItems(){
        fetch(this.baseurl)
        .then(res => res.json())
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
}