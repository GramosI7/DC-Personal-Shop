import { ReactElement } from "react";
import Link from "next/link";

export default function Navbar(): ReactElement {
  return (
    <nav className="h-20 grid place-items-center bg-dawn-500">
      <div className="container mx-auto px-2 grid grid-cols-2">
        <div>Logo</div>
        <ul className="grid grid-cols-5 place-items-center">
          <li>
            <Link href="homme/pret-a-porter">
              <a href="homme/pret-a-porter" className="text-gray-700 no-underline hover:underline">
                Prêt-à-porter
              </a>
            </Link>
          </li>
          <li>
            <Link href="homme/chaussures">
              <a href="homme/chaussures" className="text-gray-700 no-underline hover:underline">
                Chaussures
              </a>
            </Link>
          </li>
          <li>
            <Link href="homme/accessoires">
              <a href="homme/accessoires" className="text-gray-700 no-underline hover:underline">
                Accessoires
              </a>
            </Link>
          </li>
          <li>
            <Link href="homme/sacs">
              <a href="homme/sacs" className="text-gray-700 no-underline hover:underline">
                Sacs
              </a>
            </Link>
          </li>
          <li>
            <Link href="homme/autres">
              <a href="homme/autres" className="text-gray-700 no-underline hover:underline">
                Autres
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
