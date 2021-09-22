import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function SearchBar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const searchHandler = async () => {
    try {
      const { data, status } = await axios({
        url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`,
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: "SEARCH",
          data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="p-8">
      <div className="bg-white flex items-center rounded-full">
        <input
          className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Try 'margarita'"
          onChange={getValue}
        />
        <div className="p-2">
          <button
            onClick={() => {
              searchHandler();
            }}
            className="bg-indigo-600 text-white rounded-full hover:bg-indigo-900 focus:outline-none w-24 h-10 flex items-center justify-center"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
