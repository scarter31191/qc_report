class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :worker_id
  has_many :items
end
