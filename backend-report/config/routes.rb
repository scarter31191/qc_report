Rails.application.routes.draw do
  resources :items, only: [:show, :index, :create, :destroy, :update] #no need for :new and :edit because they are to view the form not process the form
  resources :employees, only: [:show, :index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
