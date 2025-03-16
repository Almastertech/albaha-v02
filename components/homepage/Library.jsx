import { AlbahaReports } from "./AlbahaReports";

import { AlbahaGallery } from "./AlbahaGallery";
import { AlbahaNews } from "./AlbahaNews";

function Library() {
  return (
    <section className="snap-start py-8 text-white flex flex-col items-center justify-end gap-2 bg-[url('/assets/home/library/librarybackground.jpeg')] bg-center bg-cover bg-no-repeat h-screen">
      <h2 className="text-4xl mt-20 font-bold">مكتبة المرصد</h2>
      <AlbahaNews />
      <AlbahaGallery />
      <AlbahaReports />
    </section>
  );
}

export default Library;
