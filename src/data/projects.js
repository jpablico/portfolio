import PowerAuditImage from '../assets/Covers/PowerAuditTool.png';
import UbersmithImage from '../assets/Covers/Ubersmith.png';
import NOCLAMMAImage from '../assets/Covers/NOCLLAMA.png';

const PROJECTS = [
  {
    slug: 'power-audit-tool',
    title: 'Power Audit Tool',
    description: 'Internal web app that tracks rack/cabinet power usage and capacity. Built to replace spreadsheet audits and cut audit time from hours to minutes.',
    details: {
      hero: {
        title: 'From Hours to Minutes',
        subtitle: 'How I eliminated manual spreadsheet processes and saved NOC teams 70% of their audit time'
      },
      challenge: {
        title: 'The Challenge',
        description: 'NOC technicians were spending entire shifts on power audits, manually logging cabinet readings into shared spreadsheets with no real-time validation or automated backup.',
        painPoints: [
          {
            title: 'Time-Intensive Process',
            description: '2-3 hours per audit cycle across hundreds of cabinets'
          },
          {
            title: 'Error-Prone Logging',
            description: 'Manual data entry led to inconsistent readings and typos'
          },
          {
            title: 'Version Conflicts',
            description: 'Multiple techs editing shared spreadsheets simultaneously'
          },
          {
            title: 'No Real-Time Tracking',
            description: 'Zero visibility into audit progress or completion status'
          }
        ]
      },
      solution: {
        title: 'My Solution',
        description: 'I designed and built a React web application with Google Sheets integration that guides technicians through audits with real-time validation and automated data synchronization.',
        process: [
          {
            step: 1,
            title: 'Secure Login',
            description: 'OAuth2 Google authentication provides personalized access and audit tracking'
          },
          {
            step: 2,
            title: 'Dynamic Loading',
            description: 'UI automatically configures based on current Google Sheets walkthrough data'
          },
          {
            step: 3,
            title: 'Guided Auditing',
            description: 'Color-coded interface with real-time validation and visual feedback'
          },
          {
            step: 4,
            title: 'Auto Sync',
            description: 'Data automatically saves to Google Drive and updates master spreadsheets'
          }
        ]
      },
      implementation: {
        title: 'Technical Implementation',
        areas: [
          {
            title: 'Frontend Architecture',
            description: 'React application with Vite build tooling and Tailwind CSS for responsive design and optimal performance.',
            technologies: ['React', 'Vite', 'Tailwind CSS']
          },
          {
            title: 'Google Integration',
            description: 'OAuth2 authentication with Google Sheets API for dynamic configuration and Google Drive API for automated CSV storage.',
            technologies: ['OAuth2', 'Google Sheets API', 'Google Drive API']
          },
          {
            title: 'Backend & Deployment',
            description: 'Node.js backend for API handling with GitHub Pages deployment and proxy configuration for authentication.',
            technologies: ['Node.js', 'REST API', 'GitHub Pages']
          }
        ]
      },
      impact: {
        title: 'Impact & Results',
        metrics: [
          {
            number: '70%',
            label: 'Time Reduction',
            description: 'Audit time reduced from hours to minutes per cycle'
          },
          {
            number: '40%',
            label: 'Consistency Improvement',
            description: 'Improved data reliability across all shifts'
          },
          {
            number: '100%',
            label: 'Adoption Rate',
            description: 'Deployed across all NOC shifts with minimal onboarding'
          },
          {
            number: '0',
            label: 'Downtime',
            description: 'Zero downtime since production rollout'
          }
        ]
      }
    },
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Google Sheets API', 'Google Drive API', 'OAuth2', 'K3s', 'Node.js'],
    image: PowerAuditImage,
    github: 'https://github.com/jpablico/GIP-Power-Audit',
    live: 'https://jpablico.github.io/GIP-Power-Audit/'
  },
{
    slug: 'nocllama-llm-assistant',
    title: 'NOCLLAMA – Internal Documentation Assistant',
    description: 'AI assistant for NOC technicians that achieved 100% team adoption before being rebuilt with improved architecture. Currently in R&D phase using stronger models to eliminate hallucination issues.',
    details: {
      hero: {
        title: 'Enterprise AI Documentation Assistant',
        subtitle: 'Deployed solution with 100% team adoption, now rebuilding with enhanced architecture for improved reliability'
      },
      challenge: {
        title: 'The Challenge',
        description: 'NOC technicians were spending 5-10 minutes searching through fragmented documentation during critical incidents, reducing operational efficiency and increasing response times.',
        painPoints: [
          {
            title: 'Knowledge Fragmentation',
            description: 'Critical information scattered across SOPs, ISMS policies, and ticket archives'
          },
          {
            title: 'Search Inefficiency',
            description: '5-10 minutes spent finding relevant documentation during incidents'
          },
          {
            title: 'Training Bottlenecks',
            description: 'New technicians struggling to locate procedures and policies'
          },
          {
            title: 'Hardware Constraints',
            description: 'Enterprise servers requiring efficient models that maintain accuracy'
          }
        ]
      },
      solution: {
        title: 'Solution Evolution',
        description: 'Developed and deployed a RAG-based AI assistant that achieved full team adoption, then rebuilt with improved architecture after identifying performance limitations.',
        process: [
          {
            step: 1,
            title: 'Initial Deployment',
            description: 'Successfully deployed with Mistral/Mixtral models achieving 100% team adoption'
          },
          {
            step: 2,
            title: 'Performance Optimization',
            description: 'Adapted to TinyLlama for Dell R440 hardware compatibility (704GB RAM)'
          },
          {
            step: 3,
            title: 'Quality Assessment',
            description: 'Identified hallucination issues with smaller model, made decision to rebuild'
          },
          {
            step: 4,
            title: 'Architecture Redesign',
            description: 'Rebuilding with OpenAI OSS 20B models and enhanced prompting on RTX 5080'
          }
        ]
      },
      implementation: {
        title: 'Technical Implementation',
        areas: [
          {
            title: 'Original Architecture',
            description: 'RAG pipeline using Ollama with Mistral/Mixtral models, achieving <30s response times and full team adoption.',
            technologies: ['Ollama', 'Mistral 7B', 'Mixtral 8x7B', 'LlamaIndex', 'Dell R440']
          },
          {
            title: 'Current Rebuild',
            description: 'Enhanced architecture using LM Studio with OpenAI OSS 20B models and stricter prompting to eliminate hallucinations.',
            technologies: ['LM Studio', 'OpenAI OSS 20B', 'Enhanced Prompting', 'RTX 5080']
          },
          {
            title: 'Core Infrastructure',
            description: 'FastAPI backend with React frontend, document processing pipeline, and streaming responses.',
            technologies: ['FastAPI', 'Python', 'React', 'Tailwind CSS', 'RAG Architecture']
          }
        ]
      },
      impact: {
        title: 'Impact & Lessons Learned',
        metrics: [
          {
            number: '100%',
            label: 'Initial Adoption',
            description: 'Full team adoption of original deployment'
          },
          {
            number: '<30s',
            label: 'Response Time',
            description: 'Achieved target knowledge access speed'
          },
          {
            number: '100%',
            label: 'Quality Focus',
            description: 'Prioritized accuracy over convenience when issues emerged'
          },
          {
            number: 'R&D',
            label: 'Current Phase',
            description: 'Rebuilding with improved architecture and stronger models'
          }
        ]
      }
    },
    technologies: ['Python', 'FastAPI', 'LM Studio', 'Ollama', 'LlamaIndex', 'React', 'Tailwind CSS'],
    image: NOCLAMMAImage,
    github: 'https://github.com/jpablico/NOCLLAMA',
    live: 'https://webui.jpablico.com'
  },

  /*
  {
    slug: 'nocllama-llm-assistant',
    title: 'NOCLLAMA – Internal  Assistant',
    description: 'Self-hosted AI assistant for NOC technicians. Uses local LLMs and RAG architecture to enable natural language querying of SOPs, ISMS policies, and ticket archives.',
    details: {
      hero: {
        title: 'Self-Hosted AI Documentation Assistant',
        subtitle: 'Local LLM deployment that gives NOC technicians instant access to institutional knowledge with enterprise-grade security'
      },
      challenge: {
        title: 'The Challenge',
        description: 'NOC technicians were spending 5-10 minutes searching through fragmented documentation during critical incidents, reducing operational efficiency and increasing response times.',
        painPoints: [
          {
            title: 'Knowledge Fragmentation',
            description: 'Critical information scattered across SOPs, ISMS policies, and ticket archives'
          },
          {
            title: 'Search Inefficiency',
            description: '5-10 minutes spent finding relevant documentation during incidents'
          },
          {
            title: 'Training Bottlenecks',
            description: 'New technicians struggling to locate procedures and policies'
          },
          {
            title: 'Cross-Department Support',
            description: 'Difficulty providing backup during staffing shortages'
          }
        ]
      },
      solution: {
        title: 'My Solution',
        description: 'I developed a fully self-hosted AI assistant using RAG architecture with local LLMs that indexes all departmental documentation and provides instant, contextual responses through a chat interface.',
        process: [
          {
            step: 1,
            title: 'Document Ingestion',
            description: 'LlamaIndex processes and indexes SOPs, ISMS policies, and ticket archives'
          },
          {
            step: 2,
            title: 'Local Inference',
            description: 'Ollama runs quantized Mistral/Mixtral models locally for secure processing'
          },
          {
            step: 3,
            title: 'RAG Processing',
            description: 'Hybrid keyword and semantic search retrieves relevant context'
          },
          {
            step: 4,
            title: 'Streaming Response',
            description: 'FastAPI delivers typewriter-style responses through React chat interface'
          }
        ]
      },
      implementation: {
        title: 'Technical Implementation',
        areas: [
          {
            title: 'AI Architecture',
            description: 'RAG pipeline using Ollama with Mistral 7B and Mixtral 8x7B models, quantized for optimal performance on enterprise hardware.',
            technologies: ['Ollama', 'Mistral 7B', 'Mixtral 8x7B', 'LlamaIndex', 'Q4_0 Quantization']
          },
          {
            title: 'Backend Infrastructure',
            description: 'FastAPI service with streaming responses, multi-model switching, and document processing capabilities.',
            technologies: ['FastAPI', 'Python', 'Streaming API', 'Multi-model Support']
          },
          {
            title: 'Frontend & Deployment',
            description: 'React SPA with typewriter animations and mobile-responsive design, deployed on Dell R440 with 704GB RAM.',
            technologies: ['React', 'Tailwind CSS', 'Dark Mode', 'Dell R440', '704GB RAM']
          }
        ]
      },
      impact: {
        title: 'Impact & Results',
        metrics: [
          {
            number: '< 30s',
            label: 'Knowledge Access',
            description: 'Reduced documentation search time from 5-10 minutes'
          },
          {
            number: '< 2s',
            label: 'Response Time',
            description: 'Local inference speed on 46.7B parameter Mixtral'
          },
          {
            number: '100%',
            label: 'Document Coverage',
            description: 'Complete indexing of SOPs and policies'
          },
          {
            number: '100%',
            label: 'Team Adoption',
            description: 'Fully adopted by overnight and escalation teams'
          }
        ]
      }
    },
    technologies: ['Python', 'FastAPI', 'Ollama', 'LlamaIndex', 'React', 'Tailwind CSS'],
    image: NOCLAMMAImage,
    github: 'https://github.com/jpablico/NOCLLAMA'
  },
  */
  {
    slug: 'ubersmith-alert-helper',
    title: 'Ubersmith Alert Helper Extension',
    description: 'Chrome extension designed to assist data center technicians in managing high-volume alert storms by highlighting critical keywords and guiding streamlined triage workflows.',
    details: {
      hero: {
        title: 'Smart Alert Management',
        subtitle: 'Chrome extension that transforms overwhelming alert storms into manageable workflows with intelligent filtering and guided triage'
      },
      challenge: {
        title: 'The Challenge',
        description: 'During high-volume alert storms, NOC technicians were overwhelmed by hundreds of tickets, struggling to identify critical issues while low-priority alerts obscured real problems.',
        painPoints: [
          {
            title: 'Alert Fatigue',
            description: 'Hundreds of low-priority alerts obscuring critical issues during incidents'
          },
          {
            title: 'Manual Triage',
            description: 'Time-consuming manual review of each ticket for relevance and priority'
          },
          {
            title: 'Accidental Closures',
            description: 'Risk of accidentally closing important tickets during mass actions'
          },
          {
            title: 'Inefficient Filtering',
            description: 'No automated way to identify and filter redundant or low-priority alerts'
          }
        ]
      },
      solution: {
        title: 'My Solution',
        description: 'I developed a Chrome extension with regex-based keyword highlighting and intelligent filtering that guides technicians through a multi-step validation process before mass ticket actions.',
        process: [
          {
            step: 1,
            title: 'Keyword Detection',
            description: 'Regex patterns highlight critical keywords and terms in ticket lists'
          },
          {
            step: 2,
            title: 'Smart Filtering',
            description: 'Toggle-based filters remove known low-priority or redundant alerts'
          },
          {
            step: 3,
            title: 'Guided Validation',
            description: 'Step-by-step UI prevents accidental mass closure of important tickets'
          },
          {
            step: 4,
            title: 'Streamlined Actions',
            description: 'Efficient bulk operations while maintaining accuracy and accountability'
          }
        ]
      },
      implementation: {
        title: 'Technical Implementation',
        areas: [
          {
            title: 'Browser Integration',
            description: 'Chrome Extension Manifest V3 with content scripts for seamless Ubersmith integration and DOM manipulation.',
            technologies: ['JavaScript', 'Chrome Extensions API', 'Manifest V3']
          },
          {
            title: 'Pattern Recognition',
            description: 'Regex-based keyword highlighting and intelligent filtering algorithms for alert categorization.',
            technologies: ['Regex', 'DOM Manipulation', 'Pattern Matching']
          },
          {
            title: 'User Experience',
            description: 'Multi-step validation UI and toggle-based controls designed to prevent errors while maintaining efficiency.',
            technologies: ['Content Scripts', 'Event Handling', 'UX Design']
          }
        ]
      },
      impact: {
        title: 'Impact & Results',
        metrics: [
          {
            number: '30%',
            label: 'Workload Reduction',
            description: 'Significant decrease in manual alert processing time'
          },
          {
            number: '2-3h → min',
            label: 'Triage Time',
            description: 'Dramatic reduction in alert storm response time'
          },
          {
            number: '12',
            label: 'Workstations',
            description: 'Zero-configuration deployment across all NOC workstations'
          },
          {
            number: '100%',
            label: 'Accuracy Maintained',
            description: 'No compromise on accountability or ticket handling precision'
          }
        ]
      }
    },
    technologies: ['JavaScript', 'Chrome Extensions API', 'Regex', 'DOM Manipulation'],
    image: UbersmithImage,
    github: 'https://github.com/jpablico/Ubersmith-Alert-Helper-Extension'
  }
];
export default PROJECTS;