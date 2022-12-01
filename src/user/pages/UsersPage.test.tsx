import { render, screen } from "@testing-library/react";
import UsersPage from "./UsersPage";
import "@testing-library/jest-dom";

describe("UsersPage", () => {
    test("renders users request finished", async () => {
        //Arrange
        window.fetch = jest.fn();

        (window.fetch as unknown as jest.Mock).mockResolvedValueOnce({
            json: async () => [
                {
                    id: "u1",
                    name: "william",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Collage_Venezia.jpg/1024px-Collage_Venezia.jpg",
                    placeCount: 4,
                },
            ],
        });
        render(<UsersPage />);

        //Assert
        const emptyElement = screen.queryByTitle("empty");
        expect(emptyElement).toBeInTheDocument();

        const finishedElement = screen.queryByTitle("finished", {
            exact: true,
        });
        expect(finishedElement).not.toBeInTheDocument();

        /* const asyncFinishedElement = await screen.findByTitle("finished", {
            exact: true,
        });
        expect(asyncFinishedElement).toBeInTheDocument(); */
    });
});
