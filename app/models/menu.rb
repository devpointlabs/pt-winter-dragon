class Menu < ApplicationRecord
  has_many :categories, dependent: :destroy
end
