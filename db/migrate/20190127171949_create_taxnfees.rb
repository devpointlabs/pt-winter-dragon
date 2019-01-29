class CreateTaxnfees < ActiveRecord::Migration[5.2]
  def change
    create_table :taxnfees do |t|
      t.float :delivery
      t.float :tax

      t.timestamps
    end
  end
end
