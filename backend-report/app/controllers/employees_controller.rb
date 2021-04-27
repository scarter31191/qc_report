class EmployeesController < ApplicationController
    #include is needed to add in the realationship outside of that use 'only:' use -> [] when calling more than one attribute
    def index
        employees = Employee.all
        # render json: employees.to_json(include: {items: {only: 
        #     [:name, :description, :item_number, :order_qty, :damage_qty]}},
        #     only: [:name, :email, :worker_id])
        render json: EmployeeSerializer.new(employees, 
            {include: [:items]})
    end

    def show
        employee = Employee.find(params[:id])
        # render json: employee.to_json(include: {items: {only: 
        #     [:name, :description, :item_number, :order_qty, :damage_qty]}},
        #     only: [:name, :email, :worker_id])
        options = {include: [:items]}
        render json: EmployeeSerializer.new(employee, options)
    end

    def create
        employee = Employee.new(employee_params)
        # byebug
        if employee.save
            render json: EmployeeSerializer.new(employee)
        else
            render json: {error: 'could not be created'}
        end
    end

    # def index
    #     employees = Employee.all
    #     render json: employees.to_json(include: {items: {only: 
    #         [:name, :description, :item_number, :order_qty, :damage_qty]}},
    #         only: [:name, :email, :worker_id])
    # end

    private

    def employee_params
        params.require(:employee).permit(:name, :email, :worker_id)
    end

end
