// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-joined-idemia-jakarta-as-software-engineer-in-software-test-factory-team",
          title: 'Joined IDEMIA, Jakarta as Software Engineer in Software Test Factory Team',
          description: "",
          section: "News",},{id: "news-graduated-with-a-b-sc-in-electrical-engineering-from-institut-teknologi-sepuluh-nopember",
          title: 'Graduated with a B.Sc. in Electrical Engineering from Institut Teknologi Sepuluh Nopember',
          description: "",
          section: "News",},{id: "news-relocated-to-seoul-south-korea-and-joined-the-wireless-networking-lab-as-a-researcher",
          title: 'Relocated to Seoul, South Korea and joined the Wireless Networking Lab as a...',
          description: "",
          section: "News",},{id: "news-deep-learning-based-facial-expression-recognition-system-for-assisting-visually-impaired-persons-accepted-and-published-in-beei",
          title: 'Deep Learning-Based Facial Expression Recognition System for Assisting Visually Impaired Persons accepted and...',
          description: "",
          section: "News",},{id: "news-joined-crosscert-as-ai-engineer-part-time",
          title: 'Joined Crosscert as AI Engineer (part-time)',
          description: "",
          section: "News",},{id: "news-successfully-defended-and-published-a-thesis-titled-enhancement-of-model-agnostic-meta-learning",
          title: 'Successfully defended and published a thesis titled Enhancement of Model Agnostic Meta-Learning',
          description: "",
          section: "News",},{id: "news-graduated-with-a-m-sc-in-electrical-and-information-engineering-from-seoultech",
          title: 'Graduated with a M.Sc. in Electrical and Information Engineering from Seoultech',
          description: "",
          section: "News",},{id: "news-promoted-to-lead-engineer-in-ai-product-r-amp-amp-d-at-crosscert",
          title: 'Promoted to Lead Engineer in AI Product R&amp;amp;amp;D at Crosscert',
          description: "",
          section: "News",},{id: "news-joined-aibrain-to-lead-cross-functional-engineering-team-in-delivering-data-driven-features-for-saiva",
          title: 'Joined AIBrain to lead cross-functional engineering team in delivering data-driven features for SAIVA...',
          description: "",
          section: "News",},{id: "news-secured-7th-place-in-soccernet-2023-jersey-number-tracking-challenge",
          title: 'Secured 7th place in SoccerNet 2023 - Jersey Number Tracking Challenge',
          description: "",
          section: "News",},{id: "news-the-soccernet-2023-challenge-results-is-out-in-sport-engineering-journal",
          title: 'The SoccerNet 2023 Challenge Results is out in Sport Engineering journal',
          description: "",
          section: "News",},{id: "news-saiva-joined-sport-innovation-2024-showcasing-its-data-driven-recommendation-features-post",
          title: 'SAIVA joined Sport Innovation 2024 showcasing its data-driven recommendation features [Post]',
          description: "",
          section: "News",},{id: "news-saiva-joined-vivatech-2024-under-the-swisstech-banner-article-post",
          title: 'SAIVA joined Vivatech 2024 under the Swisstech banner [Article] [Post]',
          description: "",
          section: "News",},{id: "news-invited-speaker-for-enhancing-product-management-with-chatgpt-at-regional-scrum-gathering-seoul-2024",
          title: 'Invited speaker for Enhancing Product Management with ChatGPT at Regional Scrum Gathering℠ Seoul...',
          description: "",
          section: "News",},{id: "news-pivoted-to-drive-the-development-of-enterprise-llm-based-ai-agent-solutions-for-crosscert",
          title: 'Pivoted to drive the development of enterprise LLM-based AI Agent solutions for Crosscert...',
          description: "",
          section: "News",},{id: "projects-saiva-inno-amp-launch",
          title: 'SAIVA Inno &amp;amp; Launch',
          description: "Led the development of data-driven features and system refinement for SAIVA to achieve a market-ready state",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1/";
            },},{id: "projects-jersey-number-tracking-solution",
          title: 'Jersey Number Tracking Solution',
          description: "Our solution submitted on SoccerNet 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10/";
            },},{id: "projects-assistive-device-to-recog-expressions",
          title: 'Assistive Device to Recog. Expressions',
          description: "Assisting Visually Impaired Individuals with Real-time Emotion Detection",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11/";
            },},{id: "projects-head-motion-prediction-in-online-vr",
          title: 'Head Motion Prediction in Online VR',
          description: "Improve Online VR Experiences with Enhancement of Head Motion Prediction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12/";
            },},{id: "projects-orkes",
          title: 'Orkes',
          description: "A lightweight orchestration framework for LLM agent",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13/";
            },},{id: "projects-product-project-framework",
          title: 'Product-Project Framework',
          description: "An overview of my approach to managing products and projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3/";
            },},{id: "projects-ai-powered-tech-support-agents",
          title: 'AI-Powered Tech Support Agents',
          description: "An enterprise solution powered by LLM-RAG to deploy tech support AI agent",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4/";
            },},{id: "projects-facex",
          title: 'facex',
          description: "Lightweight, High-Performance emotion classifier trained on various emotion benchmark datasets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5/";
            },},{id: "projects-dockerize-llamafile",
          title: 'Dockerize-Llamafile',
          description: "Making it easy to deploy and manage LlamaFile",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6/";
            },},{id: "projects-trex-dqn",
          title: 'trex-DQN',
          description: "What if the AI learns to play the game based solely on visual inputs, like humans do?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7/";
            },},{id: "projects-immitation-learning-in-football",
          title: 'Immitation Learning in Football',
          description: "Creating defensive player agents to imitate real-world tactics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
