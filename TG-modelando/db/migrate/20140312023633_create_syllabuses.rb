class CreateSyllabuses < ActiveRecord::Migration
	def change
		create_table :syllabuses do |t|
			t.string :name
      t.belongs_to :major

			t.timestamps
		end
	end
end
