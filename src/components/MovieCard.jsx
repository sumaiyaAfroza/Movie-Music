import React, {useContext, useState} from 'react';
import {MovieContext} from "../context/index.js";
import {toast} from "react-toastify/unstyled";
import Rating from "./Rating.jsx";
import {getImgUrl} from "../utils/cine-utils.js";
import MovieDetailsModal from "./MovieDetailsModal.jsx";

const MovieCard = ({movie}) => {
  const {state, dispatch} = useContext(MovieContext)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleAddToCart = (event, movie) => {
    event.stopPropagation()
    const found = state.cartData.find(item => item.id === movie.id)
    if(!found) {
      dispatch({
        type: 'Add_To_Cart',
        payload: {...movie}
      })
      toast.success(``)
    }
  }

  const handleMovieSelection = (movie) => {
    setShowModal(true)
    setSelectedMovie(movie)
  }
  const handleModalClose = () => {
    setShowModal(false)
    setSelectedMovie(null)
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="group relative h-full flex flex-col p-4 border border-black/10 dark:border-white/10 shadow-sm hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-primary/20 rounded-xl bg-white dark:bg-gray-900 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />

        <a href="#" onClick={() => handleMovieSelection(movie)} className="flex flex-col h-full relative">
          {/* Image container with overlay effect */}
          <div className="relative overflow-hidden rounded-lg mb-4 flex-shrink-0">
            <img
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              src={getImgUrl(`${movie.cover}`)}
              alt={movie.title}
            />


            {/* Price badge */}
            <div className="absolute top-3 right-3 bg-primary text-black font-bold px-3 py-1.5 rounded-full text-sm shadow-lg backdrop-blur-sm">
              ${movie.price}
            </div>
          </div>

          <figcaption className="pt-2 relative z-10 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {movie.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 font-medium">
              {movie.genre}
            </p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>

            {/* Spacer to push button to bottom */}
            <div className="flex-grow"></div>

            <button
              className="w-full bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary rounded-lg py-3 px-5 flex items-center justify-center gap-2 text-black font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 mt-auto"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="/src/assets/tag.svg" alt="" className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;