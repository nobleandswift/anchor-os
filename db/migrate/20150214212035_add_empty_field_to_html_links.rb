class AddEmptyFieldToHtmlLinks < ActiveRecord::Migration
  def change
    add_column :html_links, :is_empty, :boolean, default: false
  end
end
