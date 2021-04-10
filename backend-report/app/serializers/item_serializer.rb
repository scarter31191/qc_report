class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :item_number, :order_qty, :damage_qty, :id, :employee_id
  belongs_to :employee
end
