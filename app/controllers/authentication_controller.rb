class AuthenticationController < ApplicationController
  # POST /auth/login
  def login 
    @user = User.find_by_username(params[:username])
    if @user.authenticate(params[:password]) #authenticate method provided by Bcrypt
      token = encode(user_id: @user.id, username: @user.username)
      render json: {token: token}, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end 
  # GET /auth/verify
  def verify
    render json: @current_user.attributes.except('password_digest'), status: :ok
  end

  private

  def login_params
    params.permit(:username, :password)
  end

end
