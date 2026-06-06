import { useState } from "react";

function PreviewCard({
  navbarState,
  setNavbarState,
  previewState,
  setPreviewState,
  previewData,
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleOverlaps = (newIndex) => {
    if (newIndex >= previewData.image.length) {
      setCurrentImage(0);
    } else if (newIndex < 0) {
      setCurrentImage(previewData.image.length - 1);
    } else {
      setCurrentImage(newIndex);
    }
  };

  if (!previewData) return null;

  return (
    <div
      className={`${
        previewState ? "flex" : "hidden"
      } fixed inset-0 z-50 items-center justify-center bg-black/50`}
      onClick={() => {
        setPreviewState(false);
        setCurrentImage(0);
        setNavbarState(true);
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-[80vw] flex-col rounded-lg bg-[#282828] md:w-200"
      >
        {previewData.image?.length > 1 && (
          <button
            onClick={() => {
              handleOverlaps(currentImage - 1);
            }}
            className="absolute top-1/2 -left-5 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#585858]/60 px-5 py-3 font-semibold text-[#c5f022] transition hover:bg-[#585858]/80"
          >
            {"<"}
          </button>
        )}

        {previewData.image?.length > 1 && (
          <button
            onClick={() => {
              handleOverlaps(currentImage + 1);
            }}
            className="absolute top-1/2 -right-5 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#585858]/60 px-5 py-3 font-bold text-[#c5f022] transition hover:bg-[#585858]/80"
          >
            {">"}
          </button>
        )}

        <div className="relative h-[40vh] w-full overflow-hidden md:h-[50vh]">
          <img
            src={previewData.image[currentImage]}
            className="h-full w-full object-contain"
          />
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">
            {currentImage + 1} / {previewData.image.length}
          </div>
        </div>

        <div className="flex flex-col gap-2 p-5">
          <p className="text-xl font-bold text-white md:text-2xl">
            {previewData.name}
          </p>
          <p className="text-sm text-[#646464]">{previewData.description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {previewData.stack?.map((stack, i) => (
              <span
                key={i}
                className="rounded-sm bg-[#c5f022] px-2 py-1 text-xs font-semibold text-[#282828]"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
