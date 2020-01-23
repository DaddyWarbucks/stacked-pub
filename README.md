# stacked-pub


Yo John, this is a quick example of how we could use Feathers to be an event proxy for the messages. It is basically a very lightweight REST API that you would interact with from the Rails server. Make a `POST /sms` or `POST /direct-message` and the data passed to the post will be emitted to clients. It has nice channel management (ensuring we only send proper events to proper channels) and such as well.

You can see a quick demo by following the instructions below, then open your browser to `http://localhost:3030`. You can even open two windows to see the live updates. Open the Chrome dev console to see some messages.

There is  also detailed comments at [public/index.html](public/index.html) in the bottom of the file where the client side JS is running and also how the Rails server would basicall be able to create "events" for its clients by calling a REST API.

This is also an interesting article that kinda "wraps" your existing API in a feathers app that gives it real time events: https://blog.feathersjs.com/using-feathersjs-to-make-your-existing-api-real-time-813f7c3fd892


1. Install your dependencies

    ```
    cd path/to/stacked-pub
    npm install
    ```

2. Start your app

    ```
    npm run dev
    ```

