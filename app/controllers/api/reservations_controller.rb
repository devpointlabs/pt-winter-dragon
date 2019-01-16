class Api::ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :update, :destroy]
   
  def index
      render json: Reservation.all
  end

  def show
      render json: @reservation
  end

  def create
      reservation = Reservation.new(reservation_params)

      if reservation.save
          render json: reservation
      else
          render json: reservation.errors, status: 422
      end
  end

  def update
      if @reservation.update(reservation_params)
          render json: @reservation
        else
          render json: @reservation.errors, status: 422
        end
  end

  def destroy
      @reservation.destroy
  end

  private

  def set_reservation
    @reservation = Reservation.find(params[:id])
  end

  def reservation_params
    params.require(:reservation).permit(:name, :phone, :email, :date, :time, :party)
  end


end
