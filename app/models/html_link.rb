class HtmlLink < ActiveRecord::Base
  include RankedModel
  ranks :row_order


  validates_uniqueness_of :htmllink
  validates :htmllink, presence: true
  
end
