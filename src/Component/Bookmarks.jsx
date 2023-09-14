import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="mt-4 sticky-top">
            <div className="rounded bg-success-subtle border border-2 border-success mb-3">
                <p className="px-4 py-3 fw-semibold mb-0">
                    Spent time on read : 0 min
                </p>
            </div>
            <div className="p-4 bg-light rounded">
                <h4 className="pb-2">Bookmarked Blogs : {bookmarks.length}</h4>
                {bookmarks.map((bookmark, idx) => (
                    <Bookmark key={idx} bookmark={bookmark}></Bookmark>
                ))}
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
