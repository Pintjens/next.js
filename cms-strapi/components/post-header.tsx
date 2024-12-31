import CoverImage from './cover-image'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <p>Used to be avatar</p>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={'coverImage.ur'} slug={"test"}/>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
        <p>Used to be avatar</p>
        </div>
        <div className="mb-6 text-lg">
        <p>Used to be avatar</p>
        </div>
      </div>
    </>
  )
}
