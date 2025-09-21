import Image from "./Image";
import { Link } from 'react-router-dom';

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        <div className='md:hidden xl:block'>
            <Image src="/postImg.jpeg" className={"rounded-2xl object-cover"}/>
        </div>

        <div className='flex flex-col gap-4 xl:w-[90%] 2xl:w-2/3'>
            <Link to="/test" className='text-lg md:text-2xl 2xl:text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti consectetur corporis tempore vitae voluptatibus quis 
            </Link>

            <div className='flex items-center gap-2 text-gray-400 text-sm'>
                <span>Written By</span>
                <Link to="/">John Doe</Link>
                <span>on</span>
                <Link to="/">Web Design</Link>
                <span>2 days ago</span>
            </div>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam, unde, amet cupiditate alias ad nemo qui eligendi, vero rerum reprehenderit ab quia cumque iure quae odit illum enim.</p>

            <Link to={"/test"} className='underline text-blue-800'>Read More</Link>
        </div>

    </div>
  )
}

export default PostListItem