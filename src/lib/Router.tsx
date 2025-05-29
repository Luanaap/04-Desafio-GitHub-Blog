import { Route, Routes } from "react-router-dom";

import { Blog } from "../pages/Blog";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { PostDetail } from "../pages/Blog/components/PostDetail";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout></DefaultLayout>}>
        <Route path="/" element={<Blog></Blog>}></Route>
        <Route path="/:id" element={<PostDetail></PostDetail>}></Route>
      </Route>
    </Routes>
  );
}