class CreateHtmlLinks < ActiveRecord::Migration
  def change
    create_table :html_links do |t|

      # t.referrences 
      t.string "htmllink"
      t.timestamps null: false
    end
  end
end
