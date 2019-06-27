Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show]

      post 'authenticate', to: 'authentication#authenticate'
      get 'check_token', to: 'authentication#check_token'
    end
  end
end
