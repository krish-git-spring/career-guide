export const streams = {
  engineering: {
    name: "Engineering",
    icon: "⚙️",
    description: "Apply scientific principles to design, build, and maintain structures, machines, and systems",
    color: "from-blue-500 to-cyan-500",
    subStreams: [
      {
        name: "Computer Science",
        description: "Software development, AI, data science, and cybersecurity",
        skills: ["Programming", "Problem-solving", "Mathematics"],
        careerPaths: ["Software Engineer", "Data Scientist", "Cybersecurity Analyst", "AI Engineer"],
        duration: "4 years",
        countries: {
          usa: ["Computer Science", "Software Engineering", "Computer Engineering"],
          india: ["B.Tech CSE", "B.E. Computer Science", "BCA"]
        }
      },
      {
        name: "Mechanical Engineering",
        description: "Design and manufacturing of mechanical systems and machines",
        skills: ["Physics", "Design", "Mathematics", "CAD"],
        careerPaths: ["Mechanical Engineer", "Automotive Engineer", "Robotics Engineer", "HVAC Engineer"],
        duration: "4 years",
        countries: {
          usa: ["Mechanical Engineering", "Mechatronics"],
          india: ["B.Tech Mechanical", "B.E. Mechanical Engineering"]
        }
      },
      {
        name: "Electrical Engineering",
        description: "Study of electricity, electronics, and electromagnetism",
        skills: ["Circuit Design", "Physics", "Mathematics", "Programming"],
        careerPaths: ["Electrical Engineer", "Power Systems Engineer", "Electronics Engineer", "Control Systems Engineer"],
        duration: "4 years",
        countries: {
          usa: ["Electrical Engineering", "Electronics Engineering"],
          india: ["B.Tech EEE", "B.E. Electrical Engineering"]
        }
      },
      {
        name: "Civil Engineering",
        description: "Design and construction of infrastructure like buildings, roads, and bridges",
        skills: ["Physics", "Mathematics", "Design", "Project Management"],
        careerPaths: ["Civil Engineer", "Structural Engineer", "Construction Manager", "Urban Planner"],
        duration: "4 years",
        countries: {
          usa: ["Civil Engineering", "Construction Engineering"],
          india: ["B.Tech Civil", "B.E. Civil Engineering"]
        }
      }
    ]
  },
  medical: {
    name: "Medical & Health Sciences",
    icon: "🏥",
    description: "Study of human health, medicine, and healthcare systems",
    color: "from-red-500 to-pink-500",
    subStreams: [
      {
        name: "Medicine (MBBS/MD)",
        description: "Diagnosis, treatment, and prevention of diseases",
        skills: ["Biology", "Chemistry", "Empathy", "Critical Thinking"],
        careerPaths: ["Doctor", "Surgeon", "Pediatrician", "Psychiatrist"],
        duration: "5-7 years",
        countries: {
          usa: ["Pre-med + MD", "DO (Doctor of Osteopathic Medicine)"],
          india: ["MBBS", "BDS (Dentistry)", "BHMS"]
        }
      },
      {
        name: "Nursing",
        description: "Patient care and healthcare support",
        skills: ["Patient Care", "Communication", "Biology", "Chemistry"],
        careerPaths: ["Registered Nurse", "Nurse Practitioner", "Clinical Nurse Specialist"],
        duration: "4 years",
        countries: {
          usa: ["BSN (Bachelor of Science in Nursing)", "ADN"],
          india: ["B.Sc Nursing", "Post Basic B.Sc Nursing"]
        }
      },
      {
        name: "Pharmacy",
        description: "Study of drugs and medication",
        skills: ["Chemistry", "Biology", "Attention to Detail", "Mathematics"],
        careerPaths: ["Pharmacist", "Clinical Pharmacist", "Research Scientist", "Pharmaceutical Sales"],
        duration: "4 years",
        countries: {
          usa: ["PharmD", "BS in Pharmacy"],
          india: ["B.Pharm", "PharmD"]
        }
      },
      {
        name: "Biotechnology",
        description: "Using biological systems for technological applications",
        skills: ["Biology", "Chemistry", "Research", "Laboratory Skills"],
        careerPaths: ["Biotechnologist", "Research Scientist", "Quality Control Analyst", "Bioinformatician"],
        duration: "4 years",
        countries: {
          usa: ["Biotechnology", "Bioengineering"],
          india: ["B.Tech Biotechnology", "B.Sc Biotechnology"]
        }
      }
    ]
  },
  commerce: {
    name: "Commerce & Business",
    icon: "💼",
    description: "Study of trade, finance, and business operations",
    color: "from-green-500 to-emerald-500",
    subStreams: [
      {
        name: "Finance & Accounting",
        description: "Management of money, investments, and financial records",
        skills: ["Mathematics", "Analytical Thinking", "Attention to Detail", "Communication"],
        careerPaths: ["Accountant", "Financial Analyst", "Investment Banker", "CA/CPA"],
        duration: "3-4 years",
        countries: {
          usa: ["Finance", "Accounting", "Business Administration"],
          india: ["B.Com", "BBA Finance", "CA Foundation"]
        }
      },
      {
        name: "Marketing",
        description: "Promoting and selling products or services",
        skills: ["Communication", "Creativity", "Analytics", "Psychology"],
        careerPaths: ["Marketing Manager", "Brand Manager", "Digital Marketer", "Market Research Analyst"],
        duration: "3-4 years",
        countries: {
          usa: ["Marketing", "Business Administration with Marketing"],
          india: ["BBA Marketing", "B.Com with Marketing"]
        }
      },
      {
        name: "Business Management",
        description: "Planning, organizing, and directing business activities",
        skills: ["Leadership", "Strategic Thinking", "Communication", "Problem Solving"],
        careerPaths: ["Business Manager", "Consultant", "Entrepreneur", "Operations Manager"],
        duration: "3-4 years",
        countries: {
          usa: ["Business Administration", "Management"],
          india: ["BBA", "B.Com Management"]
        }
      },
      {
        name: "Economics",
        description: "Study of production, distribution, and consumption of goods",
        skills: ["Mathematics", "Analytical Thinking", "Statistics", "Research"],
        careerPaths: ["Economist", "Data Analyst", "Policy Analyst", "Financial Consultant"],
        duration: "3-4 years",
        countries: {
          usa: ["Economics", "Applied Economics"],
          india: ["B.A Economics", "B.Sc Economics"]
        }
      }
    ]
  },
  arts: {
    name: "Arts & Humanities",
    icon: "🎨",
    description: "Study of human culture, creativity, and expression",
    color: "from-purple-500 to-violet-500",
    subStreams: [
      {
        name: "Psychology",
        description: "Study of human mind and behavior",
        skills: ["Empathy", "Analysis", "Research", "Communication"],
        careerPaths: ["Psychologist", "Counselor", "HR Specialist", "Researcher"],
        duration: "3-4 years",
        countries: {
          usa: ["Psychology", "Counseling Psychology"],
          india: ["B.A Psychology", "B.Sc Psychology"]
        }
      },
      {
        name: "Design & Creative Arts",
        description: "Visual communication, product design, and creative expression",
        skills: ["Creativity", "Visual Communication", "Software Skills", "Aesthetics"],
        careerPaths: ["Graphic Designer", "UX/UI Designer", "Product Designer", "Art Director"],
        duration: "3-4 years",
        countries: {
          usa: ["Graphic Design", "UX Design", "Fine Arts"],
          india: ["B.Des", "BFA", "Bachelor of Design"]
        }
      },
      {
        name: "Media & Communication",
        description: "Journalism, mass media, and public relations",
        skills: ["Writing", "Public Speaking", "Research", "Digital Media"],
        careerPaths: ["Journalist", "Content Writer", "PR Specialist", "Social Media Manager"],
        duration: "3-4 years",
        countries: {
          usa: ["Communications", "Journalism", "Media Studies"],
          india: ["B.A Journalism", "B.MMC", "Mass Communication"]
        }
      },
      {
        name: "Law",
        description: "Study of legal systems and regulations",
        skills: ["Critical Thinking", "Research", "Public Speaking", "Writing"],
        careerPaths: ["Lawyer", "Legal Advisor", "Corporate Counsel", "Judge"],
        duration: "5 years",
        countries: {
          usa: ["Pre-law + JD", "Political Science"],
          india: ["BA LLB", "BBA LLB", "LLB"]
        }
      }
    ]
  },
  science: {
    name: "Pure Sciences",
    icon: "🔬",
    description: "Fundamental study of natural phenomena through research",
    color: "from-orange-500 to-amber-500",
    subStreams: [
      {
        name: "Physics",
        description: "Study of matter, energy, and fundamental forces",
        skills: ["Mathematics", "Analytical Thinking", "Problem Solving", "Research"],
        careerPaths: ["Physicist", "Research Scientist", "Data Scientist", "Professor"],
        duration: "3-4 years",
        countries: {
          usa: ["Physics", "Applied Physics"],
          india: ["B.Sc Physics", "M.Sc Physics"]
        }
      },
      {
        name: "Chemistry",
        description: "Study of substances and their reactions",
        skills: ["Laboratory Skills", "Analysis", "Mathematics", "Research"],
        careerPaths: ["Chemist", "Research Scientist", "Quality Control", "Pharmaceutical Researcher"],
        duration: "3-4 years",
        countries: {
          usa: ["Chemistry", "Biochemistry"],
          india: ["B.Sc Chemistry", "B.Sc Biochemistry"]
        }
      },
      {
        name: "Mathematics",
        description: "Study of numbers, quantities, and shapes",
        skills: ["Problem Solving", "Logical Thinking", "Abstract Reasoning", "Analysis"],
        careerPaths: ["Mathematician", "Data Scientist", "Actuary", "Quantitative Analyst"],
        duration: "3-4 years",
        countries: {
          usa: ["Mathematics", "Applied Mathematics"],
          india: ["B.Sc Mathematics", "B.Math"]
        }
      },
      {
        name: "Environmental Science",
        description: "Study of environment and sustainability",
        skills: ["Field Research", "Data Analysis", "Biology", "Chemistry"],
        careerPaths: ["Environmental Scientist", "Conservationist", "Climate Analyst", "Sustainability Consultant"],
        duration: "3-4 years",
        countries: {
          usa: ["Environmental Science", "Sustainability Studies"],
          india: ["B.Sc Environmental Science", "Environmental Studies"]
        }
      }
    ]
  }
};
