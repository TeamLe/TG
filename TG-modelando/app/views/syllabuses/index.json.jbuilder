json.array!(@syllabuses) do |syllabus|
  json.extract! syllabus, :id
  json.url syllabus_url(syllabus, format: :json)
end
