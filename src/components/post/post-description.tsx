import ThreeDots from '../graphics/three-dots';

interface IPostDescription {
  profilePic: string;
  name: string;
  time: number;
  isEdited?: boolean;
}

const PostDescription: React.FC<IPostDescription> = ({
  profilePic,
  name,
  time,
  isEdited = false
}) => {
  const message = isEdited ? `${time}mins ago . Edited` : `${time}mins ago`;

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex gap-2">
        <div className="w-11 h-11 rounded-full overflow-hidden">
          <img src={profilePic} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-1 justify-around">
          <span className="text-custom-white text-16px font-medium">
            {name}
          </span>
          <span className="text-custom-gray text-14px">{message}</span>
        </div>
      </div>
      <div>
        <ThreeDots />
      </div>
    </div>
  );
};

export default PostDescription;
