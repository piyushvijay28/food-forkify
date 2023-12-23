import { IoIosSearch } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { AiTwotoneEdit } from "react-icons/ai";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { API_Key, base_url } from "../Utils/constant";
import { setItems, setToggle } from "../Utils/Appslice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
  const [searchInput, setsearchInput] = useState("");
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(
      base_url + `?search=${searchInput}&key=${API_Key}`
    );
    const json = await data.json();
    console.log(json.data.recipes)
    dispatch(setItems(json?.data?.recipes))
  };

  const handleSearch = () => {
    fetchData();
  };

  const handleBookMarkClick = () => {
    dispatch(setToggle())
  }

  return (
    <>
      <div className="flex justify-between items-center px-10 min-h-[13vh] py-2 bg-[#f9f5f5] rounded-md">
        <img
          className="w-[100px]"
          src="https://forkify-v2.netlify.app/logo.09084f39.png"
          alt=""
        />
        <div className="flex relative ">
          <input
            value={searchInput}
            onChange={(e) => setsearchInput(e.currentTarget.value)}
            className=" bg-gray-200 px-5 py-2 w-[30rem] rounded-2xl outline-none placeholder:text-black"
            type="text"
            placeholder="Search over 1,00,000 recipies"
          />
          <div className="flex items-center absolute right-0 transition-all duration-100 delay-100 cursor-pointer hover:scale-105 bg-[#f7be86] h-full px-5 rounded-2xl space-x-2 ">
            <IoIosSearch />
            <button
              onClick={handleSearch}
              className=" transition-all duration-100 delay-100 cursor-pointer  "
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-7 ">
          <div className="flex items-center space-x-2 cursor-pointer">
            <AiTwotoneEdit />
            <h1>Add Recipies</h1>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <CiBookmark />
            <h1 onClick={handleBookMarkClick}>Book Marks</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;



