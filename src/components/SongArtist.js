const SongArtist = ({ artist }) => {
  return (
    <div className="artist-class">
      <h3>Nombre: {artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>
        <b>País: </b>
        {artist.strCountry}
      </p>
      <p>
        <b>Género: </b>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        <b>Sitio Web Oficial</b>
      </a>
      <p>
        <b>Biografía: </b> {artist.strBiographyEN}
      </p>
    </div>
  );
};

export default SongArtist;
