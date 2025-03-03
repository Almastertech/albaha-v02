import Test from "@/components/test";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("HomePage");
  const testdata = t.raw("test");
  return (
    <div>
      <Test data={t("test")} />
    </div>
  );
}

export default Page;
