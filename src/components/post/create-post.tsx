import { PostLayout } from '../../layouts/post-layout';

const CreatePost = () => {
  return (
    <PostLayout>
      <div className="flex justify-between items-center mb-3 font-medium text-18px text-custom-white">
        <div>Create Post</div>
      </div>
      <div className="bg-custom-black py-3 px-4 flex rounded-lg gap-2 mb-4">
        <div>
          <div className="w-12 h-12 bg-custom-dark rounded-full flex justify-center items-center">
            💬
          </div>
        </div>
        <input
          type="text"
          className="font-normal text-16px leading-6 text-custom-text w-full bg-custom-black hover:border-none resize-none placeholder-custom-text"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="text-white py-1 px-5 bg-custom-blue rounded-4px text-16px font-medium"
        >
          Post
        </button>
      </div>
    </PostLayout>
  );
};

export default CreatePost;
