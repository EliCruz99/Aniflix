class User < ApplicationRecord
  has_many :animes
  has_secure_password #authenticate method provided by Bcrypt
  validates :password, length: {minimum: 6}
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
  validates :username, presence: true, uniqueness: true
end
