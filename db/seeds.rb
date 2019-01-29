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
