require 'test_helper'

class Api::V1::AuthenticationControllerTest < ActionDispatch::IntegrationTest
  def test_authenticate
    user = users(:one)

    post api_v1_authenticate_url, params: {login: user.login, password: "test"}

    assert_response :success
    assert json_response['token']
  end

  def test_authenticate_invalid_password
    user = users(:one)

    post api_v1_authenticate_url, params: {login: user.login, password: "wrong"}

    assert_equal 403, response.status
  end

  def test_authenticate_inexistent
    post api_v1_authenticate_url, params: {login: "inexistent", password: "mypass"}

    assert_equal 403, response.status
  end

  def test_check_token_valid
    token = JsonWebToken.encode(login: 'userone')

    get api_v1_check_token_url, headers: {'Authorization' => token}

    assert_response :success
  end

  def test_check_token_invalid
    get api_v1_check_token_url, headers: {'Authorization' => "invalid"}

    assert_equal 403, response.status
  end

  def test_check_token_missing
    get api_v1_check_token_url

    assert_equal 403, response.status
  end
end
