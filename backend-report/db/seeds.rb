# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Employee.create(name: "Steve Carter", email: "Carter@live.com", worker_id: 9)
Employee.create(name: "Jame White", email: "White@live.com", worker_id: 10)
Employee.create(name: "Michael Jordan", email: "Jordan@live.com", worker_id: 23)

Item.create([
    {name: 'DGN Alternator', description: 'Alternator', item_number: 2642, order_qty: 12, damage_qty: 2, employee_id: 1 },
    {name: 'Dura Brake Pads', description: 'Brake Pads', item_number: 265, order_qty: 32, damage_qty: 2, employee_id: 1 },
    {name: 'XYZ Rotor', description: 'Brake Rotor', item_number: 187, order_qty: 4, damage_qty: 0, employee_id: 2 },
    {name: 'Extended Life SXL', description: 'Oil Filter', item_number: 67, order_qty: 51, damage_qty: 5, employee_id: 2 },
    {name: 'Clean Air', description: 'Air Filter', item_number: 42, order_qty: 12, damage_qty: 10, employee_id: 3 },
    {name: 'Plugged', description: 'Spark Plug', item_number: 64, order_qty: 80, damage_qty: 7, employee_id: 3 },
    {name: 'XtraVision bulb', description: 'Headlight', item_number: 2600, order_qty: 1, damage_qty: 1, employee_id: 1 },
])