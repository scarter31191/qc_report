

class Employee {

    static all = []
    //constructors are used to construct or create an object
    //.this is a keyword refrence to the obj that is excuting this piece of code
    constructor({id, name, worker_id, items}){
        this.id = id,
        this.name = name,
        this.worker_id = worker_id
        this.employeeList = document.getElementById('employee-list')
        this.element = document.createElement('li')
        this.element.id = `employee-${id}`
        this.items = items

        Employee.all.push(this)
    }

    attachToDom(){
        this.employeeList.append(this.fullRender())
        // this.addEventListeners()
    }

    // addEventListeners(){
    //     this.element.addEventListener('click', this.displayItems)
    // }

    // get items(){
    //     return Item.all.filter(i => i.employee_id == this.id)
    // }

    // displayItems = (e) => {
    //     // console.log(this)
    //     const reportList = document.getElementById('report-list')
    //     reportList.innerHTML = ""
    //     debugger
    //     this.items.forEach(i => {
    //         i.attachToDom()
    //     })
    //     let seeAllBtn = document.getElementById("all-btn")
    //     if (!seeAllBtn){
    //         seeAllBtn = document.createElement('button')
    //         seeAllBtn.id = "all-btn"
    //         seeAllBtn.innerText = "See All Items"
    //         this.employeeList.append(seeAllBtn)
    //     }
    //     seeAllBtn.addEventListener("click", this.reset)
    // }

    reset = () => {
        // console.log(this)
        Item.resetAllItems()
    }

    fullRender(){
        this.element.innerHTML = `
            <h3>${this.name} - Employee ID: ${this.id}</h3>
                
        
        `
        return this.element
    }
}
//Array.from(document.querySelectorAll('#employee-list li')).find(li => li.id === `employee-${item.employee_id}`).children[0].innerHTML