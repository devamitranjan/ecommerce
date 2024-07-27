import ChatBubble from '../graphics/chat-bubble';

interface IPostComment {
  comment: number;
}

const PostComment: React.FC<IPostComment> = ({ comment }) => {
  const commentMsg = comment < 2 ? `${comment} comment` : `${comment} comments`;

  return (
    <div>
      <div className="mt-2 flex gap-2 ">
        <ChatBubble />
        <span className="text-custom-text font-medium text-14px leading-extra-loose">
          {commentMsg}
        </span>
      </div>
    </div>
  );
};

export default PostComment;
