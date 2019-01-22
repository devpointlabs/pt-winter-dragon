class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        render json: User.all
    end

    def show
        render json: @user
    end

    def update
        @user.update(admin: !@user.admin)
        render json: @user
    end

    def destroy
        @user.destroy
    end


private
    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:email, :password, :admin, :approved)
    end

end
