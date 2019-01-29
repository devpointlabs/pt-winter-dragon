# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do
    menu = Menu.create(name: Faker::Commerce.department)
    3.times do
      category = Category.create(
          menu_id: menu.id,
          name: Faker::Food.ingredient,
          description: Faker::Food.description
      )
      5.times do
        item = Item.create(
          category_id: category.id, 
          name: Faker::Food.dish,
          price: rand(1.5-6.5),
          spice: Faker::Boolean.boolean
        )
      end
    end
  end
end
