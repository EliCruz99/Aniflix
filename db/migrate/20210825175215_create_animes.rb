class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :name
      t.text :description
      t.string :img_url
      t.string :watch_link
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
