import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Blogs from "./Component/Blogs";
import Bookmarks from "./Component/Bookmarks";
import { useState } from "react";

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const handleAddToBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    };
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Blogs handleAddToBookmark={handleAddToBookmark} />
                    </div>
                    <div className="col-lg-4">
                        <Bookmarks bookmarks={bookmarks} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
