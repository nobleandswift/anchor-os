class AddHeadingFieldToHtmlLinks < ActiveRecord::Migration
  def change
    add_column :html_links, :is_heading, :boolean, default: false
  end
end
