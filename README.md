# MERN Authentication w/ Passport

This was a short project to learn how to use PassportJS for authentication on the MERN stack. Users can sign up and login by email or Twitch.

## How It's Made

**Tech used:** HTML, CSS, JavaScript, NodeJS, ExpressJS, ReactJS, ReduxJS, TailwindCSS

This project is a simple full-stack app. There is no functionality other than signing up and logging in, either by email or Twitch.

The backend is built with Node and Express and uses MongoDB for database storage. The frontend was bootstrapped with the `redux` template for `create-react-app`. By storing the user info with `redux`, the Dashboard is protected from non-authenticated users - even if they were to hardcode the route in the URL, i.e. go straight to http://localhost:3000/dashboard.

## Optimizations

As with a lot of React projects, there was a lot of refactoring when it comes to components. For example the buttons are virtually the same except for the colors, text, and `href`, or where the user is being sent to. Some of this can be handled by CSS, and for the rest, I just turned into a `Button` component.

## Lessons Learned

Since this was a simple learning project, there were definitely a lot of things learned. Especially in dealing with Redux, which I got a lot of help from after posting on Twitter. My understanding is still a little fuzzy, but it makes more sense now than when I was just blindly following tutorials.

Speaking of tutorials, in this project, I also challenged myself to only read from official documentation. This was so I could practice finding solutions on my own instead of hacking together a Frankenstein solution that had bits and pieces from all over.

I'm still wrapping my head around protected routes and how to persist the state after reloading. My guess is making use of `localStorage`, but I'm not sure yet.





## Other Projects

Check out other stuff I've worked on:

**Minute To Win It Games API & Wiki**: https://github.com/geraldiner/min-to-win

**Rehabitter:** https://github.com/geraldiner/rehabitter

**Snapchat Clone:** https://github.com/geraldiner/snapchat-clone

**K.K. Radio:** https://github.com/geraldiner/kk-radio
