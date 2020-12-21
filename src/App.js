import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { delData, getAllPosts } from "./store/actions";

const App = () => {
  const state = useSelector((state) => state?.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <ul>
      {state?.allPosts?.map((item) => (
        <li key={item?.id}>
          <h5>
            {item?.name}
            <span>
              <button
                style={{ marginLeft: "1rem" }}
                onClick={() => dispatch(delData(item?.id))}
              >
                Delete
              </button>
            </span>
          </h5>
        </li>
      ))}
    </ul>
  );
};

export default App;
