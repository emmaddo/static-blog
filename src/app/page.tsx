import React from "react";
import type {IApi} from "./types/IApi";
import {api} from "./api/api";

const Home = ()=> {
  const data: IApi<string>[] = api;
  return(
    <div className="flex flex-col p-4 m-4">
      <header>

      </header>

      <main>
<h2 className="p-2 items-center text-2xl">List of Articles</h2>
{
  data.map((article) => 
  <div key={article.id}>
    {article.title}
  </div>)
}
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default Home;