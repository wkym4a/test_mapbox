class CreatePoints < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.string :name
      t.string :address
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
