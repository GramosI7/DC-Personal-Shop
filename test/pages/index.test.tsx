import React from "react";
import { render } from "../testUtils";
import Home from "@pages/index.page";

const allCategories = [
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
  it("matches snapshot", () => {
    const { asFragment } = render(<Home allCategories={allCategories} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should show the categories gender Homme and Femme", () => {
    const { getByText } = render(<Home allCategories={allCategories} />, {});

    expect(getByText("Homme")).toBeInTheDocument();
    expect(getByText("Femme")).toBeInTheDocument();
  });

  it("Should show the categories Univers", () => {
    const { getByText, getAllByText } = render(<Home allCategories={allCategories} />, {});

    expect(getAllByText("Prêt-à-porter")).toHaveLength(2);
    expect(getByText("Chaussures")).toBeInTheDocument();
  });
});
