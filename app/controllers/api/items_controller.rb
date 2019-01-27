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
    @item = @category.items.new(item_params)
    
    if @item.save
      render json: @item
    else
    render json: @item.errors, status: 422
    end
  end

  def edit
  end

  def update
    
    file = params[:file]

    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @item.image = cloud_image['secure_url']
      rescue => e

      end
    end

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
    render json: Item.all
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
