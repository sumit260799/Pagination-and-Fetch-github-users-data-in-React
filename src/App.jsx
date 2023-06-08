import React, { useEffect, useState } from "react";
import Fetch from "./Fetch";
import Follower from "./Follower";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const { loading, data } = Fetch(url);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />;
        })}
      </section>
      hello
    </main>
  );
}

export default App;
