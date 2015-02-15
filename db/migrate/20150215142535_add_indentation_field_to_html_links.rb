class AddIndentationFieldToHtmlLinks < ActiveRecord::Migration
  def change
    add_column :html_links, :indentation, :integer, default: 0;
  end
end
