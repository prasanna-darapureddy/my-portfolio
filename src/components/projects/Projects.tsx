interface Iprops {
  id: string;
}

export default function Projects({ id }: Iprops) {
  return (
    <div id={id} className="scroll-smooth">
      <h1 className="text-white">Projects</h1>
    </div>
  );
}
