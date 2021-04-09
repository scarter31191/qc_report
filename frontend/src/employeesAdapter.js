

class EmployeesAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/employees'
    }

    fetchEmployees(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(resp => {
            resp.data.forEach(el => {
                this.sanitizeAndInitializeEmployee(el)
            })
        })
    }

    sanitizeAndInitializeEmployee(data){
        // debugger
        let emp = new Employee({id: data.id, ...data.attributes})
        emp.attachToDom()
    }
}