class HtmlLinksController < ApplicationController
  before_action :set_html_link, only: [:show, :edit, :update, :destroy]

  # GET /html_links
  # GET /html_links.json
  def index
    @html_links = HtmlLink.all.order("id")
    flash.now[:alert] = $errors
    $errors = nil
  end

  # GET /html_links/1
  # GET /html_links/1.json
  def show
  end


  def test_form
    @html_link = HtmlLink.new
    respond_to do |format|
      format.html {render :layout => 'noheader'}
    end
  end

  # GET /html_links/new
  def new
    @html_link = HtmlLink.new

    respond_to do |format|
      format.html {render :layout => 'noheader'}
    end

  end

  def update_row_order
    @html_link = Thing.find(html_link_params[:html_link_id])
    @html_link.row_order_position = html_link_params[:row_order_position]
    @html_link.save

    render nothing: true # this is a POST action, updates sent via AJAX, no view rendered
  end

  # GET /html_links/1/edit
  def edit
    respond_to do |format|
      format.html {render :layout => 'noheader'}
    end
  end

  # POST /html_links
  # POST /html_links.json
  def create
    @html_link = HtmlLink.new(html_link_params)

    respond_to do |format|
      if @html_link.save
        # format.html { redirect_to @html_link, notice: 'Html link was successfully created.' }
        format.html { redirect_to html_links_path }
        format.json { render :show, status: :created, location: @html_link }
      else
        format.html { redirect_to html_links_path }
        $errors = @html_link.errors.full_messages
        # binding.pry
        format.json { render json: @html_link.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /html_links/1
  # PATCH/PUT /html_links/1.json
  def update
    respond_to do |format|
      if @html_link.update(html_link_params)
        # format.html { redirect_to @html_link, notice: 'Html link was successfully updated.' }
        format.html { redirect_to html_links_path }
        format.json { render :show, status: :ok, location: @html_link }
      else
        # format.html { render :edit }
        format.html { redirect_to html_links_path }
        $errors = @html_link.errors.full_messages
        format.json { render json: @html_link.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /html_links/1
  # DELETE /html_links/1.json
  def destroy
    @html_link.destroy
    respond_to do |format|
      format.html { redirect_to html_links_url, notice: 'Html link was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_html_link
      @html_link = HtmlLink.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def html_link_params
      params.require(:html_link).permit(:html_link_id, :htmllink, :row_order_position)
    end
end