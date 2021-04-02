class ItemsController < ApplicationController

    def index
        items = Item.all
        # render json: items.to_json(only: [:name, :description, 
        #     :item_number, :order_qty, :damage_qty],
        # include: :employee)
        render json: ItemSerializer.new(items, 
            {include: [:employee]})
    end

    def show
        item = Item.find(params[:id])
        # render json: item.to_json(only: [:name, :description, 
        #     :item_number, :order_qty, :damage_qty],
        # include: :employee)
        options = {include: [:employee]}
        render json: ItemSerializer.new(item, options)
    end
end
