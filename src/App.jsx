import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage"
import PostListPage from "./pages/PostListPage"
import SinglePostPage from "./pages/SinglePostPage"
import WritePage from "./pages/WritePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

const App = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative overflow-x-hidden'>
      <Navbar/>
      <Routes>
        <Route path={"/"} index element={<HomePage/>}/>
        <Route path={"/posts"} element={<PostListPage/>}/>
        <Route path={"/:slug"} element={<SinglePostPage/>}/>
        <Route path={"/write"} element={<WritePage/>}/>
        <Route path={"/login"} element={<LoginPage/>}/>
        <Route path={"/signup"} element={<RegisterPage/>}/>
      </Routes>
    </div>
  )
}

export default App