

class employee {

    static all = []

    constructor({id, name, worker_id}){
        this.id = id,
        this.name = name,
        this.worker_id = worker_id

        employee.all.push(this)
    }
}