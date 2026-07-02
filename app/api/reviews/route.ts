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
    name: "Michael Anderson",
    role: "Senior Software Engineer",
    company: "TechNova",
    avatar: "https://ui-avatars.com/api/?name=Michael+Anderson&background=0D0D0D&color=fff&size=128",
    rating: 4.5,
    review: "Diaa consistently demonstrates strong problem-solving skills and exceptional attention to detail. His ability to build scalable solutions and maintain clean architecture principles makes him an outstanding engineer."
  },
  {
    id: "rev_02",
    name: "Sarah Chen",
    role: "Engineering Manager",
    company: "Vercel Labs",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "An absolute pleasure to work with. Diaa's frontend mastery combined with a deep understanding of full-stack patterns helped us ship features 40% faster. Truly world-class product thinking."
  },
  {
    id: "rev_03",
    name: "David Kim",
    role: "Product Manager",
    company: "Stripe",
    avatar: "https://ui-avatars.com/api/?name=David+Kim&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "Diaa bridges the gap between engineering and product flawlessly. He doesn't just execute tickets; he questions assumptions, suggests UX improvements, and writes code that scales effortlessly."
  },
  {
    id: "rev_04",
    name: "Elena Rodriguez",
    role: "Frontend Lead",
    company: "Linear",
    avatar: "https://ui-avatars.com/api/?name=Elena+Rodriguez&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "I've rarely seen someone with such a meticulous eye for design implementation. Diaa's knowledge of Framer Motion and modern React paradigms results in UIs that feel incredibly alive."
  },
  {
    id: "rev_05",
    name: "James Wilson",
    role: "Technical Team Lead",
    company: "Railway",
    avatar: "https://ui-avatars.com/api/?name=James+Wilson&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "A system design powerhouse. Diaa overhauled our authentication microservices while ensuring zero downtime. He writes robust, maintainable, and deeply considered backend logic."
  },
  {
    id: "rev_06",
    name: "Anita Desai",
    role: "Startup Founder",
    company: "Nexus AI",
    avatar: "https://ui-avatars.com/api/?name=Anita+Desai&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "Hiring Diaa was the best technical decision we made early on. He built our entire MVP from the ground up, balancing speed with an architecture that is still holding up beautifully today."
  },
  {
    id: "rev_07",
    name: "Marcus Johnson",
    role: "Backend Engineer",
    company: "Cloudflare",
    avatar: "https://ui-avatars.com/api/?name=Marcus+Johnson&background=0D0D0D&color=fff&size=128",
    rating: 4,
    review: "Excellent collaborator. Diaa's API designs are clean, highly intuitive, and perfectly documented. He consistently raises the bar for the entire engineering organization during code reviews."
  },
  {
    id: "rev_08",
    name: "Rachel Green",
    role: "Director of Engineering",
    company: "Figma",
    avatar: "https://ui-avatars.com/api/?name=Rachel+Green&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "Diaa brings a rare combination of visual sensitivity and hardcore technical depth. He understands the 'why' behind product decisions and executes the 'how' with absolute precision."
  },
  {
    id: "rev_09",
    name: "Omar Tariq",
    role: "Staff Engineer",
    company: "Spotify",
    avatar: "https://ui-avatars.com/api/?name=Omar+Tariq&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "One of the most pragmatic engineers I know. Diaa knows exactly when to reach for complex design patterns and when simple, readable code is the better path forward. A joy to pair-program with."
  },
  {
    id: "rev_10",
    name: "Sophia Martinez",
    role: "UI/UX Designer",
    company: "Apple",
    avatar: "https://ui-avatars.com/api/?name=Sophia+Martinez&background=0D0D0D&color=fff&size=128",
    rating: 4,
    review: "Working with Diaa is a dream for any designer. He respects pixel perfection and adds his own magical touch through subtle animations and micro-interactions that elevate the whole experience."
  },
  {
    id: "rev_11",
    name: "Kevin Wu",
    role: "CTO",
    company: "FinTech Builders",
    avatar: "https://ui-avatars.com/api/?name=Kevin+Wu&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "Diaa single-handedly refactored our legacy monolithic architecture into a modern, scalable Next.js and Node environment. His strategic thinking saved us months of technical debt."
  },
  {
    id: "rev_12",
    name: "Jessica Taylor",
    role: "Lead QA Engineer",
    company: "QualityFirst",
    avatar: "https://ui-avatars.com/api/?name=Jessica+Taylor&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "I rarely find bugs in Diaa's code. He writes comprehensive unit tests, considers edge cases before they happen, and builds with an accessibility-first mindset. Highly reliable."
  },
  {
    id: "rev_13",
    name: "Hassan Ali",
    role: "VP of Engineering",
    company: "EduTech Global",
    avatar: "https://ui-avatars.com/api/?name=Hassan+Ali&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "Beyond his obvious technical skills, Diaa is an exceptional mentor. He elevates the entire team's standard, generously sharing his knowledge on system architecture and modern React."
  },
  {
    id: "rev_14",
    name: "Emma Davis",
    role: "Full-Stack Developer",
    company: "RemoteBase",
    avatar: "https://ui-avatars.com/api/?name=Emma+Davis&background=0D0D0D&color=fff&size=128",
    rating: 4,
    review: "Diaa's codebases are a masterclass in clean architecture. Learning from his pull requests was one of the most formative experiences in my early career. A true 10x engineer."
  },
  {
    id: "rev_15",
    name: "Daniel White",
    role: "Head of Product",
    company: "ScaleUp Inc.",
    avatar: "https://ui-avatars.com/api/?name=Daniel+White&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "He possesses a unique ability to translate highly ambiguous product requirements into concrete, scalable technical solutions. Diaa doesn't just write code; he builds businesses."
  },
  {
    id: "rev_16",
    name: "Isabella Rossi",
    role: "Senior Designer",
    company: "Creative Dash",
    avatar: "https://ui-avatars.com/api/?name=Isabella+Rossi&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "Diaa understands motion design better than most frontend engineers. His intuitive grasp of spring physics and easing functions makes our digital products feel incredibly premium."
  },
  {
    id: "rev_17",
    name: "William Chang",
    role: "DevOps Engineer",
    company: "InfraTech",
    avatar: "https://ui-avatars.com/api/?name=William+Chang&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "He bridges the gap between frontend and infrastructure perfectly. His understanding of edge computing, CI/CD pipelines, and cloud architecture makes deployment a breeze."
  },
  {
    id: "rev_18",
    name: "Sophie Bennett",
    role: "Engineering Manager",
    company: "SaaS Dynamics",
    avatar: "https://ui-avatars.com/api/?name=Sophie+Bennett&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "Diaa consistently delivers high-impact features under tight deadlines without compromising on code quality. He's exactly the kind of engineer you want tackling your hardest problems."
  },
  {
    id: "rev_19",
    name: "Alexander Volkov",
    role: "Security Researcher",
    company: "DefendX",
    avatar: "https://ui-avatars.com/api/?name=Alexander+Volkov&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "Security is often an afterthought in frontend, but not for Diaa. His deep understanding of modern web vulnerabilities and proactive mitigation strategies is genuinely impressive."
  },
  {
    id: "rev_20",
    name: "Olivia Parker",
    role: "Co-Founder",
    company: "NextGen Ventures",
    avatar: "https://ui-avatars.com/api/?name=Olivia+Parker&background=0D0D0D&color=fff&size=128",
    rating: 5,
    review: "Diaa is the quintessential 'engineer's engineer'. He combines relentless curiosity with exceptional execution. Any team would be incredibly lucky to have him."
  }
];

export async function GET() {
  return NextResponse.json(REVIEWS);
}
