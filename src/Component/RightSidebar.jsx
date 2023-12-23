import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAccessTime } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { setBookMarkData } from "../Utils/Appslice";
import { ToastContainer } from "react-toastify";

const RightSidebar = () => {
  const dispatch = useDispatch();
  const bookMarkData = useSelector((store) => store.app.BookMarkData)
  const toggle = useSelector((store) => store.app.toggle);
  const ingData = useSelector((store) => store.app.recipieIngridients);
  if (ingData.length === 0) return <h1 className="absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2" >Please search for Ingriedents......</h1>
  const { id, image_url, title, cooking_time, servings, ingredients, publisher,source_url } = ingData;
  const handleBookMark = (id) => {
    dispatch(setBookMarkData(id))
  }
  return (
    <>
    <ToastContainer />
      <div className="w-full h-full bg-[rgb(249,245,245)]">
        <div className="w-full h-[40vh] relative">
          <img className="w-full h-full object-cover" src={image_url} alt="" />
          <div className="absolute bg-white bottom-0 left-1/4 px-5 py-5">
            <h1 className="font-bold">{title}</h1>
          </div>
        </div>
        <div className="flex justify-around mt-5 space-x-4">
          <div className="flex items-center space-x-3">
            <MdAccessTime />
            <h1 className="text-orange-700 font-bold">{cooking_time} MINUTES </h1>
          </div>
          <div className="flex items-center space-x-3">
            <BsPeople />
            <h1 className="text-orange-700 font-bold">{servings} SERVINGS </h1>
          </div>
          <div className="bg-orange-700 rounded-full px-2 py-2 ">
            <CiBookmark onClick={() => handleBookMark(id)} className="text-3xl text-white cursor-pointer  " />
          </div>
        </div>
        <div className="mt-10 bg-[#e6e9e9]">
          <h1 className="text-center font-bold text-lg pt-5 text-orange-700 uppercase tracking-wider">
            Recipie Ingriedents
          </h1>
          <div className="grid grid-cols-2 px-5 gap-x-10  py-5 w-[80%] mx-auto ">
            <div>
              {ingredients &&
                ingredients.slice(0, 5).map((items) => {
                  return (
                    <>
                      <div className="flex items-center space-x-2 mt-5">
                        <MdOutlineDone className="text-orange-700" />
                        <h1>
                          {items.quantity}
                          {items.unit} {items.description}
                        </h1>
                      </div>
                    </>
                  );
                })}
            </div>
            <div>
              {ingredients &&
                ingredients.slice(5, 10).map((items) => {
                  return (
                    <>
                      <div className="flex items-center mt-5 space-x-2">
                        <MdOutlineDone className="text-orange-700" />
                        <h1>
                          {items.quantity}
                          {items.unit} {items.description}
                        </h1>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="relative h-[30vh]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <h1 className="text-orange-700  font-bold text-xl uppercase">How to Cook it</h1>
            <p className="mt-5 font-semibold">This recipe was carefully designed and tested by <u>{publisher}</u>. Please check out directions at their website.</p>
            <button className="mt-5 border bg-orange-700 text-white font-bold px-10 cursor-pointer rounded-full py-3"><a href={source_url} target="__blank">Direction</a></button>
          </div>
        </div>
      </div>
      <div className={`bg-white w-[400px] ${toggle === true ? `block` : `hidden` } z-20 min-h-[10vh] h-auto absolute top-15 right-0`}>
          {
            bookMarkData.map((items) => {
              return (
                <>
                <div className="flex items-center space-x-3 mt-3 py-5 px-3">
                  <img className="w-[70px] h-[70px] rounded-full" src={items[0].image_url} alt="" />
                  <div>
                    <h1>{items[0].title}</h1>
                    <h2>{items[0].publisher}</h2>
                  </div>
                </div>
                </>
              )
            })
          }
      </div>
    </>
  );
};

export default RightSidebar;
