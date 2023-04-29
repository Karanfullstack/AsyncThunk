import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "./features/apiSlice";
function App() {
  const { users, loading, error } = useSelector((state) => {
    return state.app;
  });
  const dispatch = useDispatch();
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error !== null) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="App">
      {users.map((data) => (
        <li key={data.id}>{data.login}</li>
      ))}
      <button onClick={() => dispatch(getAllData())}>Reveal</button>
    </div>
  );
}

export default App;
