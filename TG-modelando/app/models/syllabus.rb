class Syllabus < ActiveRecord::Base
  belongs_to :major
  has_many :courses, :order => "column ASC"
end
