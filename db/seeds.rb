# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all
Anime.destroy_all

Category.create!(name: 'Slice of Life')
Category.create!(name: 'Isekai')
Category.create!(name: 'Sports')
Category.create!(name: 'Shoujo')
Category.create!(name: 'Shounen')
Category.create!(name: 'Comedy')
Category.create!(name: 'Romance')
Category.create!(name: 'Fantasy')
Category.create!(name: 'Mystery')
Category.create!(name: 'Drama')
Category.create!(name: 'Supernatural')

puts "created #{Category.count} categories"