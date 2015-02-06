require 'rails_helper'

RSpec.describe "html_links/new", type: :view do
  before(:each) do
    assign(:html_link, HtmlLink.new())
  end

  it "renders new html_link form" do
    render

    assert_select "form[action=?][method=?]", html_links_path, "post" do
    end
  end
end
