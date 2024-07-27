import girl from './assets/girl.png';
import john from './assets/john.png';

const posts: IPostData[] = [
  {
    id: '1',
    profilePic: girl,
    name: 'Thresa Web',
    time: 5,
    icon: '👋',
    message:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comment: 24,
    isEdited: false
  },
  {
    id: '2',
    profilePic: john,
    name: 'Marvin McKinney',
    time: 8,
    icon: '😞',
    message:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comment: 1,
    isEdited: true
  }
];

export default posts;
