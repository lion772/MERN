import { render, screen } from "@testing-library/react";
import UsersPage from "./UsersPage";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";

describe("UsersPage", () => {
    it("renders users request finished", async () => {
        //Arrange
        window.fetch = jest.fn();

        await (window.fetch as unknown as jest.Mock).mockResolvedValueOnce({
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

        const finishedElement = screen.queryByRole("div");
        expect(finishedElement).not.toBeInTheDocument();

        /* const asyncFinishedElement = await screen.findByRole("div");
        expect(asyncFinishedElement).toBeInTheDocument(); */
    });
});

/* let container: any = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }); */
