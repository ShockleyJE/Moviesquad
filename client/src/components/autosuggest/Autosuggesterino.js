import React from "react";
import Autosuggest from "react-autosuggest";

// Sponsored by: http://react-autosuggest.js.org/

// Base list of movies to autosuggest.
let movies = [
  {
    name: "Paddington 2",
    tmdb_id: 346648,
  },
  {
    name: "Paddington",
    tmdb_id: 116149,
  },
  {
    name: "Miss Marple: 4.50 from Paddington",
    tmdb_id: 499292,
  },
  {
    name: "Murder She Said",
    tmdb_id: 750,
  },
  {
    name: "Paddington Goes to School",
    tmdb_id: 97278,
  },
  {
    name: "Paddington in Peru",
    tmdb_id: 516729,
  },
  {
    name: "Paddington's Birthday Bonanza",
    tmdb_id: 317644,
  },
  {
    name: "アガサ・クリスティ　二夜連続ドラマスペシャル「パディントン発4時50分」",
    tmdb_id: 516306,
  },
  {
    name: "Paddington Bear's Alphabet Treasure Hunt",
    tmdb_id: 891564,
  },
  {
    name: "Paddington: The Man Behind the Bear",
    tmdb_id: 658302,
  },
  {
    name: "Paddington Bear - Please Look After This Bear",
    tmdb_id: 154794,
  },
  {
    name: "Paddington Lace",
    tmdb_id: 384692,
  },
  {
    name: "Paddington Bear: The Early Years",
    tmdb_id: 689841,
  },
  {
    name: "Paddington Bear Goes to the Movies",
    tmdb_id: 443087,
  },
];

const updateSuggestions = (queryParam) => {
  console.log(`Update Suggestions: SearchMovie ${queryParam}`);
  const URL = `https://api.themoviedb.org/3/search/multi?api_key=02d973db50942afc74c9f25f8957b6f3&query=${queryParam}`;
  let { data } = fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      try {
        //set the suggestions to only those which are valid
        console.log(data);
        let valid = data.results.filter(
          (ele) => ele.original_title != undefined
        );
        let suggArr = valid.map((ele) => {
          return { name: ele.original_title, tmdb_id: ele.id, ...ele };
        });
        console.log(suggArr);
        movies = suggArr;
        return suggArr;
      } catch (e) {
        console.log(e);
      }
    });
};

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : movies.filter(
        (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

class Autosuggesterino extends React.Component {
  constructor({ searchMovieHandler }) {
    super();

    this.searchMovie = "";
    this.searchMovieHandler = searchMovieHandler;

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    updateSuggestions(value);
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = (suggestion) => {
    console.log("movie was clicked:");
    console.log(suggestion);
    this.searchMovieHandler(suggestion);
    return suggestion.name;
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "enter movie",
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Autosuggesterino;
