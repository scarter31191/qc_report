class ItemsController < ApplicationController

    def index
        items = Item.all
        # render json: items.to_json(only: [:name, :description, 
        #     :item_number, :order_qty, :damage_qty],
        # include: :employee)
        render json: ItemSerializer.new(items)
    end

    def show
        item = Item.find(params[:id])
        # render json: item.to_json(only: [:name, :description, 
        #     :item_number, :order_qty, :damage_qty],
        # include: :employee)
        # options = {include: [:employee]}
        render json: ItemSerializer.new(item)
    end

    def create
        # byebug
        item = Item.new(item_params)
        # byebug
        # item.employee_id = 1
        if item.save
            render json: ItemSerializer.new(item)
        else
            render json: {error: 'could not be created'}
            # render json: {:error => item.errors.full_messages}
        end
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy
        render json: {message: "Successfully deleted #{item.name}!"} # A render json is needed to help the frontend understand what its dealing with
    end

    def update
        item = Item.find(params[:id])
        item.update(item_params)
        render json: ItemSerializer.new(item)
    end

    private

    def item_params
        params.require(:item).permit(:name, :description, :item_number, :order_qty, :damage_qty, :employee_id)
    end

end
