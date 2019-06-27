require 'test_helper'

class Api::V1::PostsControllerTest < ActionDispatch::IntegrationTest
  def test_index_unauthed
    get api_v1_posts_url

    assert_equal 403, response.status
  end

  def test_index_authed
    token = JsonWebToken.encode(login: 'userone')

    get api_v1_posts_url, headers: {'Authorization' => token}

    assert_response :success
  end
end
