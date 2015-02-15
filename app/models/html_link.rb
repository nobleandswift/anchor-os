class HtmlLink < ActiveRecord::Base
  include RankedModel
  ranks :row_order


  validates :htmllink, presence: true, if: :empty_line?
  validates_uniqueness_of :description, if: :empty_line?
  validates :description, presence: true
  
  def empty_line?
    :is_empty == false
  end
end
