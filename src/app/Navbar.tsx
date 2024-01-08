import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex bg-emerald-500 py-2 px-5">
      <h1 className="text-2xl text-white">Navbar</h1>
      <ul className="flex gap-5 text-white items-center">
        <li className="ml-5">
          <Link href="/">Atomic</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/about/profile">profile</Link>
        </li>
        <Link href="*">
          <li>logout</li>
        </Link>
      </ul>
    </nav>
  );
}
