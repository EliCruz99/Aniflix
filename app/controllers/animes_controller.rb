class AnimesController < ApplicationController
  before_action :set_anime, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index,:show]
  # GET /animes
  def index
    @animes = Anime.all

    render json: @animes, include: :category
  end

  # GET /animes/1
  def show
    @category = Category.where(@anime.category_id== params[:id])
    render json: @anime, include: :category
  end

  # POST /animes
  def create
    @anime = Anime.new(anime_params)
    @anime.user = @current_user
    if @anime.save
      render json: @anime, status: :created
    else
      render json: @anime.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /animes/1
  def update
    if @anime.update(anime_params)
      render json: @anime
    else
      render json: @anime.errors, status: :unprocessable_entity
    end
  end

  # DELETE /animes/1
  def destroy
    @anime.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_anime
      @anime = Anime.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def anime_params
      params.require(:anime).permit(:name, :description, :img_url, :watch_link, :category_id)
    end
end
