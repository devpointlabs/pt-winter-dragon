Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :menus do
      resources :categories
    end
    resources :categories do
      resources :items
    end

    resources :orders
    resources :reservations
    resources :contact_forms
    resources :users
    resources :taxnfees

    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'

    get 'active_menu', to: 'menus#active_menu'
    get 'all_items', to: 'items#all_items'

end

end
