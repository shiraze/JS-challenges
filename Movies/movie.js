export class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  get overview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director}, was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

export class OnlineMovie extends Movie {
  constructor(title, director, genre, releaseYear, rating, location) {
    super(title, director, genre, releaseYear, rating);
    this.location = location;
  }

  get onlineSource() {
    return `${this.title} is available on ${this.location}`;
  }
}
