Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :menus do 
      resources :categories do 
        resources :items
      end
    end
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
end
