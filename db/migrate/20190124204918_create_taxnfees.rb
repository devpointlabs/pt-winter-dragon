class CreateTaxnfees < ActiveRecord::Migration[5.2]
  def change
    create_table :taxnfees do |t|
      t.float :tax
      t.float :delivery

      t.timestamps
    end
  end
end
