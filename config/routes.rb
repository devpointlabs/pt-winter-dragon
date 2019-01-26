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
    resources :taxnfees
  end

end
