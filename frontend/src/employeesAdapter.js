

class EmployeesAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/employees'
    }

    fetchEmployees(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(resp => {
            debugger
            resp.data.forEach(el => {
                this.sanitizeAndInitializeEmployee(el)
            })
        })
    }

    sanitizeAndInitializeEmployee(data){
        // debugger
        let emp = new Employee({id: data.id, ...data.attributes})
        emp.attachToDom()
        let selectDropDown = document.getElementById('employee')
        let newOption = document.createElement('option')
        newOption.value = emp.id
        newOption.name = "employee_id"
        newOption.innerText = emp.name
        selectDropDown.append(newOption)
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        // debugger
        let name = document.getElementById('employee-name').value
        let email = document.getElementById('employee-email').value
        let worker_id = document.getElementById('worker-id').value

        // let newEmpObj = {
        //     employeeName,
        //     employeeEmail,
        //     employeeWorkerId
        // }
        let newEmpObj = {
           employee: {name,
            email,
            worker_id}
        }
        console.log(newEmpObj)

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newEmpObj)
        }
        fetch(`http://localhost:3000/employees`, configObj)
        .then(res => res.json())
        .then(json => {
            let employee = new Employee(json.data.attributes)
            employee.attachToDom()
        })
        employeeForm.reset()
    }
}