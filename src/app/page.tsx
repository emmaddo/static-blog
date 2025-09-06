import React from "react";
import type {IApi} from "./types/IApi";
import {api} from "./api/api";

const Home = ()=> {
  const data: IApi<string>[] = api;
  return(
    <div className="flex flex-col p-4 m-4">
      <header>

      </header>

     <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <h2 className="col-span-full text-2xl font-bold mb-4 text-center">Latest Articles</h2>
  {data.map((article) => (
    <div key={article.id} className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-base font-semibold text-gray-800">{article.title}</h3>
    </div>
  ))}
</main>

      <footer>

      </footer>
    </div>
  );
}

export default Home;