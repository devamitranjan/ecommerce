import { CreatePost, Post } from '../../components/post';
import posts from '../../mocks/posts';

const DashboardPage = () => {
  return (
    <>
      <div className="w-1/2 mt-10 mb-7 flex flex-col">
        <div className="text-28px font-medium text-custom-white">
          Hello Jane
        </div>
        <div className="text-14px text-custom-gray mt-2">
          How are you doing today? Would you like to share something with the
          community 🤗
        </div>
      </div>
      <CreatePost />
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};
export default DashboardPage;
