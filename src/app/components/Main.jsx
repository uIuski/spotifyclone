import SlideMain from "./SlideMain";
import songs from "../lib/songs";

const Main = () => {
  return (
    <div className="w-3/4 h-full overflow-y-scroll bg-neutral-900 rounded-xl p-8 scrollbar-none">
      <SlideMain songs={songs} title="Canciones del momento" />
      <SlideMain songs={songs} title="Recomendado para ti" />
      <SlideMain songs={songs} title="Reproducido recientemente" />
      <SlideMain songs={songs} title="Nuevos lanzamiento para ti" />
    </div>
  );
};

export { Main };
