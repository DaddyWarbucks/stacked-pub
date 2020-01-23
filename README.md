# stacked-pub


Yo John, this is a quick example of how we could use Feathers to be an event proxy for the messages. I just threw it together because I wanted to see if it was as easy as I thought. It is basically a very lightweight REST API that you would interact with from the Rails server. Make a `POST /sms` or `POST /direct-message` and the data passed to the post will be emitted to clients. It has nice channel management (ensuring we only send proper events to proper channels) and such as well.

You can see a quick demo by following the instructions below, then open your browser to `http://localhost:3030`. You can even open two windows to see the live updates. Open the Chrome dev console to see some messages.

There is  also detailed comments at [public/index.html](public/index.html) in the bottom of the file where the client side JS is running and also how the Rails server would basicall be able to create "events" for its clients by calling a REST API.

This is also an interesting article that kinda "wraps" your existing API in a feathers app that gives it real time events: https://blog.feathersjs.com/using-feathersjs-to-make-your-existing-api-real-time-813f7c3fd892 . So we could do similar (and/or what I described above) to wrap other current stacked endpoints in these services to get updates.

This seems cool...its just a REST API you could hit from whatever backend service like the reporter, etc. That simplicity seems nice.

One caveat I don't know about in regards to Rails and AnyCable, I don't know if you can listen to events on AnyCable from the Rails server but I assume you can. Like it already has some Rails method `Rails.anyCable.on('sms-created', { ... do the thing })` where it listens to the events it just created and can react...? I dunno. But that would be more difficult with this little proxy because there is no Rails SDK for it to "listen" to the server with, like there are JS, IOS, etc SDK's.


1. Install your dependencies

    ```
    cd path/to/stacked-pub
    npm install
    ```

2. Start your app

    ```
    npm run dev
    ```

