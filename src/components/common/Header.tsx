import Image from "next/image";
import Link from "next/link";

import searchIcon from "../../../public/images/search.png";

export default function Header() {
   return (
      <header className="py-24 px-40 bg-[#0a0a0a]">
         <nav className="flex justify-between items-center">
            <div className="flex items-center gap-40">
               <Link
                  href="/"
                  className="text-xl font-semibold"
               >
                  OSSCA-Team1
               </Link>
            </div>
            <div className="flex items-center gap-24">
               <Link href='/search' className="py-8">
                  <Image src={searchIcon} alt="search" width={24} height={24} />
               </Link>
               <Link href='/login'>로그인</Link>
               <Link href=''>회원가입</Link>
            </div>
         </nav>
      </header>
   )
}