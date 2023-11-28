import { useSaveGetCurrentUser } from "@/lib/react-query/queries";

const Saved = () => {
  const { data: currentUser } = useSaveGetCurrentUser();
  const saveArray = currentUser?.save || [];

  return (
    <div className="save-container">
      <div className="flex gap-2">
        <img
          src="/assets/icons/save.svg"
          alt="saved"
          width={30}
          height={32}
          className="cursor-pointer invert-white"
        />
        <h2 className="h3-bold md:h2-bold w-full">Saved Posts</h2>
      </div>
      {saveArray.map((item) => (
        <div className="post-card mt-10">
          <div key={item.$id} className="">
            <div className="small-medium lg:base-medium py-5">
              <p className="">{item.post.caption}</p>
            </div>
            <img
              src={item.post.imageUrl}
              alt={item.post.caption}
              width={100}
              height={100}
              className="post-card_img"
            />

            <p>Location: {item.post.location}</p>
            <p>#{item.post.tags.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Saved;
