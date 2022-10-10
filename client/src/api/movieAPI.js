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

export async function deleteMovie(user, movie) {
  const URL = `movies/delete/${movie._id}`;
  console.log(`Deleting to URL: ${URL}`);
  try {
    const { data } = await axios.delete(URL);
    console.log(`deleted movie ${movie.title}`);
    console.log(data);
  } catch (err) {
    console.log(`Error posting movie ${err}`);
  }
}

export async function likeMovie(user, movie) {
  const URL = `movies/like/${movie._id}`;
  console.log(`Liking to URL: ${URL}`);
  try {
    const { data } = await axios.put(URL);
    console.log(`liked movie ${movie.title}`);
    console.log(data);
  } catch (err) {
    console.log(`Error posting movie ${err}`);
  }
}

export async function dislikeMovie(user, movie) {
  const URL = `movies/dislike/${movie._id}`;
  console.log(`Disliking to URL: ${URL}`);
  try {
    const { data } = await axios.put(URL);
    console.log(`disliked movie ${movie.title}`);
    console.log(data);
  } catch (err) {
    console.log(`Error posting movie ${err}`);
  }
}

export async function watchMovie(user, movie) {
  const URL = `movies/watch/${movie._id}`;
  console.log(`Liking to URL: ${URL}`);
  try {
    const { data } = await axios.put(URL);
    console.log(`liked movie ${movie.title}`);
    console.log(data);
  } catch (err) {
    console.log(`Error posting movie ${err}`);
  }
}
