class Item < ApplicationRecord
  belongs_to :order, optional: true
  belongs_to :category
end
