require "rails_helper"

RSpec.describe HtmlLinksController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/html_links").to route_to("html_links#index")
    end

    it "routes to #new" do
      expect(:get => "/html_links/new").to route_to("html_links#new")
    end

    it "routes to #show" do
      expect(:get => "/html_links/1").to route_to("html_links#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/html_links/1/edit").to route_to("html_links#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/html_links").to route_to("html_links#create")
    end

    it "routes to #update" do
      expect(:put => "/html_links/1").to route_to("html_links#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/html_links/1").to route_to("html_links#destroy", :id => "1")
    end

  end
end
