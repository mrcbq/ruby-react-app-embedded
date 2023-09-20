# frozen_string_literal: true

class InitializeGreetings < ActiveRecord::Migration[7.0]
  def up
    Greeting.create(content: 'Hello, World!')
    Greeting.create(content: 'Welcome to our website!')
    Greeting.create(content: 'Greetings from Rails!')
    Greeting.create(content: 'Hi there, how can we assist you today?')
    Greeting.create(content: 'Good morning, have a great day!')
  end

  def down
    Greeting.delete_all
  end
end
