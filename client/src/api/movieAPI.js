import axios from "./axios";

export async function getMovie(user, _id) {
  const URL = `movies/${_id}`;
  try {
    let message = {
      user: user,
      _id: _id,
    };
    const { data } = await axios.get(URL, JSON.stringify(message));
    try {
      console.log(
        `submitted watchlist get for ${_id}, received promise from request:`
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getMoviesByWatchlist(user, _id) {
  const URL = `movies/watchlist/${_id}`;
  try {
    let message = {
      user: user,
    };

    const { data } = await axios.get(URL, JSON.stringify(message));
    try {
      console.log(
        `requested movies by watchlist for ${_id}, received promise from request:`
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}

// take user object
// take movie object
// take watchlist id

// Post new movie request
export async function addMovieToWatchlist(user, movie, watchlist) {
  const URL = `movies/watchlist/${watchlist._id}`;
  try {
    let message = {
      user: user,
      movie: movie,
      watchlist_id: watchlist._id,
    };
    console.log(message);
    const { data } = await axios.post(URL, JSON.stringify(message));
    try {
      console.log(
        `posted movie ${movie.title} by watchlist for ${watchlist._id}, received promise from request:`
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}
