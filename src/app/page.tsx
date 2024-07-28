"use client";

import { useState } from "react";

import { useFilteredVarietals } from "../hooks";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NoteSelector from "../components/NoteSelector";
import Results from "../components/Results";

export default function Home() {
  const [color, setColor] = useState("");
  const [acidity, setAcidity] = useState([25, 75]);
  const [body, setBody] = useState([0, 50]);
  const [tannin, setTannin] = useState([25, 75]);
  const [oak, setOak] = useState("");
  const [floral, setFloral] = useState("");
  const [minerality, setMinerality] = useState("");

  const filteredVarietals = useFilteredVarietals(
    color,
    acidity,
    body,
    tannin,
    oak,
    floral,
    minerality,
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center space-y-8 p-8 text-sm sm:my-16 sm:rounded-lg sm:border sm:border-neutral-200 sm:px-16 sm:py-12 sm:text-base">
      <Header />
      <NoteSelector
        color={color}
        setColor={setColor}
        acidity={acidity}
        setAcidity={setAcidity}
        body={body}
        setBody={setBody}
        tannin={tannin}
        setTannin={setTannin}
        setOak={setOak}
        setFloral={setFloral}
        setMinerality={setMinerality}
      />
      <Results filteredVarietals={filteredVarietals} />
      <Footer />
    </main>
  );
}
