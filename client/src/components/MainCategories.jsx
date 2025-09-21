import { Link } from "react-router-dom";
import Search from "./Search";
const categories = [
  {
    id: 1,
    name: "All Posts",
    to: "/posts",
    styles: "bg-blue-800 text-white rounded-full px-4 py-2",
  },
  {
    id: 2,
    name: "Web Design",
    to: "/posts?cat=web-design",
    styles: "hover:bg-blue-50 rounded-full px-4 py-2",
  },
  {
    id: 3,
    name: "Development",
    to: "/posts?cat=development",
    styles: "hover:bg-blue-50 rounded-full px-4 py-2",
  },
  {
    id: 4,
    name: "Databases",
    to: "/posts?cat=databases",
    styles: "hover:bg-blue-50 rounded-full px-4 py-2",
  },
  {
    id: 5,
    name: "Search Engines",
    to: "/posts?cat=seo",
    styles: "hover:bg-blue-50 rounded-full px-4 py-2",
  },
  {
    id: 6,
    name: "Marketing",
    to: "/posts?cat=marketing",
    styles: "hover:bg-blue-50 rounded-full px-4 py-2",
  },
];
const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4  shadow-lg items-center justify-center gap-8'>
        <div className="flex-1 flex items-center justify-between flex-wrap">
            {categories.map((item)=>(
                <Link to={item.to} key={item.id} className={`${item.styles} text-sm 2xl:text-lg`}>{item.name}</Link>
            ))}
        </div>
        <span className="text-2xl font-medium">|</span>
        <div className="bg-gray-100 rounded-full ">
            <Search/>
        </div>
    </div>
  )
}

export default MainCategories