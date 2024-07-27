import PostComment from './post-comment';
import PostDetails from './post-details';
import PostDescription from './post-description';
import { PostLayout } from '../../layouts/post-layout';

interface IPost {
  post: IPostData;
}

const Post: React.FC<IPost> = ({ post }) => {
  return (
    <PostLayout>
      <PostDescription
        profilePic={post.profilePic}
        name={post.name}
        time={post.time}
        isEdited={post.isEdited}
      />
      <PostDetails icon={post.icon} message={post.message} />
      <PostComment comment={post.comment} />
    </PostLayout>
  );
};

export default Post;
