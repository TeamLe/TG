class CreateCourses < ActiveRecord::Migration
	def change
		create_table :courses do |t|
			t.timestamps

			t.integer :row
			t.integer :column

			t.belongs_to :course_description
      t.belongs_to :syllabus
		end
	end
end
