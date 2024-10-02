import { SignOut } from "@/components/sign-out";
import { getI18n } from "@/locales/server";
import { getUser } from "@v1/supabase/cached-queries";

export const metadata = {
  title: "Home",
};

export default async function Page() {
  const user = await getUser();
  const t = await getI18n();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <p>{t("welcome", { name: user?.data?.email })}</p>

        <SignOut />
      </div>
    </div>
  );
}
