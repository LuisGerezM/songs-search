const SongLyric = ({ title, lyrics }) => {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>
        {lyrics?.body?.lyrics?.lyrics_body}
      </blockquote>
    </section>
  );
};

export default SongLyric;
