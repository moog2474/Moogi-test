export interface IMovie {
    _id: string;
    plot: string;
    genres: [string];
    runtime: number;
    cast: [string];
    num_mflix_comments: number;
    poster: string;
    title: string;
    fullplot: string;
    countries: [string];
    released: string;
    directors: [string];
    writers: [string];
    awards: {
        wins: number;
        nominations: number;
        text: string
    };
    lastupdated: string;
    type: string;
    imdb: {
        rating: number;
        votes: number;
        id: number
    }
    year: number;
    tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number
        };
        fresh: number;
        critic: {
            rating: number;
            numReviews: number;
            meter: number
        }
        rotten: number;
        lastUPdated: number
    };
    theaterId: {
      type: number;
    }
  }