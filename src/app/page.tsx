"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Home() {
  const [maths, setMaths] = useState<number>()
  const [pc, setPc] = useState<number>()
  const [si, setSi] = useState<number>()
  const [ang, setAng] = useState<number>()
  const [philo, setPhilo] = useState<number>()
  const [result, setResult] = useState<number>()
  const [regional, setRegional] = useState<number>()
  const [result0, setResult0] = useState<number>()
  const [result1, setResult1] = useState<number>()

  const [classNote, setClassNote] = useState<number>()

  const handleClick = () => {
    if (maths && pc && si && ang && philo && regional && classNote) {
      const result = (maths * 9 + pc * 7 + si * 3 + ang * 2 + philo * 2) / 23
      const result0 = regional * 0.25 + result * 0.75
      const result1 = regional * 0.25 + result * 0.5 + classNote * 0.25
      setResult0(result0)
      setResult(result)
      setResult1(result1)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-vh">
      <div className="flex flex-col gap-5 mt-10">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="maths">Maths</Label>
          <Input type="number" className="max-w-56 text-center font-black" placeholder="MATHS" value={maths} onChange={(e) => setMaths(Number(e.target.value))} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">PC</Label>
          <Input type="number" className="max-w-56 text-center font-black" placeholder="PC" value={pc} onChange={(e) => setPc(Number(e.target.value))} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">SI/SVT</Label>
          <Input type="number" className="max-w-56 text-center font-black" placeholder="SI/SVT" value={si} onChange={(e) => setSi(Number(e.target.value))} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">ANGLAIS</Label>
          <Input type="number" className="max-w-56 text-center font-black" placeholder="ANGLAIS" value={ang} onChange={(e) => setAng(Number(e.target.value))} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">PHILO</Label>
          <Input type="number" className="max-w-56 text-center font-black" placeholder="PHILO" value={philo} onChange={(e) => setPhilo(Number(e.target.value))} />

        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Regional</Label>
          <Input type="number" className="max-w-56 text-center font-black" placeholder="Regional" value={regional} onChange={(e) => setRegional(Number(e.target.value))} />

        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Class</Label>
          <Input type="number" className="max-w-56 text-center font-black" placeholder="Class" value={classNote} onChange={(e) => setClassNote(Number(e.target.value))} />

        </div>

      </div>
      <Button className="mt-5" onClick={handleClick}>Calculate</Button>
      <h1 className="text-3xl font-bold text-left">National Result : <span >{result?.toFixed(2)}</span></h1>
      <h1 className="text-3xl font-bold text-left">Cpge Result : <span >{result0?.toFixed(2)}</span></h1>
      <h1 className="text-3xl font-bold text-left">Total Result : <span >{result1?.toFixed(2)}</span></h1>


    </div>
  );
}
