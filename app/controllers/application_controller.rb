class ApplicationController < ActionController::API
  class AuthenticationError < StandardError; end

  rescue_from AuthenticationError, with: :unauthorized
  rescue_from JWT::DecodeError, with: :unauthorized

  private

  def unauthorized(error)
    render json: "you are not authorized", status: 403
  end

  def validate_api_token
    payload = JsonWebToken.decode(auth_token)
    login = payload[:login]
    user = User.find_by_login(login)

    fail(AuthenticationError) if user.nil?
  end

  def auth_token
    header = authorization_header
    return unless header

    header.split(' ').last
  end

  def authorization_header
    request.headers['Authorization']
  end
end
