class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :html_links

  def self.init_users
    user = User.last
    for html_link in HtmlLink.all
      html_link.user = user
      html_link.save
    end
  end
end
