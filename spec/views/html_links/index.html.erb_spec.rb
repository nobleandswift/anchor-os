require 'rails_helper'

RSpec.describe "html_links/index", type: :view do
  before(:each) do
    assign(:html_links, [
      HtmlLink.create!(),
      HtmlLink.create!()
    ])
  end

  it "renders a list of html_links" do
    render
  end
end
