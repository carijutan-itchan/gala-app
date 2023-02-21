Rails.application.routes.draw do
  get 'root_page/index'

  root "root_page#index"
end
