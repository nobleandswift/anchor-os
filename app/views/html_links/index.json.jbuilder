json.array!(@html_links) do |html_link|
  json.extract! html_link, :id
  json.url html_link_url(html_link, format: :json)
end
