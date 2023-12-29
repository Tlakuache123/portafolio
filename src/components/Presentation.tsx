import TypewriterComponent from "typewriter-effect";

const Presentation = () => {
  return (
    <div className="m-2 text-4xl text-center overflow-visible min-h-12">
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .typeString("Claudio Arau")
            .pauseFor(750)
            .deleteChars(4)
            .typeString("<span class='font-bold'>Araujo</span>.")
            .start();
        }}
      />
    </div>
  );
};

export default Presentation;
