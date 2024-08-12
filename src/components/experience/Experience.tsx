interface Iprops {
  id: string;
}

export default function Experience({ id }: Iprops) {
  return (
    <div id={id} className="scroll-smooth">
      <h1 className="text-white">Experience</h1>
    </div>
  );
}
