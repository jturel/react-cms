require 'test_helper'

class JsonWebTokenTest < ActiveSupport::TestCase
  def setup
    @payload = {foo: :bar}
  end

  def test_encode
    encoded = JsonWebToken.encode(@payload, 1.hour.from_now)

    assert encoded
  end

  def test_decode
    token = JsonWebToken.encode(@payload, 1.hour.from_now)

    assert JsonWebToken.decode(token)
  end
end
