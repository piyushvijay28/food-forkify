import Header from "./Header";
import RightSidebar from "./RightSidebar";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <>
      <div className="body bg-white  overflow-scroll  w-[80%] shadow-lg rounded-lg h-[90vh]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="header">
          <Header />
        </div>
        <div className="flex h-full  ">
          <SideBar />
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Body;
