import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  let lyricStatusCode;
  if (lyric.message.header?.status_code === 404) {
    lyricStatusCode = 400;
  }

  return (
    <>
      {lyric.err ||
      lyric.name === "AbortError" ||
      lyricStatusCode === 404 ||
      lyricStatusCode === 400 ? (
        <Message
          msg={`Error: no existe la canción "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.message} />
      )}

      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el intérprete "<em>${search.artist}</em>"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
