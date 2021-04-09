

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
    }

    fullRender(){
        this.element.innerHTML = `
            <h3>${this.name}</h3>
        
        `
        return this.element
    }
}