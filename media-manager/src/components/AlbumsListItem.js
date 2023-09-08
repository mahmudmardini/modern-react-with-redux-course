import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import {GoTrash} from "react-icons/go";
import {useRemoveAlbumMutation} from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [ removeAlbum, results ] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = <>
    <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
      <GoTrash />
    </Button>
    {album.title}
  </>


  return (
      <ExpandablePanel key={album.id} header={header}>
        List of photos in the album
        <PhotosList album={album}/>
      </ExpandablePanel>
  );
}

export default AlbumsListItem;
