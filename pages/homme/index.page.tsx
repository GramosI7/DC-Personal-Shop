import { GetStaticProps } from "next";
import { ReactElement } from "react";
import Image from "next/image";

// Lib
import { getAllProductGategorieUnivers } from "@lib/prismic/api";
import { Navbar } from "@components/core";

export default function CategoriePage(): ReactElement {
  return (
    <div className="bg-dawn-500">
      <Navbar />
      <main className="container mx-auto px-2">
        <h1 className="text-5xl text-center mt-12">Homme</h1>
        <div className="grid grid-cols-3 place-items-center gap-10 mt-12">
          <div>
            <Image
              src="/images/bg-home-girl.png"
              width={450}
              height={450}
              alt="Picture of the author"
              objectFit="cover"
            />
            <p className="text-center text-lg font-semibold">PRET-A-PORTER</p>
          </div>
          <div>
            <Image
              src="/images/bg-home-girl.png"
              width={450}
              height={450}
              alt="Picture of the author"
              objectFit="cover"
            />
            <p className="text-center text-lg font-semibold">CHAUSSURES</p>
          </div>
          <div>
            <Image
              src="/images/bg-home-girl.png"
              width={450}
              height={450}
              alt="Picture of the author"
              objectFit="cover"
            />
            <p className="text-center text-lg font-semibold">ACCESSOIRES</p>
          </div>
        </div>

        <div className="grid grid-cols-2 place-items-center gap-10 mt-6">
          <div>
            <Image
              src="/images/bg-home-girl.png"
              width={450}
              height={450}
              alt="Picture of the author"
              objectFit="cover"
            />
            <p className="text-center text-lg font-semibold">SACS</p>
          </div>
          <div>
            <Image
              src="/images/bg-home-girl.png"
              width={450}
              height={450}
              alt="Picture of the author"
              objectFit="cover"
            />
            <p className="text-center text-lg font-semibold">AUTRES</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl text-center mt-12">Les produits en vogue</h2>
          <div className="grid grid-cols-6 place-items-center gap-10 mt-12">
            {[...Array(6).keys()].map((e) => (
              <div key={e}>
                <Image
                  src="/images/bg-home-girl.png"
                  width={450}
                  height={450}
                  alt="Picture of the author"
                  objectFit="cover"
                />
                <p className="text-xs">SWEAT NOIR À CAPUCHE ET POCHE KANGOUROU</p>
                <p className="text-xs font-semibold mt-1">180 €</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div>
        <div className="mt-16">
          <p className="text-center text-2xl">
            INSCRIVEZ-VOUS À LA NEWSLETTER ET NE MANQUEZ RIEN DE NOTRE ACTUALITÉ
          </p>
          <div className="border-t-2 border-tundora-50 mt-8">
            <div className="container mx-auto  grid grid-cols-3 ">
              <div className="grid place-content-center text-center h-28 border-r-2 border-tundora-50">
                <div>ICON</div>
                <div className="text-sm font-semibold mt-1">LIVRAISON GRATUITE</div>
                <div className="text-xs mt-1">
                  Livraison standard en 3 à 5 jours <br /> ouvrés offerte pour toute commande
                </div>
              </div>
              <div className="grid place-content-center text-center h-28 border-r-2 border-tundora-50">
                <div>ICON</div>
                <div className="text-sm font-semibold mt-1">RETOUR GRATUIT</div>
                <div className="text-xs mt-1">Possibilité de retour sous 30 jours.</div>
              </div>
              <div className="grid place-content-center text-center h-28">
                <div>ICON</div>
                <div className="text-sm font-semibold mt-1">PAIEMENTS SÉCURISÉS</div>
                <div className="text-xs mt-1">
                  Les paiements sur notre site sont <br />
                  cryptés et sécurisés par 3D Secure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false, previewData }) => {
  const allCategories = await getAllProductGategorieUnivers(previewData);
  return {
    props: { preview, allCategories }
  };
};
