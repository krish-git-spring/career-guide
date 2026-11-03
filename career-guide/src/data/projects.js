export const projects = {
  engineering: [
    {
      id: "eng-1",
      title: "Build a Simple Calculator App",
      description: "Create a fully functional calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division. This project will introduce you to web development fundamentals.",
      whatYouWillLearn: "HTML structure, CSS styling, JavaScript programming, event handling, DOM manipulation",
      difficulty: "Beginner",
      duration: "2-3 hours",
      tools: ["VS Code (recommended)", "Any text editor", "Chrome/Firefox web browser"],
      howToSolve: [
        "Start by creating an HTML file with a grid layout for calculator buttons (0-9, operations, clear, equals)",
        "Use CSS to style the calculator - make it visually appealing with proper spacing, colors, and button hover effects",
        "Write JavaScript to capture button clicks and store the numbers and operations",
        "Implement the calculation logic for each operation (+, -, ×, ÷)",
        "Add a display area to show the current input and result",
        "Handle edge cases like division by zero and decimal points",
        "Test your calculator with various calculations to ensure accuracy"
      ],
      detailedSteps: [
        "Create a new folder for your project and open it in VS Code",
        "Create an index.html file with the basic HTML structure",
        "Add a display div at the top to show numbers and results",
        "Create button elements for numbers 0-9, operations (+, -, ×, ÷), clear (C), and equals (=)",
        "Style everything with CSS - use flexbox or grid for layout, add colors and shadows",
        "Create a script.js file and link it to your HTML",
        "Select all buttons using JavaScript and add click event listeners",
        "Store the first number, operation, and second number in variables",
        "Perform the calculation when equals is clicked and display the result",
        "Open index.html in your browser and test all functions"
      ],
      evaluationQuestions: [
        {
          question: "When you saw your calculator work for the first time, how did you feel?",
          options: [
            { text: "Excited and proud, wanted to add more features", score: 5 },
            { text: "Satisfied with the result", score: 3 },
            { text: "Relieved it finally worked", score: 2 },
            { text: "Just wanted to get it over with", score: 1 }
          ]
        },
        {
          question: "When you encountered a bug or error, what was your reaction?",
          options: [
            { text: "Felt challenged and determined to solve it", score: 5 },
            { text: "A bit frustrated but kept trying", score: 3 },
            { text: "Felt discouraged but pushed through", score: 2 },
            { text: "Wanted to give up immediately", score: 1 }
          ]
        },
        {
          question: "After completing this project, do you find yourself curious about how other apps work?",
          options: [
            { text: "Yes, I'm curious and want to build more", score: 5 },
            { text: "Somewhat curious about other projects", score: 3 },
            { text: "A little curious but not motivated", score: 2 },
            { text: "No, I don't really care", score: 1 }
          ]
        },
        {
          question: "If someone asked you to explain how your calculator works, would you be excited to show them?",
          options: [
            { text: "Yes, I'd be proud to explain my code", score: 5 },
            { text: "Maybe, if they're really interested", score: 3 },
            { text: "Probably not, it's not that interesting", score: 2 },
            { text: "No, I'd rather not talk about it", score: 1 }
          ]
        }
      ],
      skills: ["Programming", "Logic", "Problem-solving", "Web Development"]
    },
    {
      id: "eng-2",
      title: "Design a Bridge Using Simple Materials",
      description: "Design and construct a model bridge using popsicle sticks, cardboard, or similar materials that can support weight. This project teaches structural engineering principles and physics concepts.",
      whatYouWillLearn: "Structural engineering basics, load distribution, physics of forces, design thinking, hands-on construction",
      difficulty: "Beginner",
      duration: "3-4 hours",
      tools: ["Popsicle sticks or cardboard", "Glue (hot glue or craft glue)", "Scissors/cutter", "Weights (books, coins)", "Ruler/measuring tape"],
      howToSolve: [
        "Research different bridge types (beam, truss, arch) and understand their strengths",
        "Sketch your design considering the span length and support points",
        "Calculate approximate material needs based on your design",
        "Build the bridge carefully, ensuring strong joints and connections",
        "Test the bridge incrementally with increasing weights",
        "Analyze failure points and iterate on your design if needed"
      ],
      detailedSteps: [
        "Research bridge designs online - look at truss bridges, beam bridges, and arch bridges",
        "Choose a bridge type that suits your materials and skill level",
        "Draw a detailed sketch with measurements for each component",
        "Gather all materials and prepare your workspace",
        "Start building the base/supports of your bridge",
        "Construct the main structure following your design",
        "Pay special attention to joints - these are critical for strength",
        "Let the glue dry completely before testing",
        "Place your bridge between two supports (like tables or books)",
        "Add weights gradually and record how much it holds before failing",
        "Document which parts failed and why"
      ],
      evaluationQuestions: [
        {
          question: "When your bridge held weight successfully, how did you feel?",
          options: [
            { text: "Thrilled and wanted to improve it further", score: 5 },
            { text: "Satisfied with my design", score: 3 },
            { text: "Relieved it didn't collapse immediately", score: 2 },
            { text: "Just glad it was over", score: 1 }
          ]
        },
        {
          question: "Did you find yourself thinking about real-world bridges while building yours?",
          options: [
            { text: "Yes, I was fascinated by how real bridges work", score: 5 },
            { text: "Sometimes thought about it", score: 3 },
            { text: "Briefly considered it", score: 2 },
            { text: "No, didn't think about it", score: 1 }
          ]
        },
        {
          question: "If you could build another structure, would you be excited to try?",
          options: [
            { text: "Yes, I want to build more complex structures", score: 5 },
            { text: "Maybe, if it's interesting", score: 3 },
            { text: "Not really interested", score: 2 },
            { text: "No, I don't want to build anything else", score: 1 }
          ]
        },
        {
          question: "When the bridge failed (if it did), what was your reaction?",
          options: [
            { text: "Curious about why it failed and wanted to fix it", score: 5 },
            { text: "A bit disappointed but understood it", score: 3 },
            { text: "Frustrated but moved on", score: 2 },
            { text: "Gave up and didn't care", score: 1 }
          ]
        }
      ],
      skills: ["Design", "Physics", "Construction", "Problem-solving", "Structural Engineering"]
    },
    {
      id: "eng-3",
      title: "Create a Simple Circuit with LED",
      description: "Build a basic electrical circuit to light up an LED using a battery and wires",
      difficulty: "Beginner",
      duration: "1-2 hours",
      tools: ["LED", "Battery", "Wires", "Breadboard (optional)"],
      steps: [
        "Learn basic circuit concepts",
        "Connect components in a circuit",
        "Make the LED light up",
        "Try adding a switch to control the LED",
        "Document your circuit diagram"
      ],
      evaluationQuestions: [
        {
          question: "How fascinated were you by how electricity flows through the circuit?",
          options: [
            { text: "Very fascinated, wanted to learn more", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "Did you enjoy troubleshooting when the circuit didn't work initially?",
          options: [
            { text: "Yes, liked figuring out the problem", score: 5 },
            { text: "It was okay", score: 3 },
            { text: "Found it frustrating", score: 2 },
            { text: "Didn't enjoy troubleshooting", score: 1 }
          ]
        },
        {
          question: "How interested are you in learning about electronics and electrical systems?",
          options: [
            { text: "Very interested", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Not very interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        }
      ],
      skills: ["Electronics", "Circuit Design", "Problem-solving"]
    },
    {
      id: "eng-4",
      title: "Build a Simple Website About Your Hobby",
      description: "Create a personal website about something you love using HTML and CSS",
      difficulty: "Beginner",
      duration: "2-3 hours",
      tools: ["VS Code", "Web Browser"],
      steps: [
        "Plan your website structure",
        "Write HTML content",
        "Style with CSS",
        "Add images and links",
        "Publish or test locally"
      ],
      evaluationQuestions: [
        {
          question: "How much did you enjoy creating something visual on the web?",
          options: [
            { text: "Really enjoyed the creative process", score: 5 },
            { text: "Enjoyed it", score: 3 },
            { text: "It was okay", score: 2 },
            { text: "Didn't enjoy it much", score: 1 }
          ]
        },
        {
          question: "Were you interested in learning more about web development?",
          options: [
            { text: "Very interested to learn more", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Not very interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "How satisfied were you with your final website?",
          options: [
            { text: "Very satisfied with the result", score: 5 },
            { text: "Satisfied", score: 3 },
            { text: "Somewhat satisfied", score: 2 },
            { text: "Not satisfied", score: 1 }
          ]
        }
      ],
      skills: ["Web Development", "Design", "Creativity"]
    }
  ],
  medical: [
    {
      id: "med-1",
      title: "Research a Disease and Create an Infographic",
      description: "Choose a disease or health condition, thoroughly research its causes, symptoms, treatments, and prevention methods, then create an informative and visually appealing infographic to share your findings.",
      whatYouWillLearn: "Medical research skills, data visualization, health literacy, scientific communication, critical evaluation of sources",
      difficulty: "Beginner",
      duration: "3-4 hours",
      tools: ["Canva or PowerPoint for design", "Internet for research (PubMed, WHO, CDC)", "Note-taking app or document"],
      howToSolve: [
        "Select a disease that interests you or affects people you know",
        "Use reliable medical sources to gather comprehensive information",
        "Organize information into logical categories (causes, symptoms, treatments, prevention)",
        "Design an infographic that presents information clearly and visually",
        "Include statistics, diagrams, or illustrations to enhance understanding",
        "Review for medical accuracy and clarity"
      ],
      detailedSteps: [
        "Choose a disease to research - consider something relevant or interesting to you",
        "Visit trusted medical websites like WHO, CDC, Mayo Clinic, or PubMed",
        "Take notes on: causes/risk factors, symptoms, diagnosis, treatments, prevention",
        "Look for statistics and data that make your infographic more impactful",
        "Sketch a rough layout for your infographic - decide on sections and flow",
        "Open Canva or PowerPoint and choose an appropriate template or start from scratch",
        "Add headings for each section with clear, readable fonts",
        "Include icons, charts, or simple illustrations to make it visually engaging",
        "Add your researched information in concise, easy-to-read points",
        "Include sources at the bottom for credibility",
        "Review for accuracy - double-check medical facts",
        "Export or save your infographic"
      ],
      evaluationQuestions: [
        {
          question: "While researching the disease, did you find yourself wanting to learn more about it?",
          options: [
            { text: "Yes, I was fascinated and kept reading more", score: 5 },
            { text: "Somewhat interested in learning more", score: 3 },
            { text: "A little curious but not deeply interested", score: 2 },
            { text: "No, I just wanted to complete the task", score: 1 }
          ]
        },
        {
          question: "When you learned about how the disease affects people, how did you feel?",
          options: [
            { text: "Moved and wanted to help people with this condition", score: 5 },
            { text: "Sympathetic but not deeply affected", score: 3 },
            { text: "Neutral about it", score: 2 },
            { text: "Didn't really feel anything", score: 1 }
          ]
        },
        {
          question: "Would you be interested in learning about other medical conditions?",
          options: [
            { text: "Yes, I want to learn about many health topics", score: 5 },
            { text: "Maybe, if it's relevant", score: 3 },
            { text: "Not particularly interested", score: 2 },
            { text: "No, medical topics don't interest me", score: 1 }
          ]
        },
        {
          question: "If someone asked you about this disease, would you feel confident explaining it?",
          options: [
            { text: "Yes, I'd be happy to share what I learned", score: 5 },
            { text: "Maybe, if they're really interested", score: 3 },
            { text: "Probably not, I don't remember much", score: 2 },
            { text: "No, I wouldn't want to talk about it", score: 1 }
          ]
        }
      ],
      skills: ["Research", "Biology", "Communication", "Critical Thinking", "Health Literacy"]
    },
    {
      id: "med-2",
      title: "Track Your Health Habits for a Week",
      description: "Monitor and record your sleep, diet, exercise, and stress levels for one week",
      difficulty: "Beginner",
      duration: "1 week",
      tools: ["Notebook/App", "Timer"],
      steps: [
        "Create a tracking template",
        "Record daily habits (sleep, food, exercise, mood)",
        "Note patterns and correlations",
        "Identify areas for improvement",
        "Set health goals based on findings"
      ],
      evaluationQuestions: [
        {
          question: "How interested were you in understanding how your habits affect your health?",
          options: [
            { text: "Very interested in the connections", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "Did you enjoy analyzing the patterns in your data?",
          options: [
            { text: "Found it very interesting", score: 5 },
            { text: "Somewhat interesting", score: 3 },
            { text: "A bit boring", score: 2 },
            { text: "Didn't enjoy it", score: 1 }
          ]
        },
        {
          question: "How much do you care about helping others improve their health?",
          options: [
            { text: "Very much, it's important to me", score: 5 },
            { text: "Somewhat", score: 3 },
            { text: "A little", score: 2 },
            { text: "Not much", score: 1 }
          ]
        }
      ],
      skills: ["Observation", "Data Analysis", "Health Awareness", "Self-reflection"]
    },
    {
      id: "med-3",
      title: "Create a First Aid Guide",
      description: "Research and create a simple first aid guide for common injuries",
      difficulty: "Beginner",
      duration: "2-3 hours",
      tools: ["Internet for research", "Document editor"],
      steps: [
        "Research common injuries and their first aid",
        "Verify information from reliable medical sources",
        "Create a clear, easy-to-follow guide",
        "Include illustrations if possible",
        "Review for accuracy"
      ],
      evaluationQuestions: [
        {
          question: "How interested were you in learning about medical treatments?",
          options: [
            { text: "Very interested in medical knowledge", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "Did you feel a sense of responsibility while creating this guide?",
          options: [
            { text: "Yes, felt very responsible", score: 5 },
            { text: "Somewhat responsible", score: 3 },
            { text: "A little", score: 2 },
            { text: "Not really", score: 1 }
          ]
        },
        {
          question: "How comfortable are you with handling medical emergencies?",
          options: [
            { text: "Very comfortable, want to help", score: 5 },
            { text: "Somewhat comfortable", score: 3 },
            { text: "A bit nervous", score: 2 },
            { text: "Very uncomfortable", score: 1 }
          ]
        }
      ],
      skills: ["Research", "Medical Knowledge", "Communication", "Responsibility"]
    },
    {
      id: "med-4",
      title: "Study Human Body Systems",
      description: "Choose one body system (circulatory, respiratory, etc.) and create a detailed presentation",
      difficulty: "Beginner",
      duration: "3-4 hours",
      tools: ["Internet", "Presentation software"],
      steps: [
        "Select a body system to study",
        "Research its structure and function",
        "Create diagrams or find accurate ones",
        "Explain how it works with other systems",
        "Present your findings"
      ],
      evaluationQuestions: [
        {
          question: "How fascinated were you by how the human body works?",
          options: [
            { text: "Extremely fascinated", score: 5 },
            { text: "Quite interested", score: 3 },
            { text: "Somewhat interested", score: 2 },
            { text: "Not very interested", score: 1 }
          ]
        },
        {
          question: "Did you enjoy learning about biological processes?",
          options: [
            { text: "Loved learning about biology", score: 5 },
            { text: "Enjoyed it", score: 3 },
            { text: "It was okay", score: 2 },
            { text: "Didn't enjoy it much", score: 1 }
          ]
        },
        {
          question: "How interested are you in pursuing a career in healthcare?",
          options: [
            { text: "Very interested", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Not very interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        }
      ],
      skills: ["Biology", "Research", "Presentation", "Critical Thinking"]
    }
  ],
  commerce: [
    {
      id: "com-1",
      title: "Create a Simple Budget",
      description: "Plan a comprehensive monthly budget for hypothetical income and expenses, including savings goals and expense categorization. This project introduces financial planning and money management fundamentals.",
      whatYouWillLearn: "Budgeting, financial planning, expense categorization, savings strategies, spreadsheet skills",
      difficulty: "Beginner",
      duration: "1-2 hours",
      tools: ["Excel or Google Sheets", "Calculator", "Budgeting apps (optional)"],
      howToSolve: [
        "Define income sources and amounts",
        "Categorize expenses into needs (rent, food, utilities) and wants (entertainment, hobbies)",
        "Research typical costs for each category",
        "Allocate realistic amounts to each expense",
        "Include a savings goal (aim for 20% of income)",
        "Ensure total expenses + savings don't exceed income",
        "Review and adjust as needed"
      ],
      detailedSteps: [
        "Open Excel or Google Sheets and create a new spreadsheet",
        "List all income sources with monthly amounts (salary, allowances, etc.)",
        "Calculate total monthly income",
        "Create expense categories: Housing, Food, Transportation, Utilities, Entertainment, Shopping, Healthcare, Savings",
        "Research average costs for each category in your area",
        "Enter estimated amounts for each expense",
        "Add a formula to calculate total expenses",
        "Add a formula to calculate remaining income after expenses",
        "Set a savings goal and adjust expenses to meet it",
        "Use conditional formatting to highlight overspending areas",
        "Review your budget - is it realistic? Can you stick to it?"
      ],
      evaluationQuestions: [
        {
          question: "When you completed your budget, did you feel like you had control over your finances?",
          options: [
            { text: "Yes, felt empowered and wanted to optimize further", score: 5 },
            { text: "Somewhat in control of the planning", score: 3 },
            { text: "A bit overwhelmed by it all", score: 2 },
            { text: "Just wanted to finish the exercise", score: 1 }
          ]
        },
        {
          question: "Did you find yourself thinking about real financial decisions while budgeting?",
          options: [
            { text: "Yes, I was thinking about my actual spending habits", score: 5 },
            { text: "Sometimes thought about real money", score: 3 },
            { text: "Briefly considered it", score: 2 },
            { text: "No, treated it as just numbers", score: 1 }
          ]
        },
        {
          question: "Would you be interested in learning about investing or growing money?",
          options: [
            { text: "Yes, very interested in financial growth", score: 5 },
            { text: "Somewhat interested in investing", score: 3 },
            { text: "A little curious but not motivated", score: 2 },
            { text: "No, finance doesn't interest me", score: 1 }
          ]
        },
        {
          question: "If someone asked you for budgeting advice, would you feel confident helping them?",
          options: [
            { text: "Yes, I'd be happy to share what I learned", score: 5 },
            { text: "Maybe, for basic budgeting", score: 3 },
            { text: "Probably not, I'm not an expert", score: 2 },
            { text: "No, I wouldn't want to give advice", score: 1 }
          ]
        }
      ],
      skills: ["Mathematics", "Planning", "Financial Literacy", "Organization", "Spreadsheet Skills"]
    },
    {
      id: "com-2",
      title: "Design a Marketing Campaign for a Product",
      description: "Create a marketing plan for a hypothetical product including target audience and channels",
      difficulty: "Beginner",
      duration: "2-3 hours",
      tools: ["Document editor", "Internet for research"],
      steps: [
        "Choose or invent a product",
        "Define target audience",
        "Research marketing channels",
        "Create campaign messaging",
        "Design promotional materials ideas"
      ],
      evaluationQuestions: [
        {
          question: "How creative did you feel while designing the campaign?",
          options: [
            { text: "Very creative and inspired", score: 5 },
            { text: "Somewhat creative", score: 3 },
            { text: "A little creative", score: 2 },
            { text: "Not very creative", score: 1 }
          ]
        },
        {
          question: "Were you interested in understanding consumer behavior?",
          options: [
            { text: "Very interested in psychology of buying", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "How much did you enjoy the creative aspect of marketing?",
          options: [
            { text: "Loved the creative process", score: 5 },
            { text: "Enjoyed it", score: 3 },
            { text: "It was okay", score: 2 },
            { text: "Didn't enjoy it much", score: 1 }
          ]
        }
      ],
      skills: ["Creativity", "Marketing", "Communication", "Strategic Thinking"]
    },
    {
      id: "com-3",
      title: "Research a Company's Business Model",
      description: "Analyze how a successful company makes money and document their business model",
      difficulty: "Beginner",
      duration: "2-3 hours",
      tools: ["Internet", "Document editor"],
      steps: [
        "Select a company to study",
        "Research their revenue streams",
        "Analyze their target customers",
        "Document their value proposition",
        "Identify key success factors"
      ],
      evaluationQuestions: [
        {
          question: "How interested were you in understanding how businesses operate?",
          options: [
            { text: "Very interested in business operations", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "Did you enjoy analyzing the company's strategy?",
          options: [
            { text: "Found strategic analysis fascinating", score: 5 },
            { text: "Somewhat interesting", score: 3 },
            { text: "A bit boring", score: 2 },
            { text: "Didn't enjoy it", score: 1 }
          ]
        },
        {
          question: "How interested are you in starting or running a business?",
          options: [
            { text: "Very interested in entrepreneurship", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Not very interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        }
      ],
      skills: ["Business Analysis", "Research", "Strategic Thinking", "Critical Thinking"]
    },
    {
      id: "com-4",
      title: "Track and Analyze Stock Prices",
      description: "Choose 3 stocks and track their prices for a week, then analyze the trends",
      difficulty: "Beginner",
      duration: "1 week",
      tools: ["Stock tracking app/website", "Spreadsheet"],
      steps: [
        "Select 3 companies to track",
        "Record daily stock prices",
        "Note any news affecting prices",
        "Analyze price trends",
        "Document your observations"
      ],
      evaluationQuestions: [
        {
          question: "How interested were you in following market trends?",
          options: [
            { text: "Very interested in market movements", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "Did you enjoy analyzing the data and patterns?",
          options: [
            { text: "Found data analysis very interesting", score: 5 },
            { text: "Somewhat interesting", score: 3 },
            { text: "A bit boring", score: 2 },
            { text: "Didn't enjoy it", score: 1 }
          ]
        },
        {
          question: "How comfortable are you with financial concepts and risk?",
          options: [
            { text: "Very comfortable with financial concepts", score: 5 },
            { text: "Somewhat comfortable", score: 3 },
            { text: "A bit challenging", score: 2 },
            { text: "Find it difficult", score: 1 }
          ]
        }
      ],
      skills: ["Financial Analysis", "Data Tracking", "Research", "Critical Thinking"]
    }
  ],
  arts: [
    {
      id: "art-1",
      title: "Write a Short Story",
      description: "Create an original short story (500-1000 words) with well-developed characters, an engaging plot, and a meaningful theme. This project explores creative writing and storytelling fundamentals.",
      whatYouWillLearn: "Creative writing, character development, plot structure, narrative techniques, self-expression",
      difficulty: "Beginner",
      duration: "2-3 hours",
      tools: ["Google Docs or Word", "Notebook for brainstorming", "Thesaurus (optional)"],
      howToSolve: [
        "Brainstorm story ideas based on themes or experiences that interest you",
        "Develop your main character - their personality, motivations, and goals",
        "Create a setting where your story takes place",
        "Outline the plot with a beginning, middle, and end",
        "Write the first draft focusing on getting the story down",
        "Revise and edit for clarity, flow, and impact",
        "Polish your final version"
      ],
      detailedSteps: [
        "Think about themes or ideas you want to explore - love, adventure, mystery, etc.",
        "Create a protagonist with clear goals and conflicts",
        "Decide on the setting - time period, location, atmosphere",
        "Outline your story: Introduction (setup), Rising Action (conflict builds), Climax (peak), Resolution (ending)",
        "Start writing - don't worry about perfection, just get the story flowing",
        "Show, don't tell - use descriptive language and dialogue",
        "Develop your character through their actions and choices",
        "Build tension leading to the climax",
        "Write a satisfying resolution that ties up loose ends",
        "Read your story aloud to check flow and rhythm",
        "Edit for grammar, spelling, and clarity",
        "Get feedback from someone if possible and refine further"
      ],
      evaluationQuestions: [
        {
          question: "When you were writing your story, did time seem to fly by?",
          options: [
            { text: "Yes, I was completely absorbed in writing", score: 5 },
            { text: "Sometimes lost track of time", score: 3 },
            { text: "Occasionally focused", score: 2 },
            { text: "No, I was just trying to finish", score: 1 }
          ]
        },
        {
          question: "Did you find yourself thinking about your characters even when not writing?",
          options: [
            { text: "Yes, they felt real to me", score: 5 },
            { text: "Sometimes thought about them", score: 3 },
            { text: "Briefly considered them", score: 2 },
            { text: "No, they were just characters", score: 1 }
          ]
        },
        {
          question: "Would you be excited to write another story?",
          options: [
            { text: "Yes, I have more story ideas I want to write", score: 5 },
            { text: "Maybe, if I have a good idea", score: 3 },
            { text: "Not really interested", score: 2 },
            { text: "No, I don't want to write more", score: 1 }
          ]
        },
        {
          question: "If someone asked you to read your story, would you be proud to share it?",
          options: [
            { text: "Yes, I'd be excited to share my work", score: 5 },
            { text: "Maybe, if they're interested", score: 3 },
            { text: "Probably not, it's not that good", score: 2 },
            { text: "No, I wouldn't want anyone to read it", score: 1 }
          ]
        }
      ],
      skills: ["Creative Writing", "Storytelling", "Empathy", "Communication", "Self-expression"]
    },
    {
      id: "art-2",
      title: "Design a Logo for a Hypothetical Brand",
      description: "Create a logo design for a fictional brand using free design tools",
      difficulty: "Beginner",
      duration: "2-3 hours",
      tools: ["Canva/Figma", "Internet for inspiration"],
      steps: [
        "Define the brand's personality",
        "Research logo design principles",
        "Sketch initial ideas",
        "Create digital version",
        "Refine based on design principles"
      ],
      evaluationQuestions: [
        {
          question: "How much did you enjoy the visual design process?",
          options: [
            { text: "Really enjoyed designing", score: 5 },
            { text: "Enjoyed it", score: 3 },
            { text: "It was okay", score: 2 },
            { text: "Didn't enjoy it much", score: 1 }
          ]
        },
        {
          question: "Were you interested in understanding how design influences perception?",
          options: [
            { text: "Very interested in design psychology", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "How satisfied were you with your creative output?",
          options: [
            { text: "Very satisfied with my design", score: 5 },
            { text: "Satisfied", score: 3 },
            { text: "Somewhat satisfied", score: 2 },
            { text: "Not satisfied", score: 1 }
          ]
        }
      ],
      skills: ["Visual Design", "Creativity", "Brand Strategy", "Digital Tools"]
    },
    {
      id: "art-3",
      title: "Research and Present on a Social Issue",
      description: "Choose a social issue, research it thoroughly, and create a presentation",
      difficulty: "Beginner",
      duration: "3-4 hours",
      tools: ["Internet", "Presentation software"],
      steps: [
        "Select a social issue to research",
        "Gather information from multiple perspectives",
        "Organize findings logically",
        "Create a compelling presentation",
        "Practice presenting"
      ],
      evaluationQuestions: [
        {
          question: "How passionate did you feel about the social issue?",
          options: [
            { text: "Very passionate about the cause", score: 5 },
            { text: "Somewhat passionate", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not very passionate", score: 1 }
          ]
        },
        {
          question: "Did you enjoy researching and understanding different perspectives?",
          options: [
            { text: "Found it very enlightening", score: 5 },
            { text: "Somewhat interesting", score: 3 },
            { text: "A bit boring", score: 2 },
            { text: "Didn't enjoy it", score: 1 }
          ]
        },
        {
          question: "How interested are you in advocating for social change?",
          options: [
            { text: "Very interested in making a difference", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Not very interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        }
      ],
      skills: ["Research", "Public Speaking", "Critical Thinking", "Social Awareness"]
    },
    {
      id: "art-4",
      title: "Create a Short Video or Podcast",
      description: "Produce a 3-5 minute video or podcast on a topic you're passionate about",
      difficulty: "Beginner",
      duration: "3-4 hours",
      tools: ["Phone camera/recorder", "Free editing software"],
      steps: [
        "Choose a topic and plan content",
        "Write a script or outline",
        "Record your video/audio",
        "Edit using free software",
        "Share and get feedback"
      ],
      evaluationQuestions: [
        {
          question: "How much did you enjoy creating media content?",
          options: [
            { text: "Loved the creative process", score: 5 },
            { text: "Enjoyed it", score: 3 },
            { text: "It was okay", score: 2 },
            { text: "Didn't enjoy it much", score: 1 }
          ]
        },
        {
          question: "Were you interested in learning about media production?",
          options: [
            { text: "Very interested in media skills", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "How comfortable were you expressing yourself through media?",
          options: [
            { text: "Very comfortable expressing myself", score: 5 },
            { text: "Somewhat comfortable", score: 3 },
            { text: "A bit nervous", score: 2 },
            { text: "Not comfortable", score: 1 }
          ]
        }
      ],
      skills: ["Media Production", "Communication", "Creativity", "Technical Skills"]
    }
  ],
  science: [
    {
      id: "sci-1",
      title: "Conduct a Simple Chemistry Experiment",
      description: "Perform a safe and exciting home chemistry experiment like a baking soda volcano, crystal growing, or color-changing reactions. This project introduces fundamental chemistry concepts through hands-on exploration.",
      whatYouWillLearn: "Chemical reactions, observation skills, scientific method, safety procedures, experimental design",
      difficulty: "Beginner",
      duration: "1-2 hours",
      tools: ["Baking soda", "Vinegar", "Food coloring", "Safety goggles", "Gloves", "Measuring cups/spoons", "Container for reaction"],
      howToSolve: [
        "Choose a safe experiment from reliable sources (baking soda volcano is great for beginners)",
        "Gather all materials and set up a safe workspace",
        "Follow safety precautions - wear goggles and gloves",
        "Conduct the experiment carefully, observing each step",
        "Document what you see, hear, and smell",
        "Research why the reaction happened",
        "Try variations to see how they affect the outcome"
      ],
      detailedSteps: [
        "Research your chosen experiment online - understand the science behind it",
        "Set up your experiment area - cover surfaces with newspaper or plastic",
        "Put on safety goggles and gloves before handling any chemicals",
        "Measure your materials precisely using measuring cups or spoons",
        "For baking soda volcano: build a volcano shape from clay or cardboard",
        "Add baking soda to the volcano chamber",
        "Mix food coloring with vinegar for colored lava",
        "Pour the vinegar mixture into the volcano and watch the reaction",
        "Observe the fizzing, bubbling, and expansion of the mixture",
        "Take notes on what you observe - speed of reaction, amount of foam, etc.",
        "Clean up safely and dispose of materials properly",
        "Research the chemical reaction: NaHCO₃ + CH₃COOH → products"
      ],
      evaluationQuestions: [
        {
          question: "When you saw the chemical reaction happen, how did you feel?",
          options: [
            { text: "Amazed and wanted to understand why it happened", score: 5 },
            { text: "Interested in the reaction", score: 3 },
            { text: "Mildly curious", score: 2 },
            { text: "Just wanted to finish the experiment", score: 1 }
          ]
        },
        {
          question: "Did you find yourself wanting to try other experiments?",
          options: [
            { text: "Yes, I want to try many more experiments", score: 5 },
            { text: "Maybe, if they're interesting", score: 3 },
            { text: "Not really interested", score: 2 },
            { text: "No, one experiment was enough", score: 1 }
          ]
        },
        {
          question: "When you learned why the reaction happened, were you fascinated by the science?",
          options: [
            { text: "Yes, the science behind it was fascinating", score: 5 },
            { text: "Somewhat interested in the explanation", score: 3 },
            { text: "Briefly curious", score: 2 },
            { text: "Didn't really care about the science", score: 1 }
          ]
        },
        {
          question: "Would you be excited to work in a laboratory setting?",
          options: [
            { text: "Yes, I'd love to do more experiments", score: 5 },
            { text: "Maybe, if the experiments are interesting", score: 3 },
            { text: "Not really interested in lab work", score: 2 },
            { text: "No, laboratory work doesn't appeal to me", score: 1 }
          ]
        }
      ],
      skills: ["Chemistry", "Experimentation", "Observation", "Scientific Method", "Safety Procedures"]
    },
    {
      id: "sci-2",
      title: "Study Mathematical Patterns in Nature",
      description: "Research and document mathematical patterns like Fibonacci sequence in nature",
      difficulty: "Beginner",
      duration: "2-3 hours",
      tools: ["Internet", "Notebook"],
      steps: [
        "Research mathematical patterns in nature",
        "Find examples (flowers, shells, galaxies)",
        "Document the patterns with photos/diagrams",
        "Explain the mathematics behind them",
        "Reflect on the beauty of math in nature"
      ],
      evaluationQuestions: [
        {
          question: "How amazed were you by mathematical patterns in nature?",
          options: [
            { text: "Extremely amazed by the patterns", score: 5 },
            { text: "Quite interested", score: 3 },
            { text: "Somewhat interested", score: 2 },
            { text: "Not very interested", score: 1 }
          ]
        },
        {
          question: "Did you enjoy exploring abstract mathematical concepts?",
          options: [
            { text: "Loved exploring abstract math", score: 5 },
            { text: "Enjoyed it", score: 3 },
            { text: "It was okay", score: 2 },
            { text: "Didn't enjoy it much", score: 1 }
          ]
        },
        {
          question: "How interested are you in pursuing mathematics further?",
          options: [
            { text: "Very interested in advanced math", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Not very interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        }
      ],
      skills: ["Mathematics", "Research", "Pattern Recognition", "Critical Thinking"]
    },
    {
      id: "sci-3",
      title: "Observe and Document Weather Patterns",
      description: "Track local weather for a week and analyze patterns and correlations",
      difficulty: "Beginner",
      duration: "1 week",
      tools: ["Weather app", "Notebook"],
      steps: [
        "Set up a weather tracking system",
        "Record daily weather data",
        "Note any weather events",
        "Look for patterns",
        "Research causes of weather patterns"
      ],
      evaluationQuestions: [
        {
          question: "How interested were you in understanding weather systems?",
          options: [
            { text: "Very interested in meteorology", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Mildly interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        },
        {
          question: "Did you enjoy analyzing the data and finding patterns?",
          options: [
            { text: "Found pattern analysis very interesting", score: 5 },
            { text: "Somewhat interesting", score: 3 },
            { text: "A bit boring", score: 2 },
            { text: "Didn't enjoy it", score: 1 }
          ]
        },
        {
          question: "How comfortable are you with scientific observation and data collection?",
          options: [
            { text: "Very comfortable with scientific methods", score: 5 },
            { text: "Somewhat comfortable", score: 3 },
            { text: "A bit challenging", score: 2 },
            { text: "Find it difficult", score: 1 }
          ]
        }
      ],
      skills: ["Observation", "Data Analysis", "Meteorology", "Scientific Method"]
    },
    {
      id: "sci-4",
      title: "Research Environmental Issues in Your Area",
      description: "Investigate local environmental challenges and potential solutions",
      difficulty: "Beginner",
      duration: "3-4 hours",
      tools: ["Internet", "Document editor"],
      steps: [
        "Identify local environmental issues",
        "Research causes and effects",
        "Look for existing solutions",
        "Propose your own solutions",
        "Create an action plan"
      ],
      evaluationQuestions: [
        {
          question: "How concerned are you about environmental issues?",
          options: [
            { text: "Very concerned and passionate", score: 5 },
            { text: "Somewhat concerned", score: 3 },
            { text: "Mildly concerned", score: 2 },
            { text: "Not very concerned", score: 1 }
          ]
        },
        {
          question: "Did you enjoy researching environmental science?",
          options: [
            { text: "Found environmental science fascinating", score: 5 },
            { text: "Somewhat interesting", score: 3 },
            { text: "A bit boring", score: 2 },
            { text: "Didn't enjoy it", score: 1 }
          ]
        },
        {
          question: "How interested are you in working on environmental solutions?",
          options: [
            { text: "Very interested in environmental work", score: 5 },
            { text: "Somewhat interested", score: 3 },
            { text: "Not very interested", score: 2 },
            { text: "Not interested", score: 1 }
          ]
        }
      ],
      skills: ["Environmental Science", "Research", "Problem Solving", "Critical Thinking"]
    }
  ]
};
