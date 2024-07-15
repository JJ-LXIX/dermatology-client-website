type Props = {};

export default function ScrollingText({}: Props) {
  let arr = Array.from({ length: 20 }, (x, i) => i);
  return (
    <>
      {arr.map((e, index: number) => {
        return (
          <div
            key={index}
            className="flex justify-center items-center space-x-2"
          >
            <div className="text-white text-xl flex" aria-hidden="true">
              HELIOS
            </div>
            <div className="text-white text-xl" aria-hidden="true">
              +
            </div>
            <div className="text-white text-xl" aria-hidden="true">
              BEAUTY
            </div>
            <div className="text-white text-xl" aria-hidden="true">
              +
            </div>
            <div className="text-white text-xl" aria-hidden="true">
              ELEGANCE
            </div>
            <div className="text-white text-xl" aria-hidden="true">
              +
            </div>
          </div>
        );
      })}
    </>
  );
}
