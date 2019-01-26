1.times do
  menu = Menu.create(name: Faker::Commerce.department)
  2.times do
    category = Category.create(
        name: Faker::Food.ingredient,
        description: Faker::Food.description,
    )
    5.times do
      item = Item.create(
        name: Faker::Food.dish,
        price: Faker::Commerce.material,
        spice: Faker::Boolean.boolean,
        # image: Faker::Boolean.boolean,
      )
    end
  end
end
