class Api::ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :update, :destroy]

  def index
      render json: Contact.all
  end

  def show
      render json: @contact
  end

  def create
      reservation = Contact.new(contact_params)

      if contact.save
          render json: contact
      else
          render json: contact.errors, status: 422
      end
  end

  def update
      if @contact.update(contact_params)
          render json: @contact
        else
          render json: @contact.errors, status: 422
        end
  end

  def destroy
      @contact.destroy
  end

  private

  def set_contact
    @contact = Contact.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(:fname, :lname, :email, :reason, :comment)
  end
end
