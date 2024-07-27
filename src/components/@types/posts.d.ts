interface IPostData {
  id: string;
  profilePic: string;
  name: string;
  time: number;
  icon: string;
  message: string;
  comment: number;
  isEdited: boolean;
}

interface IPosts {
  posts: IPostData[];
}
