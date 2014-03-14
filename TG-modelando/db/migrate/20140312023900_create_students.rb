class CreateStudents < ActiveRecord::Migration
	def change
		create_table :students do |t|
			t.timestamps

			t.string :name
			t.string :GRR
		end
	end
end
