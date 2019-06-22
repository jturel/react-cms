require 'test_helper'

class Api::V1::AuthenticationControllerTest < ActionDispatch::IntegrationTest
  def test_authenticate
    user = users(:one)

    post api_v1_authenticate_url, params: {login: user.login, password: "test"}

    assert_response :success
  end

  def test_authenticate_inexistent
    post api_v1_authenticate_url, params: {login: "inexistent", password: "mypass"}

    assert_equal 403, response.status
  end
end
