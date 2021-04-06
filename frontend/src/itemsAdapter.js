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
        const item_number = docoument.getElementById(`update-item_number-${itemId}`).value
        const order_qty = document.getElementById(`update-order_qty-${itemId}`).value
        const damage_qty = document.getElementById(`update-damage_qty-${itemId}`).value

        let itemObj = {
            name,
            description,
            item_number,
            order_qty,
            damage_qty
        }


    }
}