class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :item_number, :order_qty, :damage_qty, :id
  belongs_to :employee
end
