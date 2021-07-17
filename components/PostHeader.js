import { Avatar } from "./Avatar";
import { CoverImage } from "./CoverImage";
import { PostTitle } from "./PostTitle";

export const PostHeader = ({ title, coverImage, date, author }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          title={title}
          src={coverImage}
          width={1240}
          height={620}
          priority={true}
          placeholder="empty"
          blurDataURL=""
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6">
          <Avatar
            name={author.name}
            picture={author.picture}
            size={55}
            date={date}
          />
        </div>
      </div>
    </>
  );
};
