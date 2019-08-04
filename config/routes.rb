Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  
  #新規作成画面を表示する:new、新規作成されたグループを保存する:create、編集画面を表示する:edit、編集されたグループを更新する:updatep
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do 
    resources :messages, only: [:index, :create]
  end
end