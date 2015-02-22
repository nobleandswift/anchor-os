class AddUserToHtmlLinks < ActiveRecord::Migration
  def change
    add_reference :html_links, :user, index: true
  end
end
