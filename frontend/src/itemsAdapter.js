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
                // 
                let item = new Item(el.attributes)
                item.attachToDom(el)
            })

        })
    }
}