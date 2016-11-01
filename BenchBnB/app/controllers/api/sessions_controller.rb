class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login_user!(@user)
      render "api/users/show"
    else
      render json: { errors: ["invalid username or password"] }, status: 401
    end
  end

  def destroy
    if current_user
      logout_user!
      render json: {}
    else
      render json: { errors: ["cannot logout, no current user"] }, status: 422
    end
  end
end
