class CreateMajors < ActiveRecord::Migration
  def change
    create_table :majors do |t|

      t.timestamps
    end
  end
end
