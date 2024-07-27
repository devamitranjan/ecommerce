interface IPostDetails {
  message: string;
  icon: string;
}

const PostDetails: React.FC<IPostDetails> = ({ message, icon }) => {
  return (
    <div className="bg-custom-black py-3 px-4 flex rounded-lg gap-2">
      <div>
        <div className="w-12 h-12 bg-custom-dark rounded-full flex justify-center items-center">
          {icon}
        </div>
      </div>
      <span className="font-normal text-16px leading-6 text-custom-text">
        {message}
      </span>
    </div>
  );
};

export default PostDetails;
