json.array!(@grades) do |grade|
  json.extract! grade, :id, :name, :status
  json.url grade_url(grade, format: :json)
end
