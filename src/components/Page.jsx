import React from 'react';
import Header from "./Header.jsx";
import MovieList from "./MovieList.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";



const Page = () => {
  return (
    <div className="min-h-screen max-w-8xl mx-auto">
      {/* Centered content area */}
      <div className=" px-4 py-6">
        {/* Optional decorative background pattern */}
        <Header />
        <div className="rounded-2xl p-4 sm:p-6 shadow-lg my-10">
          <div className="mt-6 flex gap-6 ">
          <Sidebar/>
            <MovieList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;