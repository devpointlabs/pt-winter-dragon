class CreateContactForms < ActiveRecord::Migration[5.2]
  def change
    create_table :contact_forms do |t|
      t.string :name
      t.string :email
      t.text :body
      t.boolean :private_event
      t.string :date
      t.integer :people_num

      t.timestamps
    end
  end
end
