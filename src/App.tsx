import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [accepted, setAccepted] = useState(false);

  const moveButton = () => {
    const randomTop = Math.random() * 200 - 100;
    const randomLeft = Math.random() * 200 - 100;

    setPosition({
      top: randomTop,
      left: randomLeft,
    });
  };

  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
        <div className="bg-slate-800/60 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl max-w-2xl w-full">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Confirmación recibida ✅
          </h2>

          <ul className="space-y-4 text-lg md:text-2xl text-left">
            <li>📍 Mirador con vista privilegiada</li>
            <li>🕗 8:00 pm (cuando la ciudad empieza a brillar)</li>
            <li>☕ Chocolatico caliente asegurado</li>
            <li>🌌 Cielo en modo estrellas activadas</li>
            <li>✨ Actitud: cómoda pero peligrosa</li>
            <li>🎶 Conversación que fluye sin guion</li>
          </ul>

          <p className="mt-8 text-xl md:text-3xl font-medium text-center">
            Paso a recogerte ✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white relative overflow-hidden px-6 md:px-20">
      <h1 className="text-2xl md:text-3xl mb-10 font-semibold text-center max-w-2xl">
        Plancito de mirador 🌄, chocolatico caliente ☕ y buena compañía ✨.
        <br />
        <br />
        El problema es que la buena compañía aún no confirma…
        <br />
        <br />
        ¿Confirmas? xd
      </h1>

      <div className="relative flex gap-6">
        <button
          onClick={() => setAccepted(true)}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 hover:scale-105 hover:cursor-pointer rounded-xl text-lg font-semibold transition"
        >
          Yeah
        </button>

        <button
          onMouseEnter={moveButton}
          onClick={moveButton} // también huye en celular
          style={{
            position: "relative",
            top: position.top,
            left: position.left,
          }}
          className="px-6 py-3 bg-red-500 rounded-xl text-lg font-semibold transition-all duration-200"
        >
          Nel prro
        </button>
      </div>
    </div>
  );
}

export default App;
