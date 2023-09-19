Rails.application.routes.draw do
  root "root#index"
  get '/api/random_greeting', to: 'greetings#random'
end
