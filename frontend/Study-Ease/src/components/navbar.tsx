"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LogOut, History, Upload as UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isPublicPage = ["/login", "/register"].includes(pathname);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <header className="border-b bg-[#232946] shadow-md">
      <div className="container custom-container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="StudyEase Logo"
            width={280}
            height={60}
          />
        </Link>
        <div className="flex items-center gap-6">
          {!isPublicPage && (
            <>
              <Link href="/history">
                <Button variant="ghost" className="flex items-center gap-2 bg-[#7c3aed] hover:bg-[#a78bfa] text-white shadow-md rounded-xl">
                  <History className="h-4 w-4" />
                  History
                </Button>
              </Link>
              <Link href="/">
                <Button variant="default" className="flex items-center gap-2 bg-[#7c3aed] hover:bg-[#a78bfa] text-white shadow-md rounded-xl">
                  <UploadIcon className="h-4 w-4" />
                  Upload
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="flex items-center gap-2 bg-[#7c3aed] hover:bg-[#a78bfa] text-white shadow-md rounded-xl"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </>
          )}
          <div className="ml-2 p-1 bg-white border-2 border-[#7c3aed] rounded-full shadow-md flex items-center justify-center transition-colors duration-200">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
