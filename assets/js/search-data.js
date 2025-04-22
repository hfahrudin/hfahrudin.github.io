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
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
