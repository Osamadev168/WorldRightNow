import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Search = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [blogs, setBlogs] = useState([]);
  const getData = async (e) => {
    if (e.key === "Enter" && value !== "") {
      navigate(search);
      await axios
        .get(`http://localhost:7000/search?blogs=${value}`)
        .then((res) => {
          setBlogs(res.data);
        });
    }
  };
  useEffect(() => {
    search.replace("");
    setValue("");
    navigate("/blog/search");
  }, []);
  return (
    <div
      style={{
        margin: 100,
      }}
    >
      <div>
        <input
          onChange={(e) => {
            setValue(e.target.value);
            setSearch(`/blog/search?blogs=${e.target.value}`);
          }}
          onKeyDown={getData}
        />
      </div>
      <>
        <div>
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => {
              return (
                <>
                  <h1>{blog.title}</h1>
                </>
              );
            })
          ) : blogs && blogs.length === 0 ? (
            <>NO RESULTS</>
          ) : (
            <></>
          )}
        </div>
      </>
    </div>
  );
};

export default Search;
