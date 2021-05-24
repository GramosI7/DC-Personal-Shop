import React from "react";
import { render } from "../testUtils";
import Home from "@pages/index.page";

const allProducts = [
  {
    gender: "Homme",
    categories: [
      {
        text: "Prêt-à-porter",
        href: "Pr%C3%AAt-%C3%A0-porter"
      }
    ]
  },
  {
    gender: "Femme",
    categories: [
      {
        text: "Prêt-à-porter",
        href: "Pr%C3%AAt-%C3%A0-porter"
      },
      {
        text: "Chaussures",
        href: "Chaussures"
      }
    ]
  }
];

describe("Home page", () => {
  // it('matches snapshot', () => {
  //   const { asFragment } = render(<Home />, {})
  //   expect(asFragment()).toMatchSnapshot()
  // })

  it("Should show the categories gender Homme and Femme", () => {
    const { getByText } = render(<Home allProducts={allProducts} />, {});

    expect(getByText("Homme")).toBeInTheDocument();
    expect(getByText("Femme")).toBeInTheDocument();
  });
});
