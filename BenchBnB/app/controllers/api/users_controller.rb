class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      render json: "new user created"
    else
      # render json: @user.errors.full_messages
      render json: @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
