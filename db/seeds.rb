# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



HtmlLink.create(:htmllink => "http://dimsemenov.com/plugins/magnific-popup/site-assets/ajax/test-ajax.html", :description => "ajax sample 1")
HtmlLink.create(:htmllink => "http://map.google.com", :description => "Google Map")
HtmlLink.create(:htmllink => "http://www.facebook.com", :description => "Facebook")

User.create(:email => "admin@admin.com", :password => "adminadmin", :is_admin => true)
User.create(:email => "user1@admin.com", :password => "useruser", :is_admin => false)
