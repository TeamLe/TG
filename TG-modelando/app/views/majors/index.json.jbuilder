json.array!(@majors) do |major|
  json.extract! major, :id
  json.url major_url(major, format: :json)
end
