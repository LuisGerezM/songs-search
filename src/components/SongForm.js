import { useState } from "react";

// Estado inicial
const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // evento submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos Incompletos");
      return;
    } else {
      handleSearch(form);
      // Limpiamos form
      setForm(initialForm);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Interprete; Por Ej: Kendrick Lamar"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción; Por Ej: Barbed Wire"
          onChange={handleChange}
          value={form.song}
        />
        <input className="submit" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default SongForm;
