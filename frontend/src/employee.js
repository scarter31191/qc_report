

class Employee {

    static all = []

    constructor({id, name, worker_id}){
        this.id = id,
        this.name = name,
        this.worker_id = worker_id
        this.employeeList = document.getElementById('employee-list')
        this.element = document.createElement('li')
        this.element.id = `employee-${id}`

        Employee.all.push(this)
    }

    attachToDom(){
        this.employeeList.append(this.fullRender())
        this.addEventListeners()
    }

    addEventListeners(){
        this.element.addEventListener('click', this.displayItems)
    }

    get items(){
        return Item.all.filter(i => i.employee_id == this.id)
    }

    displayItems = (e) => {
        // console.log(this)
        const reportList = document.getElementById('report-list')
        reportList.innerHTML = ""
        this.items.forEach(i => {
            i.attachToDom()
        })
        let seeAllBtn = document.getElementById("all-btn")
        if (!seeAllBtn){
            seeAllBtn = document.createElement('button')
            seeAllBtn.id = "all-btn"
            seeAllBtn.innerText = "See All Items"
            this.employeeList.append(seeAllBtn)
        }
        seeAllBtn.addEventListener("click", this.reset)
    }

    reset = () => {
        // console.log(this)
        Item.resetAllItems()
    }

    fullRender(){
        this.element.innerHTML = `
            <h3>${this.name}</h3>
        
        `
        return this.element
    }
}