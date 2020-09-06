class Api::V1::UsersController < ApplicationController
  before_action :validate_api_token

  def current
    render json: current_user
  end
end
