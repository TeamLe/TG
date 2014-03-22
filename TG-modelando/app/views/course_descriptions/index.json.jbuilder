json.array!(@course_descriptions) do |course_description|
  json.extract! course_description, :id, :name, :code
  json.url course_description_url(course_description, format: :json)
end
