import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Stats } from "./Stats";

it("renders the stats region", () => {
  render(<Stats />);
  expect(screen.getByRole("region", { name: "Statistiques" })).toBeInTheDocument();
});

it("displays all stat labels", () => {
  render(<Stats />);
  expect(screen.getByText("Développeur depuis")).toBeInTheDocument();
  expect(screen.getByText("Technos maîtrisées")).toBeInTheDocument();
  expect(screen.getByText("Projets en ligne")).toBeInTheDocument();
  expect(screen.getByText("Réponse sous")).toBeInTheDocument();
});

it("renders the final stat values immediately, with no zero flash before hydration", () => {
  render(<Stats />);
  const statNums = document.querySelectorAll(".stat-num");
  expect(statNums[0]).toHaveTextContent("2018");
  expect(statNums[1]).toHaveTextContent("15");
  expect(statNums[2]).toHaveTextContent("4");
  expect(statNums[3]).toHaveTextContent("48");
});

it("displays all stat numbers after count-up", async () => {
  render(<Stats />);
  const statNums = document.querySelectorAll(".stat-num");
  await waitFor(() => expect(statNums[0]).toHaveTextContent("2018"));
  expect(statNums[1]).toHaveTextContent("15");
  expect(statNums[2]).toHaveTextContent("4");
  expect(statNums[3]).toHaveTextContent("48");
});
