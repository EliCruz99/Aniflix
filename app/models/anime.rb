class Anime < ApplicationRecord
  belongs_to :category
  belongs_to :user

  validates :name, presence: true, uniqueness:true
  validates :category, presence: true
end
