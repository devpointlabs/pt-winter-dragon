class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :name
      t.string :phone
      t.string :date
      t.string :time
      t.string :email
      t.integer :party

      t.timestamps
    end
  end
end
