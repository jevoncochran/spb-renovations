export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "SPB Renovations exceeded our expectations. The team was professional, detail-oriented, and delivered a stunning transformation.",
    author: "Jessica M.",
    location: "Fort Lauderdale, FL",
    rating: 5,
  },
  {
    quote:
      "From start to finish, the process was smooth and stress-free. Our kitchen looks absolutely incredible. Highly recommend!",
    author: "Marcus T.",
    location: "Miami, FL",
    rating: 5,
  },
  {
    quote:
      "The craftsmanship is outstanding. They listened to every detail and brought our vision to life beyond what we imagined.",
    author: "Rachel & David K.",
    location: "Boca Raton, FL",
    rating: 5,
  },
  {
    quote:
      "On time, on budget, and on point. SPB Renovations is the only team we trust for our home projects.",
    author: "Anthony R.",
    location: "Coral Springs, FL",
    rating: 5,
  },
];
