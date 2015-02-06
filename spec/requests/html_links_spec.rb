require 'rails_helper'

RSpec.describe "HtmlLinks", type: :request do
  describe "GET /html_links" do
    it "works! (now write some real specs)" do
      get html_links_path
      expect(response).to have_http_status(200)
    end
  end
end
