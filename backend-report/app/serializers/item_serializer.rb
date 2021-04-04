class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :item_number, :order_qty, :damage_qty
  # belongs_to :employee
end
