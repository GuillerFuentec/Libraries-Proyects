export default function Button({ children }) {
  return (
    <>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
        {children}
      </button>
    </>
  );
}
