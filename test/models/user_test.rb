require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def test_authenticate
    user = users(:one)
    user.password = 'newpassword'

    assert user.authenticate('newpassword')
  end
end
