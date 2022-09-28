import { Movie, OnlineMovie } from "./movie";

describe("Movie", () => {
  it("should support creation of a movie", () => {
    const myMovie = new Movie("Matrix", "Ben", "Sci-Fi", 1996, 8.3);

    expect(myMovie).toBeInstanceOf(Movie);
  });

  describe("get overview", () => {
    it("should display overview", () => {
      const myMovie = new Movie("Matrix", "Ben", "Sci-Fi", 1996, 8.3);

      expect(myMovie.overview).toBe(
        "Matrix, a Sci-Fi film directed by Ben, was released in 1996. It received a rating of 8.3"
      );
    });
  });
});

describe("OnlineMovie", () => {
  it("should support creation of an online movie", () => {
    const myMovie = new OnlineMovie(
      "Matrix",
      "Ben",
      "Sci-Fi",
      1996,
      8.3,
      "Netflix"
    );

    expect(myMovie).toBeInstanceOf(Movie);
    expect(myMovie).toBeInstanceOf(OnlineMovie);
  });

  describe("get overview", () => {
    it("should display overview", () => {
      const myMovie = new OnlineMovie(
        "Matrix",
        "Ben",
        "Sci-Fi",
        1996,
        8.3,
        "Netflix"
      );

      expect(myMovie.overview).toBe(
        "Matrix, a Sci-Fi film directed by Ben, was released in 1996. It received a rating of 8.3"
      );
    });
  });

  describe("get onlineSource", () => {
    it("should display where to view movie", () => {
      const myMovie = new OnlineMovie(
        "Matrix",
        "Ben",
        "Sci-Fi",
        1996,
        8.3,
        "Netflix"
      );

      expect(myMovie.onlineSource).toBe("Matrix is available on Netflix");
    });
  });
});
