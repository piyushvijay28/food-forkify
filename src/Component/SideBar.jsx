import { useDispatch, useSelector } from "react-redux";
import { API_Key } from "../Utils/constant";
import { setRecipieIng } from "../Utils/Appslice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.app.items);
  const recipieIng = useSelector((store) => store.app.recipieIng);
  const handleReipieIng = async (id) => {
    const data = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${API_Key}`);
    const json = await data.json();
    dispatch(setRecipieIng(json?.data?.recipe))
    
  }
  return data.length === 0 || null ? (
    <div className="w-[40rem] h-full  relative">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Start by searching recipies ! have a fun😂</h1>
    </div>
  ) : (
    <>
      <div className=" overflow-y-scroll sidebar-container  w-[40rem] h-full px-5 ">
        {data.map((items) => {
          const { id, title, image_url, publisher } = items;
          return (
            <>
              <div key={id} onClick={() => handleReipieIng(id)}  className="flex items-center mt-5 space-x-5 cursor-pointer">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={image_url}
                  alt=""
                />
                <div>
                  <h1 className="text-orange-700 font-bold text-lg ">
                    {title}
                  </h1>
                  <p className="">{publisher}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
