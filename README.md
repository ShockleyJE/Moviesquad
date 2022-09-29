# [moviesquad](https://moviesquad.net/)

a collaborative, cross-platform & multi-service watchlist designed to respect your time and get out of your squads way

[see it here](https://moviesquad.net/)

<img src="https://github.com/ShockleyJE/Moviesquad/blob/main/docs/promotional/home.png" width="100%"  alt="Moviesquad"/>

## about

This is a full-stack web appplication with a decoupled client and server. Each watchlist and user is stored as an individual object inside of a MongoDB collection, which can then be retrieved via the server's own web API. The front-end of the application uses React to dynamically render data that the user retrieves.

## status

Refactor currently in progress from EJS templated views -> React. The following stati are listed in prority

- [x] Login
- [x] Signup
- [x] Authentication & protected routes
- [x] (EJS -> React: In progress) Watchlist dashboard
- [x] (EJS -> React: In progress) Create new watchlist
- [ ] (EJS -> React: In progress) Assign movies to watchlist
- [ ] Manage your profile
- [ ] Assign users to watchlist

## history

Moviesquad began as a hackathon project, Showlist. Moviesquad established its own identity in a [redesign fork](https://github.com/ShockleyJE/showlist).

## how it's made:

### backend (/server):

- Runtime: Node.js
- Api: Express
- Modeling: Mongoose

### front end (/client)

- Framework: React
- Styling: Tailwind CSS

### services

- Image storage: cloudinary
- Movies: themoviedb

## technical

#### how to: run locally

```
# Install dependencies for server

npm install

# Install dependencies for client

npm run client-install

# Run the client & server with concurrently

npm run dev

# Run the Express server only

npm run server

# Run the React client only

npm run client
```

#### docker build process

##### server

`docker build . -t shockleyje/moviesquad-server`

`docker run -p 49160:8080 -i shockleyje/moviesquad-server`

##### client

#### configuration

In `config/config.env`

`docker build . -t shockleyje/moviesquad-client`

```
PORT=<int, used for server>
DB_STRING=<string, mongo URI with user auth>
CLOUD_NAME=<string, cloudinary name>
API_KEY=<int, cloudinary API key>
API_SECRET=<string, cloudinary key>
```

in `client/src/axios/`, configure the BASE_URL to match the port used for the server in the `.env` config.

cd to `/client` and stay in `/` for client and server respectively, then `npm install`

`npm run start` for client

`npm run dev` or `npm run start` for server

## lessons learned:

### optimizations

**technical**

- Single point of configuration for server and backend

- Persist login state between app sessions

- nginx server for static files

**features**

- Where to watch? Once a user knows what they want to see, the next important question is always, 'Where can I watch it?' A feature can be added to the show cards that displays the info on where each show can be found. This would involve an API call & some additional CSS

- Least Watched, Most Watched, Similar shows, etc Helpful lists can be generated from user feed back to assist users in discovering new content and each would have a button allowing users to quickly add the title to their personal list
