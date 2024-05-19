export default function Button({ children, ...props }) {
  return (
      <div {...props} className="drum-pad grid gap-x-2 items-center container h-20 my-1 mx-auto w-full" >
        {children}
      </div>
  );
}
