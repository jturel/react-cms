class ApplicationController < ActionController::API
  class AuthorizationError < StandardError; end

  rescue_from AuthorizationError, with: :unauthorized

  def unauthorized(error)
    render json: "you are not authorized", status: 403
  end
end
