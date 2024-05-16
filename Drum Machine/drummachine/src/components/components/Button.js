export default function Button({ children }) {
  return (
      <div className="Pad-Buttons grid gap-x-2 items-center container w-20 h-20 my-1 mx-12 mx-auto w-full" id={children}>
        {children}
      </div>
  );
}
