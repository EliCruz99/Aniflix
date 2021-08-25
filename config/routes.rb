Rails.application.routes.draw do
  resources :animes
  resources :categories

  resources :categories do
    resources :animes
  end


  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  get '/anime/:anime_id/categories/:id', to: 'categories#add_to_anime'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
