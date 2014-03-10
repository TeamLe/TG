class CreateGrades < ActiveRecord::Migration
  def change
    create_table :grades do |t|
      t.string :name
      t.string :status, :default => 'none'

      t.timestamps
    end
  end
end
