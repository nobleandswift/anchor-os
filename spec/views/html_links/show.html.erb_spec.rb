require 'rails_helper'

RSpec.describe "html_links/show", type: :view do
  before(:each) do
    @html_link = assign(:html_link, HtmlLink.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
