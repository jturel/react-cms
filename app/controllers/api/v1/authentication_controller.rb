class Api::V1::AuthenticationController < ApplicationController
  def authenticate
    user = authenticated_user
    fail(AuthenticationError) unless user

    token = JsonWebToken.encode({login: user.login})

    render json: {token: token}
  end

  def check_token
    decoded_auth_token

    render json: 'ok'
  end

  private

  def auth_params
    @auth_params ||= params.permit(:login, :password)
  end

  def authenticated_user
    user = User.find_by_login(auth_params[:login])
    user.try(:authenticate, auth_params[:password])
  end
end
