Rails.application.routes.draw do
  resources :animes
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: [:create, :show]
  resources :categories, only: [:show, :index]
  get '/anime/shuffle', to: 'animes#shuffle'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
