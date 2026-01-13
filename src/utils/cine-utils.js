export const getImgUrl = (name) => {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href
}


//ai assets folder ta jodi purata public er modhe raki tahole aita kaj korbe . aikahene just reke dilm jene rakar jonno
// function getImgUrl(name) {
//   return `/assets/movie-covers/${name}`;
// }
// export { getImgUrl };