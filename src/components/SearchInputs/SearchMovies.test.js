import { render, fireEvent, screen } from "@testing-library/react";
import SearchMovies from "./SearchMovies";

describe("<SearchMovies>", () => {
  const onSearch = jest.fn();

  it("must on click of the button call the onSearch call back with the search text entered and the type of search", () => {
    render(<SearchMovies onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Enter movie title");
    const button = screen.getByText("Search");

    fireEvent.change(input, { target: { value: "Top Gun" } });
    fireEvent.click(button);
    expect(onSearch).toBeCalledWith({ text: "Top Gun", type: "allMovies" });
  });
});
