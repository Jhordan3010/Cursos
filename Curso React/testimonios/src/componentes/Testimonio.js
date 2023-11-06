import React from "react";

export function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img
      className="imagen-tgestmonio"
      src={require('../imagenes/img005.png')}
      alt="Foto1"/>
      <div className="conteedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Boston en Suicia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">manjdnsjnajfnjnfdjnajnfjndefjbnnanjannjan jk ck ac cjcnjncjndjn njnjdnjfnanjnacjncajdnjna</p>
      </div>
    </div>
  );
}

export default Testimonio