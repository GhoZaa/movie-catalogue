import FavoriteMovieIdb from '../../src/scripts/data/favoritemovie-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithMovie = async (movie) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteMovies: FavoriteMovieIdb,
    movie,
  });
};

export { createLikeButtonPresenterWithMovie };
