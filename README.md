# Aniflix

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Aniflix** is a fullstack application that allows users to browse a collection of animes. Authorized users have the ability to create, update, and delete animes which are associated with their individual accounts. Authorized users also get access to favorite animes and they can revisit them whenever they want to. This app utilizes Ruby on Rails and PostgreSQL on the backend, and React.js on the frontend_

<br>

## MVP

-Create a SQL database with PostegreSQL to host all user/anime/category information

-Create full CRUD functionality for creating, updating, reading, and deleting anime information that was made by an authorized user

-User authentication and association to limit user interaction with the app's content

-Non-authorized routes for landing page and anime browsing, and authorized routes for creating and editing animes

<br>

### Goals

- _develop a deeper understanding of Ruby on Rails._
- _Learn TailwindCSS so I can utilize it in future projects._
- _Create a RESTfulish API_

### Challenges

- _Setting up custom routes_
- _Creating the Main Container_
- _figuring out custom routing on frontend_

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end user interaction and state management through manipulation of a virtual DOM_ |
|   React Router   | _Site navigation and routing for single page applications._ |
|   Ruby On Rails  | _Backend model-view-controller framework for Ruby._ |
|   TailwindCSS    | _A utility-first CSS framework for rapid UI development._ |
|     Axios        | _Promise-based HTTP client for the browser and node.js._ |
|     Craco        | _Create React App Configuration Override, an easy and comprehensible configuration layer for create-react-app._|

<br>

### Client (Front End)

#### Wireframes


![Homepage](https://i.imgur.com/PzsmZkg.png)

- Desktop Landing

![Details Page](https://i.imgur.com/tbzqD6U.png)

- Desktop Details

![Login/Signup](https://i.imgur.com/BVVCDW3.png)

- Desktop Login/Signup 

![Category Page](https://i.imgur.com/MjRQ0l0.png)

- Desktop Category Page

![Create Page](https://i.imgur.com/OcI8Oy1.png)

- Desktop Create/Edit Page


#### Component Tree


![Component Tree](https://i.imgur.com/w4ovsIU.png)

#### Component Architecture



``` structure


src
|__ App.jsx
|__ index.js
|__ components/
      |__ Layout/
          |__ Layout.jsx
      |__ Nav/
          |__ Nav.jsx
      |__ Footer/
          |__ Footer.jsx
      |__ Search/
          |__ Search.jsx
      |__ Sort/
          |__ Sort.jsx
|__ container/
      |__ MainContainer.jsx
|__ screens/
      |__ Home/
          |__ Home.jsx
      |__ AllAnime/
          |__ AllAnime.jsx
      |__ AnimeDetail/
          |__ AnimeDetail.jsx
      |__ AnimeEdit/
          |__ AnimeEdit.jsx
      |__ AnimeCreate/
          |__ AnimeCreate.jsx
      |__ AnimeCategory/
          |__ AnimeCategory.jsx
      |__ Favorites/
          |__ Favorites.jsx
      |__ SignIn/
          |__ SignIn.jsx
      |__ SignUp/
          |__ SignUp.jsx
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ anime.js
      |__ categories.js

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|Basic BE Models      |    H     |     1 hr      |    1 hr      |   1 hr     |
|BE CRUD              |    H     |   2 hrs       |    2 hrs      |   2 hrs     |
|BE auth              |    L     |    1 hr       |     1 hr      |    1 hr     |
|Seed Data            |    L     |    2 hrs      |     2hrs      |   2hrs      |
|FE Component Hierarchy|  H      |      1 hr     |   1 hr        |    1 hr     |
|FE CRUD              |    H     |     3hrs      |    3hrs      |    3hrs    |
|FE Routing           |    M     |      1.5hrs   |    1.5hrs      |  1.5hrs      |
|FE State Management  |    H     |     2hrs      |  2hrs         |  2hrs       |
|Favorites Page Layout|    M     |     2hrs      |    2hrs       |  2hrs       |
|Landing Page Layout  |    M     |     2hrs      |     2hrs      |    2hrs     |
|Detail Page Layout   |    M     |      2hrs     |     2hrs      |    2hrs     |
|Edit Page Layout     |    M     |      3hrs     |  3hrs        |   3hrs     |
|Create Page Layout   |    M     |      3hrs     |  3hrs        |   3hrs     |
|Sign In / Up Layout  |    M     |       2hrs    |    2hrs       |   2hrs      |
|Basic Tailwind CSS   |    H     |       4hrs    |     4hrs      |     4hrs    |
|Advanced Nav TailwindCSS|    M  |       3hrs    |     3hrs      |   3hrs      |
|Advanced Landing TailwindCSS|   M|       3hrs   |     3hrs      |    3hrs     |
|Advanced Edit Page TailwindCSS|   M|       3hrs |    3hrs       |    3hrs     |
|Advanced Create Page TailwindCSS|   M|      3hrs|     3hrs      |    3hrs     |
|Advanced Favorites Page TailwindCSS| M|     3hrs|      3hrs     |     3hrs    |
| TOTAL               |          |    51.5 hrs   |   51.5 hrs ??      |  51.5 hrs       |

<br>

### Server (Back End)

#### ERD Model

![Aniflix ERD](https://i.imgur.com/CQKLhiu.png)

<br>

***

## Post-MVP

- Use websocket to create direct messaging between users
- Users can click on other user profiles to see their favorites
- integrade a video player so trailers play for the anime on the details page
- _Allow users to favorite animes so they can view them at a later time_  

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
