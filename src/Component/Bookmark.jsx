import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    console.log(bookmark);
    return (
        <div className="mb-2 p-3 bg-body-tertiary border border-2 rounded">
            <h6>{bookmark.title}</h6>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
};
export default Bookmark;
