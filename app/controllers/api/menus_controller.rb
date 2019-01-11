class Api::MenusController < ApplicationController
  
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
    @blog.destroy
  end

  private
    def menu_params 
      @menu = Menu.find(params[:id])
    end

    def set_menu
      
    end
end
