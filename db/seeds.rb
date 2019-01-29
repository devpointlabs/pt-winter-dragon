# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
1.times do
    menu = Menu.create(name: Faker::Commerce.department)
    2.times do
      category = Category.create(
          name: Faker::Food.ingredient,
          description: Faker::Food.description
      )
      5.times do
        item = Item.create(
          name: Faker::Food.dish,
          price: Faker::Commerce.material,
          spice: Faker::Boolean.boolean
        )
      end
    end
  end