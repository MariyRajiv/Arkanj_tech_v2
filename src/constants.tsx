import { Languages, Zap, BarChart3, Cpu } from 'lucide-react';

export const industryServices = [
  {
    id: 'edutech',
    title: "German Language Mastery",
    subtitle: "From Zero to Fluent in Record Time",
    description: "Don't just learn a language; master a culture. Our communicative method focuses on speaking from day one. Perfect for tech professionals moving to Germany.",
    features: ["Small Groups (Max 6)", "Native Expert Teachers", "Tech-Focused Vocabulary", "Live 1-Hour Daily Sessions"],
    price: "From €199/mo",
    icon: <Languages className="w-8 h-8 text-emerald-600" />,
    category: "Education",
    isFeatured: true
  },
  {
    id: 'uptech',
    title: "AI & Automation",
    subtitle: "Intelligent Performance",
    description: "Eliminate routine bottlenecks with custom-built AI agents that work 24/7. We turn manual tasks into automated success engines.",
    features: ["Custom AI Agents", "Workflow Automation", "24/7 Smart Support"],
    price: "Starts $250",
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    category: "Industry"
  },
  {
    id: 'fintech',
    title: "FinTech Solutions",
    subtitle: "Autonomous Finance",
    description: "Advanced AI for financial intelligence. We automate complex analysis and solve modern banking challenges with proprietary algorithms.",
    features: ["Risk Analysis AI", "Automated Trading Logic", "Secure Data Processing"],
    price: "Starts $300",
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    category: "Finance"
  },
  {
    id: 'deeptech',
    title: "DeepTech R&D",
    subtitle: "Architecting the Impossible",
    description: "Proprietary high-velocity algorithms tailored to your data challenges. From neural networks to complex logic engines.",
    features: ["Neural Network Design", "Algorithm Optimization", "Data Migration"],
    price: "Starts $500",
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    category: "Advanced"
  },
];

export const testimonials = [
  { 
    name: "Harika Meesala", 
    role: "Software Engineer", 
    text: "Arkanj is a great place to start learning German, especially for everyday conversations. The classes are quite interactive and the tutors are friendly.",
    rating: 5,
    date: "3 months ago",
    avatar: "H"
  },
  { 
    name: "Francisco Patuna", 
    role: "Product Manager", 
    text: "I have nearly completed the Novice 1 course and I can't recommend it enough. The method is very efficient, based primarily on conversation.",
    rating: 5,
    date: "4 months ago",
    avatar: "F"
  },
  { 
    name: "Gal Bar-Nissan", 
    role: "Data Scientist", 
    text: "Excellent German learning platform. The teaching is efficient, clear, and surprisingly fun. I've taken several courses and always come back.",
    rating: 5,
    date: "2 months ago",
    avatar: "G"
  },
  { 
    name: "Sarah Schmidt", 
    role: "UX Designer", 
    text: "The tech-focused vocabulary is a game changer. I can finally discuss project requirements with my German colleagues without stuttering.",
    rating: 5,
    date: "1 month ago",
    avatar: "S"
  }
];

export const faqs = [
  {
    q: "Do I need any prior knowledge to start?",
    a: "Not at all! We have courses ranging from absolute beginners (A1) to advanced levels (C1). Our 'Novice 1' course is specifically designed for those with zero German knowledge."
  },
  {
    q: "How long does it take to reach B1 level?",
    a: "With our intensive communicative method (1 hour daily), most students reach B1 proficiency in about 6-8 months, which is significantly faster than traditional weekly classes."
  },
  {
    q: "Are the classes recorded?",
    a: "Yes! All live sessions are recorded and made available in your student portal, so you can review them anytime or catch up if you miss a class."
  },
  {
    q: "What is the 'Arkanj Method'?",
    a: "It's a conversation-first approach. Instead of memorizing grammar tables, you learn by speaking in real-life scenarios from day one. Grammar is taught intuitively through context."
  }
];

export const stats = [
  { val: "1,200+", label: "Classes Taught" },
  { val: "3,500+", label: "Happy Students" },
  { val: "98%", label: "Satisfaction Rate" },
  { val: "2018", label: "Active Since" },
];

export const partners = [
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" },
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Mercedes-Benz", logo: "https://www.vectorlogo.zone/logos/mercedes/mercedes-ar21.svg" },
  { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" }
];
