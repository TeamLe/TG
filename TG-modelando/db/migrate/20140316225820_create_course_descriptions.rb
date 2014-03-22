class CreateCourseDescriptions < ActiveRecord::Migration
  def change
    create_table :course_descriptions do |t|
      t.string :name
      t.string :code

      t.timestamps
    end
  end
end
