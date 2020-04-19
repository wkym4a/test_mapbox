json.extract! point, :id, :name, :address, :latitude, :longitude, :created_at, :updated_at
json.url point_url(point, format: :json)
