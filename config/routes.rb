Rails.application.routes.draw do
  root "fallback#index"

  get "*path", to: "fallback#index", constraints: ->(req) {
    !req.xhr? && req.format.html?
  }
end