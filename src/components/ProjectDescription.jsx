import imgPollito from "../assets/flappy.png"

function ProjectDescription() {

  let nombreDeProyecto = "Flappy Bird"
  
  // Fragmento de React <> </> se utiliza para agrupas etiquetas y que luego el sistema ignora al momento de pintar

  return (
    <>
      <h4 id="titulo-pollito">{nombreDeProyecto}</h4>
      <p>Un pollito que tiene que esquivar tuberias</p>
      {/* <img src="./flappy.png" alt="pollito" /> */}
      <img src={imgPollito} alt="pollito" />
    </>
  )

}

export default ProjectDescription