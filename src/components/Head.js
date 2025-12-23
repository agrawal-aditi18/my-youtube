import { useDispatch, useSelector } from "react-redux"
import searchLogo from "../search-logo.png"
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
const [searchQuery, setSearchQuery] = useState("");
const [suggestions, setSuggestions] = useState([]);
const [showSuggestions, setShowSuggestions] = useState(false);

const searchCache = useSelector((store) => store.search);
const dispatch = useDispatch();
 

/*
* searchCache = {
* "iphone" : ["iphone 11", "iphone 14"]}
*
* searchQuery = iphone 
*/
useEffect(() => {
const timer = setTimeout(() => {
  if(searchCache[searchQuery]) {
    setSuggestions(searchCache[searchQuery]);
  }
  else{
    getSearchSuggestions();
  }
  }, 200);

return () => {
  clearTimeout(timer);
 };
  }, [searchQuery]);

  const getSearchSuggestions = async() => {
    // console.log("APT Call" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }))
  }


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
        <div className="flex col-span-1">
            <img 
            onClick={() => toggleMenuHandler()}
            className="h-7 cursor-pointer"
            alt = "menu"
            src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9B9snrsfNCLmPN8SK8WARBp_ENIItDvXcg&s" />
            <a href = "/">
            <img 
            className='h-7 mx-3'
            alt = "you-tube logo"
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
            </a>
        </div>
        <div className='col-span-1 '>
          <div className="flex ">
            <input className='px-5 w-5/6 rounded-l-full border border-gray-400'  type ="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder ="Search"
            />
            <button className=' h-10 px-4 rounded-r-full border border-gray-400 bg-gray-100'>
                <img 
                className='h-7'
                alt="search-logo"
                src={searchLogo}/>
                </button>
        </div>
       {showSuggestions && searchQuery &&(
        <div className="relative ">
          <ul className="absolute border left-0 border-gray-100 bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg z-50">
            {suggestions.map((s) => (
              <li key={s}className="py-2 px-3 hover:bg-gray-100 rounded-lg">{s}</li>
            ))}
            
            
          </ul>
        </div>
        )}
        </div>
        <div className='col-span-1 flex justify-end mx-5'>
            <img className='h-8' 
            alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            
        </div>
    </div>
  )
}

export default Head