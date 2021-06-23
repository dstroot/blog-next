import Avatar from "../components/avatar";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author, time }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6">
          <Avatar
            name={author.name}
            picture={author.picture}
            size={55}
            date={date}
            time={time}
          />
        </div>
      </div>
    </>
  );
}
