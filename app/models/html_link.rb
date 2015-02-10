class HtmlLink < ActiveRecord::Base
  include RankedModel
  ranks :row_order


  validates :htmllink, presence: true
  validates_uniqueness_of :description
  validates :description, presence: true
  
end
