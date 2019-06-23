class Api::V1::PostsController < ApplicationController
  before_action :validate_api_token

  def index
    posts = Post.all

    render json: posts
  end

  def show
    post = Post.find(params[:id])

    render json: post
  end
end
