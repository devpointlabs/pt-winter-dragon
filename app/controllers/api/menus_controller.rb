class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :edit, :update, :destroy]
  
  def index
    render json: Menu.all
  end

  def show
    render json: @menu
  end

  def create
    menu = Menu.new(menu_params)

    if menu.save
      render json: menu
    else
      render json: menu.errors, status: 422
    end
  end

  def edit
  end

  def update
    if @menu.update(menu_params)
      render json: @menu
    else
      render json: menu.errors, status: 422
    end
  end

  def destroy
    @menu.destroy
  end

  def active_menu
    category = Category.select("categories.*")
    .joins("inner join menus on menus.id = categories.menu_id")
    .where("menus.isactive=true")
    
    menu_data = []

    category.each do |c| 
      menu_data << {category: c, items: c.items}
    end

    render json: menu_data
  end

  private
    def menu_params 
      params.require(:menu).permit(:name, :isactive)
    end

    def set_menu
      @menu = Menu.find(params[:id])
    end
end
