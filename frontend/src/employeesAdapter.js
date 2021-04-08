

class EmployeesAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/employees'
    }

    fetchEmployees(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(resp => {
            console.log(resp)
        })
    }
}