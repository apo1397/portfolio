"use client";

import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/browse'); // Redirect to /browse
  return null; // Return null to prevent rendering anything
}
