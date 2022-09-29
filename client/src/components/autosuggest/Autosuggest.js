import React, { useState } from "react";

const Autosuggest = ({ searchSuggestions, searchMovie }) => {
  const movies = [
    {
      name: "Paddington 2",
    },
    {
      name: "Paddington",
    },
    {
      name: "Miss Marple: 4.50 from Paddington",
    },
    {
      name: "Murder She Said",
    },
    {
      name: "Paddington Goes to School",
    },
    {
      name: "Paddington in Peru",
    },
    {
      name: "Paddington's Birthday Bonanza",
    },
    {
      name: "アガサ・クリスティ　二夜連続ドラマスペシャル「パディントン発4時50分」",
    },
    {
      name: "Paddington Bear's Alphabet Treasure Hunt",
    },
    {
      name: "Paddington: The Man Behind the Bear",
    },
    {
      name: "Paddington Bear - Please Look After This Bear",
    },
    {
      name: "Paddington Lace",
    },
    {
      name: "Paddington Bear: The Early Years",
    },
    {
      name: "Paddington Bear Goes to the Movies",
    },
  ];

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : searchSuggestions.filter(
          (ele) => ele.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion) => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  return <div>Autosuggest</div>;
};

export default Autosuggest;
