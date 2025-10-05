import Link from 'next/link';
import {
  // RiTwitterXFill,
  RiInstagramLine,
  RiTiktokFill,
} from '@remixicon/react';

export function Footer() {
  return (
    <footer className="text-center text-xs text-zinc-500">
      {/* <div className="mt-1.5 flex items-center justify-center">
        <Link href="/terms" className="hover:text-zinc-200 transition-colors">
          Terms
        </Link>
        <span className="mx-1">·</span>
        <Link href="/privacy" className="hover:text-zinc-200 transition-colors">
          Privacy
        </Link>
      </div> */}
      <p className="mt-2 select-none">
        © 2025 Prince Technologies LLC. All rights reserved.
      </p>
    </footer>
  );
}
