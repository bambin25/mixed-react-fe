import PropTypes from "prop-types";
function Movie({ id, coverImage, title, summary }) {
  return (
    <>
      <div className="movie">
        <img src={coverImage} alt="cover_image" />
        <h2>
          {title} : {id}
        </h2>
        <p>{summary}</p>
      </div>
    </>
  );
}

Movie.proptypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default Movie;
