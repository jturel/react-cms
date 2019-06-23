class JsonWebToken
  def self.encode(payload, exp = 24.hours.from_now)
    payload[:expires] = exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def self.decode(token)
    HashWithIndifferentAccess.new(JWT.decode(token, Rails.application.secrets.secret_key_base).first)
  end
end
