import { getDictionary, type Locale, type Dictionary } from "@/lib/dictionaries";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Benefits } from "../components/Benefits";
import { AppDownload } from "../components/AppDownload";
import { Press } from "../components/Press";
import { Footer } from "../components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <main>
      <Navbar locale={locale as Locale} t={t} />
      <Hero t={t} />
      <Services t={t} />
      <Benefits t={t} />
      <AppDownload t={t} />
      <Press t={t} />
      <Footer t={t} />
    </main>
  );
}
