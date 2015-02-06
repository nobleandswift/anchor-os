class HtmlLink < ActiveRecord::Base
  validates_uniqueness_of :htmllink
  validates :htmllink, presence: true
end
