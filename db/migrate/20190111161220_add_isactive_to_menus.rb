class AddIsactiveToMenus < ActiveRecord::Migration[5.2]
  def change
    add_column :menus, :isactive, :boolean
  end
end
