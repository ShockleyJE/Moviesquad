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
        `submitted met movies by watchlist for ${_id}, received promise from request:`
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
