// ATI Quest - Academic Skills Data
// For University of Tartu Institute of Computer Science

const skillTiers = [
    { id: 'literacy', name: 'Research Fundamentals', icon: '📚', color: '#6366f1', description: 'Universal academic competencies', order: 0 },
    { id: 'product', name: 'UT & Ecosystem', icon: '🏛️', color: '#0ea5e9', description: 'Understanding your environment', order: 1 },
    { id: 'foundation', name: 'Core Competencies', icon: '🧱', color: '#3b82f6', description: 'Professional academic skills', order: 2 },
    { id: 'core', name: 'Advanced Execution', icon: '⚙️', color: '#8b5cf6', description: 'Expert-level project and collaboration skills', order: 3 },
    { id: 'specialization', name: 'Specialization', icon: '🎯', color: '#f59e0b', description: 'Deep expertise areas', order: 4 }
];

const skillPackages = [
    { id: 'grant-writing', name: 'Grant Writing', icon: '📝', color: '#3b82f6' },
    { id: 'project-management', name: 'Project Management', icon: '📊', color: '#8b5cf6' },
    { id: 'industry-collaboration', name: 'Industry Collaboration', icon: '🤝', color: '#06b6d4' },
    { id: 'funding-instruments', name: 'Funding Instruments', icon: '💰', color: '#f59e0b' },
    { id: 'research-domains', name: 'Research Domains', icon: '🔬', color: '#ef4444' }
];

const skills = [
    // ============================================================================
    // TIER 1: LITERACY - Research Fundamentals (10 skills)
    // ============================================================================
    { id: 'l-academic-writing', name: 'Academic Writing', tier: 'literacy', description: 'Structure, clarity, and style for papers and proposals' },
    { id: 'l-presentation', name: 'Presentation Skills', tier: 'literacy', description: 'Talks, posters, and conference presentations' },
    { id: 'l-research-ethics', name: 'Research Ethics', tier: 'literacy', description: 'Integrity, data management, reproducibility' },
    { id: 'l-peer-review', name: 'Peer Review', tier: 'literacy', description: 'Reviewing papers and evaluating research quality' },
    { id: 'l-literature-review', name: 'Literature Review', tier: 'literacy', description: 'Systematic search and synthesis of prior work' },
    { id: 'l-data-management', name: 'Research Data Management', tier: 'literacy', description: 'FAIR principles, data plans, archiving' },
    { id: 'l-open-science', name: 'Open Science', tier: 'literacy', description: 'Open access, preprints, reproducibility' },
    { id: 'l-networking', name: 'Academic Networking', tier: 'literacy', description: 'Building collaborations, conferences, visibility' },
    { id: 'l-time-management', name: 'Time Management', tier: 'literacy', description: 'Balancing research, teaching, admin, grants' },
    { id: 'l-mentoring', name: 'Mentoring', tier: 'literacy', description: 'Supervising students, postdocs, early-career support' },

    // ============================================================================
    // TIER 2: PRODUCT - UT & Ecosystem Knowledge (6 skills)
    // ============================================================================
    { id: 'p-ut-structure', name: 'UT Structure', tier: 'product', description: 'University governance, ICS organization, Delta ecosystem' },
    { id: 'p-estonian-funding', name: 'Estonian Funding', tier: 'product', description: 'ETAG grants, national programs, ETIS system' },
    { id: 'p-eu-funding', name: 'EU Funding Landscape', tier: 'product', description: 'Horizon Europe, ERC, MSCA, structural funds' },
    { id: 'p-industry-landscape', name: 'Industry Landscape', tier: 'product', description: 'Estonian tech ecosystem, Delta partners, startups' },
    { id: 'p-ip-basics', name: 'IP & Commercialization', tier: 'product', description: 'Patents, licensing, spin-offs, tech transfer' },
    { id: 'p-compliance', name: 'Research Compliance', tier: 'product', description: 'Ethics committees, GDPR, reporting requirements' },

    // ============================================================================
    // TIER 3: FOUNDATION - Core Competencies (18 skills)
    // ============================================================================

    // Category: Grant Writing (6 skills)
    { id: 'f-proposal-structure', name: 'Proposal Structure', tier: 'foundation', category: 'grant-writing', description: 'Excellence, Impact, Implementation sections' },
    { id: 'f-budget-planning', name: 'Budget Planning', tier: 'foundation', category: 'grant-writing', description: 'Cost categories, eligible expenses, justification' },
    { id: 'f-impact-pathways', name: 'Impact Pathways', tier: 'foundation', category: 'grant-writing', description: 'Dissemination, exploitation, sustainability' },
    { id: 'f-consortium-building', name: 'Consortium Building', tier: 'foundation', category: 'grant-writing', description: 'Partner selection, roles, agreements' },
    { id: 'f-evaluation-criteria', name: 'Evaluation Criteria', tier: 'foundation', category: 'grant-writing', description: 'Understanding reviewer expectations' },
    { id: 'f-resubmission', name: 'Resubmission Strategy', tier: 'foundation', category: 'grant-writing', description: 'Learning from feedback, improving proposals' },

    // Category: Project Management (6 skills)
    { id: 'f-project-planning', name: 'Project Planning', tier: 'foundation', category: 'project-management', description: 'Work packages, milestones, deliverables' },
    { id: 'f-team-leadership', name: 'Team Leadership', tier: 'foundation', category: 'project-management', description: 'Managing researchers, delegation, motivation' },
    { id: 'f-financial-management', name: 'Financial Management', tier: 'foundation', category: 'project-management', description: 'Budget tracking, reporting, audits' },
    { id: 'f-risk-management', name: 'Risk Management', tier: 'foundation', category: 'project-management', description: 'Identifying and mitigating project risks' },
    { id: 'f-stakeholder-mgmt', name: 'Stakeholder Management', tier: 'foundation', category: 'project-management', description: 'Advisory boards, project officers, partners' },
    { id: 'f-reporting', name: 'Project Reporting', tier: 'foundation', category: 'project-management', description: 'Periodic reports, reviews, amendments' },

    // Category: Industry Collaboration (6 skills)
    { id: 'f-industry-needs', name: 'Understanding Industry Needs', tier: 'foundation', category: 'industry-collaboration', description: 'Translating business problems to research' },
    { id: 'f-contract-research', name: 'Contract Research', tier: 'foundation', category: 'industry-collaboration', description: 'Negotiating and executing industry contracts' },
    { id: 'f-tech-transfer', name: 'Technology Transfer', tier: 'foundation', category: 'industry-collaboration', description: 'From research to market, TTO collaboration' },
    { id: 'f-startup-basics', name: 'Startup Fundamentals', tier: 'foundation', category: 'industry-collaboration', description: 'Founding spin-offs, funding, business models' },
    { id: 'f-partnership-models', name: 'Partnership Models', tier: 'foundation', category: 'industry-collaboration', description: 'Joint labs, PhDs, research chairs' },
    { id: 'f-communication-industry', name: 'Communicating with Industry', tier: 'foundation', category: 'industry-collaboration', description: 'Non-academic presentations, demos, pitches' },

    // ============================================================================
    // TIER 4: CORE - Advanced Execution (12 skills)
    // ============================================================================
    { id: 'c-large-proposals', name: 'Large Collaborative Proposals', tier: 'core', description: 'Coordinating multi-partner EU projects' },
    { id: 'c-erc-applications', name: 'ERC Application Mastery', tier: 'core', description: 'Starting, Consolidator, Advanced grants' },
    { id: 'c-horizon-coordination', name: 'Horizon Coordination', tier: 'core', description: 'Leading EU consortium as coordinator' },
    { id: 'c-industry-partnerships', name: 'Strategic Industry Partnerships', tier: 'core', description: 'Long-term collaborations, sponsored chairs' },
    { id: 'c-policy-engagement', name: 'Policy Engagement', tier: 'core', description: 'Research informing policy, stakeholder dialogues' },
    { id: 'c-media-communication', name: 'Science Communication', tier: 'core', description: 'Media, public engagement, societal impact' },
    { id: 'c-interdisciplinary', name: 'Interdisciplinary Research', tier: 'core', description: 'Cross-field collaboration methodologies' },
    { id: 'c-international-networks', name: 'International Networks', tier: 'core', description: 'Leading/participating in research networks' },
    { id: 'c-talent-development', name: 'Talent Development', tier: 'core', description: 'Building research groups, career paths' },
    { id: 'c-infrastructure', name: 'Research Infrastructure', tier: 'core', description: 'Equipment, computing resources, facilities' },
    { id: 'c-sustainability', name: 'Financial Sustainability', tier: 'core', description: 'Diverse funding portfolio, continuity' },
    { id: 'c-strategic-planning', name: 'Strategic Research Planning', tier: 'core', description: 'Long-term vision, positioning, priorities' },

    // ============================================================================
    // TIER 5: SPECIALIZATION - Funding & Domain Expertise (10 skills)
    // ============================================================================

    // Package: Funding Instruments
    { id: 's-erc-grants', name: 'ERC Grants', tier: 'specialization', package: 'funding-instruments', description: 'Starting, Consolidator, Advanced, Synergy' },
    { id: 's-horizon-ria', name: 'Horizon RIA/IA', tier: 'specialization', package: 'funding-instruments', description: 'Research & Innovation Actions' },
    { id: 's-msca', name: 'MSCA Fellowships', tier: 'specialization', package: 'funding-instruments', description: 'Postdoctoral and doctoral networks' },
    { id: 's-etag-grants', name: 'ETAG National Grants', tier: 'specialization', package: 'funding-instruments', description: 'Personal, team, and mobility grants' },
    { id: 's-industry-funding', name: 'Industry-Funded Research', tier: 'specialization', package: 'funding-instruments', description: 'Contract research, sponsored positions' },

    // Package: Research Domains (UT ICS)
    { id: 's-ai-ml', name: 'AI & Machine Learning', tier: 'specialization', package: 'research-domains', description: 'ML, deep learning, autonomous systems' },
    { id: 's-data-science', name: 'Data Science & Bioinformatics', tier: 'specialization', package: 'research-domains', description: 'Big data, health informatics, analytics' },
    { id: 's-security-crypto', name: 'Security & Cryptography', tier: 'specialization', package: 'research-domains', description: 'Cybersecurity, privacy, cryptographic methods' },
    { id: 's-software-systems', name: 'Software Engineering & IS', tier: 'specialization', package: 'research-domains', description: 'SE analytics, business processes, HCI' },
    { id: 's-distributed-systems', name: 'Distributed & Cloud Systems', tier: 'specialization', package: 'research-domains', description: 'IoT, HPC, mobile computing, edge systems' }
];

// Skill levels with descriptions (academic progression)
const skillLevels = [
    { level: 0, name: 'Not Started', color: '#4b5563', xpRequired: 0 },
    { level: 1, name: 'Aware', color: '#3b82f6', xpRequired: 100 },
    { level: 2, name: 'Competent', color: '#10b981', xpRequired: 300 },
    { level: 3, name: 'Proficient', color: '#eab308', xpRequired: 600 },
    { level: 4, name: 'Advanced', color: '#f97316', xpRequired: 1000 },
    { level: 5, name: 'Expert', color: '#a855f7', xpRequired: 1500 },
    { level: 6, name: 'Master', color: '#ec4899', xpRequired: 2100 },
    { level: 7, name: 'Grandmaster', color: '#14b8a6', xpRequired: 2800 }
];

// Academic profiles based on skill shape (replacing weapon profiles)
const weaponProfiles = [
    { id: 'scholar', name: 'Scholar', icon: '📖', description: 'Building research literacy', minLiteracy: 0, minBreadth: 0, minDeep: 0 },
    { id: 'researcher', name: 'Researcher', icon: '🔬', description: 'Solid generalist', minLiteracy: 80, minBreadth: 50, minDeep: 0 },
    { id: 'specialist', name: 'Specialist', icon: '🎯', description: 'Deep but narrow', minLiteracy: 0, minBreadth: 0, minDeep: 1 },
    { id: 'fellow', name: 'Fellow', icon: '🏅', description: 'Balanced T-shape', minLiteracy: 80, minBreadth: 50, minDeep: 1 },
    { id: 'professor', name: 'Professor', icon: '👨‍🏫', description: 'T-shape + 2 depths', minLiteracy: 80, minBreadth: 50, minDeep: 2 },
    { id: 'distinguished', name: 'Distinguished', icon: '🌟', description: 'Ideal senior profile', minLiteracy: 80, minBreadth: 50, minDeep: 3 }
];

// Cross-domain collaboration bridges
const collaborationBridges = {
    's-ai-ml+s-security-crypto': {
        name: 'Privacy-Preserving ML',
        description: 'Combine AI with cryptography for secure federated learning',
        relatedFunding: ['Horizon Europe Cluster 3', 'ERC Starting Grant'],
        utGroups: ['Machine Learning Group', 'Cryptography Research Group']
    },
    's-ai-ml+s-data-science': {
        name: 'Health AI & Bioinformatics',
        description: 'Apply ML to biomedical and health data challenges',
        relatedFunding: ['Horizon Europe Cluster 1', 'ETAG Health'],
        utGroups: ['Health Informatics', 'ELIXIR Estonia']
    },
    's-ai-ml+s-distributed-systems': {
        name: 'Edge AI & IoT Intelligence',
        description: 'Deploy ML models on edge devices and distributed systems',
        relatedFunding: ['Horizon Europe Cluster 4', 'ETAG ICT'],
        utGroups: ['Mobile & Cloud Lab', 'AI Research Group']
    },
    's-security-crypto+s-distributed-systems': {
        name: 'Secure Distributed Computing',
        description: 'Cryptographic protocols for cloud and blockchain systems',
        relatedFunding: ['Horizon Europe Cluster 3', 'Estonian Cyber Programme'],
        utGroups: ['Cryptography Research Group', 'Distributed Systems Group']
    },
    's-data-science+s-software-systems': {
        name: 'Data-Driven Software Engineering',
        description: 'Mining software repositories, ML for code analysis',
        relatedFunding: ['Horizon Europe Cluster 4', 'ETAG ICT'],
        utGroups: ['Software Engineering Group', 'Data Science Lab']
    },
    's-security-crypto+s-software-systems': {
        name: 'Secure Software Development',
        description: 'Security by design, vulnerability detection, formal methods',
        relatedFunding: ['Horizon Europe Cluster 3', 'National Cyber Security'],
        utGroups: ['Software Security Lab', 'Formal Methods Group']
    },
    's-ai-ml+s-software-systems': {
        name: 'AI for Software Engineering',
        description: 'Code generation, automated testing, intelligent IDEs',
        relatedFunding: ['Horizon Europe Cluster 4', 'ERC'],
        utGroups: ['SE Analytics', 'AI Research Group']
    },
    's-data-science+s-security-crypto': {
        name: 'Privacy-Preserving Data Analytics',
        description: 'Secure multi-party computation, differential privacy',
        relatedFunding: ['Horizon Europe Cluster 1', 'Health Data Programme'],
        utGroups: ['Cybernetica', 'Health Informatics']
    }
};

// Get collaboration opportunities for a user based on their specializations
function getCollaborationOpportunities(skillProgress) {
    const opportunities = [];
    const specSkills = skills.filter(s => s.tier === 'specialization');

    // Find specializations at level 2+
    const activeSpecs = specSkills.filter(s => {
        const progress = skillProgress[s.id];
        return progress && progress.level >= 2;
    }).map(s => s.id);

    // Check all combinations
    for (let i = 0; i < activeSpecs.length; i++) {
        for (let j = i + 1; j < activeSpecs.length; j++) {
            const key1 = `${activeSpecs[i]}+${activeSpecs[j]}`;
            const key2 = `${activeSpecs[j]}+${activeSpecs[i]}`;

            if (collaborationBridges[key1]) {
                opportunities.push(collaborationBridges[key1]);
            } else if (collaborationBridges[key2]) {
                opportunities.push(collaborationBridges[key2]);
            }
        }
    }

    return opportunities.slice(0, 3); // Return top 3
}

// Get skills by tier
function getSkillsByTier(tierId) {
    return skills.filter(s => s.tier === tierId);
}

// Get tier info
function getTierInfo(tierId) {
    return skillTiers.find(t => t.id === tierId);
}
