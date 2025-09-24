
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, Phone, MapPin, 
  Code, Brain, Database, Cloud, Monitor, Cpu,
  ExternalLink, ChevronDown, ArrowRight
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "AI Engineer",
      company: "CareCloud, Islamabad",
      period: "October 2024 – August 2025",
      achievements: [
        "Fine-tuned Whisper Large-v2 for Quranic Qaida transcription, improving recognition of individual and compound Arabic phonetic units to ~94% accuracy using custom audio datasets, and deployed it via a FastAPI-based transcription service.",
        "Developed a Django-based Call Auditing application with FastAPI microservices for diarization and transcription, integrating PyAnnote for diarization, Whisper for transcription, and Gemini for role-aware labeling, boosting efficiency by ~60%.",
        "Enhanced enterprise AI solutions including IVR systems, billing automation, log analytics dashboards, STT/TTS services through model fine-tuning, prompt optimization, containerized deployment, and workflow automation."
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "Digitalux, Lahore",
      period: "July 2024 – September 2024",
      achievements: [
        "Developed a Django-based web application with template inheritance, Django form handling, custom admin interface, user authentication, and CRUD operations using Django ORM with SQLite3. Implemented alert notifications using Django messages.",
        "Integrated the Meta LlamA 2 model with Streamlit frontend and deployed it using Vercel AI for real-time interactive responses.",
        "Conducted exploratory data analysis (EDA) on stock market datasets using Pandas, Matplotlib, Seaborn, and Plotly, generating insights that were displayed on the frontend for data visualization."
      ]
    },
    {
      title: "Machine Learning Researcher",
      company: "Swarm Robotics Lab, Taxila",
      period: "September 2023 – June 2024",
      achievements: [
        "Developed machine learning models for AI-based NICU (Neonatal ICU) solutions in collaboration with healthcare industry.",
        "Developed AI models using ML (Classification, Regression, Clustering, Reinforcement Learning), DL (CNNs & RNNs) and CV with Python and its libraries e.g. NumPy, Pandas, TensorFlow, PyTorch, scikit-learn, keras.",
        "Evaluated and optimized model performance using various metrics and optimization techniques e.g. hyperparameter tuning, Data Augmentation and EarlyStopping."

      ]
    }
  ];

  const projects = [
    {
      title: "AI Logistics Voice Agent",
      description: "Built a full-stack AI voice agent for logistics using FastAPI, React, and Supabase, integrated with Retell AI (STT/TTS) for real-time calling and OpenAI LLMs for adaptive conversation logic, agent configuration, and post-call structured summaries.",
      tech: ["FastAPI", "React", "Supabase", "Retell AI", "OpenAI LLMs"],
      features: ["Real-time calling", "Adaptive conversation logic", "Post-call summaries"],
      github: "https://github.com/mariakiyani012/AI_logistics_voice_agent"
    },
    {
      title: "Self-Help RAG Chatbot",
      description: "Motivational chatbot that retrieves insights from self-help books using RAG architecture",
      tech: ["LangChain", "GPT-4", "OpenAI Embeddings", "FAISS", "Streamlit"],
      features: ["Real-time interaction", "Semantic search", "Streamlit frontend"],
      github: "https://github.com/mariakiyani012/Self_Help_RAG_Chatbot"
    },
    {
      title: "Agentic AI BI Platform",
      description: "Designed a BI platform using OpenAI GPT, LangGraph orchestration for agentic workflows, and Streamlit for data ingestion, cleaning, pattern detection, visualization, and insight generation, with real-time dashboards and automated business summaries.",
      tech: ["OpenAI GPT", "LangGraph", "Streamlit"],
      features: ["Data ingestion & cleaning", "Pattern detection", "Visualization & dashboards", "Automated business summaries"],
      github: "https://github.com/mariakiyani012/Agentic_BI_Platform"
    },
    {
      title: "Agentic AI Blog Generator",
      description: "Multi-agent system with interdependent Researcher and Content Writer agents",
      tech: ["CrewAI", "GPT-4", "Serper API"],
      features: ["Automated research", "Content creation workflow", "Multi-agent coordination"],
      github: "#"
    },
    {
      title: "AI-Powered To-Do App",
      description: "Intelligent task management with automated subtask generation",
      tech: ["Groq's Llama API", "SQLite", "Streamlit"],
      features: ["Multilingual translation", "Persistent storage", "Intuitive UI"],
      github: "https://github.com/mariakiyani012/AI_to_do_app"
    },
    {
      title: "Cuddle Care (Final Year Project)",
      description: "Doctor's assistance app for monitoring neonates' vital parameters and physiological behavior",
      tech: ["OpenCV", "MediaPipe", "Custom CNN", "ResNet50", "SVMs"],
      features: ["Abnormality detection", "Alert mechanism", "Physiological monitoring"],
      // github: "#"
    }
  ];


  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "SQL", "C++", "MongoDB", "Django", "FastAPI", "Flask", "MLFlow", "Microservices", "MCP", "A2A"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "HuggingFace", "LLMs", "LangChain", "LangGraph", "Vector DBs", "RAGs"]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <Database className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Power BI", "Plotly", "Matplotlib", "Seaborn", "SQL Server", "DBeaver", "Airflow", "ETL Pipelines"]
    },
    {
      title: "Development Tools",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Jupyter Notebook", "Google Colab", "VS Code", "PyCharm", "GitHub Copilot", "Claude Code", "Ubuntu", "Shell Scripting"]
    },
    {
      title: "DevOps & Deployment",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Docker", "Docker-Compose", "DevContainers", "Azure DevOps", "GitHub/GitLab", "Streamlit"]
    },
        {
      title: "Cloud Computing",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS EC2", "AWS S3", "AWS SageMaker", "AWS Bedrock", "AWS Bedrock AgentCore", "Azure DevOps", "Azure ML"]
    }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Maria Aftab
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 font-medium ${
                    activeSection === item 
                      ? 'text-indigo-600 border-b-2 border-indigo-600' 
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-gray-700 hover:text-indigo-600 capitalize w-full text-left font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Maria Aftab
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 animate-slide-up font-medium">
              AI Engineer & Machine Learning Specialist
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 animate-slide-up max-w-3xl mx-auto">
              Transforming ideas into intelligent solutions with cutting-edge AI and machine learning technologies
            </p>
            
            {/* Contact Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up">
              <a href="mailto:mkiyani012@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail className="w-5 h-5" />
                mkiyani012@gmail.com
              </a>
              <a href="tel:+923494785382" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Phone className="w-5 h-5" />
                +92 349 478 5382
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                Lahore, Pakistan
              </div>
            </div>

            <div className="flex justify-center gap-6 animate-slide-up">
              <a href="https://github.com/mariakiyani012" className="p-3 bg-white hover:bg-indigo-600 hover:text-white border-2 border-gray-200 hover:border-indigo-600 rounded-full transition-all duration-300 shadow-sm">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/maria-aftab-kiyani/" className="p-3 bg-white hover:bg-indigo-600 hover:text-white border-2 border-gray-200 hover:border-indigo-600 rounded-full transition-all duration-300 shadow-sm">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Passionate AI Engineer with 1+ years of experience in developing and deploying AI & ML solutions. 
              I specialize in natural language processing, Custom chatbot development, Agentic Workflows and full-stack AI applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              My proven track record includes improving AI system efficiency by up to 60% and achieving 94% accuracy 
              in specialized transcription tasks. I thrive on transforming complex problems into reliable and efficient AI solutions.
            </p>
            
            {/* Key Achievements */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                <div className="text-3xl font-bold text-indigo-600 mb-2">94%</div>
                <p className="text-gray-700">Accuracy in Arabic Transcription</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                <p className="text-gray-700">AI Solution Efficiency Improvement</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-100">
                <div className="text-3xl font-bold text-pink-600 mb-2">1+</div>
                <p className="text-gray-700">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-indigo-600 text-lg font-medium">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 mt-2 md:mt-0 font-medium">{exp.period}</div>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <ArrowRight className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer block group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </div>
                <p className="text-gray-700 mb-6">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm border border-indigo-200 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Features */}
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg text-indigo-600 border border-indigo-200">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg text-sm border border-gray-200 font-medium hover:border-indigo-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Ready to bring your AI ideas to life? I'm always excited to discuss new opportunities 
            and challenging projects. Let's connect and create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:mkiyani012@gmail.com" 
              className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a 
              href="tel:+923494785382" 
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 hover:border-indigo-300 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2025 Maria Aftab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/mariakiyani012" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/maria-aftab-kiyani/" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;