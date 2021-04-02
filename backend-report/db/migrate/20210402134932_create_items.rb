class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :item_number
      t.integer :order_qty
      t.integer :damage_qty
      t.belongs_to :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
