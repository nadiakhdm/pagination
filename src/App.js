import axios from "axios";
import React, { useEffect, useState } from "react";
import Data from "./Data";

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const result = await axios.get("https://fakestoreapi.com/users");
      setLoading(false)
      setPost(result.data);
      console.log(result.data);
    };
    fetchUser();
  }, []);
  return (
    <div>
      <h1>TestPagination</h1>
      {loading?<p>loading...</p>:
      <Data post={post}/>
      }
    </div>
  );
}
export default App;
