import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongsSearch = () => {
  // Guarda artista, cancion a buscar
  const [search, setSearch] = useState(null);
  // Guarda info del artista
  const [lyric, setLyric] = useState(null);
  // Guarda info del artista canción
  const [bio, setBio] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      // Los datos sensibles se almacenan en un .env, en este caso no hay problema de dejarla aqui
      let apiKey = "81a4296fc28587ccf9026ea9feccca77";
      let songUrl = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_artist=${artist}&q_track=${song}&apikey=${apiKey}`;

      // Cargando Spiner
      setLoading(true);

      // Desestructuro al Promise.all
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <h2>Songs Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongsSearch;
