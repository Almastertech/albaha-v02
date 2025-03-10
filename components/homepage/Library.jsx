import { AlbahaReports } from "./AlbahaReports";

import { AlbahaGallery } from "./AlbahaGallery";

function Library() {
  return (
    <section className="py-8 text-white flex flex-col items-center gap-2 bg-[url('/assets/home/library/librarybackground.jpeg')] bg-center bg-cover bg-no-repeat">
      <h2 className="text-4xl font-bold">مكتبة المرصد</h2>
      <AlbahaNews />
      <AlbahaGallery />
      <AlbahaReports />
    </section>
  );
}

const AlbahaNews = () => {
  return (
    <section className="w-full px-12  text-white p-6 border-b-2 border-[#DED3B3] overflow-hidden">
      <h3 className="text-2xl font-bold mb-0">أخبار المرصد</h3>
    </section>
  );
};

export default Library;
