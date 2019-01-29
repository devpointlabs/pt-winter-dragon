Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :menus do
      resources :categories
    end
    resources :categories do
      resources :items
    end

    get 'active_menu', to: 'menus#active_menu'
    get 'all_items', to: 'items#all_items'
end

  namespace :api do
    resources :orders
  end

  namespace :api do
    resources :reservations
  end

  namespace :api do
    resources :contact_forms
  end

  namespace :api do
    resources :users
  end

  namespace :api do
<<<<<<< HEAD
=======

    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
  end

  # #Do not place any routes below this one
  # get '*other', to: 'static#index'

>>>>>>> f2f806631f001e14ec736e4868f594318743fffd
    resources :taxnfees
  end

end
