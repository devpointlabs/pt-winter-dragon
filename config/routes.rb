Rails.application.routes.draw do
  namespace :api do
    resources :menus do 
      resources :categories
    end
    resources :categories do
      resources :items
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
