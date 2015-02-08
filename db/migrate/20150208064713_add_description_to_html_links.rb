class AddDescriptionToHtmlLinks < ActiveRecord::Migration
  def change
    add_column :html_links, :description, :string
  end
end
