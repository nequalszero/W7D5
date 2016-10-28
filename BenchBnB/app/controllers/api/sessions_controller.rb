class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      login_user!(user)
      render json: "successful login"
    else
      render json: "invalid username or password"
    end
  end

  def destroy
    if current_user
      logout_user!
      render json: {}
    else
      render json: "404 error - cannot logout, no current user"
    end
  end
end
