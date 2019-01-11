class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.string :email
      t.text :comments
      t.float :total

      t.timestamps
    end
  end
end
