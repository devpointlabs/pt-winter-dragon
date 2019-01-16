class Api::CategoriesController < ApplicationController
  before_action :set_menu
  before_action :set_category, only: [:show, :update, :destroy, :edit]

  def index
    render json: @categories = @menu.categories.all
  end

  def show
    render json: @category
  end

  def create
    
    category = @menu.categories.new(category_params)
    # binding.pry
    if category.save
      render json: category
    else
    render json: category.errors, status: 422
    end
  end

  def edit
  end

  def update
    if @category.update(category_params)
      render json: @category 
    else
      render json: @category.errors, status: 422
    end
  end

  def destroy
    binding.pry
    @category.destroy
  end

  private 
  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

  def category_params
    params.require(:category).permit(:name, :description, :menu_id)
  end
end
