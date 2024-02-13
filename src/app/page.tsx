import Image from "next/image";
import styles from "./page.module.css";
import "./page.css";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a href="https://kazi.cc/" target="_blank" rel="noopener noreferrer">
            <span
              style={{
                fontFamily: "var(--font)",
                fontSize: "36px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              kazi.
            </span>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Box
          sx={{
            backgroundColor: "#1e1e1e",
            borderRadius: "10px",
            padding: "10px 40px 15px 40px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font)",
              fontWeight: "600",
              fontSize: "36px",
              color: "var(--accent)",
            }}
          >
            create-umer-app
          </Typography>
        </Box>
      </div>

      <div className={styles.grid}>
        <Link
          href="/signin"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sign In <span>-&gt;</span>
          </h2>
          <p>Pre-styled and integrated Sign In Page</p>
        </Link>

        <Link
          href="/signup"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sign Up <span>-&gt;</span>
          </h2>
          <p>Pre-styled and integrated Sign Up Page</p>
        </Link>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Explore documentation surrounding create-umer-app</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
