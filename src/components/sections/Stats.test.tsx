import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Stats } from "./Stats";

it("renders the stats region", () => {
  render(<Stats />);
  expect(screen.getByRole("region", { name: "Statistiques" })).toBeInTheDocument();
});

it("displays all stat labels", () => {
  render(<Stats />);
  expect(screen.getByText("Projets livrés")).toBeInTheDocument();
  expect(screen.getByText("Clients actifs")).toBeInTheDocument();
  expect(screen.getByText("Expérience fullstack")).toBeInTheDocument();
  expect(screen.getByText("Remote France")).toBeInTheDocument();
});

it("displays all stat numbers after count-up", async () => {
  render(<Stats />);
  const statNums = document.querySelectorAll(".stat-num");
  await waitFor(() => expect(statNums[0]).toHaveTextContent("37"));
  expect(statNums[1]).toHaveTextContent("12");
  expect(statNums[2]).toHaveTextContent("3");
  expect(statNums[3]).toHaveTextContent("100");
});
