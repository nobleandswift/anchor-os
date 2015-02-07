class AddRowOrderToHtmlLinks < ActiveRecord::Migration
  def change
    add_column :html_links, :row_order, :integer
  end
end
