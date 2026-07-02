import { NextResponse } from 'next/server';

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
}

const REVIEWS: Review[] = [
  {
    id: "rev_01",
    name: "Ahmed Mitwally",
    role: "Frontend Web Developer",
    company: "",
    avatar:
      "https://ui-avatars.com/api/?name=Ahmed+Mitwally&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review:
      "Diaa consistently demonstrates strong problem-solving skills and exceptional attention to detail. His ability to build scalable solutions and maintain clean architecture principles makes him an outstanding engineer.",
  },

  {
    id: "rev_02",
    name: "Mustafa Mahmoud",
    role: "Backend ASP.NET Developer",
    company: "",
    avatar:
      "https://ui-avatars.com/api/?name=Mustafa+Mahmoud&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review:
      "An absolute pleasure to work with. Diaa's frontend mastery combined with a deep understanding of full-stack patterns helped us ship features faster and more efficiently.",
  },

  {
    id: "rev_03",
    name: "Ziad Essa",
    role: "Full-Stack Web Developer",
    company: "",
    avatar:
      "https://ui-avatars.com/api/?name=Ziad+Essa&background=0D0D0D&color=fff&size=128",
    rating: 4,
    review:
      "Diaa bridges the gap between engineering and product flawlessly. He doesn't just execute tasks; he questions assumptions, suggests improvements, and builds solutions that scale.",
  },

  {
    id: "rev_04",
    name: "Abdallah Yasser",
    role: "Backend ASP.NET Developer",
    company: "",
    avatar:
      "https://ui-avatars.com/api/?name=Abdallah+Yasser&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review:
      "I've rarely seen someone with such a meticulous eye for implementation. Diaa's understanding of modern web technologies results in products that feel polished and professional.",
  },

  {
    id: "rev_05",
    name: "Abdelrahman Alwakeel",
    role: "Senior Backend ASP.NET Developer",
    company: "DEPI | Digital Experiences Providers Initiative",
    avatar:
      "https://ui-avatars.com/api/?name=Abdelrahman+Alwakeel&background=0D0D0D&color=fff&size=128",
    rating: 4,
    review:
      "A system design powerhouse. Diaa writes robust, maintainable, and deeply considered code while always keeping scalability and long-term maintainability in mind.",
  },

  {
    id: "rev_06",
    name: "Ahmed Hany",
    role: "Backend ASP.NET Developer",
    company: "",
    avatar:
      "https://ui-avatars.com/api/?name=Ahmed+Hany&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review:
      "Excellent collaborator. Diaa's API designs are clean, intuitive, and well-documented. He consistently raises the engineering standards of everyone working around him.",
  },
];

export async function GET() {
  return NextResponse.json(REVIEWS);
}
