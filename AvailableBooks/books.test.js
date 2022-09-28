import { Book } from "./books";

describe("Books", () => {
  it("should support creation of a book", () => {
    const firstBook = new Book("Fairy Tale", "Stephen King", "11111", 5);

    expect(firstBook).toBeInstanceOf(Book);
  });

  describe("getAvailability", () => {
    it("should correctly indicate no stock", () => {
      const firstBook = new Book("Fairy Tale", "Stephen King", "11111", 0);

      expect(firstBook.getAvailability()).toBe("out of stock");
    });

    it("should correctly indicate low stock", () => {
      const firstBook = new Book("Fairy Tale", "Stephen King", "11111", 8);

      expect(firstBook.getAvailability()).toBe("low stock");
    });

    it("should correctly indicate in stock", () => {
      const firstBook = new Book("Fairy Tale", "Stephen King", "11111", 13);

      expect(firstBook.getAvailability()).toBe("in stock");
    });
  });

  describe("get availability", () => {
    it("should correctly indicate no stock", () => {
      const firstBook = new Book("Fairy Tale", "Stephen King", "11111", 0);

      expect(firstBook.availability).toBe("out of stock");
    });

    it("should correctly indicate low stock", () => {
      const firstBook = new Book("Fairy Tale", "Stephen King", "11111", 8);

      expect(firstBook.availability).toBe("low stock");
    });

    it("should correctly indicate in stock", () => {
      const firstBook = new Book("Fairy Tale", "Stephen King", "11111", 13);

      expect(firstBook.availability).toBe("in stock");
    });
  });

  describe("sell", () => {
    let firstBook;
    beforeEach(() => {
      firstBook = new Book("Fairy Tale", "Stephen King", "11111", 11);
    });

    it("should correctly reduce stock levels by one if amount not provided", () => {
      expect(firstBook.availability).toBe("in stock");

      firstBook.sell();
      firstBook.sell();

      expect(firstBook.availability).toBe("low stock");

      while (firstBook.numCopies) {
        firstBook.sell();
      }
      expect(firstBook.availability).toBe("out of stock");
    });

    it("should correctly reduce stock levels by amount specified", () => {
      expect(firstBook.availability).toBe("in stock");

      firstBook.sell(2);
      expect(firstBook.availability).toBe("low stock");

      firstBook.sell(9);
      expect(firstBook.availability).toBe("out of stock");
    });
  });

  describe("restock", () => {
    let firstBook;
    beforeEach(() => {
      firstBook = new Book("Fairy Tale", "Stephen King", "11111", 0);
    });

    it("should correctly increase stock levels by five if amount not provided", () => {
      expect(firstBook.availability).toBe("out of stock");

      firstBook.restock();

      expect(firstBook.availability).toBe("low stock");

      firstBook.restock();
      expect(firstBook.availability).toBe("in stock");
    });

    it("should correctly increase stock levels by amount specified", () => {
      expect(firstBook.availability).toBe("out of stock");

      firstBook.restock(9);

      expect(firstBook.availability).toBe("low stock");

      firstBook.restock(2);
      expect(firstBook.availability).toBe("in stock");
    });
  });
});
