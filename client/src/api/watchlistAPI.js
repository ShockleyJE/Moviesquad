import axios from "./axios";

// take a user object
// base instances is defaulted to the authenticated user
// but may be extended with optional arguments that will
// allow compatibility for other users for future features

// take an optional user object in case of needing this for
// the nonauthed user in future features (see if user is already member of watchlist)
// return the users watchlists (yours, member, admin)
export async function getAllWatchlists(user) {
  const URL = `watchlists/user/${user._id}`;
  try {
    const { data } = await axios.get(URL, JSON.stringify({ user: user }));
    try {
      console.log("getAllWatchlists, received promise from request:");
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}
export async function createWatchlist(user, name) {
  const URL = `watchlists`;
  try {
    let message = {
      user: user,
      name: name,
    };
    const { data } = await axios.post(URL, JSON.stringify(message));
    try {
      console.log(
        `submitted watchlist creation for ${name}, received promise from request:`
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

export async function deleteWatchlist(user, wl_id) {
  const URL = `watchlists/${wl_id}`;
  try {
    let message = {
      user: user,
    };
    const { data } = await axios.delete(URL, JSON.stringify(message));
    try {
      console.log(
        `submitted watchlist deletion for ${wl_id}, received promise from request:`
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
