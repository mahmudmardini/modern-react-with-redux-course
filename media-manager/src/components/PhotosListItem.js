import {useRemovePhotoMutation} from "../store";
import {GoTrash} from "react-icons/go";

function PhotosListItem({ photo }) {
  const [ removePhoto ] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
      <div className="relative m-2" onClick={handleRemovePhoto}>
        <img className="h-20 w-20" src={photo.url} alt="random pic"/>
        <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 cursor-pointer">
          <GoTrash className="text-3xl" />
        </div>
      </div>
  );
}

export default PhotosListItem;
