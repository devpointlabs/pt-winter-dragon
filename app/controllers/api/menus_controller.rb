class Api::MenusController < ApplicationController
<<<<<<< HEAD
  before_action :set_menu, only: [:show, :edit, :update, :destroy]
=======
>>>>>>> 114ded194ede54988150cb5146155c24915771dd
  
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
<<<<<<< HEAD
    @menu.destroy
=======
    @blog.destroy
>>>>>>> 114ded194ede54988150cb5146155c24915771dd
  end

  private
    def menu_params 
<<<<<<< HEAD
      params.require(:menu).permit(:name, :isactive)
    end

    def set_menu
      @menu = Menu.find(params[:id])
=======
      @menu = Menu.find(params[:id])
    end

    def set_menu
      
>>>>>>> 114ded194ede54988150cb5146155c24915771dd
    end
end
