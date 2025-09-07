import React from "react";
import type {IPageSlugProps} from "../types/IPageSlugProps";
import { api } from "../api/api";
import type { IApi } from "../types/IApi";
import { TransitionIndicatorCleanup } from "react-dom/client";

const SlugPage = async ({params} : IPageSlugProps) => {
const {slug} = await params;
const article : IApi<string> | undefined = api.find((x) => slug === x.id);
  return(
    <div className="flex flex-col p-4 m-4">
      <header>

      </header>

     <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <h2 className="col-span-full text-2xl font-bold mb-4 text-center">{article ? article.title : "invalid"}</h2>
  
</main>

      <footer>

      </footer>
    </div>
  );
}

export default SlugPage;