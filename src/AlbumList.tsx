import "./AlbumList.css";
import Album from "./type";

type Props = {
  albums: Album[];
}

const AlbumList: React.FC<Props> = (props: Props) => {
  const { albums } = props;
  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>
          <img src={album.url} alt={album.title} />
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
