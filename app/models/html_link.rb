class HtmlLink < ActiveRecord::Base
  include RankedModel
  ranks :row_order

  belongs_to :user

  validates :htmllink, presence: true, if: :is_valid_link?
  validates_uniqueness_of :description, if: :is_valid_link?
  validates :description, presence: true, if: :is_valid_description?

  # validates :htmllink, presence: true
  # validates_uniqueness_of :description
  # validates :description, presence: true
  
  
  def is_valid_link?
    is_value = false
    if !self.is_empty && !self.is_heading
      is_value = true
    end
    return is_value
  end

  def is_valid_description?
    is_value = true
    if self.is_empty && !self.is_heading
      is_value = false
    end
    return is_value
  end
end
