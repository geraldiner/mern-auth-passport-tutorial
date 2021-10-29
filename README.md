# MERN Authentication w/ Passport

This was a short project to learn how to use PassportJS for authentication on the MERN stack. Users can sign up and login by email or Twitch.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, NodeJS, ExpressJS, ReactJS, ReduxJS, TailwindCSS

This project is a simple full-stack app. There is no functionality other than signing up and logging in, either by email or Twitch.

The backend is built with Node and Express and uses MongoDB for database storage. The frontend was bootstrapped with the `redux` template for `create-react-app`. By storing the user info with `redux`, the Dashboard is protected from non-authenticated users - even if they were to hardcode the route in the URL, i.e. go straight to http://localhost:3000/dashboard.

## Optimizations

As with a lot of React projects, there was a lot of refactoring when it comes to components. For example, the log in and sign up buttons are virtually the same, it's just the text that changes. So

_(optional)_

You don't have to include this section but interviewers _love_ that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those _whoa this is awesome_ or _fuck yeah I did it!_ moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Other Projects

Check out other stuff I've worked on:

**Rehabitter:** https://github.com/geraldiner/rehabitter

**K.K. Radio:** https://github.com/geraldiner/kk-radio

**Interactive Piano:** https://github.com/geraldiner/piano

**Pom Poko Pomodoro:** https://github.com/geraldiner/pom-poko-pomodoro
