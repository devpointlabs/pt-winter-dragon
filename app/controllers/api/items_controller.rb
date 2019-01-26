class Api::ItemsController < ApplicationController
  before_action :set_category, except: [:all_items] 
  before_action :set_item, only: [:show, :update, :destroy, :edit]

  def index
    render json: @items = @category.items.all
  end

  def show
    render json: @item
  end

  def create
    item = @category.items.new(item_params)
    
    if item.save
      render json: item
    else
    render json: item.errors, status: 422
    end
  end

  def edit
  end

  def update
    if @item.update(item_params)
      render json: @item 
    else
      render json: @item.errors, status: 422
    end
  end

  def destroy
    @item.destroy
  end

  def all_items
    render jsons: Item.all
  end

  private 
  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price, :spice, :image, :category_id)
  end
end
