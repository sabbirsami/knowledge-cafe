import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Blogs from "./Component/Blogs";
import Bookmarks from "./Component/Bookmarks";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Blogs />
                    </div>
                    <div className="col-lg-4">
                        <Bookmarks />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
