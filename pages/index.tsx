import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MemberList from "@/components/MemberList";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const members = [
    "Kazimir UH2O",
    "Del206 (email: mr.blairdeee.66@gmail.com)",
    "ALEXEMEDR",
    "Mden",
    "Big Stupid",
    "Happy Spudge",
    "R1zery",
    "Lips"
]

export default function Home() {
  return (
    <>
      <Head>
        <title>UH2O Records</title>
        <meta name="description" content="UH2O Records official site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
          <header>
              <div>
                  UH2O Records
              </div>
              <Link href="https://www.tiktok.com/@uh2orecords" target="_blank">
                  <Image src="/images/tt.png" alt="TikTok" width={28} height={28} />
              </Link>
              <Link href="https://t.me/uh2orecords" target="_blank">
                  <Image src="/images/tg.png" alt="Telegram" width={28} height={28} />
              </Link>
              <Link href="https://www.youtube.com/@UH2O" target="_blank">
                  <Image src="/images/yt.png" alt="YouTube" width={28} height={28} />
              </Link>
          </header>
          <main>
              Members:
              <MemberList members={members} />
          </main>
          <footer>
              <div className="email-block">
                  email: uh2orecords47@gmail.com
              </div>
          </footer>
      </div>
    </>
  );
}
