# Career Guide

A stunning static website that helps 11th standard students discover their interests and choose the right undergraduate stream through hands-on mini-projects and intelligent evaluation.

## Features

- **Interest Assessment**: Initial questionnaire to understand student interests and preferences
- **Mini-Projects**: 20+ hands-on projects across 5 major streams (Engineering, Medical, Commerce, Arts, Science)
- **Project Evaluation**: Each project includes evaluation questions to gauge genuine interest and capability
- **Smart Recommendations**: AI-free recommendation engine based on questionnaire responses and project performance
- **Detailed Stream Information**: Comprehensive information about sub-streams, career paths, and programs in USA and India
- **Progress Dashboard**: Track project completion and performance scores
- **Modern UI**: Beautiful gradient design with glassmorphism effects and smooth animations

## How It Works

1. **Assessment**: Students answer 6 questions about their interests, activities, and goals
2. **Project Selection**: Based on assessment, students receive personalized project recommendations
3. **Hands-on Learning**: Students complete 3+ mini-projects using free tools and resources
4. **Evaluation**: After each project, students answer reflection questions about their experience
5. **Recommendations**: The system analyzes all data to provide stream recommendations with reasoning
6. **Exploration**: Students can dive deep into recommended streams to explore sub-streams and career paths

## Streams Covered

### Engineering
- Computer Science
- Mechanical Engineering
- Electrical Engineering
- Civil Engineering

### Medical & Health Sciences
- Medicine (MBBS/MD)
- Nursing
- Pharmacy
- Biotechnology

### Commerce & Business
- Finance & Accounting
- Marketing
- Business Management
- Economics

### Arts & Humanities
- Psychology
- Design & Creative Arts
- Media & Communication
- Law

### Pure Sciences
- Physics
- Chemistry
- Mathematics
- Environmental Science

## Technology Stack

- **React 18** - UI Framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **JavaScript (ES6+)** - Logic and state management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd career-guide
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
career-guide/
├── src/
│   ├── components/
│   │   ├── Questionnaire.jsx      # Initial assessment questionnaire
│   │   ├── ProjectSelection.jsx   # Project recommendations based on interests
│   │   ├── ProjectDetail.jsx      # Individual project details and evaluation
│   │   ├── Dashboard.jsx          # Progress tracking dashboard
│   │   ├── Recommendations.jsx    # Stream recommendations with reasoning
│   │   └── StreamDetails.jsx      # Detailed stream information
│   ├── data/
│   │   ├── streams.js            # Stream and sub-stream data
│   │   └── projects.js            # Mini-projects database
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Global styles
│   └── index.css                  # Tailwind directives
├── public/                        # Static assets
├── index.html                     # HTML template
├── tailwind.config.js             # Tailwind configuration
└── package.json                   # Dependencies
```

## Key Design Decisions

- **No AI Runtime**: All recommendations are based on pre-defined logic and scoring, no external AI services
- **Free Tools Only**: All projects use free, accessible tools (VS Code, Canva, household items, etc.)
- **Minimum 3 Projects**: Recommendations require at least 3 completed projects for accuracy
- **Country-Specific**: Program information tailored for both USA and India
- **Progressive Disclosure**: Information revealed step-by-step to avoid overwhelming students

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
