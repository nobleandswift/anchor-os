require 'rails_helper'

RSpec.describe "html_links/edit", type: :view do
  before(:each) do
    @html_link = assign(:html_link, HtmlLink.create!())
  end

  it "renders the edit html_link form" do
    render

    assert_select "form[action=?][method=?]", html_link_path(@html_link), "post" do
    end
  end
end
