// ATI Quest - Question Bank
// Questions organized by skill ID and difficulty level (1-3)
// For University of Tartu Institute of Computer Science

const questions = {
    // ============================================================================
    // LITERACY TIER - Research Fundamentals
    // ============================================================================

    'l-academic-writing': {
        1: [
            {
                q: "What is the recommended structure for an academic paper's introduction?",
                options: ["Hypothesis → Data → Analysis → Findings", "Context → Gap → Purpose → Overview", "Methods → Results → Discussion → Conclusion", "Abstract → Keywords → References → Appendix"],
                correct: 1,
                explanation: "The introduction typically follows the 'funnel' structure: establish context, identify the gap in knowledge, state your purpose/contribution, and preview the paper structure.",
                learnMore: { url: "https://writingcenter.unc.edu/tips-and-tools/introductions/", text: "📚 UNC Writing Center: Introductions" }
            },
            {
                q: "Which section of a research paper describes HOW the study was conducted?",
                options: ["The Results section with statistical tables", "The Discussion section with interpretations", "The Methods/Methodology section", "The Introduction section with background"],
                correct: 2,
                explanation: "The Methods section details the procedures, materials, and approaches used to conduct the research, enabling reproducibility.",
                learnMore: { url: "https://www.scribbr.com/dissertation/methodology/", text: "📚 Scribbr: Writing a Methodology" }
            },
            {
                q: "What is the primary purpose of an abstract?",
                options: ["To list all references used in the paper", "To acknowledge funding sources and contributors", "To present the complete raw research data", "To provide a brief summary of the entire paper"],
                correct: 3,
                explanation: "An abstract is a concise summary (typically 150-300 words) that covers the purpose, methods, results, and conclusions of the paper.",
                learnMore: { url: "https://writing.wisc.edu/handbook/assignments/writing-an-abstract-for-your-research-paper/", text: "📚 UW-Madison: Writing Abstracts" }
            }
        ],
        2: [
            {
                q: "What does 'signposting' mean in academic writing?",
                options: ["Using transitional phrases to guide readers through arguments", "Adding detailed footnotes to every page of the paper", "Including visual diagrams and flowcharts in text", "Placing citation markers throughout the document"],
                correct: 0,
                explanation: "Signposting uses transitional phrases like 'First,' 'However,' 'In contrast,' to help readers follow the logical flow of arguments.",
                learnMore: { url: "https://www.phrasebank.manchester.ac.uk/signalling-transition/", text: "📚 Manchester Phrasebank: Transitions" }
            },
            {
                q: "Which voice is generally preferred in scientific writing?",
                options: ["Active voice for direct statements", "Passive voice for objectivity and focus", "Second person for reader engagement", "Imperative voice for clear instructions"],
                correct: 1,
                explanation: "While active voice is increasingly accepted, passive voice is traditionally used in scientific writing to maintain objectivity and focus on the research rather than the researcher.",
                learnMore: { url: "https://academicguides.waldenu.edu/writingcenter/scholarlyvoice/activepassive", text: "📚 Walden: Active vs Passive Voice" }
            },
            {
                q: "What is 'hedging' in academic writing?",
                options: ["Removing citations to streamline the text", "Using very short sentences for clarity", "Adopting informal language for accessibility", "Using cautious language to avoid overclaiming"],
                correct: 3,
                explanation: "Hedging uses words like 'may,' 'suggests,' 'appears to' to express appropriate caution about claims and acknowledge limitations.",
                learnMore: { url: "https://www.phrasebank.manchester.ac.uk/being-cautious/", text: "📚 Manchester Phrasebank: Being Cautious" }
            }
        ],
        3: [
            {
                q: "What is the IMRaD structure?",
                options: ["Ideas, Models, Research, and Development", "Introduction, Methods, Results, and Discussion", "Index, Materials, References, and Data", "Inquiry, Measurement, Review, and Debate"],
                correct: 1,
                explanation: "IMRaD is the standard structure for empirical research papers in many scientific fields.",
                learnMore: { url: "https://libguides.usc.edu/writingguide/IMRaD", text: "📚 USC Libraries: IMRaD Format" }
            },
            {
                q: "How should you handle conflicting evidence in your literature review?",
                options: ["Present only evidence that supports your hypothesis", "Cite only the most recent study on the topic", "Ignore studies that contradict your findings", "Acknowledge and critically analyze the contradictions"],
                correct: 3,
                explanation: "Good academic writing acknowledges conflicting evidence and provides critical analysis of why discrepancies might exist.",
                learnMore: { url: "https://writingcenter.unc.edu/tips-and-tools/literature-reviews/", text: "📚 UNC: Literature Reviews" }
            },
            {
                q: "What is a 'thesis statement' in academic writing?",
                options: ["The complete list of references at the end", "A detailed summary of your methodology", "A clear declaration of the paper's main argument", "The acknowledgments section thanking contributors"],
                correct: 2,
                explanation: "A thesis statement clearly articulates the central argument or purpose of the paper, typically appearing in the introduction.",
                learnMore: { url: "https://writingcenter.fas.harvard.edu/pages/developing-thesis", text: "📚 Harvard: Developing a Thesis" }
            },
            {
                q: "Which is the best practice for paragraph structure?",
                options: ["One main idea per paragraph with topic sentence first", "Multiple ideas per paragraph to increase density", "Varying structure randomly to maintain interest", "Exactly five sentences in every paragraph"],
                correct: 0,
                explanation: "Each paragraph should focus on one main idea, introduced by a topic sentence and supported by evidence and analysis.",
                learnMore: { url: "https://writingcenter.unc.edu/tips-and-tools/paragraphs/", text: "📚 UNC: Paragraph Development" }
            }
        ]
    },

    'l-presentation': {
        1: [
            {
                q: "What is the recommended maximum number of bullet points per slide?",
                options: ["As many points as will fit on the slide", "Between 5-7 bullet points maximum", "Exactly 10 bullet points per slide", "No more than 15-20 bullet points"],
                correct: 1,
                explanation: "The 7x7 rule suggests no more than 7 bullet points per slide with 7 words each to maintain audience attention.",
                learnMore: { url: "https://www.duarte.com/presentation-skills-resources/", text: "📚 Duarte: Presentation Resources" }
            },
            {
                q: "How long should a typical conference presentation be?",
                options: ["Around 60 minutes with extended discussion", "Approximately 15-20 minutes plus Q&A time", "Exactly 5 minutes without questions", "However long you need to cover material"],
                correct: 1,
                explanation: "Most conference talks are 15-20 minutes with 5-10 minutes for questions, though this varies by venue.",
                learnMore: { url: "https://www.acm.org/publications/proceedings-template", text: "📚 ACM Conference Guidelines" }
            },
            {
                q: "What should be the font size minimum for presentation slides?",
                options: ["8-10 point for detailed information", "Around 12 point like in documents", "At least 24-28 point for visibility", "Only 48 point or larger fonts"],
                correct: 2,
                explanation: "A minimum of 24-28 point ensures readability from the back of the room.",
                learnMore: { url: "https://www.presentationzen.com/", text: "📚 Presentation Zen" }
            }
        ],
        2: [
            {
                q: "What is the 'Rule of Three' in presentations?",
                options: ["Always include exactly three authors", "Present for exactly three minutes total", "Organize content into three main points", "Use exactly three colors throughout"],
                correct: 2,
                explanation: "Audiences remember information better when organized into three main points or sections.",
                learnMore: { url: "https://hbr.org/2012/07/the-irresistible-power-of-stor", text: "📚 HBR: Power of Storytelling" }
            },
            {
                q: "What should you do in the first 30 seconds of a presentation?",
                options: ["Read through your complete biography", "Show the detailed table of contents", "Apologize for any potential shortcomings", "Hook the audience with a compelling opening"],
                correct: 3,
                explanation: "The opening should capture attention through a question, surprising fact, or relevant anecdote.",
                learnMore: { url: "https://www.ted.com/talks", text: "📚 TED Talks: Presentation Examples" }
            },
            {
                q: "How should you handle technical difficulties during a presentation?",
                options: ["Cancel the presentation and reschedule it", "Stay calm and switch to your backup plan", "Publicly blame the conference organizers", "Continue as though nothing has happened"],
                correct: 1,
                explanation: "Prepare backups (USB, email copy, printed notes) and remain composed - audiences are understanding of technical issues.",
                learnMore: { url: "https://www.toastmasters.org/resources", text: "📚 Toastmasters: Public Speaking" }
            }
        ],
        3: [
            {
                q: "What is an 'elevator pitch' for research?",
                options: ["A formal written grant proposal document", "A comprehensive methodology description", "A 30-60 second summary for non-experts", "A complete list of your publications"],
                correct: 2,
                explanation: "An elevator pitch concisely explains your research's importance and impact in the time of an elevator ride.",
                learnMore: { url: "https://www.nature.com/articles/d41586-018-07025-7", text: "📚 Nature: Elevator Pitch Tips" }
            },
            {
                q: "How should you design slides for accessibility?",
                options: ["Use small fonts with decorative backgrounds", "Rely on red and green color coding for data", "Use high contrast colors and sans-serif fonts", "Include dense text blocks for completeness"],
                correct: 2,
                explanation: "Accessible slides use high contrast, clear fonts, and avoid relying solely on color to convey information.",
                learnMore: { url: "https://www.w3.org/WAI/teach-advocate/accessible-presentations/", text: "📚 W3C: Accessible Presentations" }
            },
            {
                q: "What is the best way to handle hostile questions?",
                options: ["Argue back aggressively to defend your work", "Ignore the questioner and move on quickly", "Leave the stage immediately to avoid conflict", "Respond calmly and acknowledge valid points"],
                correct: 3,
                explanation: "Stay professional, acknowledge legitimate concerns, and redirect to your evidence-based findings.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-01041-9", text: "📚 Nature: Handling Q&A" }
            },
            {
                q: "What is a poster 'lightning talk'?",
                options: ["A detailed 60-minute presentation session", "A 1-3 minute verbal summary of your poster", "An informal discussion at the poster board", "A written abstract submitted beforehand"],
                correct: 1,
                explanation: "Lightning talks are brief presentations (1-3 minutes) that introduce poster content before the session.",
                learnMore: { url: "https://www.acm.org/conferences/best-practices", text: "📚 ACM: Conference Best Practices" }
            }
        ]
    },

    'l-research-ethics': {
        1: [
            {
                q: "What is research misconduct?",
                options: ["Making honest computational errors in analysis", "Fabrication, falsification, or plagiarism in research", "Having your paper rejected by reviewers", "Disagreeing with peer reviewer comments"],
                correct: 1,
                explanation: "Research misconduct specifically refers to fabrication (making up data), falsification (manipulating data), or plagiarism (FFP).",
                learnMore: { url: "https://ori.hhs.gov/definition-research-misconduct", text: "📚 ORI: Research Misconduct" }
            },
            {
                q: "What is informed consent in research?",
                options: ["Researchers giving consent to publish findings", "Journals agreeing to review the manuscript", "Universities approving the funding request", "Participants understanding and agreeing to participate"],
                correct: 3,
                explanation: "Informed consent ensures participants understand the research purpose, procedures, risks, and their rights before agreeing to participate.",
                learnMore: { url: "https://www.hhs.gov/ohrp/regulations-and-policy/guidance/informed-consent/index.html", text: "📚 OHRP: Informed Consent" }
            },
            {
                q: "Why is data management important for research ethics?",
                options: ["It makes research papers noticeably longer", "It satisfies journal formatting requirements only", "It enables verification and reproducibility", "It reduces institutional data storage costs"],
                correct: 2,
                explanation: "Proper data management ensures research can be verified, reproduced, and that data is handled responsibly.",
                learnMore: { url: "https://www.go-fair.org/fair-principles/", text: "📚 GO FAIR: FAIR Principles" }
            }
        ],
        2: [
            {
                q: "What is a conflict of interest in research?",
                options: ["When two researchers disagree on methods", "When project deadlines overlap and conflict", "When personal interests could bias research", "When research funding is deemed insufficient"],
                correct: 2,
                explanation: "Conflicts of interest occur when financial, personal, or professional factors could improperly influence research decisions.",
                learnMore: { url: "https://publicationethics.org/resources/guidelines/guidelines-handling-conflict-interest", text: "📚 COPE: Conflict of Interest" }
            },
            {
                q: "What is the purpose of an ethics committee (IRB/ERB)?",
                options: ["To approve research project budgets", "To edit and improve research manuscripts", "To hire and evaluate researchers", "To protect research participants from harm"],
                correct: 3,
                explanation: "Ethics committees review research proposals to ensure participant safety, privacy, and ethical treatment.",
                learnMore: { url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/institutional-review-boards-frequently-asked-questions", text: "📚 FDA: IRB FAQ" }
            },
            {
                q: "What constitutes authorship according to ICMJE guidelines?",
                options: ["Being a supervisor on the research project", "Providing funding for the research activities", "Any minor involvement in the project work", "Substantial contribution, drafting, approval, and accountability"],
                correct: 3,
                explanation: "ICMJE criteria require substantial contributions to conception/design/analysis, drafting/revising, final approval, and accountability.",
                learnMore: { url: "https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html", text: "📚 ICMJE: Authorship" }
            }
        ],
        3: [
            {
                q: "What is 'salami slicing' in publication ethics?",
                options: ["Splitting one study into multiple papers inappropriately", "Editing research data to fit your hypothesis", "Cutting text down to meet journal word limits", "Removing co-authors from the publication list"],
                correct: 0,
                explanation: "Salami slicing fragments research into minimum publishable units to inflate publication counts.",
                learnMore: { url: "https://publicationethics.org/resources/discussion-documents/salami-slicing", text: "📚 COPE: Duplicate Publication" }
            },
            {
                q: "What is the Declaration of Helsinki?",
                options: ["A university ranking system for research", "Ethical principles for medical research with humans", "A funding agreement between European countries", "A copyright protection treaty for researchers"],
                correct: 1,
                explanation: "The Declaration of Helsinki establishes ethical principles for medical research involving human subjects.",
                learnMore: { url: "https://www.wma.net/policies-post/wma-declaration-of-helsinki-ethical-principles-for-medical-research-involving-human-subjects/", text: "📚 WMA: Helsinki Declaration" }
            },
            {
                q: "What is 'p-hacking' in research?",
                options: ["Hacking into research institution databases", "Publishing results quickly to establish priority", "Transparently testing multiple research hypotheses", "Manipulating analyses until achieving statistical significance"],
                correct: 3,
                explanation: "P-hacking involves manipulating data analysis to achieve significant p-values, a form of questionable research practice.",
                learnMore: { url: "https://www.nature.com/articles/s41562-016-0021", text: "📚 Nature: Redefine Statistical Significance" }
            },
            {
                q: "What is the purpose of pre-registration?",
                options: ["Registering copyright protection for your ideas", "Booking slots for conference presentations early", "Applying for ethics committee approval in advance", "Documenting hypotheses and methods before data collection"],
                correct: 3,
                explanation: "Pre-registration records study design and analysis plans in advance to prevent questionable research practices.",
                learnMore: { url: "https://www.cos.io/initiatives/prereg", text: "📚 COS: Preregistration" }
            }
        ]
    },

    'l-peer-review': {
        1: [
            {
                q: "What is the primary purpose of peer review in academic publishing?",
                options: ["To reject as many submitted papers as possible", "To delay the publication of competing research", "To evaluate research quality before publication", "To increase journal subscription profits"],
                correct: 2,
                explanation: "Peer review serves as quality control, helping ensure published research meets scientific standards.",
                learnMore: { url: "https://peerreview.research.unimelb.edu.au/", text: "📚 Melbourne: Peer Review Guide" }
            },
            {
                q: "What should a reviewer do if they have a conflict of interest with the paper?",
                options: ["Review the paper anyway but be extra critical", "Ask a colleague to review it in their place", "Accept but disclose the conflict in the review", "Decline to review and notify the editor immediately"],
                correct: 3,
                explanation: "Reviewers should decline reviews where they have conflicts (e.g., collaborators, competitors, personal relationships).",
                learnMore: { url: "https://publicationethics.org/resources/guidelines/cope-ethical-guidelines-peer-reviewers", text: "📚 COPE: Peer Reviewer Ethics" }
            },
            {
                q: "What is 'single-blind' peer review?",
                options: ["Reviewers know authors, but authors don't know reviewers", "Neither party knows the identity of the other", "Both parties know each other's full identity", "The editor alone knows everyone's identities"],
                correct: 0,
                explanation: "In single-blind review, reviewer identities are hidden from authors but reviewers can see author names.",
                learnMore: { url: "https://www.elsevier.com/reviewers/what-is-peer-review", text: "📚 Elsevier: Types of Peer Review" }
            }
        ],
        2: [
            {
                q: "What should a constructive peer review include?",
                options: ["Personal opinions about the research authors", "Only negative criticism to drive improvement", "Suggestions to cite the reviewer's own papers", "Specific, actionable feedback with clear justification"],
                correct: 3,
                explanation: "Good reviews provide specific, constructive feedback that helps authors improve their work.",
                learnMore: { url: "https://www.nature.com/articles/d41586-018-06991-0", text: "📚 Nature: How to Write a Review" }
            },
            {
                q: "What is 'double-blind' peer review?",
                options: ["The review process happens in two separate rounds", "Neither reviewers nor authors know each other's identity", "Exactly two reviewers evaluate each submitted paper", "Reviews are published in two different versions"],
                correct: 1,
                explanation: "Double-blind review anonymizes both authors and reviewers to reduce bias.",
                learnMore: { url: "https://www.wiley.com/en-us/network/publishing/research-publishing/peer-review/double-blind-peer-review", text: "📚 Wiley: Double-Blind Review" }
            },
            {
                q: "How long should a typical journal peer review take?",
                options: ["Same day turnaround is the expected standard", "Between 2-4 weeks is considered reasonable", "Around 6-12 months is typical and normal", "Time constraints don't apply to peer review"],
                correct: 1,
                explanation: "While timelines vary, 2-4 weeks is a reasonable expectation; longer delays frustrate authors and slow science.",
                learnMore: { url: "https://scholarlykitchen.sspnet.org/peer-review/", text: "📚 Scholarly Kitchen: Peer Review" }
            }
        ],
        3: [
            {
                q: "What is 'open peer review'?",
                options: ["Anyone from the public can submit a review", "Papers must be reviewed before any submission", "Reviews and/or reviewer identities are publicly available", "All reviews are conducted through video calls"],
                correct: 2,
                explanation: "Open peer review can mean published reviews, disclosed identities, or public participation in review.",
                learnMore: { url: "https://f1000research.com/about", text: "📚 F1000Research: Open Review" }
            },
            {
                q: "What is a 'major revision' decision?",
                options: ["The paper has been rejected permanently", "Only minor typos and formatting need fixing", "The paper is accepted exactly as submitted", "Significant changes needed and paper will be re-reviewed"],
                correct: 3,
                explanation: "Major revision means substantial improvements are required and the revised paper will undergo another review round.",
                learnMore: { url: "https://www.springer.com/gp/authors-editors/journal-author/journal-author-helpdesk/peer-review-process", text: "📚 Springer: Review Decisions" }
            },
            {
                q: "What is the reviewer's responsibility regarding confidentiality?",
                options: ["Share interesting findings with research colleagues", "Post manuscript preprints on social media", "Use content as teaching material for students", "Keep manuscript contents confidential until published"],
                correct: 3,
                explanation: "Reviewers must maintain confidentiality and not share, discuss, or use unpublished manuscript content.",
                learnMore: { url: "https://publicationethics.org/resources/guidelines/cope-ethical-guidelines-peer-reviewers", text: "📚 COPE: Reviewer Confidentiality" }
            },
            {
                q: "What is 'registered reports' peer review?",
                options: ["Papers must be registered with a government database", "Reviews are submitted to a centralized registry", "Review of methods before data collection, acceptance based on design", "Authors must register an account before submitting"],
                correct: 2,
                explanation: "Registered reports review the study design before data collection, reducing publication bias.",
                learnMore: { url: "https://www.cos.io/initiatives/registered-reports", text: "📚 COS: Registered Reports" }
            }
        ]
    },

    'l-literature-review': {
        1: [
            {
                q: "What is the main purpose of a literature review?",
                options: ["To prove that your hypothesis is definitely correct", "To replace the need for conducting original research", "To list every paper ever published on the topic", "To synthesize existing knowledge and identify gaps"],
                correct: 3,
                explanation: "A literature review surveys existing research to understand the field and identify what's missing or unknown.",
                learnMore: { url: "https://writingcenter.unc.edu/tips-and-tools/literature-reviews/", text: "📚 UNC: Literature Reviews" }
            },
            {
                q: "Which database is commonly used for computer science literature?",
                options: ["PubMed as the only reliable source", "General social media platforms like Twitter", "Wikipedia articles and user-edited pages", "Google Scholar, ACM Digital Library, and IEEE Xplore"],
                correct: 3,
                explanation: "CS researchers typically use Google Scholar, ACM DL, IEEE Xplore, DBLP, and Scopus.",
                learnMore: { url: "https://dl.acm.org/", text: "📚 ACM Digital Library" }
            },
            {
                q: "What is a 'systematic review'?",
                options: ["A review written systematically by a single author", "Any review that happens to use a database", "A review focused on systems engineering papers", "A structured, reproducible search and analysis of literature"],
                correct: 3,
                explanation: "Systematic reviews follow predefined protocols for searching, selecting, and analyzing literature to minimize bias.",
                learnMore: { url: "https://www.cochranelibrary.com/about/about-cochrane-reviews", text: "📚 Cochrane: Systematic Reviews" }
            }
        ],
        2: [
            {
                q: "What are Boolean operators in literature searching?",
                options: ["True and False values found in papers", "Mathematical operators used in formulas", "People who manage library search systems", "AND, OR, NOT commands to combine search terms"],
                correct: 3,
                explanation: "Boolean operators (AND, OR, NOT) help construct precise database queries to find relevant papers.",
                learnMore: { url: "https://libguides.mit.edu/c.php?g=175963&p=1158679", text: "📚 MIT: Database Search Tips" }
            },
            {
                q: "What is 'snowballing' in literature review?",
                options: ["Accumulating papers until the review becomes unmanageable", "Starting with many papers and progressively reducing", "A method for reading papers more quickly", "Following references forward and backward from key papers"],
                correct: 3,
                explanation: "Snowballing finds additional papers by checking citations (backward) and citing papers (forward) of key articles.",
                learnMore: { url: "https://www.sciencedirect.com/science/article/abs/pii/S0164121214000369", text: "📚 Snowballing Guidelines" }
            },
            {
                q: "What should inclusion/exclusion criteria specify?",
                options: ["Which papers to include or exclude and why", "How to format your reference list properly", "The journal's historical acceptance rate", "Required qualifications for paper authors"],
                correct: 0,
                explanation: "Clear criteria (date range, language, study type, etc.) ensure reproducible and unbiased paper selection.",
                learnMore: { url: "https://guides.lib.unc.edu/systematic-reviews/inclusion-exclusion", text: "📚 UNC: Inclusion Criteria" }
            }
        ],
        3: [
            {
                q: "What is a PRISMA diagram?",
                options: ["A type of qualitative research methodology", "Specialized software for managing references", "A visualization of citation network connections", "A flowchart showing literature search and selection process"],
                correct: 3,
                explanation: "PRISMA diagrams document how many papers were found, screened, and included/excluded at each stage.",
                learnMore: { url: "https://www.prisma-statement.org/", text: "📚 PRISMA Statement" }
            },
            {
                q: "What distinguishes a scoping review from a systematic review?",
                options: ["Scoping reviews are faster but less rigorous", "Systematic reviews only apply to medical research", "There is no meaningful difference between them", "Scoping maps the field broadly; systematic answers specific questions"],
                correct: 3,
                explanation: "Scoping reviews explore the breadth of a topic; systematic reviews answer focused questions with strict protocols.",
                learnMore: { url: "https://jbi.global/scoping-review-network", text: "📚 JBI: Scoping Reviews" }
            },
            {
                q: "What is citation management software used for?",
                options: ["Automatically generating complete literature reviews", "Calculating and tracking your h-index", "Conducting peer review of submitted papers", "Organizing references and generating bibliographies"],
                correct: 3,
                explanation: "Tools like Zotero, Mendeley, and EndNote help collect, organize, and format citations.",
                learnMore: { url: "https://www.zotero.org/", text: "📚 Zotero" }
            },
            {
                q: "What is 'grey literature' in research?",
                options: ["Papers published in disreputable or predatory journals", "Older papers from before digital archive systems", "Academic papers written in unclear technical language", "Reports, theses, and documents not formally published"],
                correct: 3,
                explanation: "Grey literature includes technical reports, white papers, theses, and conference papers not in traditional journals.",
                learnMore: { url: "https://guides.lib.berkeley.edu/c.php?g=83917&p=541314", text: "📚 Berkeley: Grey Literature" }
            }
        ]
    },

    'l-data-management': {
        1: [
            {
                q: "What does FAIR stand for in research data management?",
                options: ["Fast, Accurate, Indexed, and Reliable", "Free, Available, International, and Reviewed", "Formatted, Archived, Integrated, and Recorded", "Findable, Accessible, Interoperable, and Reusable"],
                correct: 3,
                explanation: "FAIR principles guide data management to maximize the value and reusability of research data.",
                learnMore: { url: "https://www.go-fair.org/fair-principles/", text: "📚 GO FAIR Principles" }
            },
            {
                q: "What is a Data Management Plan (DMP)?",
                options: ["Specialized software for organizing research files", "A backup system for protecting your computers", "A document describing how data will be handled throughout research", "The methods section describing data analysis"],
                correct: 2,
                explanation: "A DMP outlines data collection, storage, sharing, and preservation strategies for a research project.",
                learnMore: { url: "https://dmptool.org/", text: "📚 DMPTool" }
            },
            {
                q: "Why is documenting data important?",
                options: ["To artificially increase your file sizes", "To make data harder for others to access", "Only because funded research requires it", "So others can understand and reuse your data"],
                correct: 3,
                explanation: "Good documentation (metadata) ensures data remains understandable and usable long-term.",
                learnMore: { url: "https://www.dcc.ac.uk/guidance/standards/", text: "📚 DCC: Metadata Standards" }
            }
        ],
        2: [
            {
                q: "What is a persistent identifier for datasets?",
                options: ["A temporary URL for downloading the data", "The original filename of the dataset file", "The researcher's institutional email address", "A permanent reference like a DOI that won't change"],
                correct: 3,
                explanation: "Persistent identifiers like DOIs ensure data can be cited and found even if storage locations change.",
                learnMore: { url: "https://www.doi.org/", text: "📚 DOI Foundation" }
            },
            {
                q: "What is data versioning?",
                options: ["Always using the latest software version", "Creating multiple backup copies for safety", "Assigning numbers to your research papers", "Tracking changes to datasets over time"],
                correct: 3,
                explanation: "Version control for data tracks modifications, enabling reproducibility and error correction.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control", text: "📚 Git: Version Control" }
            },
            {
                q: "What is a data repository?",
                options: ["Your personal hard drive or computer storage", "The appendix section of a research paper", "A relational database management system", "A platform for storing and sharing research data"],
                correct: 3,
                explanation: "Repositories like Zenodo, Figshare, or domain-specific archives provide long-term data storage and access.",
                learnMore: { url: "https://zenodo.org/", text: "📚 Zenodo" }
            }
        ],
        3: [
            {
                q: "What is metadata in research data management?",
                options: ["The main findings of your research study", "Raw experimental measurement values", "The results of your statistical analysis", "Descriptive information about the data itself"],
                correct: 3,
                explanation: "Metadata describes data characteristics (format, creator, date, methodology) enabling discovery and reuse.",
                learnMore: { url: "https://www.dcc.ac.uk/guidance/standards/", text: "📚 DCC: Metadata" }
            },
            {
                q: "What is the purpose of a data dictionary?",
                options: ["To translate data between different languages", "To catalog all databases that exist worldwide", "To correct spelling errors found in datasets", "To define variables, values, and their meanings in a dataset"],
                correct: 3,
                explanation: "A data dictionary documents each variable's name, type, allowed values, and meaning.",
                learnMore: { url: "https://osf.io/sj8bv/", text: "📚 OSF: Data Dictionaries" }
            },
            {
                q: "What is data archiving vs. data backup?",
                options: ["They are exactly the same thing technically", "Archiving deletes old data while backup preserves it", "Backup is for important data; archiving is for unimportant data", "Archiving is long-term preservation; backup is short-term recovery"],
                correct: 3,
                explanation: "Backups protect against data loss; archives preserve data for long-term access and compliance.",
                learnMore: { url: "https://www.dcc.ac.uk/guidance/how-guides/appraise-and-select/", text: "📚 DCC: Data Archiving" }
            },
            {
                q: "What license is commonly used for open research data?",
                options: ["Standard proprietary software licenses", "No license is ever needed for data", "The exact same license used for papers", "Creative Commons licenses like CC-BY or CC0"],
                correct: 3,
                explanation: "CC-BY (attribution required) or CC0 (public domain) are common for open data sharing.",
                learnMore: { url: "https://creativecommons.org/share-your-work/", text: "📚 Creative Commons" }
            }
        ]
    },

    'l-open-science': {
        1: [
            {
                q: "What is open access publishing?",
                options: ["Publishing your paper in any journal available", "Sharing papers exclusively with direct collaborators", "Papers available to read after a 10-year embargo period", "Research freely available to read without subscription fees"],
                correct: 3,
                explanation: "Open access makes research immediately and freely available to anyone online.",
                learnMore: { url: "https://www.openaccess.nl/en/what-is-open-access", text: "📚 What is Open Access" }
            },
            {
                q: "What is a preprint?",
                options: ["The first physical printed copy of a journal issue", "A paper that has been rejected by reviewers", "A very short summary paper or abstract", "A paper shared publicly before formal peer review"],
                correct: 3,
                explanation: "Preprints are manuscript versions shared on servers like arXiv before formal peer review.",
                learnMore: { url: "https://arxiv.org/", text: "📚 arXiv Preprint Server" }
            },
            {
                q: "What does 'reproducibility' mean in research?",
                options: ["Publishing the exact same paper multiple times", "Copying the work of other researchers directly", "Using the same laboratory equipment as others", "Others can obtain the same results using your methods and data"],
                correct: 3,
                explanation: "Reproducibility means independent researchers can verify findings using the original data and methods.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-00067-3", text: "📚 Nature: Reproducibility" }
            }
        ],
        2: [
            {
                q: "What is the difference between 'Gold' and 'Green' open access?",
                options: ["Gold is higher quality while Green is lower quality", "Gold is for sciences only while Green is for humanities", "Gold costs more money while Green is always free", "Gold is published OA by journal; Green is self-archived by author"],
                correct: 3,
                explanation: "Gold OA is published openly by the journal (often with APC); Green OA is author self-archiving.",
                learnMore: { url: "https://www.sherpa.ac.uk/romeo/", text: "📚 SHERPA/RoMEO" }
            },
            {
                q: "What is an Article Processing Charge (APC)?",
                options: ["A subscription fee that readers must pay", "The cost of printing physical journal copies", "Compensation paid to peer reviewers", "A fee authors pay for open access publication"],
                correct: 3,
                explanation: "APCs are fees charged by some open access journals to cover publication costs.",
                learnMore: { url: "https://doaj.org/", text: "📚 DOAJ: OA Journals" }
            },
            {
                q: "What is arXiv?",
                options: ["A commercial journal publishing company", "A plagiarism detection software tool", "A reference management application", "A preprint server for physics, math, CS, and related fields"],
                correct: 3,
                explanation: "arXiv is a major preprint repository where researchers share papers before formal publication.",
                learnMore: { url: "https://arxiv.org/about", text: "📚 About arXiv" }
            }
        ],
        3: [
            {
                q: "What is Plan S?",
                options: ["A strategic plan for improving university rankings", "Project management software for research teams", "A standardized format for storing research data", "European initiative requiring immediate open access for funded research"],
                correct: 3,
                explanation: "Plan S (2021) requires research funded by participating agencies to be immediately open access.",
                learnMore: { url: "https://www.coalition-s.org/", text: "📚 Coalition S: Plan S" }
            },
            {
                q: "What are FAIR principles applied to software?",
                options: ["Using only commercial software for research", "Writing research software in any programming language", "Ensuring software runs fairly on all different computers", "Making research software findable, accessible, interoperable, and reusable"],
                correct: 3,
                explanation: "FAIR4RS extends FAIR principles to research software, promoting sustainable software practices.",
                learnMore: { url: "https://www.rd-alliance.org/groups/fair-research-software-fair4rs-wg", text: "📚 RDA: FAIR4RS" }
            },
            {
                q: "What is a 'transformative agreement' in publishing?",
                options: ["An agreement to fundamentally transform research methods", "A collaborative contract signed between co-authors", "A standard software licensing agreement for tools", "A contract transitioning journal subscriptions to open access"],
                correct: 3,
                explanation: "Transformative agreements shift publisher revenue from subscriptions to open access publishing.",
                learnMore: { url: "https://esac-initiative.org/about/transformative-agreements/", text: "📚 ESAC: Transformative Agreements" }
            },
            {
                q: "What is the purpose of ORCID?",
                options: ["To objectively rate the quality of research papers", "To detect plagiarism in submitted manuscripts", "To fund open access publications for researchers", "To provide a unique persistent identifier for researchers"],
                correct: 3,
                explanation: "ORCID iDs uniquely identify researchers, linking them to their works across platforms.",
                learnMore: { url: "https://orcid.org/", text: "📚 ORCID" }
            }
        ]
    },

    'l-networking': {
        1: [
            {
                q: "What is the primary purpose of attending academic conferences?",
                options: ["To take a vacation from regular work", "To collect free merchandise and swag", "To fulfill institutional travel requirements", "To share research and build professional connections"],
                correct: 3,
                explanation: "Conferences are key venues for presenting work, getting feedback, and meeting potential collaborators.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-01631-7", text: "📚 Nature: Conference Networking" }
            },
            {
                q: "What is a 'poster session' at a conference?",
                options: ["A session about graphic design and visuals", "Selling conference merchandise and materials", "A formal lecture presentation with slides", "Presenting research on a visual display with informal discussion"],
                correct: 3,
                explanation: "Poster sessions allow researchers to present work visually and discuss it with interested attendees.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-01617-5", text: "📚 Nature: Poster Presentations" }
            },
            {
                q: "Why is academic networking important?",
                options: ["It's only relevant for senior professors", "Primarily to increase social media followers", "Networking is not particularly important in academia", "It leads to collaborations, job opportunities, and knowledge exchange"],
                correct: 3,
                explanation: "Networks provide collaboration opportunities, career advancement, and access to resources and ideas.",
                learnMore: { url: "https://www.science.org/content/article/getting-most-out-networking", text: "📚 Science: Networking Tips" }
            }
        ],
        2: [
            {
                q: "What is a good way to follow up after meeting someone at a conference?",
                options: ["Add them on all social media platforms immediately", "Wait patiently for them to contact you first", "Send your complete CV without any context", "Send a brief email mentioning your conversation and shared interests"],
                correct: 3,
                explanation: "A timely, personalized follow-up email helps maintain the connection and explore collaboration.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-01631-7", text: "📚 Nature: Following Up" }
            },
            {
                q: "What is an academic 'seminar series'?",
                options: ["A formal course designed for students only", "A series of papers published together", "A collection of online video tutorials", "Regular talks by invited speakers at an institution"],
                correct: 3,
                explanation: "Seminar series invite researchers to present their work, fostering exchange and potential collaboration.",
                learnMore: { url: "https://academia.stackexchange.com/questions/tagged/seminars", text: "📚 Academia SE: Seminars" }
            },
            {
                q: "How can you increase your research visibility online?",
                options: ["Only publish in traditional print journals", "Avoid sharing preprints before peer review", "Delete or minimize your online presence", "Maintain updated profiles on Google Scholar, ORCID, and ResearchGate"],
                correct: 3,
                explanation: "Online profiles, preprints, and social media help researchers discover and engage with your work.",
                learnMore: { url: "https://scholar.google.com/", text: "📚 Google Scholar" }
            }
        ],
        3: [
            {
                q: "What is a 'research visit' or 'sabbatical'?",
                options: ["A vacation break from research activities", "Visiting your own lab building on weekends", "A virtual video meeting with collaborators", "An extended stay at another institution for collaboration"],
                correct: 3,
                explanation: "Research visits allow intensive collaboration and exposure to different research environments.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-00871-x", text: "📚 Nature: Sabbaticals" }
            },
            {
                q: "What is the purpose of academic social media like Twitter/X for researchers?",
                options: ["Only meant for personal entertainment", "A requirement mandated by all universities", "Intended to replace traditional peer review", "To share findings, discuss research, and connect with peers"],
                correct: 3,
                explanation: "Academic social media can amplify research impact and facilitate connections across fields.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-03535-w", text: "📚 Nature: Social Media for Scientists" }
            },
            {
                q: "What is a research consortium?",
                options: ["A single researcher's laboratory group", "A journal publishing company or group", "A student organization at universities", "A formal collaboration between multiple institutions on shared goals"],
                correct: 3,
                explanation: "Consortia coordinate multi-institution efforts, often for large grants or infrastructure projects.",
                learnMore: { url: "https://ec.europa.eu/research/participants/docs/h2020-funding-guide/grants/applying-for-funding/find-partners_en.htm", text: "📚 EU: Research Consortia" }
            },
            {
                q: "What is the 'two-body problem' in academic careers?",
                options: ["A famous physics research problem to solve", "The challenge of managing two research projects", "The complexity of having two thesis advisors", "The difficulty of finding positions for both partners in academic couples"],
                correct: 3,
                explanation: "The two-body problem refers to the challenge of academic couples finding positions at the same location.",
                learnMore: { url: "https://www.science.org/careers/two-body-problem", text: "📚 Science: Two-Body Problem" }
            }
        ]
    },

    'l-time-management': {
        1: [
            {
                q: "What are the main competing demands on an academic's time?",
                options: ["Only research activities matter in academia", "Teaching is the sole priority for academics", "Administration and meetings consume everything", "Research, teaching, administration, and service all compete"],
                correct: 3,
                explanation: "Academics balance research, teaching, administrative duties, and service to the community.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-01640-6", text: "📚 Nature: Managing Academic Time" }
            },
            {
                q: "What is 'protected research time'?",
                options: ["Time when all research activities are forbidden", "Patented or protected research methodology", "Time specifically for protecting your data", "Dedicated time blocked exclusively for research activities"],
                correct: 3,
                explanation: "Protected time ensures researchers have uninterrupted periods for focused research work.",
                learnMore: { url: "https://www.facultyfocus.com/articles/academic-leadership/protecting-research-time/", text: "📚 Faculty Focus: Research Time" }
            },
            {
                q: "What is a realistic approach to managing email as an academic?",
                options: ["Respond immediately to every single email", "Ignore all emails entirely if possible", "Only check and respond once per week", "Check email at scheduled set times rather than constantly"],
                correct: 3,
                explanation: "Batching email into designated times prevents constant interruption of deep work.",
                learnMore: { url: "https://www.calnewport.com/", text: "📚 Cal Newport: Deep Work" }
            }
        ],
        2: [
            {
                q: "What is the Pomodoro Technique?",
                options: ["A specialized method for growing tomatoes", "A technique for reviewing research papers", "A strategy specifically for writing grants", "Working in focused 25-minute intervals with short breaks"],
                correct: 3,
                explanation: "Pomodoro uses timed work sessions (typically 25 min) with breaks to maintain focus and prevent burnout.",
                learnMore: { url: "https://francescocirillo.com/products/the-pomodoro-technique", text: "📚 Pomodoro Technique" }
            },
            {
                q: "How should academics handle saying 'no' to requests?",
                options: ["Accept everything offered to build your reputation", "Never decline requests from senior colleagues", "Always decline requests to maximize your time", "Prioritize strategically and decline when necessary"],
                correct: 3,
                explanation: "Strategic declining protects time for priorities; it's essential for sustainable productivity.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-01486-2", text: "📚 Nature: Saying No" }
            },
            {
                q: "What is 'deep work' in academic context?",
                options: ["Working late hours at night in the lab", "Research conducted in deep sea environments", "Working in underground laboratory facilities", "Focused, uninterrupted time on cognitively demanding tasks"],
                correct: 3,
                explanation: "Deep work (Cal Newport) refers to concentrated effort on complex tasks like writing or analysis.",
                learnMore: { url: "https://www.calnewport.com/books/deep-work/", text: "📚 Deep Work Book" }
            }
        ],
        3: [
            {
                q: "What is academic 'service creep'?",
                options: ["A recognized type of research misconduct", "The phenomenon of slow peer review processes", "Generally declining research productivity over time", "The gradual increase in committee and administrative duties"],
                correct: 3,
                explanation: "Service creep occurs when administrative duties gradually consume time meant for research and teaching.",
                learnMore: { url: "https://www.insidehighered.com/advice/2019/04/08/how-handle-ever-increasing-service-demands-opinion", text: "📚 IHE: Service Creep" }
            },
            {
                q: "What is the Eisenhower Matrix for prioritization?",
                options: ["A mathematical method for solving research problems", "A system for allocating research funding fairly", "A framework for evaluating teaching effectiveness", "A method for categorizing tasks by urgency and importance"],
                correct: 3,
                explanation: "The matrix sorts tasks into urgent/important quadrants to help prioritize effectively.",
                learnMore: { url: "https://www.eisenhower.me/eisenhower-matrix/", text: "📚 Eisenhower Matrix" }
            },
            {
                q: "How can academics manage the pressure to publish?",
                options: ["Publish as many papers as possible regardless of quality", "Avoid publishing anything until you retire", "Only ever submit papers to top-tier journals", "Focus on quality over quantity and set realistic goals"],
                correct: 3,
                explanation: "Sustainable publishing involves strategic choices, realistic timelines, and quality-focused goals.",
                learnMore: { url: "https://www.nature.com/articles/d41586-018-06185-8", text: "📚 Nature: Slow Science" }
            },
            {
                q: "What is 'task batching' in productivity?",
                options: ["Doing many different tasks all at once simultaneously", "Delegating all of your tasks to other people", "Postponing all tasks indefinitely to reduce stress", "Grouping similar tasks together to reduce context switching"],
                correct: 3,
                explanation: "Batching (e.g., all emails at once, all grading together) reduces mental overhead from switching.",
                learnMore: { url: "https://todoist.com/productivity-methods/time-blocking", text: "📚 Todoist: Time Blocking" }
            }
        ]
    },

    'l-mentoring': {
        1: [
            {
                q: "What is the primary goal of academic mentoring?",
                options: ["To get free labor for your research projects", "To increase your own publication count", "To meet basic institutional requirements only", "To support the mentee's professional and personal development"],
                correct: 3,
                explanation: "Effective mentoring focuses on the mentee's growth, career development, and well-being.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-01041-9", text: "📚 Nature: Mentoring" }
            },
            {
                q: "What is the difference between a supervisor and a mentor?",
                options: ["They are exactly the same role in practice", "Mentors are always significantly more senior", "Supervisors are informal while mentors are formal", "Supervisors oversee specific work; mentors guide broader career development"],
                correct: 3,
                explanation: "Supervision focuses on specific project oversight; mentoring addresses broader career guidance and support.",
                learnMore: { url: "https://www.apa.org/education-career/grad/mentoring", text: "📚 APA: Mentoring vs Advising" }
            },
            {
                q: "How often should mentor-mentee meetings typically occur?",
                options: ["Only when specific problems arise", "Once per semester at maximum frequency", "Mandatory daily check-in meetings required", "Regular schedule (weekly/biweekly) with flexibility for needs"],
                correct: 3,
                explanation: "Regular meetings maintain progress and relationships, with frequency adapted to project stage and needs.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-02078-8", text: "📚 Nature: Meeting Frequency" }
            }
        ],
        2: [
            {
                q: "What is 'co-authorship mentoring'?",
                options: ["Putting your name on all of your mentee's papers", "Writing complete papers on behalf of your mentees", "A policy where only senior authors can publish", "Teaching mentees the publication process through joint papers"],
                correct: 3,
                explanation: "Collaborative authorship teaches research writing while ensuring appropriate credit for contributions.",
                learnMore: { url: "https://www.nature.com/articles/d41586-018-06990-1", text: "📚 Nature: Authorship" }
            },
            {
                q: "How should a mentor handle a struggling mentee?",
                options: ["Ignore problems until they naturally resolve themselves", "Immediately terminate the mentoring relationship", "Blame the mentee entirely for all difficulties", "Identify issues early, provide support, and adjust expectations"],
                correct: 3,
                explanation: "Early intervention, open communication, and supportive problem-solving help mentees overcome challenges.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-00916-1", text: "📚 Nature: Supporting Struggles" }
            },
            {
                q: "What is a 'mentoring agreement'?",
                options: ["A legal contract covering intellectual property rights", "An agreement to pay fees for mentoring services", "A binding commitment to publish specific papers", "A document outlining expectations and responsibilities for both parties"],
                correct: 3,
                explanation: "Mentoring agreements clarify expectations about meetings, feedback, goals, and responsibilities.",
                learnMore: { url: "https://www.nap.edu/catalog/25568/the-science-of-effective-mentorship-in-stemm", text: "📚 NAP: Effective Mentorship" }
            }
        ],
        3: [
            {
                q: "What is 'peer mentoring' in academia?",
                options: ["Only senior full professors can serve as mentors", "Mentoring that occurs through published papers", "A formal university-run program exclusively", "Mentoring relationships between colleagues at similar career stages"],
                correct: 3,
                explanation: "Peer mentoring provides mutual support among those facing similar career stage challenges.",
                learnMore: { url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4902838/", text: "📚 NIH: Peer Mentoring" }
            },
            {
                q: "What is 'mentoring up' or 'reverse mentoring'?",
                options: ["Mentees directly telling mentors what to do", "Career movement in an upward direction only", "Standing up while conducting mentoring sessions", "Junior members mentoring seniors on new technologies or perspectives"],
                correct: 3,
                explanation: "Reverse mentoring recognizes that junior members can teach seniors about new tools, trends, or perspectives.",
                learnMore: { url: "https://hbr.org/2019/10/why-reverse-mentoring-works-and-how-to-do-it-right", text: "📚 HBR: Reverse Mentoring" }
            },
            {
                q: "How should mentors handle giving critical feedback?",
                options: ["Avoid providing any negative feedback at all", "Be intentionally harsh to build mental resilience", "Only give feedback when explicitly asked for it", "Be specific, constructive, and focus on work rather than person"],
                correct: 3,
                explanation: "Effective critical feedback is specific, actionable, and delivered constructively with care.",
                learnMore: { url: "https://www.nature.com/articles/d41586-019-01041-9", text: "📚 Nature: Giving Feedback" }
            },
            {
                q: "What is a 'mentoring network' approach?",
                options: ["Having exactly one mentor for all your needs", "A social network platform designed for mentors", "Mentoring that only happens through online channels", "Having multiple mentors providing different types of guidance"],
                correct: 3,
                explanation: "Having multiple mentors for different needs (career, technical, personal) provides comprehensive support.",
                learnMore: { url: "https://www.sciencemag.org/careers/2019/04/build-your-mentoring-network", text: "📚 Science: Mentoring Networks" }
            }
        ]
    },

    // ============================================================================
    // PRODUCT TIER - UT & Estonian Ecosystem
    // ============================================================================

    'p-ut-structure': {
        1: [
            {
                q: "What is the Delta Center at University of Tartu?",
                options: ["A research center focused on climate change studies", "A building housing IT, mathematics, and statistics units", "A student dormitory near the main campus", "A sports and recreation facility complex"],
                correct: 1,
                explanation: "Delta Center opened in 2019, bringing together UT's Institute of Computer Science, Institute of Mathematics and Statistics, and related units.",
                learnMore: { url: "https://delta.ut.ee/en/", text: "📚 UT Delta Center" }
            },
            {
                q: "What is ICS at University of Tartu?",
                options: ["International Computer Society for researchers", "Information and Communication Services department", "Institute of Computer Science research unit", "Internal Computing Systems administration"],
                correct: 2,
                explanation: "ICS (Institute of Computer Science) is UT's primary computer science research and teaching unit.",
                learnMore: { url: "https://cs.ut.ee/en", text: "📚 UT Institute of Computer Science" }
            },
            {
                q: "Which faculty does the Institute of Computer Science belong to?",
                options: ["Faculty of Medicine and Health Sciences", "Faculty of Science and Technology", "Faculty of Social Sciences and Education", "Faculty of Arts and Humanities"],
                correct: 1,
                explanation: "ICS is part of UT's Faculty of Science and Technology.",
                learnMore: { url: "https://ut.ee/en/faculty-science-and-technology", text: "📚 UT Faculty of Science and Technology" }
            }
        ],
        2: [
            {
                q: "What is ETIS in the Estonian research system?",
                options: ["Estonian Technology Innovation Society for startups", "European Technology and Innovation Scheme funding", "Estonian Research Information System database", "Estonian Teaching and Instruction Service portal"],
                correct: 2,
                explanation: "ETIS tracks Estonian research output, projects, and researcher profiles for evaluation and reporting.",
                learnMore: { url: "https://www.etis.ee/", text: "📚 ETIS Portal" }
            },
            {
                q: "What are the main research groups at UT ICS?",
                options: ["Only theoretical computer science and algorithms", "Software Engineering, AI/ML, Security, Data Science, and Distributed Systems", "Biology, chemistry, and physics laboratories", "Social science and economics departments"],
                correct: 1,
                explanation: "UT ICS hosts research groups in SE, AI/ML, cryptography/security, data science/bioinformatics, and distributed systems.",
                learnMore: { url: "https://cs.ut.ee/en/research", text: "📚 UT ICS Research Groups" }
            },
            {
                q: "What is the role of a 'research professor' at UT?",
                options: ["A professor who researches teaching and pedagogy methods", "An honorary title given to retired faculty members", "A visiting professor from an international institution abroad", "A senior researcher focused primarily on research activities"],
                correct: 3,
                explanation: "Research professors at UT focus on research activities with reduced teaching obligations.",
                learnMore: { url: "https://ut.ee/en/academic-career", text: "📚 UT Academic Career" }
            }
        ],
        3: [
            {
                q: "What is UT's governance structure for research?",
                options: ["A single research committee makes all university decisions", "Each professor decides their research direction independently", "The government directly controls and approves all research", "Rector → Vice Rector for Research → Deans → Institute Directors"],
                correct: 3,
                explanation: "UT has a hierarchical structure with research strategy set at rector/vice rector level and implemented through faculties and institutes.",
                learnMore: { url: "https://ut.ee/en/management-and-governance", text: "📚 UT Governance" }
            },
            {
                q: "What is the Delta doctoral school?",
                options: ["An undergraduate program for computer science students", "A business incubator for student entrepreneurs", "A doctoral training program for IT, math, and statistics PhDs", "A high school outreach and recruitment program"],
                correct: 2,
                explanation: "The Delta doctoral school coordinates PhD training across Delta Center disciplines.",
                learnMore: { url: "https://delta.ut.ee/en/doctoral-school/", text: "📚 Delta Doctoral School" }
            },
            {
                q: "What is HITSA/HARNO's role in Estonian education?",
                options: ["A private company providing tutoring services", "A department within the University of Tartu", "A national agency supporting education and IT development", "A hardware manufacturer for educational institutions"],
                correct: 2,
                explanation: "HARNO (formerly HITSA) is Estonia's Education and Youth Board, supporting IT education and digital competencies.",
                learnMore: { url: "https://harno.ee/en", text: "📚 HARNO" }
            },
            {
                q: "What is UT's position in global CS rankings?",
                options: ["Not ranked in any international university rankings", "Consistently ranked in the global top 10 for CS", "Top 200-300 in CS globally, highest ranked in Estonia", "Only ranked in social sciences, not in CS fields"],
                correct: 2,
                explanation: "UT consistently ranks in top 200-300 for CS globally and is Estonia's leading university for computer science.",
                learnMore: { url: "https://ut.ee/en/rankings", text: "📚 UT Rankings" }
            }
        ]
    },

    'p-estonian-funding': {
        1: [
            {
                q: "What is ETAG?",
                options: ["European Technology and Agriculture Group funding body", "Estonian Research Council - the main national research funder", "Estonian Teaching Assessment Guide for educators", "Education and Training Advisory Group for policy"],
                correct: 1,
                explanation: "ETAG (Eesti Teadusagentuur) is Estonia's primary public research funding agency.",
                learnMore: { url: "https://etag.ee/en/", text: "📚 Estonian Research Council" }
            },
            {
                q: "What are Personal Research Grants (PRG) from ETAG?",
                options: ["Personal loans for researcher living expenses", "Scholarships exclusively for PhD students only", "Grants available only to full professors", "Grants for individual researchers or small teams up to ~300k€"],
                correct: 3,
                explanation: "PRG funds research projects led by individual PIs, typically 3-5 years with budgets around 100-300k€.",
                learnMore: { url: "https://etag.ee/en/funding/research-funding/personal-research-funding/", text: "📚 ETAG Personal Research Grants" }
            },
            {
                q: "What is the ETAG evaluation cycle?",
                options: ["Continuous rolling applications accepted year-round", "Major funding calls only once every 5 years", "Monthly application deadlines throughout the year", "Annual calls with applications typically submitted in autumn"],
                correct: 3,
                explanation: "ETAG typically has annual funding calls with autumn deadlines and decisions in spring.",
                learnMore: { url: "https://etag.ee/en/funding/", text: "📚 ETAG Funding Calls" }
            }
        ],
        2: [
            {
                q: "What are Team Grants from ETAG?",
                options: ["Grants for university sports and athletics teams", "Small grants for individual researchers only", "Larger grants for research groups with 5+ members", "Grants exclusively for international research teams"],
                correct: 2,
                explanation: "Team Grants support larger research groups with bigger budgets and longer durations than PRG.",
                learnMore: { url: "https://etag.ee/en/funding/research-funding/team-grants/", text: "📚 ETAG Team Grants" }
            },
            {
                q: "What is Mobilitas Pluss?",
                options: ["A mobile phone plan for university employees", "A public transportation subsidy for students", "An ETAG program supporting researcher mobility and returning scientists", "A physical fitness and wellness program"],
                correct: 2,
                explanation: "Mobilitas Pluss funds incoming researchers, returning Estonian scientists, and research mobility.",
                learnMore: { url: "https://etag.ee/en/funding/mobility-funding/mobilitas-pluss/", text: "📚 Mobilitas Pluss" }
            },
            {
                q: "How does the Estonian research evaluation system work?",
                options: ["No formal evaluation system currently exists", "Only international experts participate in evaluations", "Self-assessment by institutions without external review", "Regular evaluation of institutions affecting their baseline funding"],
                correct: 3,
                explanation: "Estonia evaluates research institutions periodically, with results affecting institutional funding allocations.",
                learnMore: { url: "https://etag.ee/en/evaluation/", text: "📚 ETAG Evaluation" }
            }
        ],
        3: [
            {
                q: "What is baseline funding (baasfinantseerimine) for Estonian research?",
                options: ["Revenue from student tuition fees only", "Industry sponsorship and private donations", "EU structural funds for infrastructure projects", "Government funding to institutions based on research capacity"],
                correct: 3,
                explanation: "Baseline funding provides institutions with stable core research funding based on evaluation results.",
                learnMore: { url: "https://www.hm.ee/en/research-and-development", text: "📚 Estonian Research Policy" }
            },
            {
                q: "What are the Estonian Centres of Excellence?",
                options: ["Building maintenance and facilities management centers", "Annual teaching excellence awards for educators", "Administrative service centers for universities", "Flagship research consortia receiving major long-term funding"],
                correct: 3,
                explanation: "Centres of Excellence are competitive, long-term funded research consortia in strategic areas.",
                learnMore: { url: "https://etag.ee/en/centres-of-excellence/", text: "📚 Centres of Excellence" }
            },
            {
                q: "What is the RITA program?",
                options: ["A music and arts education initiative", "A regional tourism development scheme", "A strategic research program for governance and societal challenges", "A railway and transportation infrastructure project"],
                correct: 2,
                explanation: "RITA funds applied research addressing Estonian societal and governance challenges.",
                learnMore: { url: "https://etag.ee/en/funding/applied-research/rita/", text: "📚 RITA Program" }
            },
            {
                q: "How do Estonian structural funds support research?",
                options: ["Direct grants to individual researchers for salaries", "Funding exclusively for agriculture research", "Loans that require full repayment with interest", "EU cohesion policy funds for infrastructure and capacity building"],
                correct: 3,
                explanation: "Structural funds finance research infrastructure, equipment, and capacity development in Estonia.",
                learnMore: { url: "https://www.struktuurifondid.ee/en", text: "📚 EU Structural Funds Estonia" }
            }
        ]
    },

    'p-eu-funding': {
        1: [
            {
                q: "What is Horizon Europe?",
                options: ["A European Space Agency satellite mission", "The EU's main research and innovation funding program (2021-2027)", "An educational student exchange program like Erasmus", "A climate change initiative focused only on environment"],
                correct: 1,
                explanation: "Horizon Europe is the EU's €95.5 billion framework program for research and innovation.",
                learnMore: { url: "https://ec.europa.eu/info/horizon-europe_en", text: "📚 Horizon Europe" }
            },
            {
                q: "What are the three pillars of Horizon Europe?",
                options: ["Research, Development, and Commercialization phases", "Basic, Applied, and Industrial research types", "Excellent Science, Global Challenges, and Innovative Europe", "Teaching, Research, and Service activities"],
                correct: 2,
                explanation: "Horizon Europe is structured into three pillars covering fundamental research, societal challenges, and innovation.",
                learnMore: { url: "https://ec.europa.eu/info/horizon-europe/pillar-i-excellent-science_en", text: "📚 Horizon Europe Pillars" }
            },
            {
                q: "What is the ERC?",
                options: ["European Regulation Committee for research policy", "Estonian Research Council national funding agency", "European Research Council funding frontier research", "Educational Resources Center for teaching materials"],
                correct: 2,
                explanation: "ERC funds excellent individual researchers for frontier research across all fields.",
                learnMore: { url: "https://erc.europa.eu/", text: "📚 European Research Council" }
            }
        ],
        2: [
            {
                q: "What are the ERC grant types?",
                options: ["Small, Medium, and Large project categories", "Basic, Applied, and Commercial research grants", "Starting, Consolidator, Advanced, and Synergy grants", "Individual, Team, and Institutional funding schemes"],
                correct: 2,
                explanation: "ERC offers grants based on career stage: Starting (2-7 yrs post-PhD), Consolidator (7-12), Advanced (track record), Synergy (groups).",
                learnMore: { url: "https://erc.europa.eu/funding/funding-schemes", text: "📚 ERC Funding Schemes" }
            },
            {
                q: "What is MSCA?",
                options: ["Mathematical Sciences Computing Association professional society", "Multi-Site Collaborative Agreement for partnerships", "Master of Science Course Approval certification", "Marie Skłodowska-Curie Actions for researcher mobility and training"],
                correct: 3,
                explanation: "MSCA funds researcher mobility, doctoral networks, and staff exchanges across borders.",
                learnMore: { url: "https://marie-sklodowska-curie-actions.ec.europa.eu/", text: "📚 Marie Curie Actions" }
            },
            {
                q: "What are Horizon Europe Clusters?",
                options: ["High-performance computer server clusters for research", "Regional networks connecting research institutions", "Thematic areas under Pillar 2 addressing global challenges", "Industry consortia for commercial partnerships"],
                correct: 2,
                explanation: "Six clusters address health, culture, security, digital, climate, and food challenges.",
                learnMore: { url: "https://ec.europa.eu/info/horizon-europe/cluster-1-health_en", text: "📚 Horizon Europe Clusters" }
            }
        ],
        3: [
            {
                q: "What is a Research and Innovation Action (RIA)?",
                options: ["A startup and venture funding scheme", "A collaborative project funded 100% by EU focused on research", "An individual fellowship for researchers", "An infrastructure construction grant for buildings"],
                correct: 1,
                explanation: "RIAs are collaborative research projects with 100% EU funding for primarily research activities.",
                learnMore: { url: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/support/glossary", text: "📚 EU Funding Glossary" }
            },
            {
                q: "What is an Innovation Action (IA)?",
                options: ["A pure basic research grant for early-stage science", "An individual researcher fellowship grant", "A policy development and advocacy action", "A project closer to market with 70% EU funding and demonstration focus"],
                correct: 3,
                explanation: "IAs focus on innovation activities closer to market with 70% EU funding rate.",
                learnMore: { url: "https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/aga_en.pdf", text: "📚 EU Action Types" }
            },
            {
                q: "What is the EIC (European Innovation Council)?",
                options: ["European Internet Commission for digital regulation", "Estonian Innovation Center national agency", "EU body funding breakthrough innovations and scale-ups", "Environmental Impact Council for sustainability"],
                correct: 2,
                explanation: "EIC supports high-risk, high-potential innovations through Pathfinder, Transition, and Accelerator programs.",
                learnMore: { url: "https://eic.ec.europa.eu/", text: "📚 European Innovation Council" }
            },
            {
                q: "What is a Coordination and Support Action (CSA)?",
                options: ["A research grant specifically for project coordinators", "A student exchange and mobility program", "A project for networking, coordination, or policy support without research", "A conference and event funding scheme only"],
                correct: 2,
                explanation: "CSAs support coordination, networking, and policy activities rather than research itself.",
                learnMore: { url: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/support/glossary", text: "📚 EU Action Types" }
            }
        ]
    },

    'p-industry-landscape': {
        1: [
            {
                q: "What is Estonia known for in the tech industry?",
                options: ["Heavy manufacturing and industrial production", "Oil, gas, and natural resource extraction", "E-governance, digital identity, and startups like Skype and Wise", "Automotive production and vehicle manufacturing"],
                correct: 2,
                explanation: "Estonia is recognized for digital governance, cybersecurity, and successful tech startups.",
                learnMore: { url: "https://e-estonia.com/", text: "📚 e-Estonia" }
            },
            {
                q: "What is Tehnopol?",
                options: ["A political party in Estonian parliament", "A major telecommunications company", "A science and business park supporting tech companies in Tallinn", "A government ministry for technology"],
                correct: 2,
                explanation: "Tehnopol is Estonia's largest science park, hosting startups and connecting them with research.",
                learnMore: { url: "https://www.tehnopol.ee/en/", text: "📚 Tehnopol" }
            },
            {
                q: "What is the significance of Tartu for Estonian tech?",
                options: ["Industrial manufacturing center for heavy industry", "A university city with growing startup ecosystem and research links", "Primarily a tourist destination for visitors", "The main government administrative center"],
                correct: 1,
                explanation: "Tartu's university research and startup ecosystem make it Estonia's second tech hub.",
                learnMore: { url: "https://tartu.ee/en/business", text: "📚 Tartu Business" }
            }
        ],
        2: [
            {
                q: "What is Garage48?",
                options: ["A car repair and mechanic service chain", "An Estonian hackathon organization promoting entrepreneurship", "A self-storage company for businesses", "A popular music and concert venue"],
                correct: 1,
                explanation: "Garage48 organizes hackathons and startup events, part of Estonia's entrepreneurship ecosystem.",
                learnMore: { url: "https://garage48.org/", text: "📚 Garage48" }
            },
            {
                q: "What industries commonly collaborate with UT ICS?",
                options: ["Only agriculture and farming technology", "Mining, extraction, and natural resources", "Fintech, cybersecurity, e-governance, health tech, and AI", "Traditional manufacturing and industrial production only"],
                correct: 2,
                explanation: "ICS collaborates with fintech, security, digital government, health, and AI companies.",
                learnMore: { url: "https://cs.ut.ee/en/cooperation", text: "📚 UT ICS Cooperation" }
            },
            {
                q: "What is Cybernetica?",
                options: ["A video game development company", "An Estonian research company specializing in e-governance and security", "A pharmaceutical and biotech company", "A social media platform startup"],
                correct: 1,
                explanation: "Cybernetica develops secure digital solutions and has close ties to UT research.",
                learnMore: { url: "https://cyber.ee/", text: "📚 Cybernetica" }
            }
        ],
        3: [
            {
                q: "What is the Estonian e-Residency program?",
                options: ["A pathway to Estonian citizenship and permanent residence", "A student visa program for international students", "A digital identity for non-residents to run EU businesses", "A real estate investment and property scheme"],
                correct: 2,
                explanation: "e-Residency enables global entrepreneurs to establish and manage EU businesses digitally.",
                learnMore: { url: "https://e-resident.gov.ee/", text: "📚 e-Residency" }
            },
            {
                q: "What research-industry collaboration models work in Estonia?",
                options: ["Only informal consulting arrangements without contracts", "No formal collaboration models currently exist", "Government-mandated partnerships required by law", "Contract research, joint labs, industrial PhDs, and spin-offs"],
                correct: 3,
                explanation: "Estonian academia-industry collaboration includes contracts, joint positions, shared infrastructure, and startups.",
                learnMore: { url: "https://www.eas.ee/en/", text: "📚 Enterprise Estonia" }
            },
            {
                q: "What is Startup Estonia?",
                options: ["A specific startup company in the technology sector", "A university student organization for entrepreneurs", "A government initiative supporting the startup ecosystem", "A private investment fund for early-stage companies"],
                correct: 2,
                explanation: "Startup Estonia coordinates government support for the startup ecosystem.",
                learnMore: { url: "https://startupestonia.ee/", text: "📚 Startup Estonia" }
            },
            {
                q: "What role does Bolt play in the Estonian tech ecosystem?",
                options: ["An electricity and power utility company", "A hardware manufacturing corporation", "A major mobility/delivery startup showing Estonian startup success", "A research institute for technology studies"],
                correct: 2,
                explanation: "Bolt is a prominent Estonian startup (mobility, delivery) demonstrating the country's tech entrepreneurship.",
                learnMore: { url: "https://bolt.eu/", text: "📚 Bolt" }
            }
        ]
    },

    'p-ip-basics': {
        1: [
            {
                q: "What is intellectual property (IP) in academic research?",
                options: ["Physical laboratory equipment and instruments", "Only the raw research data collected", "Creations of mind that can be protected: inventions, works, and designs", "Only formally published academic papers"],
                correct: 2,
                explanation: "IP includes patents, copyrights, trademarks, trade secrets, and designs arising from research.",
                learnMore: { url: "https://www.wipo.int/about-ip/en/", text: "📚 WIPO: What is IP" }
            },
            {
                q: "What is a patent?",
                options: ["A type of academic publication or journal article", "An exclusive right granted for an invention for a limited time", "A research grant from a funding agency", "A teaching certificate or qualification"],
                correct: 1,
                explanation: "Patents protect inventions, granting exclusive rights typically for 20 years in exchange for disclosure.",
                learnMore: { url: "https://www.epo.org/learning/patents.html", text: "📚 EPO: Patents" }
            },
            {
                q: "What is a Technology Transfer Office (TTO)?",
                options: ["A government tax collection office", "A university unit helping commercialize research results", "A teaching and curriculum department", "An IT support and helpdesk service"],
                correct: 1,
                explanation: "TTOs help researchers protect IP, license technologies, and create spin-off companies.",
                learnMore: { url: "https://ut.ee/en/technology-transfer", text: "📚 UT Technology Transfer" }
            }
        ],
        2: [
            {
                q: "What is licensing in technology transfer?",
                options: ["Publishing research as open source software", "Granting rights to use IP in exchange for fees or royalties", "Teaching a university course or seminar", "Hiring new researchers for the laboratory"],
                correct: 1,
                explanation: "Licensing allows companies to use university IP while the university retains ownership.",
                learnMore: { url: "https://www.wipo.int/licensing/en/", text: "📚 WIPO: Licensing" }
            },
            {
                q: "What is a spin-off company?",
                options: ["A company that is shutting down operations", "A new company created to commercialize university research", "A subsidiary division of a large corporation", "A student organization for entrepreneurship"],
                correct: 1,
                explanation: "Spin-offs commercialize research results, often with researchers as founders and university as shareholder.",
                learnMore: { url: "https://ut.ee/en/spin-off-companies", text: "📚 UT Spin-offs" }
            },
            {
                q: "Who typically owns IP created at Estonian universities?",
                options: ["Always the individual researcher who created it", "Always the Estonian government automatically", "Always the funding agency that supported the research", "The university, with inventor rights to share in revenues"],
                correct: 3,
                explanation: "Estonian universities typically own employee-created IP, with inventors receiving revenue shares.",
                learnMore: { url: "https://www.riigiteataja.ee/en/eli/520062017004/consolide", text: "📚 Estonian IP Law" }
            }
        ],
        3: [
            {
                q: "What is 'freedom to operate' analysis?",
                options: ["Permission to work at any institution or company", "Open source software licensing requirements", "An assessment of whether your product infringes existing patents", "Academic freedom policy for researchers"],
                correct: 2,
                explanation: "Freedom to operate analysis checks if commercializing research would infringe others' IP rights.",
                learnMore: { url: "https://www.epo.org/learning/materials/freedom-to-operate.html", text: "📚 EPO: Freedom to Operate" }
            },
            {
                q: "What is the difference between IP protection and open science?",
                options: ["They are exactly the same concept in practice", "Open science means no IP protection is ever allowed", "IP protection only applies to private industry", "IP restricts use for commercial gain; open science maximizes access"],
                correct: 3,
                explanation: "IP and open science represent different strategies; they can coexist with appropriate timing and planning.",
                learnMore: { url: "https://www.openaire.eu/", text: "📚 OpenAIRE" }
            },
            {
                q: "What is a non-disclosure agreement (NDA)?",
                options: ["A publishing agreement signed with academic journals", "A standard employment contract for researchers", "A contract protecting confidential information in collaborations", "A grant application form for funding"],
                correct: 2,
                explanation: "NDAs protect confidential information when discussing potential collaborations or commercialization.",
                learnMore: { url: "https://www.wipo.int/sme/en/documents/disclosing_inf.htm", text: "📚 WIPO: Confidentiality" }
            },
            {
                q: "When should researchers contact TTO about potential IP?",
                options: ["After the research paper has been published", "Only when a company approaches with interest", "Never, since IP protection is fully automatic", "Before any public disclosure such as publication or presentation"],
                correct: 3,
                explanation: "Early TTO contact is crucial as public disclosure can prevent patent protection.",
                learnMore: { url: "https://ut.ee/en/technology-transfer", text: "📚 UT Technology Transfer" }
            }
        ]
    },

    'p-compliance': {
        1: [
            {
                q: "What is research ethics committee approval needed for?",
                options: ["All research projects require approval automatically", "Research involving human participants, sensitive data, or animals", "Only medical and clinical research studies", "Only externally funded research projects"],
                correct: 1,
                explanation: "Ethics approval is required for research involving humans, personal data, animals, or sensitive topics.",
                learnMore: { url: "https://ut.ee/en/research-ethics", text: "📚 UT Research Ethics" }
            },
            {
                q: "What is GDPR in research context?",
                options: ["A research grant funding program from the EU", "A standard publication format for journals", "EU data protection regulation affecting research with personal data", "A laboratory safety and equipment standard"],
                correct: 2,
                explanation: "GDPR regulates how personal data is collected, processed, and stored in research.",
                learnMore: { url: "https://gdpr.eu/", text: "📚 GDPR.eu" }
            },
            {
                q: "What is informed consent in research?",
                options: ["A journal's acceptance of a submitted paper", "Employer permission to conduct research activities", "Participant agreement after understanding research purpose and risks", "Automatic consent implied by participation"],
                correct: 2,
                explanation: "Informed consent requires explaining the research and obtaining voluntary agreement to participate.",
                learnMore: { url: "https://www.hhs.gov/ohrp/regulations-and-policy/guidance/informed-consent/index.html", text: "📚 OHRP: Informed Consent" }
            }
        ],
        2: [
            {
                q: "What is a Data Protection Impact Assessment (DPIA)?",
                options: ["An assessment of a journal's research impact factor", "An evaluation of research data quality standards", "An analysis of data processing risks required for high-risk activities", "Performance testing for research databases"],
                correct: 2,
                explanation: "DPIA is required when data processing poses high risks to individuals' rights and freedoms.",
                learnMore: { url: "https://gdpr.eu/data-protection-impact-assessment-template/", text: "📚 DPIA Template" }
            },
            {
                q: "What are the principles of research data processing under GDPR?",
                options: ["Collect as much data as possible for future use", "Keep all data indefinitely for potential research needs", "No restrictions apply to research data processing", "Purpose limitation, data minimization, accuracy, and storage limitation"],
                correct: 3,
                explanation: "GDPR requires specific purpose, minimal necessary data, accuracy, and limited retention.",
                learnMore: { url: "https://gdpr.eu/article-5-how-to-process-personal-data/", text: "📚 GDPR Principles" }
            },
            {
                q: "What is the role of a Data Protection Officer?",
                options: ["Protecting physical data storage and server rooms", "Managing IT security systems and firewalls", "Advising the organization on data protection compliance", "Approving all research project proposals"],
                correct: 2,
                explanation: "DPOs advise on GDPR compliance and serve as contact point for data protection issues.",
                learnMore: { url: "https://gdpr.eu/data-protection-officer/", text: "📚 DPO Role" }
            }
        ],
        3: [
            {
                q: "What are lawful bases for processing personal data in research?",
                options: ["Any reason is acceptable for research purposes", "Only explicit consent is ever a valid basis", "Research activities are automatically exempt from requirements", "Consent, public interest, or legitimate interest depending on context"],
                correct: 3,
                explanation: "Research typically relies on consent or public interest, with specific conditions for each.",
                learnMore: { url: "https://gdpr.eu/article-6-how-to-process-personal-data-legally/", text: "📚 Lawful Bases" }
            },
            {
                q: "What is the research exemption under GDPR?",
                options: ["Complete exemption from all GDPR rules and requirements", "Special provisions allowing certain flexibility for scientific research", "An exemption that only applies to medical and clinical research", "No such exemption exists under GDPR"],
                correct: 1,
                explanation: "GDPR provides some flexibility for research but still requires appropriate safeguards.",
                learnMore: { url: "https://gdpr.eu/article-89-processing-for-archiving-purposes/", text: "📚 GDPR Research Exemptions" }
            },
            {
                q: "What reporting is required for EU-funded projects?",
                options: ["Only a final report at the very end of the project", "No reporting requirements exist for EU projects", "Periodic reports, financial statements, and deliverables on schedule", "Only oral presentations at review meetings"],
                correct: 2,
                explanation: "EU projects require regular reporting on progress, finances, and deliverables.",
                learnMore: { url: "https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/common/guidance/aga_en.pdf", text: "📚 EU Reporting Requirements" }
            },
            {
                q: "What is research integrity in compliance context?",
                options: ["Following only the minimum legal requirements", "Publishing research papers as frequently as possible", "Securing large grants and significant funding", "Adherence to ethical principles: honesty, rigor, transparency, and fairness"],
                correct: 3,
                explanation: "Research integrity encompasses ethical conduct beyond mere legal compliance.",
                learnMore: { url: "https://allea.org/code-of-conduct/", text: "📚 ALLEA Code of Conduct" }
            }
        ]
    },

    // ============================================================================
    // FOUNDATION TIER - Core Competencies
    // ============================================================================

    // --- Grant Writing Category ---

    'f-proposal-structure': {
        1: [
            {
                q: "What are the three main evaluation criteria for Horizon Europe proposals?",
                options: ["Excellence, Impact, Implementation", "Budget, Timeline, Team", "Introduction, Methods, Results", "Science, Technology, Innovation"],
                correct: 0,
                explanation: "Horizon Europe evaluates Excellence (scientific quality), Impact (benefits), and Implementation (feasibility)."
            },
            {
                q: "What should the 'Excellence' section demonstrate?",
                options: ["Scientific quality, novelty, and methodological soundness", "Budget efficiency", "Partner credentials", "Dissemination plans"],
                correct: 0,
                explanation: "Excellence covers objectives, relation to state-of-art, methodology, and the research's novelty."
            },
            {
                q: "What is an 'objective' in a research proposal?",
                options: ["Specific, measurable goal the project aims to achieve", "A general topic area", "The budget total", "A partner organization"],
                correct: 0,
                explanation: "Objectives are concrete, measurable targets that define project success."
            }
        ],
        2: [
            {
                q: "What should the 'Impact' section address?",
                options: ["Expected outcomes, dissemination, exploitation, and communication", "Only scientific publications", "Partner descriptions", "Methodology details"],
                correct: 0,
                explanation: "Impact covers how results will be used, who benefits, and how you'll reach stakeholders."
            },
            {
                q: "What is a 'work package' in proposal structure?",
                options: ["Major grouping of related project tasks and activities", "A software library", "A funding instrument", "A publication type"],
                correct: 0,
                explanation: "Work packages organize related tasks, each with its own objectives, deliverables, and lead partner."
            },
            {
                q: "What is the purpose of a Gantt chart in proposals?",
                options: ["Visualize project timeline, tasks, and dependencies", "Show budget allocation", "List team members", "Present research results"],
                correct: 0,
                explanation: "Gantt charts display the project schedule showing when tasks occur and how they relate."
            }
        ],
        3: [
            {
                q: "What is 'beyond state-of-the-art' in proposal writing?",
                options: ["How your research advances beyond current knowledge/technology", "Using very new equipment", "Hiring senior researchers", "Having a large budget"],
                correct: 0,
                explanation: "Beyond state-of-art explains what's new and how it improves on existing approaches."
            },
            {
                q: "What are Key Performance Indicators (KPIs) in proposals?",
                options: ["Measurable metrics to track project progress and success", "Financial auditing requirements", "Team member evaluations", "Publication impact factors"],
                correct: 0,
                explanation: "KPIs are specific, measurable indicators showing whether project goals are being achieved."
            },
            {
                q: "How should risks be presented in the Implementation section?",
                options: ["Identify risks, assess likelihood/impact, describe mitigation strategies", "Claim there are no risks", "Only mention positive outcomes", "Delegate risk management to partners"],
                correct: 0,
                explanation: "Good proposals acknowledge realistic risks and show credible plans to address them."
            },
            {
                q: "What is an 'exploitation plan'?",
                options: ["Strategy for using and commercializing project results", "Plan to exploit workers", "Data extraction methodology", "Partner recruitment strategy"],
                correct: 0,
                explanation: "Exploitation plans describe how results will be used beyond the project (products, services, policy)."
            }
        ]
    },

    'f-budget-planning': {
        1: [
            {
                q: "What are typical cost categories in EU project budgets?",
                options: ["Personnel, travel, equipment, subcontracting, other direct costs", "Only salaries and overhead", "Just equipment costs", "Administrative fees only"],
                correct: 0,
                explanation: "EU budgets typically include personnel, travel, equipment, consumables, subcontracting, and indirect costs."
            },
            {
                q: "What are 'indirect costs' in project budgets?",
                options: ["Overhead costs not directly tied to specific activities (25% flat rate in HE)", "Direct salary payments", "Equipment purchases", "Travel expenses"],
                correct: 0,
                explanation: "Indirect costs cover general expenses (facilities, admin); Horizon Europe uses a 25% flat rate."
            },
            {
                q: "What is a person-month (PM) in budget planning?",
                options: ["Unit measuring effort: one person working full-time for one month", "Monthly salary amount", "Project duration in months", "Number of team members"],
                correct: 0,
                explanation: "Person-months quantify effort; 12 PM could be one person for a year or two for six months."
            }
        ],
        2: [
            {
                q: "What costs are typically NOT eligible in EU grants?",
                options: ["VAT (in most cases), entertainment, fines, interest on debt", "Staff salaries", "Equipment depreciation", "Conference registration"],
                correct: 0,
                explanation: "Ineligible costs include VAT (usually), financial charges, entertainment, provisions for losses."
            },
            {
                q: "What is budget justification?",
                options: ["Explaining why each cost is necessary and reasonable", "Asking for more money", "Reducing the budget", "Transferring funds between partners"],
                correct: 0,
                explanation: "Justification demonstrates each cost is necessary for achieving project objectives."
            },
            {
                q: "What is co-financing or in-kind contribution?",
                options: ["Resources contributed by partners beyond the grant funding", "Loans from banks", "Future revenue projections", "Overhead charges"],
                correct: 0,
                explanation: "In-kind contributions are non-cash resources (staff time, equipment) partners provide."
            }
        ],
        3: [
            {
                q: "How should equipment costs be handled in multi-year EU projects?",
                options: ["Depreciation for portion used during project period", "Full cost always eligible", "Equipment cannot be funded", "Only rental allowed"],
                correct: 0,
                explanation: "Equipment depreciation during the project is typically eligible, not the full purchase price."
            },
            {
                q: "What are unit costs in Horizon Europe?",
                options: ["Simplified cost option with fixed amounts per unit (e.g., per person-month)", "Actual costs only", "Maximum budget limits", "Minimum spending requirements"],
                correct: 0,
                explanation: "Unit costs simplify reporting by using fixed amounts rather than tracking actual costs."
            },
            {
                q: "What is a budget amendment during project execution?",
                options: ["Formal request to change budget allocation between categories", "Automatic budget increase", "Reducing project scope", "Adding new partners"],
                correct: 0,
                explanation: "Budget amendments request reallocation when project needs change; some require approval."
            },
            {
                q: "What is the typical maximum for subcontracting in EU projects?",
                options: ["Limited, usually requiring justification; core tasks cannot be subcontracted", "Unlimited subcontracting allowed", "50% of budget minimum", "No subcontracting permitted"],
                correct: 0,
                explanation: "Subcontracting should be limited and justified; core research tasks must stay with beneficiaries."
            }
        ]
    },

    'f-impact-pathways': {
        1: [
            {
                q: "What is 'dissemination' in research projects?",
                options: ["Spreading research results to relevant audiences", "Keeping results confidential", "Selling research outputs", "Internal project communication"],
                correct: 0,
                explanation: "Dissemination makes results available to those who can use them (scientists, industry, public)."
            },
            {
                q: "What is the difference between dissemination and communication?",
                options: ["Dissemination targets specialists; communication targets broader public", "They are the same thing", "Communication is only internal", "Dissemination is only publications"],
                correct: 0,
                explanation: "Dissemination reaches relevant experts; communication engages the general public and media."
            },
            {
                q: "What are typical dissemination channels for research?",
                options: ["Publications, conferences, workshops, websites, social media", "Only peer-reviewed journals", "Internal reports only", "Press releases only"],
                correct: 0,
                explanation: "Effective dissemination uses multiple channels to reach different audiences."
            }
        ],
        2: [
            {
                q: "What is 'exploitation' of research results?",
                options: ["Using results to create value: products, services, policies, further research", "Academic publishing only", "Keeping results secret", "Destroying research data"],
                correct: 0,
                explanation: "Exploitation turns results into something useful beyond academic knowledge."
            },
            {
                q: "What is a 'target audience' in impact planning?",
                options: ["Specific groups who should receive and use your results", "Anyone who might be interested", "Only project partners", "Only funding agencies"],
                correct: 0,
                explanation: "Identifying specific audiences helps tailor messages and choose appropriate channels."
            },
            {
                q: "What is a sustainability plan?",
                options: ["How project outcomes will continue after funding ends", "Environmental sustainability only", "Financial sustainability of partners", "Continued publication schedule"],
                correct: 0,
                explanation: "Sustainability plans show how results, tools, or networks will be maintained post-project."
            }
        ],
        3: [
            {
                q: "What is an impact pathway/theory of change?",
                options: ["Logic model showing how activities lead to outcomes and impacts", "Financial projection model", "Research methodology", "Publication timeline"],
                correct: 0,
                explanation: "Impact pathways map the logical chain from project activities to short and long-term impacts."
            },
            {
                q: "What are 'Expected Impacts' in Horizon Europe?",
                options: ["Long-term changes the work programme topic aims to achieve", "Immediate project deliverables", "Partner obligations", "Budget categories"],
                correct: 0,
                explanation: "Expected Impacts in the work programme describe the broader changes projects should contribute to."
            },
            {
                q: "What is open access publishing for impact?",
                options: ["Making publications freely available to maximize reach and use", "Publishing only in top journals", "Charging readers for access", "Delaying publication"],
                correct: 0,
                explanation: "Open access removes barriers to reading research, increasing potential for uptake and impact."
            },
            {
                q: "What is stakeholder engagement in impact planning?",
                options: ["Involving potential users and beneficiaries throughout the project", "Only informing stakeholders at project end", "Avoiding external involvement", "Stakeholders are only funders"],
                correct: 0,
                explanation: "Early and ongoing stakeholder engagement increases relevance and likelihood of uptake."
            }
        ]
    },

    'f-consortium-building': {
        1: [
            {
                q: "What makes a good consortium for EU collaborative projects?",
                options: ["Complementary expertise, appropriate geographic spread, clear roles", "As many partners as possible", "Only top-ranked universities", "Only partners from one country"],
                correct: 0,
                explanation: "Strong consortia have complementary skills, balanced effort, and clear reasons for each partner."
            },
            {
                q: "What is a consortium agreement?",
                options: ["Contract between partners defining rights, obligations, IP arrangements", "The grant agreement with EC", "Academic collaboration MoU", "Employment contract"],
                correct: 0,
                explanation: "Consortium agreements regulate internal partnership matters beyond the EC grant agreement."
            },
            {
                q: "What is a 'coordinator' in EU projects?",
                options: ["Partner responsible for project management and EC communication", "The most senior researcher", "The partner with largest budget", "An external project manager"],
                correct: 0,
                explanation: "The coordinator manages the project, liaises with EC, and distributes funding to partners."
            }
        ],
        2: [
            {
                q: "What should partner selection criteria include?",
                options: ["Expertise fit, track record, reliability, complementarity, capacity", "Only academic reputation", "Geographic location only", "Previous collaboration only"],
                correct: 0,
                explanation: "Partner selection considers expertise, reliability, commitment, complementarity, and capacity to deliver."
            },
            {
                q: "What is the role of associated partners vs. beneficiaries?",
                options: ["Associated partners contribute but don't receive funding; beneficiaries do", "They are the same thing", "Associated partners lead work packages", "Beneficiaries are only industry"],
                correct: 0,
                explanation: "Beneficiaries receive EU funding; associated partners contribute without direct EU funding."
            },
            {
                q: "What is DESCA?",
                options: ["Model consortium agreement template widely used in EU projects", "A database system", "A funding program", "A research methodology"],
                correct: 0,
                explanation: "DESCA provides a standard consortium agreement template that can be adapted for specific projects."
            }
        ],
        3: [
            {
                q: "How should IP be handled in consortium agreements?",
                options: ["Define background IP, foreground ownership, access rights, and licensing", "IP automatically goes to coordinator", "Each partner keeps all IP independently", "IP is not addressed in consortium agreements"],
                correct: 0,
                explanation: "Clear IP provisions prevent disputes over who owns results and how they can be used."
            },
            {
                q: "What are 'access rights' in consortium agreements?",
                options: ["Rights to use partners' IP for project purposes or exploitation", "Physical access to facilities", "Access to project meetings", "Access to funding portal"],
                correct: 0,
                explanation: "Access rights determine how partners can use each other's background and foreground IP."
            },
            {
                q: "How should partner conflicts be resolved in consortia?",
                options: ["Escalation procedures: internal discussion, coordinator mediation, arbitration", "Go directly to court", "Remove the partner immediately", "Ignore conflicts until project ends"],
                correct: 0,
                explanation: "Consortium agreements should specify escalation steps from informal to formal resolution."
            },
            {
                q: "What is 'widening participation' in Horizon Europe?",
                options: ["Including partners from less research-intensive countries", "Expanding project scope", "Adding more work packages", "Increasing the budget"],
                correct: 0,
                explanation: "Widening supports participation from countries with lower R&I performance."
            }
        ]
    },

    'f-evaluation-criteria': {
        1: [
            {
                q: "How are Horizon Europe proposals typically scored?",
                options: ["0-5 scale for each criterion, with thresholds to pass", "Pass/fail only", "Ranked by budget size", "First-come-first-served"],
                correct: 0,
                explanation: "Each criterion is scored 0-5; proposals must meet threshold scores (usually 3-4) to be funded."
            },
            {
                q: "What do evaluators look for in 'Excellence'?",
                options: ["Clear objectives, sound methodology, ambition, beyond state-of-art", "Lowest budget", "Most partners", "Famous coordinator"],
                correct: 0,
                explanation: "Excellence assesses scientific quality, approach, ambition, and advancement of knowledge."
            },
            {
                q: "What is an Evaluation Summary Report (ESR)?",
                options: ["Feedback document providing scores and comments on your proposal", "Financial audit report", "Project progress report", "Consortium evaluation form"],
                correct: 0,
                explanation: "The ESR provides evaluation results and reviewer comments for submitted proposals."
            }
        ],
        2: [
            {
                q: "How many evaluators typically review a Horizon Europe proposal?",
                options: ["At least 3 independent experts, more for large budgets", "Just 1 evaluator", "Exactly 10 evaluators", "The EC staff only"],
                correct: 0,
                explanation: "Proposals are reviewed by at least 3 external experts who reach consensus scores."
            },
            {
                q: "What is 'consensus' in EU proposal evaluation?",
                options: ["Evaluators discuss and agree on a single score and comments", "Scores are simply averaged", "The highest score wins", "Only the rapporteur's view counts"],
                correct: 0,
                explanation: "After individual assessment, evaluators meet to discuss and reach agreed scores and comments."
            },
            {
                q: "What are common weaknesses evaluators identify?",
                options: ["Unclear objectives, weak methodology, unrealistic plans, poor impact case", "Too many publications listed", "Budget too small", "Too few partners"],
                correct: 0,
                explanation: "Common weaknesses include vague objectives, unsound methods, and unconvincing impact pathways."
            }
        ],
        3: [
            {
                q: "What is a 'threshold' in Horizon Europe evaluation?",
                options: ["Minimum score required for each criterion to be eligible for funding", "Maximum budget limit", "Number of required partners", "Deadline for submission"],
                correct: 0,
                explanation: "Thresholds are minimum scores (often 3/5 per criterion, 10/15 overall) required to pass."
            },
            {
                q: "How are tied proposals ranked?",
                options: ["Specific tie-breaking rules (e.g., Excellence first, then Impact, gender balance)", "Random selection", "Alphabetical by coordinator", "Earlier submission wins"],
                correct: 0,
                explanation: "Tie-breakers typically prioritize certain criteria, then consider policy factors like gender balance."
            },
            {
                q: "What is the role of the rapporteur in evaluation?",
                options: ["Lead evaluator who coordinates the evaluation and drafts consensus report", "The applicant's representative", "An EC official", "External observer"],
                correct: 0,
                explanation: "The rapporteur coordinates evaluation discussion and writes the consensus report."
            },
            {
                q: "How can you improve proposals based on ESR feedback?",
                options: ["Address each criticism specifically, strengthen weak areas, clarify ambiguities", "Ignore negative feedback", "Submit identical proposal elsewhere", "Complain about unfair evaluation"],
                correct: 0,
                explanation: "Systematic response to each ESR comment improves resubmission success rates."
            }
        ]
    },

    'f-resubmission': {
        1: [
            {
                q: "What should you do first after receiving a rejection?",
                options: ["Carefully analyze the Evaluation Summary Report feedback", "Immediately resubmit unchanged", "Give up on the topic", "Complain to the funding agency"],
                correct: 0,
                explanation: "Understanding evaluator feedback is essential before deciding next steps."
            },
            {
                q: "Can rejected proposals be resubmitted?",
                options: ["Yes, typically to the next relevant call after addressing feedback", "Never allowed to resubmit", "Only if invited by EC", "Only with different partners"],
                correct: 0,
                explanation: "Resubmission to appropriate future calls is allowed and encouraged if you address weaknesses."
            },
            {
                q: "What is the typical success rate for first-time EU proposals?",
                options: ["Around 10-15% for competitive calls", "Over 80%", "Exactly 50%", "100% if well-written"],
                correct: 0,
                explanation: "Competitive calls have low success rates; multiple submissions are often needed."
            }
        ],
        2: [
            {
                q: "How should you prioritize addressing evaluator comments?",
                options: ["Focus on lowest-scored criteria and most critical weaknesses first", "Only address easy fixes", "Ignore comments you disagree with", "Change everything completely"],
                correct: 0,
                explanation: "Prioritize comments that cost the most points or address fundamental flaws."
            },
            {
                q: "Should you change the consortium for resubmission?",
                options: ["Consider changes if partner capacity or commitment was criticized", "Always keep the same partners", "Always change all partners", "Remove all industry partners"],
                correct: 0,
                explanation: "Partner changes may be needed if weaknesses were attributed to consortium composition."
            },
            {
                q: "What is a 'response to reviewers' approach in resubmission?",
                options: ["Systematically address each criticism in the improved proposal", "Argue against all criticism", "Ignore previous feedback", "Only mention positive feedback"],
                correct: 0,
                explanation: "Track how each evaluator comment has been addressed in the new version."
            }
        ],
        3: [
            {
                q: "When should you consider switching to a different call or program?",
                options: ["When feedback suggests fundamental mismatch with call objectives", "After one rejection", "Never switch once started", "Whenever a new call opens"],
                correct: 0,
                explanation: "Persistent scope mismatch suggests the idea may fit better elsewhere."
            },
            {
                q: "How can National Contact Points help with resubmission?",
                options: ["Provide feedback on drafts, explain call requirements, suggest improvements", "Write the proposal for you", "Guarantee funding", "Evaluate proposals officially"],
                correct: 0,
                explanation: "NCPs offer free support including proposal feedback and guidance on addressing weaknesses."
            },
            {
                q: "What changes typically improve resubmission success?",
                options: ["Clearer objectives, stronger methodology, better impact narrative, realistic plan", "Just a higher budget", "More pages of text", "More partners from more countries"],
                correct: 0,
                explanation: "Substantive improvements to content quality matter more than superficial changes."
            },
            {
                q: "How long should you wait before resubmitting?",
                options: ["Until you can genuinely address all major weaknesses (often next annual call)", "Resubmit immediately unchanged", "Wait at least 5 years", "Only resubmit if personally invited"],
                correct: 0,
                explanation: "Take enough time to meaningfully improve; rushing leads to similar results."
            }
        ]
    },

    // --- Project Management Category ---

    'f-project-planning': {
        1: [
            {
                q: "What is a work breakdown structure (WBS)?",
                options: ["Hierarchical decomposition of project into manageable tasks", "Employee organization chart", "Budget allocation spreadsheet", "Risk assessment matrix"],
                correct: 0,
                explanation: "WBS breaks the project into work packages, tasks, and subtasks for planning and management."
            },
            {
                q: "What is a milestone in project management?",
                options: ["Key checkpoint marking significant achievement or decision point", "Daily task", "Budget line item", "Team member role"],
                correct: 0,
                explanation: "Milestones are major achievements (e.g., prototype complete, paper submitted) marking progress."
            },
            {
                q: "What is a deliverable?",
                options: ["Tangible output produced by the project (report, software, dataset)", "A meeting agenda", "An internal discussion", "A team member assignment"],
                correct: 0,
                explanation: "Deliverables are concrete outputs submitted to funders or stakeholders."
            }
        ],
        2: [
            {
                q: "What is a PERT chart used for?",
                options: ["Visualizing task dependencies and critical path in projects", "Measuring team performance", "Allocating budget", "Tracking publications"],
                correct: 0,
                explanation: "PERT charts show task sequences, dependencies, and identify the critical path."
            },
            {
                q: "What is the 'critical path' in project planning?",
                options: ["Longest sequence of dependent tasks determining minimum duration", "Most expensive tasks", "Most important research", "Path from office to lab"],
                correct: 0,
                explanation: "The critical path determines project duration; delays here delay the entire project."
            },
            {
                q: "What should kick-off meetings accomplish?",
                options: ["Align team on objectives, roles, processes, and build relationships", "Finalize the budget", "Write the first deliverable", "Evaluate the project"],
                correct: 0,
                explanation: "Kick-off meetings ensure shared understanding and set the tone for collaboration."
            }
        ],
        3: [
            {
                q: "How should project plans handle uncertainty?",
                options: ["Build in buffer time, identify risks, plan contingencies", "Assume everything will go perfectly", "Add buffer by doubling estimates", "Ignore uncertainty"],
                correct: 0,
                explanation: "Good plans acknowledge uncertainty with realistic buffers and contingency approaches."
            },
            {
                q: "What is agile project management in research?",
                options: ["Iterative approach with regular reviews and adaptive planning", "Following a fixed plan exactly", "Working without any plan", "Only for software projects"],
                correct: 0,
                explanation: "Agile approaches use short cycles and regular adaptation, useful when requirements evolve."
            },
            {
                q: "What is a project steering committee?",
                options: ["Oversight body providing strategic guidance and decisions", "Daily operations team", "External evaluators", "Budget accountants"],
                correct: 0,
                explanation: "Steering committees provide high-level oversight, resolve major issues, and guide strategy."
            },
            {
                q: "How should resource allocation be planned across work packages?",
                options: ["Match effort to task requirements, avoid overcommitting individuals", "Assign everyone to everything", "Put all resources in first work package", "Leave allocation to individual choice"],
                correct: 0,
                explanation: "Resource planning ensures appropriate skills and realistic workloads across the project."
            }
        ]
    },

    'f-team-leadership': {
        1: [
            {
                q: "What is the primary role of a research team leader?",
                options: ["Provide direction, support, and enable team members to succeed", "Do all the work personally", "Only secure funding", "Manage administration only"],
                correct: 0,
                explanation: "Leaders set direction, remove obstacles, and help team members achieve their potential."
            },
            {
                q: "What is delegation in team leadership?",
                options: ["Assigning tasks with appropriate authority and accountability", "Dumping unwanted work on others", "Doing everything yourself", "Avoiding responsibility"],
                correct: 0,
                explanation: "Effective delegation matches tasks to capabilities and provides needed support and authority."
            },
            {
                q: "Why are regular team meetings important?",
                options: ["Maintain communication, track progress, address issues early", "To fill calendar time", "Required by university policy only", "To demonstrate authority"],
                correct: 0,
                explanation: "Regular meetings keep everyone aligned, surface problems, and maintain team cohesion."
            }
        ],
        2: [
            {
                q: "How should conflicts within research teams be handled?",
                options: ["Address early, listen to all sides, seek constructive resolution", "Ignore until they resolve themselves", "Always side with senior members", "Immediately involve external arbitrators"],
                correct: 0,
                explanation: "Early, fair intervention prevents escalation and maintains team productivity."
            },
            {
                q: "What is 'psychological safety' in teams?",
                options: ["Environment where members feel safe to take risks and speak up", "Physical workplace safety", "Mental health benefits", "Job security guarantees"],
                correct: 0,
                explanation: "Psychological safety enables innovation by removing fear of punishment for mistakes or ideas."
            },
            {
                q: "How can leaders motivate research team members?",
                options: ["Recognition, autonomy, meaningful work, growth opportunities, fair treatment", "Only financial incentives", "Strict supervision and control", "Competition between members"],
                correct: 0,
                explanation: "Researchers are motivated by purpose, mastery, autonomy, recognition, and career development."
            }
        ],
        3: [
            {
                q: "What is situational leadership?",
                options: ["Adapting leadership style to team members' development and task needs", "Leading only in certain situations", "Changing leaders frequently", "Leadership only during crises"],
                correct: 0,
                explanation: "Situational leaders adjust their approach based on individual readiness and task requirements."
            },
            {
                q: "How should leaders handle underperforming team members?",
                options: ["Identify causes, provide support/resources, set clear expectations, document", "Ignore the problem", "Immediately terminate", "Reassign all their work to others"],
                correct: 0,
                explanation: "Address performance issues constructively through support, clarity, and fair processes."
            },
            {
                q: "What is distributed leadership in research teams?",
                options: ["Sharing leadership responsibilities based on expertise and context", "Having no designated leader", "Multiple people claiming to be in charge", "Rotating leadership randomly"],
                correct: 0,
                explanation: "Distributed leadership leverages different members' strengths for different aspects of the work."
            },
            {
                q: "How should credit and authorship be handled in team leadership?",
                options: ["Establish clear expectations early, follow contribution-based guidelines", "Leader takes all credit", "Alphabetical order always", "Random assignment"],
                correct: 0,
                explanation: "Fair, transparent, contribution-based practices maintain trust and motivation."
            }
        ]
    },

    'f-financial-management': {
        1: [
            {
                q: "What is a project financial statement?",
                options: ["Document showing expenditure against budget for reporting periods", "Personal bank statement", "University annual report", "Grant application budget"],
                correct: 0,
                explanation: "Financial statements track actual spending versus budget for funder reporting."
            },
            {
                q: "What are eligible costs in grant management?",
                options: ["Expenses that can legitimately be charged to the grant", "Any cost the researcher wants", "Only salary costs", "Costs after project ends"],
                correct: 0,
                explanation: "Eligible costs are those permitted by grant rules and directly related to the project."
            },
            {
                q: "Why is budget monitoring important?",
                options: ["Ensure funds are spent appropriately and identify issues early", "To spend money as fast as possible", "Only required at project end", "To minimize spending"],
                correct: 0,
                explanation: "Regular monitoring prevents overspending, underspending, and compliance issues."
            }
        ],
        2: [
            {
                q: "What is a cost claim or reimbursement request?",
                options: ["Request to funder for payment of incurred eligible costs", "Invoice to a customer", "Budget proposal", "Salary payment"],
                correct: 0,
                explanation: "Cost claims request payment for expenses already incurred and documented."
            },
            {
                q: "What documentation is typically needed for audit?",
                options: ["Timesheets, invoices, contracts, proof of payment, deliverables", "Only final report", "Just the grant agreement", "No documentation needed"],
                correct: 0,
                explanation: "Auditors verify costs with supporting documents proving eligibility and proper procurement."
            },
            {
                q: "What is 'burn rate' in project finance?",
                options: ["Rate at which budget is being spent over time", "Interest rate on loans", "Inflation adjustment", "Staff turnover rate"],
                correct: 0,
                explanation: "Burn rate helps predict whether spending aligns with project timeline and budget."
            }
        ],
        3: [
            {
                q: "What happens with underspending at project end?",
                options: ["Typically returned to funder; major underspending may raise questions", "Kept by the university", "Automatically rolled over", "Given as bonuses to team"],
                correct: 0,
                explanation: "Significant underspending suggests planning problems and may affect future funding credibility."
            },
            {
                q: "What is a certificate on financial statements (CFS)?",
                options: ["Independent auditor verification required for large EU projects", "Certificate of project completion", "Degree certificate", "Publication acceptance"],
                correct: 0,
                explanation: "CFS provides independent verification of costs claimed, required above certain thresholds."
            },
            {
                q: "How should budget transfers between categories be handled?",
                options: ["Follow grant rules; some flexibility exists, major changes need approval", "Never permitted", "Freely move money anywhere", "Only coordinator decides"],
                correct: 0,
                explanation: "Most grants allow some flexibility, but significant reallocations require formal approval."
            },
            {
                q: "What is financial reporting frequency for EU projects?",
                options: ["Typically at periodic review points (every 12-18 months) plus final", "Monthly detailed reports", "Only at project end", "No reporting required"],
                correct: 0,
                explanation: "EU projects report finances at periodic reviews (often annual) and at project conclusion."
            }
        ]
    },

    'f-risk-management': {
        1: [
            {
                q: "What is a risk in project management?",
                options: ["Uncertain event that could positively or negatively affect project", "A guaranteed problem", "Only negative possibilities", "A mistake already made"],
                correct: 0,
                explanation: "Risks are potential events (positive or negative) that may impact project objectives."
            },
            {
                q: "What is a risk register?",
                options: ["Document listing identified risks, their assessment, and mitigation plans", "List of team members", "Project budget", "Meeting minutes"],
                correct: 0,
                explanation: "Risk registers track risks, their likelihood, impact, owners, and mitigation measures."
            },
            {
                q: "What are the two main dimensions of risk assessment?",
                options: ["Likelihood/probability and impact/severity", "Cost and time", "Internal and external", "Technical and financial"],
                correct: 0,
                explanation: "Risks are assessed by how likely they are and how serious their impact would be."
            }
        ],
        2: [
            {
                q: "What are the main risk response strategies?",
                options: ["Avoid, mitigate, transfer, accept", "Ignore, hope, pray, forget", "Only mitigation is valid", "Transfer all risks to partners"],
                correct: 0,
                explanation: "Response strategies: avoid (eliminate), mitigate (reduce), transfer (insurance/contracts), accept (acknowledge)."
            },
            {
                q: "What is a contingency plan?",
                options: ["Pre-planned response activated if a risk materializes", "Main project plan", "Budget reserve", "Staff backup list"],
                correct: 0,
                explanation: "Contingency plans specify what to do if identified risks actually occur."
            },
            {
                q: "Who should be responsible for monitoring risks?",
                options: ["Assigned risk owners with overall oversight by project manager", "Only the project manager", "External auditors", "No one specifically"],
                correct: 0,
                explanation: "Each risk should have an owner, with overall risk management coordinated centrally."
            }
        ],
        3: [
            {
                q: "What are common research project risks?",
                options: ["Technical failure, staff departure, delays, partner issues, scope creep", "Only budget overruns", "Risks don't apply to research", "Only equipment failure"],
                correct: 0,
                explanation: "Research faces technical, personnel, timeline, collaboration, and scope risks."
            },
            {
                q: "What is a risk matrix?",
                options: ["Visual tool plotting risks by likelihood and impact to prioritize attention", "Matrix of partner responsibilities", "Mathematical formula", "Meeting schedule"],
                correct: 0,
                explanation: "Risk matrices help visualize and prioritize risks for management attention."
            },
            {
                q: "How often should risks be reviewed?",
                options: ["Regularly (e.g., at team meetings, milestones) and when circumstances change", "Only at project start", "Only when problems occur", "Once at project end"],
                correct: 0,
                explanation: "Ongoing risk review identifies new risks and updates assessments as the project evolves."
            },
            {
                q: "What is the difference between a risk and an issue?",
                options: ["Risk is potential future event; issue is current problem requiring action", "They are the same thing", "Issues are less serious than risks", "Risks are certain, issues uncertain"],
                correct: 0,
                explanation: "Risks are future possibilities; issues are current realities needing immediate attention."
            }
        ]
    },

    'f-stakeholder-mgmt': {
        1: [
            {
                q: "Who are stakeholders in research projects?",
                options: ["Anyone affected by or who can affect the project", "Only funding agencies", "Only project team members", "Only industry partners"],
                correct: 0,
                explanation: "Stakeholders include funders, partners, users, institutions, policymakers, and communities."
            },
            {
                q: "What is stakeholder analysis?",
                options: ["Identifying stakeholders and understanding their interests and influence", "Analyzing project budget", "Reviewing publications", "Evaluating team performance"],
                correct: 0,
                explanation: "Stakeholder analysis maps who matters, what they care about, and how to engage them."
            },
            {
                q: "Why is stakeholder management important?",
                options: ["Ensures support, manages expectations, increases impact and adoption", "Only for public relations", "Required by law", "To avoid stakeholders"],
                correct: 0,
                explanation: "Good stakeholder management builds support, prevents conflicts, and enhances impact."
            }
        ],
        2: [
            {
                q: "What is a project advisory board?",
                options: ["External experts providing guidance and connections to the project", "The funding agency", "Project management team", "University administration"],
                correct: 0,
                explanation: "Advisory boards offer expertise, perspective, and legitimacy from outside the project team."
            },
            {
                q: "How should project officers from funding agencies be engaged?",
                options: ["Proactive communication, transparency about progress and issues", "Minimal contact to avoid scrutiny", "Only contact when required", "Let coordinator handle all contact"],
                correct: 0,
                explanation: "Project officers are partners in success; open communication builds trust and gets support."
            },
            {
                q: "What is expectation management?",
                options: ["Ensuring stakeholders have realistic understanding of what project will deliver", "Lowering all expectations", "Promising more than possible", "Ignoring stakeholder expectations"],
                correct: 0,
                explanation: "Managing expectations prevents disappointment by aligning understanding with reality."
            }
        ],
        3: [
            {
                q: "What is a power-interest grid for stakeholder analysis?",
                options: ["Matrix categorizing stakeholders by their power and interest in project", "Electrical power distribution plan", "Interest rate calculation", "Team authority structure"],
                correct: 0,
                explanation: "Power-interest grids help prioritize engagement: high power/interest stakeholders need most attention."
            },
            {
                q: "How should negative stakeholders be managed?",
                options: ["Understand concerns, engage constructively, address legitimate issues", "Ignore them completely", "Fight them publicly", "Remove them from stakeholder list"],
                correct: 0,
                explanation: "Understanding and addressing concerns can convert critics or at least neutralize opposition."
            },
            {
                q: "What is stakeholder communication planning?",
                options: ["Defining what, how, and when to communicate with different stakeholders", "Sending same message to everyone", "Only crisis communication", "No planning needed"],
                correct: 0,
                explanation: "Tailored communication plans ensure appropriate engagement with different stakeholder groups."
            },
            {
                q: "How can user stakeholders be involved in research projects?",
                options: ["Co-design, feedback sessions, pilot testing, advisory roles", "Only as research subjects", "Users should not be involved", "Only at project end"],
                correct: 0,
                explanation: "Early and ongoing user involvement improves relevance and adoption of research outcomes."
            }
        ]
    },

    'f-reporting': {
        1: [
            {
                q: "What is a periodic report in EU projects?",
                options: ["Required report on progress, results, and finances at review periods", "Daily status update", "One-time final submission", "Internal team memo"],
                correct: 0,
                explanation: "Periodic reports document project progress and spending at scheduled review points."
            },
            {
                q: "What are deliverables in project reporting?",
                options: ["Tangible outputs submitted according to the grant agreement schedule", "Only scientific papers", "Meeting minutes", "Email correspondence"],
                correct: 0,
                explanation: "Deliverables are specified outputs (reports, software, data) due at defined dates."
            },
            {
                q: "What is the purpose of a technical report?",
                options: ["Document scientific/technical progress and achievements", "Only financial accounting", "Team HR records", "Equipment inventory"],
                correct: 0,
                explanation: "Technical reports describe research activities, methods, results, and progress toward objectives."
            }
        ],
        2: [
            {
                q: "What is a project review meeting with EC?",
                options: ["Formal assessment of progress with project officer and reviewers", "Internal team meeting", "Conference presentation", "Budget negotiation"],
                correct: 0,
                explanation: "Review meetings assess progress, discuss issues, and determine continued funding."
            },
            {
                q: "What should be reported when a deliverable is delayed?",
                options: ["Notify project officer, explain reasons, provide revised timeline", "Hide the delay until asked", "Submit incomplete work", "Cancel the deliverable"],
                correct: 0,
                explanation: "Proactive communication about delays with mitigation plans maintains trust."
            },
            {
                q: "What is an amendment to a grant agreement?",
                options: ["Formal change to project scope, budget, consortium, or timeline", "Internal project adjustment", "Publication revision", "Team member assignment"],
                correct: 0,
                explanation: "Amendments formalize significant changes requiring EC approval."
            }
        ],
        3: [
            {
                q: "What is the final report for EU projects?",
                options: ["Comprehensive summary of all achievements, impact, and final finances", "Just final budget numbers", "A one-page summary", "Not required if successful"],
                correct: 0,
                explanation: "Final reports comprehensively document what was achieved and how funds were spent."
            },
            {
                q: "What is a publishable summary?",
                options: ["Public-facing description of project and results for dissemination", "Classified project information", "Internal management report", "Journal abstract"],
                correct: 0,
                explanation: "Publishable summaries communicate project outcomes to non-specialist audiences."
            },
            {
                q: "How should project outcomes be documented for sustainability?",
                options: ["Results repository, documentation, handover plans, knowledge transfer", "No documentation needed after project ends", "Only in final report", "Each partner keeps their own records"],
                correct: 0,
                explanation: "Good documentation ensures results remain accessible and usable beyond the project."
            },
            {
                q: "What are Key Exploitable Results (KERs)?",
                options: ["Main outputs with potential for further use, commercialization, or impact", "Only patented inventions", "All project deliverables", "Financial results only"],
                correct: 0,
                explanation: "KERs are significant results with exploitation potential, requiring detailed reporting in HE."
            }
        ]
    },

    // --- Industry Collaboration Category ---

    'f-industry-needs': {
        1: [
            {
                q: "Why is understanding industry needs important for researchers?",
                options: ["Enables relevant research with potential for real-world impact and funding", "Industry needs are irrelevant to academia", "Only for commercialization purposes", "Reduces research quality"],
                correct: 0,
                explanation: "Understanding industry enables impactful research, collaboration opportunities, and diverse funding."
            },
            {
                q: "How do industry research needs typically differ from academic research?",
                options: ["Often shorter timelines, specific problems, practical outcomes focus", "No difference exists", "Industry wants only basic research", "Academic research is always faster"],
                correct: 0,
                explanation: "Industry typically needs faster, more applied results addressing specific business challenges."
            },
            {
                q: "What is Technology Readiness Level (TRL)?",
                options: ["Scale measuring maturity of technology from concept to deployment", "Employee skill rating", "Research quality measure", "Journal ranking system"],
                correct: 0,
                explanation: "TRL (1-9) indicates how developed a technology is, from basic research to proven deployment."
            }
        ],
        2: [
            {
                q: "How can researchers identify industry research needs?",
                options: ["Industry events, company R&D reports, direct engagement, trade publications", "Wait for companies to approach", "Read only academic journals", "Avoid industry contact"],
                correct: 0,
                explanation: "Active engagement through events, publications, and direct dialogue reveals industry priorities."
            },
            {
                q: "What is the 'valley of death' in innovation?",
                options: ["Gap between research results and commercial products where many innovations fail", "A geographic location", "Research funding cuts", "Career challenges"],
                correct: 0,
                explanation: "The valley of death is the difficult transition from research to market where many technologies stall."
            },
            {
                q: "What do companies typically look for in academic partners?",
                options: ["Relevant expertise, reliability, flexibility, clear communication", "Only famous professors", "Lowest cost only", "Large research teams only"],
                correct: 0,
                explanation: "Companies value expertise fit, dependability, responsiveness, and ability to communicate clearly."
            }
        ],
        3: [
            {
                q: "How should academics translate research findings for industry audiences?",
                options: ["Focus on practical applications, benefits, and business value", "Use maximum technical jargon", "Only discuss methodology", "Avoid discussing applications"],
                correct: 0,
                explanation: "Industry audiences need to understand practical implications and value proposition."
            },
            {
                q: "What is demand-driven research?",
                options: ["Research addressing needs identified by potential users or industry", "Research driven only by curiosity", "Research mandated by government", "Marketing-driven activities"],
                correct: 0,
                explanation: "Demand-driven research responds to identified needs, increasing relevance and adoption potential."
            },
            {
                q: "How can researchers balance academic freedom with industry partnerships?",
                options: ["Clear agreements on publication rights, IP, and research direction", "Avoid industry completely", "Give industry full control", "Keep partnerships secret"],
                correct: 0,
                explanation: "Clear upfront agreements protect academic interests while enabling productive collaboration."
            },
            {
                q: "What is a Technology Roadmap?",
                options: ["Strategic plan showing technology development trajectory and milestones", "GPS navigation system", "Project management tool only", "Academic curriculum"],
                correct: 0,
                explanation: "Roadmaps show planned technology evolution, helping align research with industry needs."
            }
        ]
    },

    'f-contract-research': {
        1: [
            {
                q: "What is contract research?",
                options: ["Research performed for external client under a specific agreement", "Any research with a contract", "Publishing in contracted journals", "Research on legal contracts"],
                correct: 0,
                explanation: "Contract research is commissioned and funded by an external organization for specific objectives."
            },
            {
                q: "What should be defined in a research contract?",
                options: ["Scope, deliverables, timeline, IP rights, payment, confidentiality", "Only the payment amount", "Just the project title", "Researcher names only"],
                correct: 0,
                explanation: "Good contracts clearly specify all aspects to prevent misunderstandings."
            },
            {
                q: "Who typically owns IP in contract research?",
                options: ["Depends on negotiation; often the funder, or shared arrangements", "Always the researcher", "Always the university", "No IP in contract research"],
                correct: 0,
                explanation: "IP ownership in contracts is negotiated and often depends on who pays and contributes."
            }
        ],
        2: [
            {
                q: "What is overhead or indirect cost recovery in contracts?",
                options: ["Additional charge covering university facilities and administration", "Hidden fees", "Only direct costs are charged", "Profit margin"],
                correct: 0,
                explanation: "Overhead recovers institutional costs (space, admin, services) not directly charged to projects."
            },
            {
                q: "What is a confidentiality or non-disclosure agreement (NDA)?",
                options: ["Agreement to protect sensitive information shared in collaboration", "Publication agreement", "Employment contract", "Grant application"],
                correct: 0,
                explanation: "NDAs protect confidential business or technical information during discussions."
            },
            {
                q: "What is the difference between contract research and sponsored research?",
                options: ["Contract: specific deliverables for client; Sponsored: more academic freedom", "No difference", "Sponsored has no funding", "Contract is only for industry"],
                correct: 0,
                explanation: "Contract research serves client needs; sponsored research supports academic investigations."
            }
        ],
        3: [
            {
                q: "How should publication rights be handled in industry contracts?",
                options: ["Negotiate rights to publish after confidentiality review period", "Never publish contract research", "Publish immediately without review", "Only company decides"],
                correct: 0,
                explanation: "Academics should negotiate publication rights with review periods to protect legitimate interests."
            },
            {
                q: "What is a master research agreement?",
                options: ["Framework contract for ongoing collaboration with specific projects under it", "Contract for master's students", "Agreement between universities", "Single project contract"],
                correct: 0,
                explanation: "Master agreements streamline multiple collaborations by pre-agreeing standard terms."
            },
            {
                q: "What risks should academics consider in contract research?",
                options: ["IP conflicts, publication restrictions, reputational concerns, time commitment", "Contract research has no risks", "Only financial risks matter", "Risks are company's problem"],
                correct: 0,
                explanation: "Researchers should consider academic freedom, reputation, time, and ethical implications."
            },
            {
                q: "How should contract research pricing be determined?",
                options: ["Full cost recovery including salary, overheads, and equipment", "Undercut competitors", "Charge maximum possible", "No structured approach needed"],
                correct: 0,
                explanation: "Pricing should cover all costs including overhead and reflect value provided."
            }
        ]
    },

    'f-tech-transfer': {
        1: [
            {
                q: "What is technology transfer?",
                options: ["Process of moving research results toward practical application", "Transferring staff between departments", "Moving equipment between labs", "Data transfer protocols"],
                correct: 0,
                explanation: "Tech transfer bridges the gap between research discoveries and real-world use."
            },
            {
                q: "What is the role of a university Technology Transfer Office?",
                options: ["Help researchers commercialize discoveries through patents, licenses, spin-offs", "Only manage research grants", "Teaching support services", "IT support"],
                correct: 0,
                explanation: "TTOs support IP protection, licensing negotiations, and company creation from research."
            },
            {
                q: "What is a license in technology transfer?",
                options: ["Permission to use IP in exchange for fees or royalties", "A driver's license", "Publication permission", "Teaching qualification"],
                correct: 0,
                explanation: "Licenses allow companies to use university IP under agreed terms and compensation."
            }
        ],
        2: [
            {
                q: "What is the difference between exclusive and non-exclusive licenses?",
                options: ["Exclusive: only one licensee; Non-exclusive: multiple licensees allowed", "No practical difference", "Exclusive is cheaper", "Non-exclusive has more rights"],
                correct: 0,
                explanation: "Exclusive licenses grant sole rights; non-exclusive allows multiple licensees."
            },
            {
                q: "What is a patent portfolio?",
                options: ["Collection of related patents protecting a technology area", "Personal portfolio of publications", "Financial investment portfolio", "Career achievements collection"],
                correct: 0,
                explanation: "Patent portfolios bundle related IP for comprehensive protection and licensing."
            },
            {
                q: "What is proof of concept funding?",
                options: ["Funding to demonstrate technology feasibility before commercialization", "Regular research grants", "Final product development funding", "Market research funds"],
                correct: 0,
                explanation: "Proof of concept funds bridge early research and commercial investment readiness."
            }
        ],
        3: [
            {
                q: "What is due diligence in tech transfer?",
                options: ["Investigation of technology, IP, and risks before licensing or investment", "Regular lab maintenance", "Financial audit", "Publication review"],
                correct: 0,
                explanation: "Due diligence assesses technology validity, IP strength, market potential, and risks."
            },
            {
                q: "What is a term sheet in licensing negotiations?",
                options: ["Document outlining key deal terms before formal contract", "Technical specifications", "Project timeline", "Team member list"],
                correct: 0,
                explanation: "Term sheets summarize main agreement points as basis for detailed contract drafting."
            },
            {
                q: "What are milestone payments in tech transfer?",
                options: ["Payments triggered when licensee achieves development milestones", "Regular monthly payments", "One-time upfront fee only", "Payments for academic milestones"],
                correct: 0,
                explanation: "Milestone payments link compensation to commercialization progress (e.g., clinical trials, product launch)."
            },
            {
                q: "What is a reach-through right in licensing?",
                options: ["Licensor claim to improvements or products developed using licensed IP", "Physical access rights", "Publication rights", "Return of licensed IP"],
                correct: 0,
                explanation: "Reach-through provisions give licensors interest in downstream developments using their IP."
            }
        ]
    },

    'f-startup-basics': {
        1: [
            {
                q: "What is a spin-off company in academic context?",
                options: ["New company created to commercialize university research", "A university department", "An industry subsidiary", "A student club"],
                correct: 0,
                explanation: "Spin-offs commercialize academic innovations, often with researcher founders and university IP."
            },
            {
                q: "What is equity in a startup?",
                options: ["Ownership stake in the company", "Monthly salary", "Loan amount", "Office space"],
                correct: 0,
                explanation: "Equity represents ownership shares that may become valuable if the company succeeds."
            },
            {
                q: "What is a minimum viable product (MVP)?",
                options: ["Simplest version of product to test market interest", "A finished product", "A detailed business plan", "A research prototype"],
                correct: 0,
                explanation: "MVPs test core value propositions with minimal investment before full development."
            }
        ],
        2: [
            {
                q: "What is a business model canvas?",
                options: ["One-page framework describing how a business creates and captures value", "Financial spreadsheet", "Marketing poster", "Legal document"],
                correct: 0,
                explanation: "The canvas maps key elements: customers, value proposition, channels, revenue, costs, etc."
            },
            {
                q: "What are typical startup funding stages?",
                options: ["Pre-seed, seed, Series A, B, C...", "Only bank loans", "Single large investment", "Government grants only"],
                correct: 0,
                explanation: "Startups progress through funding rounds as they develop, each with different investors."
            },
            {
                q: "What is the role of founders in a spin-off?",
                options: ["Provide vision, expertise, and often continue involvement during early stages", "Only provide IP and leave", "No involvement after incorporation", "Only financial investment"],
                correct: 0,
                explanation: "Academic founders often guide technical development while potentially hiring professional managers."
            }
        ],
        3: [
            {
                q: "What is venture capital?",
                options: ["Investment in high-growth potential companies in exchange for equity", "Bank loans for startups", "Government grants", "Personal savings"],
                correct: 0,
                explanation: "VCs invest in startups expecting high returns, providing capital and often guidance."
            },
            {
                q: "What is a pitch deck?",
                options: ["Presentation summarizing business opportunity for potential investors", "Technical documentation", "Legal contract", "Academic paper"],
                correct: 0,
                explanation: "Pitch decks concisely present the problem, solution, market, team, and ask to investors."
            },
            {
                q: "What challenges do academic founders face?",
                options: ["Balancing academic duties, learning business skills, different pace", "No challenges exist", "Only financial challenges", "Academia fully prepares for entrepreneurship"],
                correct: 0,
                explanation: "Academics face learning curves in business, time conflicts, and cultural adjustments."
            },
            {
                q: "What is a cap table?",
                options: ["Spreadsheet showing company ownership percentages among shareholders", "Maximum spending limit", "Office seating chart", "Customer database"],
                correct: 0,
                explanation: "Cap tables track who owns what percentage of the company through various investment rounds."
            }
        ]
    },

    'f-partnership-models': {
        1: [
            {
                q: "What is a joint research project?",
                options: ["Collaboration where academic and industry partners work together on shared goals", "Research done only by university", "Only industry-funded work", "Student internship"],
                correct: 0,
                explanation: "Joint projects combine resources and expertise for mutual benefit."
            },
            {
                q: "What is a research chair or professorship sponsored by industry?",
                options: ["Academic position funded by industry partner, often in strategic area", "Furniture donation", "Company executive teaching", "Government-appointed position"],
                correct: 0,
                explanation: "Sponsored chairs fund faculty positions in areas of industry interest."
            },
            {
                q: "What is an industrial PhD?",
                options: ["PhD program where student works on industry-relevant problem, often employed by company", "PhD in industrial engineering only", "PhD completed faster", "PhD without academic supervision"],
                correct: 0,
                explanation: "Industrial PhDs bridge academia and industry through practical research problems."
            }
        ],
        2: [
            {
                q: "What is a joint laboratory?",
                options: ["Shared facility where academic and industry researchers collaborate", "University lab with company name", "Company lab at university", "Virtual collaboration only"],
                correct: 0,
                explanation: "Joint labs provide dedicated space for sustained industry-academic collaboration."
            },
            {
                q: "What is a consortium in research partnerships?",
                options: ["Group of organizations collaborating on shared research agenda", "Single company project", "Government program only", "Student organization"],
                correct: 0,
                explanation: "Consortia pool resources from multiple partners for larger-scale research efforts."
            },
            {
                q: "What are secondments in research partnerships?",
                options: ["Temporary assignment of staff between partner organizations", "Permanent job transfers", "Secondary research topics", "Budget reallocations"],
                correct: 0,
                explanation: "Secondments enable knowledge exchange by placing staff at partner organizations."
            }
        ],
        3: [
            {
                q: "What is a strategic partnership vs. project-based collaboration?",
                options: ["Strategic: long-term, multi-project relationship; Project: single defined scope", "No practical difference", "Strategic is always better", "Project-based is more formal"],
                correct: 0,
                explanation: "Strategic partnerships involve ongoing commitment; project collaborations are time-limited."
            },
            {
                q: "What governance is needed for joint research structures?",
                options: ["Clear decision-making, IP agreements, conflict resolution, regular review", "No governance needed", "Only financial oversight", "University controls everything"],
                correct: 0,
                explanation: "Good governance ensures clarity on decisions, rights, and issue resolution."
            },
            {
                q: "How should success be measured in research partnerships?",
                options: ["Joint publications, patents, trained people, commercial outcomes, relationship quality", "Only publications count", "Only money matters", "No measurement needed"],
                correct: 0,
                explanation: "Multiple metrics capture different values from partnerships for both sides."
            },
            {
                q: "What is a living lab in industry-academia collaboration?",
                options: ["Real-world environment for testing innovations with actual users", "A biological research lab", "An animal testing facility", "A standard laboratory"],
                correct: 0,
                explanation: "Living labs test innovations in real settings with user participation."
            }
        ]
    },

    'f-communication-industry': {
        1: [
            {
                q: "How does communication with industry differ from academic communication?",
                options: ["More focus on applications, benefits, and business value; less jargon", "No difference exists", "Industry needs more technical detail", "Industry prefers academic jargon"],
                correct: 0,
                explanation: "Industry audiences need practical implications and clear value propositions."
            },
            {
                q: "What is an elevator pitch?",
                options: ["Brief compelling description deliverable in 30-60 seconds", "A sales technique only", "A long presentation", "A written proposal"],
                correct: 0,
                explanation: "Elevator pitches quickly convey key points to capture interest."
            },
            {
                q: "Why is relationship building important in industry engagement?",
                options: ["Trust enables collaboration; decisions involve people, not just ideas", "Relationships don't matter in business", "Only contracts matter", "All industry decisions are purely technical"],
                correct: 0,
                explanation: "Business decisions involve trust; relationships facilitate and sustain collaborations."
            }
        ],
        2: [
            {
                q: "What should a research demo for industry include?",
                options: ["Clear problem statement, solution demonstration, potential applications", "Maximum technical complexity", "Only theoretical background", "Just the final result"],
                correct: 0,
                explanation: "Demos should clearly show what problem is solved and how it benefits the audience."
            },
            {
                q: "How should academics handle business confidentiality?",
                options: ["Respect NDAs, don't share proprietary information, ask what's shareable", "Share everything openly", "Avoid signing any agreements", "Confidentiality doesn't apply to academics"],
                correct: 0,
                explanation: "Respecting confidentiality builds trust and is often legally required."
            },
            {
                q: "What is a white paper in industry context?",
                options: ["In-depth report on topic, technology, or solution for decision-makers", "Any paper on white background", "A government policy document", "An academic publication"],
                correct: 0,
                explanation: "White papers educate and inform while subtly positioning expertise or solutions."
            }
        ],
        3: [
            {
                q: "How should academics present ROI to industry?",
                options: ["Quantify potential benefits, cost savings, revenue opportunities", "Avoid discussing money", "Only discuss academic metrics", "Promise specific financial returns"],
                correct: 0,
                explanation: "Framing value in business terms helps industry understand potential benefits."
            },
            {
                q: "What is stakeholder mapping for industry engagement?",
                options: ["Identifying key decision-makers, influencers, and their interests", "Creating organizational charts", "Technical architecture diagrams", "Customer segmentation"],
                correct: 0,
                explanation: "Understanding who decides and influences helps target engagement efforts."
            },
            {
                q: "How should academics handle different time horizons with industry?",
                options: ["Acknowledge differences, find overlapping interests, be flexible on timelines", "Force academic timelines on industry", "Only do short-term projects", "Avoid long-term commitments"],
                correct: 0,
                explanation: "Bridging different time expectations requires flexibility and finding mutual benefits."
            },
            {
                q: "What makes a compelling case study for industry audiences?",
                options: ["Specific problem, clear solution, measurable results, transferable insights", "Maximum technical detail", "Academic methodology focus", "Theoretical framework emphasis"],
                correct: 0,
                explanation: "Case studies should tell a story of problem-solution-results that resonates."
            }
        ]
    },

    // ============================================================================
    // CORE TIER - Advanced Execution
    // ============================================================================

    'c-large-proposals': {
        1: [
            {
                q: "What characterizes large collaborative research proposals?",
                options: ["Multiple partners, significant budget, complex coordination", "Single researcher projects", "Small seed grants", "Internal university funding"],
                correct: 0,
                explanation: "Large proposals involve multi-partner consortia, substantial budgets, and complex management."
            },
            {
                q: "What is a work package leader's responsibility?",
                options: ["Coordinate activities, ensure deliverables, report progress for their WP", "Manage entire project budget", "Only their own research", "Review all other work packages"],
                correct: 0,
                explanation: "WP leaders manage specific project components including tasks, deliverables, and partner coordination."
            },
            {
                q: "What is the typical size of a large Horizon Europe RIA?",
                options: ["3-20 million euros, 8-20 partners, 3-5 years", "Under 500k euros", "Single institution only", "1 year maximum"],
                correct: 0,
                explanation: "Large RIAs involve substantial multi-year funding and large international consortia."
            }
        ],
        2: [
            {
                q: "What makes proposal writing different at scale?",
                options: ["Need for coherent narrative across many contributors, integration challenges", "Same as small proposals", "Easier because more people help", "Less detail required"],
                correct: 0,
                explanation: "Large proposals require managing many inputs while maintaining coherent story and vision."
            },
            {
                q: "How should partner contributions be balanced in large consortia?",
                options: ["Match effort to expertise and capacity; justify each partner's role", "Give equal shares to everyone", "Coordinator takes majority", "Industry partners get most"],
                correct: 0,
                explanation: "Work distribution should reflect what each partner uniquely contributes."
            },
            {
                q: "What is a proposal coordinator's role during writing?",
                options: ["Lead vision, manage timeline, integrate sections, ensure quality", "Write everything personally", "Only administrative tasks", "Review after others finish"],
                correct: 0,
                explanation: "Coordinators drive proposal development, maintain coherence, and meet deadlines."
            }
        ],
        3: [
            {
                q: "What governance structures suit large project proposals?",
                options: ["Clear decision-making hierarchy, working groups, boards for different functions", "No governance needed", "Single person decides everything", "Purely democratic votes"],
                correct: 0,
                explanation: "Effective governance defines decision authority at different levels and functions."
            },
            {
                q: "How do you ensure proposal coherence across many work packages?",
                options: ["Strong integration WP, clear interfaces, regular alignment meetings", "Let each WP be independent", "Remove overlaps by reducing scope", "Only coordinator integrates at end"],
                correct: 0,
                explanation: "Integration mechanisms ensure WPs connect and contribute to overall objectives."
            },
            {
                q: "What role do NCPs play in large proposal development?",
                options: ["Provide guidance, review drafts, help find partners, explain rules", "Fund the proposals", "Evaluate submitted proposals", "Manage awarded projects"],
                correct: 0,
                explanation: "NCPs offer free support including partner search, proposal review, and call interpretation."
            },
            {
                q: "How should large proposals handle gender and diversity?",
                options: ["Inclusive team composition, gender in research content, equality plans", "Not relevant to large proposals", "Only mention if required", "Addressed only in HR section"],
                correct: 0,
                explanation: "Large proposals should demonstrate commitment to equality in team and research design."
            }
        ]
    },

    'c-erc-applications': {
        1: [
            {
                q: "What is unique about ERC grants compared to collaborative EU funding?",
                options: ["Individual excellence-based, PI-centric, bottom-up topics", "Always requires consortia", "Specific topics defined by EC", "Only for applied research"],
                correct: 0,
                explanation: "ERC funds excellent individual PIs pursuing their own ground-breaking ideas."
            },
            {
                q: "What are the main ERC grant types?",
                options: ["Starting (2-7 yrs post-PhD), Consolidator (7-12), Advanced (track record)", "Small, Medium, Large", "Only one grant type exists", "National and international"],
                correct: 0,
                explanation: "ERC offers career-stage appropriate grants: Starting, Consolidator, Advanced, and Synergy."
            },
            {
                q: "What is the ERC evaluation criterion?",
                options: ["Excellence is the sole criterion (scientific quality and PI track record)", "Impact and implementation equally weighted", "Budget efficiency", "Consortium quality"],
                correct: 0,
                explanation: "ERC evaluates purely on excellence: ground-breaking nature and PI's ability to deliver."
            }
        ],
        2: [
            {
                q: "What makes a strong ERC research proposal?",
                options: ["High-risk/high-gain, novel methodology, paradigm-shifting potential", "Incremental improvements", "Safe predictable outcomes", "Large consortium involvement"],
                correct: 0,
                explanation: "ERC seeks ambitious, potentially transformative research that could open new fields."
            },
            {
                q: "What should an ERC CV/track record demonstrate?",
                options: ["Scientific independence, leadership, publications, achievements appropriate to career stage", "Only publication count", "Teaching experience mainly", "Administrative achievements"],
                correct: 0,
                explanation: "The CV should show scientific leadership and impact appropriate to career stage."
            },
            {
                q: "What is the ERC interview about?",
                options: ["PI presents and defends the project; panel assesses person and science", "Budget justification only", "Technical demonstration", "Team interviews"],
                correct: 0,
                explanation: "Interviews assess both the science and whether the PI can deliver on ambitious goals."
            }
        ],
        3: [
            {
                q: "What is ERC Synergy grant?",
                options: ["2-4 PIs combining complementary expertise for breakthrough questions", "Single PI large grant", "Follow-up funding for existing ERC", "Networking grant"],
                correct: 0,
                explanation: "Synergy funds small groups of PIs whose combined expertise enables tackling major questions."
            },
            {
                q: "What role does the host institution play in ERC?",
                options: ["Provides environment, commits support, legal signatory, manages funds", "No institutional involvement", "Writes the proposal", "Selects the research topic"],
                correct: 0,
                explanation: "Host institutions must provide conducive environment and administrative support."
            },
            {
                q: "What is frontier research in ERC context?",
                options: ["Investigator-driven research at forefront pushing knowledge boundaries", "Applied industrial research", "Research at geographic frontiers", "Incremental science"],
                correct: 0,
                explanation: "Frontier research pushes boundaries of knowledge, regardless of discipline boundaries."
            },
            {
                q: "How competitive is ERC funding?",
                options: ["Around 10-15% success rate, highly competitive, resubmission often needed", "Over 50% success rate", "Guaranteed if qualified", "Only for established professors"],
                correct: 0,
                explanation: "ERC is highly competitive; many excellent researchers apply multiple times."
            }
        ]
    },

    'c-horizon-coordination': {
        1: [
            {
                q: "What does a Horizon Europe project coordinator do?",
                options: ["Manages consortium, liaises with EC, ensures project delivery", "Only writes reports", "Does all the research", "Just signs the contract"],
                correct: 0,
                explanation: "Coordinators lead overall project management and serve as primary EC contact."
            },
            {
                q: "What is the Grant Agreement in EU projects?",
                options: ["Legal contract between EC and beneficiaries defining rights and obligations", "Internal consortium document", "Project proposal", "Publication agreement"],
                correct: 0,
                explanation: "The GA is the binding contract governing the project relationship with EC."
            },
            {
                q: "What is the Project Officer's role?",
                options: ["EC representative monitoring project, providing guidance, reviewing reports", "Project manager at coordinator", "External evaluator", "Financial auditor"],
                correct: 0,
                explanation: "POs are EC staff who monitor projects and serve as funders' primary contact."
            }
        ],
        2: [
            {
                q: "What is the Funding and Tenders Portal?",
                options: ["EC online platform for proposal submission and project management", "Social media for researchers", "Scientific publishing platform", "Job advertisement site"],
                correct: 0,
                explanation: "The portal handles submissions, grant management, reporting, and EC communication."
            },
            {
                q: "What are periodic reviews in Horizon Europe?",
                options: ["Formal assessment of project progress, usually every 18 months", "Daily check-ins", "Only at project end", "Optional meetings"],
                correct: 0,
                explanation: "Periodic reviews assess progress and determine continued funding eligibility."
            },
            {
                q: "What is a project amendment?",
                options: ["Formal change to grant agreement (budget, partners, scope, timing)", "Informal project adjustment", "Publication revision", "Team member change only"],
                correct: 0,
                explanation: "Amendments formalize significant changes requiring EC approval."
            }
        ],
        3: [
            {
                q: "What coordination challenges are common in EU projects?",
                options: ["Cultural differences, time zones, partner reliability, communication gaps", "No challenges with EU support", "Only financial issues", "Language barriers only"],
                correct: 0,
                explanation: "Coordinating international partners involves cultural, practical, and communication challenges."
            },
            {
                q: "How should consortium conflicts be handled?",
                options: ["Follow consortium agreement escalation, involve EC if needed", "Let issues resolve naturally", "Remove problem partners immediately", "Avoid addressing conflicts"],
                correct: 0,
                explanation: "Clear processes and early intervention prevent conflict escalation."
            },
            {
                q: "What is ethical monitoring in EU projects?",
                options: ["Ongoing compliance with ethics requirements and approvals", "Financial auditing", "Scientific peer review", "Environmental assessment"],
                correct: 0,
                explanation: "Projects must maintain ethics compliance throughout, with EC monitoring."
            },
            {
                q: "How should project risks be managed during execution?",
                options: ["Regular monitoring, updated risk register, proactive mitigation, transparent reporting", "Ignore until problems occur", "Only report positive progress", "Hide risks from EC"],
                correct: 0,
                explanation: "Ongoing risk management and transparent communication prevent major issues."
            }
        ]
    },

    'c-industry-partnerships': {
        1: [
            {
                q: "What characterizes strategic industry partnerships vs. transactional relationships?",
                options: ["Long-term, multi-project, mutual investment, shared vision", "Single project only", "Arm's length contract", "One-time funding"],
                correct: 0,
                explanation: "Strategic partnerships involve ongoing commitment and shared long-term interests."
            },
            {
                q: "What is a sponsored research chair?",
                options: ["Academic position funded by industry partner in area of mutual interest", "University committee leadership", "Company board seat", "Teaching award"],
                correct: 0,
                explanation: "Sponsored chairs provide long-term funding for faculty positions in strategic areas."
            },
            {
                q: "What value do industry partnerships provide to universities?",
                options: ["Funding, real-world problems, student opportunities, impact pathways", "Only funding matters", "No real value", "Just publicity"],
                correct: 0,
                explanation: "Partnerships bring diverse benefits including funding, relevance, and impact."
            }
        ],
        2: [
            {
                q: "How can universities manage conflicts of interest in industry partnerships?",
                options: ["Disclosure policies, management plans, oversight committees", "Avoid all industry contact", "No management needed", "Industry decides policy"],
                correct: 0,
                explanation: "Transparent policies and oversight manage potential conflicts while enabling collaboration."
            },
            {
                q: "What is a joint industry-academic research center?",
                options: ["Dedicated facility for long-term collaboration on shared research agenda", "Company office at university", "University lab with sponsor name", "Virtual collaboration only"],
                correct: 0,
                explanation: "Joint centers provide sustained collaboration infrastructure with shared governance."
            },
            {
                q: "How should research agenda be set in industry partnerships?",
                options: ["Balance mutual interests, protect academic freedom, define boundaries clearly", "Industry dictates all topics", "University ignores partner input", "No planning needed"],
                correct: 0,
                explanation: "Successful partnerships balance partner interests while protecting academic autonomy."
            }
        ],
        3: [
            {
                q: "What governance models work for major industry partnerships?",
                options: ["Joint steering committees, clear IP agreements, defined decision processes", "No formal governance", "University controls everything", "Industry controls everything"],
                correct: 0,
                explanation: "Clear governance structures with balanced representation enable effective partnerships."
            },
            {
                q: "How can partnerships sustain through industry changes (acquisitions, strategy shifts)?",
                options: ["Relationship diversity, contractual protections, adaptability, strong personal ties", "Depend on single company contact", "Assume stability", "Only short-term commitments"],
                correct: 0,
                explanation: "Resilient partnerships have multiple relationships and flexible arrangements."
            },
            {
                q: "What metrics should track partnership success?",
                options: ["Joint outputs, funding, student placement, relationship health, strategic value", "Only money received", "Publication count only", "No measurement needed"],
                correct: 0,
                explanation: "Multiple metrics capture different partnership values for both parties."
            },
            {
                q: "How should academics maintain independence in major industry partnerships?",
                options: ["Clear agreements on publication, topic selection, and academic freedom protections", "Accept all industry requirements", "Avoid industry completely", "Don't discuss independence"],
                correct: 0,
                explanation: "Explicit agreements protect academic freedom while enabling productive collaboration."
            }
        ]
    },

    'c-policy-engagement': {
        1: [
            {
                q: "Why should researchers engage with policy makers?",
                options: ["Research can inform evidence-based decisions affecting society", "Only for additional funding", "Required by all grants", "Personal career advancement only"],
                correct: 0,
                explanation: "Research-policy engagement enables scientific evidence to benefit society."
            },
            {
                q: "What is science-policy interface?",
                options: ["Interaction between scientific knowledge production and policy making", "A computer interface", "Science museum exhibits", "Policy for science funding"],
                correct: 0,
                explanation: "The science-policy interface is where research evidence meets decision-making processes."
            },
            {
                q: "What is a policy brief?",
                options: ["Short document translating research findings for policy audience", "Detailed research paper", "Legal document", "News article"],
                correct: 0,
                explanation: "Policy briefs communicate research implications concisely for decision-makers."
            }
        ],
        2: [
            {
                q: "How do policy timelines differ from research timelines?",
                options: ["Policy often needs faster responses; research takes time for rigor", "Same timelines", "Research is always faster", "Policy is always slower"],
                correct: 0,
                explanation: "Policy windows may open suddenly; researchers must be ready with relevant evidence."
            },
            {
                q: "What is evidence synthesis for policy?",
                options: ["Combining multiple studies to provide comprehensive evidence on a question", "Single study findings", "Personal expert opinion", "Political positioning"],
                correct: 0,
                explanation: "Synthesis aggregates evidence to provide robust basis for policy decisions."
            },
            {
                q: "How should research uncertainty be communicated to policy makers?",
                options: ["Clearly explain confidence levels, limitations, and what is/isn't known", "Never mention uncertainty", "Only present certain findings", "Use technical statistical terms"],
                correct: 0,
                explanation: "Honest communication of uncertainty helps policy makers use evidence appropriately."
            }
        ],
        3: [
            {
                q: "What is science diplomacy?",
                options: ["Using science cooperation to build international relations and address global challenges", "Diplomatic immunity for scientists", "Science funding negotiations", "International student exchange"],
                correct: 0,
                explanation: "Science diplomacy uses research collaboration to foster international relations."
            },
            {
                q: "How can researchers access policy processes?",
                options: ["Advisory committees, consultations, briefings, secondments, networks", "Only through elected office", "Cannot access policy processes", "Through media only"],
                correct: 0,
                explanation: "Multiple channels exist for researchers to engage with policy processes."
            },
            {
                q: "What is the precautionary principle in policy?",
                options: ["Taking protective action despite scientific uncertainty when risks are high", "Waiting for complete certainty", "Ignoring potential risks", "Maximum economic growth"],
                correct: 0,
                explanation: "The precautionary principle allows protective action even without full scientific certainty."
            },
            {
                q: "What challenges exist in research-policy engagement?",
                options: ["Different languages, timelines, incentives; politicization of science", "No challenges exist", "Researchers not interested", "Policy makers reject all science"],
                correct: 0,
                explanation: "Bridging research and policy requires navigating different cultures and pressures."
            }
        ]
    },

    'c-media-communication': {
        1: [
            {
                q: "Why is science communication important?",
                options: ["Informs public, builds support for research, enables informed decisions", "Only for personal fame", "Not important for researchers", "Required only by some grants"],
                correct: 0,
                explanation: "Effective science communication benefits society and supports the research enterprise."
            },
            {
                q: "What is a press release?",
                options: ["Brief document announcing research findings to journalists", "Academic journal article", "Internal memo", "Social media post"],
                correct: 0,
                explanation: "Press releases communicate newsworthy research to media outlets."
            },
            {
                q: "What makes research newsworthy?",
                options: ["Novelty, relevance to public, timeliness, human interest, surprise", "All research is equally newsworthy", "Only controversial findings", "High publication impact factor"],
                correct: 0,
                explanation: "Media value findings that are new, relevant, timely, or have compelling human elements."
            }
        ],
        2: [
            {
                q: "How should scientists communicate with journalists?",
                options: ["Clear language, key messages, quotes, availability, accuracy", "Maximum technical detail", "Refuse all media contact", "Control the final story"],
                correct: 0,
                explanation: "Effective media engagement requires clarity, accessibility, and cooperation."
            },
            {
                q: "What is the role of university press offices?",
                options: ["Connect researchers with media, craft messages, manage communications", "Write research papers", "Fund research projects", "Evaluate research quality"],
                correct: 0,
                explanation: "Press offices help researchers communicate effectively and manage media relations."
            },
            {
                q: "How should scientists handle media misrepresentation?",
                options: ["Request corrections, provide clarification, learn for future interactions", "Refuse all future media contact", "Attack the journalist publicly", "Ignore the problem"],
                correct: 0,
                explanation: "Professional response and correction helps maintain accuracy and relationships."
            }
        ],
        3: [
            {
                q: "What is public engagement beyond media?",
                options: ["Direct interaction: public lectures, festivals, citizen science, dialogues", "Only media interviews", "Publishing open access", "Teaching students"],
                correct: 0,
                explanation: "Public engagement involves direct two-way interaction with various audiences."
            },
            {
                q: "How should scientists handle controversial or politicized topics?",
                options: ["Stick to evidence, acknowledge uncertainty, separate science from policy preferences", "Avoid controversial topics", "Advocate personal political views", "Only speak to sympathetic audiences"],
                correct: 0,
                explanation: "Responsible communication distinguishes scientific findings from policy positions."
            },
            {
                q: "What is science communication training?",
                options: ["Developing skills to explain research clearly to non-specialist audiences", "Academic writing courses", "Grant writing workshops", "Teaching methodology"],
                correct: 0,
                explanation: "Training helps researchers communicate more effectively with public audiences."
            },
            {
                q: "What role does social media play in science communication?",
                options: ["Direct audience access, real-time engagement, amplification, risks of misinformation", "Only for personal use", "Inappropriate for scientists", "Replaced all traditional media"],
                correct: 0,
                explanation: "Social media offers opportunities and challenges for science communication."
            }
        ]
    },

    'c-interdisciplinary': {
        1: [
            {
                q: "What is interdisciplinary research?",
                options: ["Research integrating methods and concepts from multiple disciplines", "Research within one discipline", "Research across multiple universities", "Applied vs. basic research"],
                correct: 0,
                explanation: "Interdisciplinary research combines different fields to address complex questions."
            },
            {
                q: "Why is interdisciplinary research increasingly important?",
                options: ["Complex real-world problems don't respect discipline boundaries", "Funding agencies require it", "Single disciplines have no value", "It's fashionable"],
                correct: 0,
                explanation: "Many important challenges require expertise that spans traditional disciplines."
            },
            {
                q: "What is the difference between multi- and interdisciplinary?",
                options: ["Multi: parallel contributions; Inter: integrated approaches", "Same meaning", "Multi is better", "Inter is more specialized"],
                correct: 0,
                explanation: "Interdisciplinary work integrates perspectives; multidisciplinary juxtaposes them."
            }
        ],
        2: [
            {
                q: "What challenges arise in interdisciplinary research?",
                options: ["Different vocabularies, methods, standards, career implications", "No significant challenges", "Only communication issues", "Challenges only with humanities"],
                correct: 0,
                explanation: "Crossing disciplines involves navigating different cultures, languages, and expectations."
            },
            {
                q: "How can interdisciplinary teams be built effectively?",
                options: ["Shared problem, mutual respect, time for learning, clear roles", "Randomly assign people", "Force collaboration", "Keep disciplines separate"],
                correct: 0,
                explanation: "Effective teams need shared purpose and investment in understanding each other."
            },
            {
                q: "What is transdisciplinary research?",
                options: ["Includes non-academic stakeholders in co-creating knowledge", "Research only by non-academics", "Very theoretical research", "Research that transfers between universities"],
                correct: 0,
                explanation: "Transdisciplinary research involves stakeholders beyond academia in the research process."
            }
        ],
        3: [
            {
                q: "How should interdisciplinary work be evaluated?",
                options: ["Appropriate criteria recognizing integration; avoid purely disciplinary standards", "Same standards as single disciplines", "No evaluation possible", "Only by non-experts"],
                correct: 0,
                explanation: "Fair evaluation requires criteria appropriate to interdisciplinary contributions."
            },
            {
                q: "What publication challenges exist for interdisciplinary research?",
                options: ["Finding appropriate venues, discipline-focused reviewers, identity issues", "No challenges", "More publication opportunities", "Always easier to publish"],
                correct: 0,
                explanation: "Interdisciplinary work may not fit neatly into discipline-based journals."
            },
            {
                q: "How can early-career researchers navigate interdisciplinary work?",
                options: ["Build disciplinary foundation, seek mentors, document contributions, network", "Avoid interdisciplinary research early in career", "Only do interdisciplinary work", "Don't worry about career implications"],
                correct: 0,
                explanation: "Strategic approach balances interdisciplinary opportunities with career development."
            },
            {
                q: "What is convergence research?",
                options: ["Deep integration of disciplines to address fundamental challenges", "Research that converges to one answer", "Reaching consensus among researchers", "Research with convergent methods"],
                correct: 0,
                explanation: "Convergence research (NSF term) emphasizes deep integration for complex problems."
            }
        ]
    },

    'c-international-networks': {
        1: [
            {
                q: "What are research networks?",
                options: ["Organized groups of researchers collaborating around shared interests", "Computer networks for research", "Publication distribution systems", "Funding organizations"],
                correct: 0,
                explanation: "Research networks connect researchers for collaboration, exchange, and shared activities."
            },
            {
                q: "What benefits do international networks provide?",
                options: ["Collaboration, mobility, resource sharing, visibility, funding opportunities", "Only travel funding", "No significant benefits", "Duplicate effort"],
                correct: 0,
                explanation: "Networks provide multiple benefits for research and career development."
            },
            {
                q: "What is COST Action in European research?",
                options: ["Funded network for coordination, meetings, and mobility around research topic", "A funding agency", "A research project", "Cost reduction program"],
                correct: 0,
                explanation: "COST Actions fund networking activities (not research) to connect European researchers."
            }
        ],
        2: [
            {
                q: "How can researchers build international networks?",
                options: ["Conferences, collaborations, visits, joint publications, active participation", "Wait to be invited", "Only online interaction", "Avoid international contact"],
                correct: 0,
                explanation: "Active engagement in international activities builds networks over time."
            },
            {
                q: "What is the role of learned societies in networking?",
                options: ["Provide community, conferences, journals, advocacy for disciplines", "Only publish journals", "Government bodies", "Funding agencies"],
                correct: 0,
                explanation: "Societies connect researchers and support their disciplines through various activities."
            },
            {
                q: "How can early-career researchers access established networks?",
                options: ["Mentors, conferences, targeted outreach, junior programs, active contribution", "Networks are only for seniors", "Wait until promoted", "Don't try to join"],
                correct: 0,
                explanation: "Multiple pathways exist for early-career researchers to engage in networks."
            }
        ],
        3: [
            {
                q: "What is network leadership?",
                options: ["Organizing, facilitating, and developing research communities", "Having most publications", "Being senior member", "Largest research budget"],
                correct: 0,
                explanation: "Network leadership involves building and nurturing research communities."
            },
            {
                q: "How do networks create research value?",
                options: ["Collaboration opportunities, knowledge exchange, resource sharing, critical mass", "Only social benefits", "No research value", "Individual benefits only"],
                correct: 0,
                explanation: "Networks enable research that individuals couldn't accomplish alone."
            },
            {
                q: "What challenges exist in international network participation?",
                options: ["Time, travel, cultural differences, maintaining engagement", "No challenges", "Only funding limitations", "Language barriers only"],
                correct: 0,
                explanation: "Active network participation requires investment and managing practical challenges."
            },
            {
                q: "What is a research alliance or partnership?",
                options: ["Formal agreement between institutions for sustained collaboration", "Informal collaboration", "Single project partnership", "Same as a network"],
                correct: 0,
                explanation: "Alliances formalize institutional commitments for long-term strategic collaboration."
            }
        ]
    },

    'c-talent-development': {
        1: [
            {
                q: "What is a research group leader's role in talent development?",
                options: ["Develop researchers' skills, careers, and independence", "Only produce publications", "Just manage the budget", "Minimize time on people"],
                correct: 0,
                explanation: "Effective leaders invest in developing the next generation of researchers."
            },
            {
                q: "What career stages exist in academic research?",
                options: ["PhD, postdoc, early faculty, established faculty, senior/leadership", "Only professor or student", "Same as industry careers", "No career progression exists"],
                correct: 0,
                explanation: "Academic careers progress through stages with different challenges and opportunities."
            },
            {
                q: "What is succession planning in research groups?",
                options: ["Preparing for leadership transitions and continuity", "Planning retirement parties", "Academic publishing schedule", "Budget planning"],
                correct: 0,
                explanation: "Succession planning ensures research groups can continue beyond current leadership."
            }
        ],
        2: [
            {
                q: "How should career development discussions be structured?",
                options: ["Regular conversations about goals, skills, opportunities, feedback", "Only during annual reviews", "No structured approach needed", "Only when problems arise"],
                correct: 0,
                explanation: "Ongoing career discussions help researchers develop and make good decisions."
            },
            {
                q: "What is the difference between supervision and mentoring?",
                options: ["Supervision: project oversight; Mentoring: broader career guidance", "Same thing", "Mentoring is more formal", "Supervision is more personal"],
                correct: 0,
                explanation: "Supervision focuses on project work; mentoring addresses broader development."
            },
            {
                q: "How can research groups support diverse career paths?",
                options: ["Acknowledge non-academic options, develop transferable skills, provide exposure", "Only support academic careers", "Discourage leaving academia", "Don't discuss alternatives"],
                correct: 0,
                explanation: "Good groups prepare researchers for various career paths inside and outside academia."
            }
        ],
        3: [
            {
                q: "What makes research groups attractive to talent?",
                options: ["Reputation, mentorship quality, resources, culture, career outcomes", "Only salary", "Only famous PI", "Location only"],
                correct: 0,
                explanation: "Talented researchers consider multiple factors when choosing where to work."
            },
            {
                q: "How should international talent be recruited and supported?",
                options: ["Active recruitment, visa support, integration assistance, inclusive culture", "Wait for applications", "No special support needed", "Hire only local researchers"],
                correct: 0,
                explanation: "Attracting international talent requires active effort and support systems."
            },
            {
                q: "What is researcher development framework?",
                options: ["Structured approach to developing researcher competencies and career", "Framework for building buildings", "Grant application structure", "Publication guidelines"],
                correct: 0,
                explanation: "Development frameworks guide holistic researcher growth across competency areas."
            },
            {
                q: "How can PIs create independent researchers?",
                options: ["Graduated responsibility, own projects, external visibility, network access", "Keep researchers dependent", "Assign only routine tasks", "Discourage independent ideas"],
                correct: 0,
                explanation: "Good mentors progressively develop independence and external recognition."
            }
        ]
    },

    'c-infrastructure': {
        1: [
            {
                q: "What is research infrastructure?",
                options: ["Facilities, equipment, and resources needed to conduct research", "Building maintenance", "Administrative systems", "Teaching facilities"],
                correct: 0,
                explanation: "Research infrastructure includes labs, equipment, computing, data, and shared resources."
            },
            {
                q: "Why is infrastructure important for research competitiveness?",
                options: ["Enables cutting-edge research that wouldn't otherwise be possible", "Only for large projects", "Not important for competitiveness", "Only universities need infrastructure"],
                correct: 0,
                explanation: "State-of-the-art infrastructure enables world-class research outcomes."
            },
            {
                q: "What are shared research facilities?",
                options: ["Equipment or resources accessible to multiple research groups", "Personal lab equipment", "Teaching labs only", "Industry-owned facilities"],
                correct: 0,
                explanation: "Shared facilities maximize utilization and access to expensive equipment."
            }
        ],
        2: [
            {
                q: "What is HPC (High-Performance Computing) infrastructure?",
                options: ["Large-scale computing systems for complex calculations", "Personal computers", "Cloud storage only", "Office productivity software"],
                correct: 0,
                explanation: "HPC provides computational power for simulations, data analysis, and AI applications."
            },
            {
                q: "What is EOSC (European Open Science Cloud)?",
                options: ["European research data and services infrastructure", "Weather forecasting system", "Social media platform", "E-learning system"],
                correct: 0,
                explanation: "EOSC provides federated research data infrastructure across Europe."
            },
            {
                q: "How should infrastructure investments be prioritized?",
                options: ["Strategic alignment, multi-user benefit, sustainability, research impact", "Newest technology always", "Cheapest option only", "Random selection"],
                correct: 0,
                explanation: "Infrastructure decisions should balance strategic value, sustainability, and broad benefit."
            }
        ],
        3: [
            {
                q: "What is a research infrastructure consortium?",
                options: ["Organizations jointly operating major research facility or resource", "Building construction consortium", "Research project team", "Equipment manufacturer"],
                correct: 0,
                explanation: "Infrastructure consortia pool resources to create and operate major facilities."
            },
            {
                q: "How can infrastructure be sustained long-term?",
                options: ["Diverse funding, user fees, strategic planning, partnerships", "Grant funding only", "No sustainability needed", "Replace everything regularly"],
                correct: 0,
                explanation: "Sustainable infrastructure requires diversified support and strategic planning."
            },
            {
                q: "What is ESFRI?",
                options: ["European forum identifying and developing major research infrastructures", "European Science Foundation RI", "Educational standards organization", "Equipment manufacturing body"],
                correct: 0,
                explanation: "ESFRI coordinates European research infrastructure planning and roadmaps."
            },
            {
                q: "How should access to infrastructure be managed?",
                options: ["Fair access policies, merit-based allocation, user support", "First come first served only", "Only for those who funded it", "No management needed"],
                correct: 0,
                explanation: "Fair access mechanisms maximize infrastructure value and scientific output."
            }
        ]
    },

    'c-sustainability': {
        1: [
            {
                q: "What is financial sustainability for research groups?",
                options: ["Consistent funding flow to support ongoing research activities", "Single large grant", "Only university budget", "No financial concerns"],
                correct: 0,
                explanation: "Sustainable groups maintain funding across project cycles to retain people and capabilities."
            },
            {
                q: "Why is funding diversification important?",
                options: ["Reduces risk from single source dependency", "Not important if you have large grants", "All funding is the same", "Only one funder is better"],
                correct: 0,
                explanation: "Diverse funding protects against changes in any single source."
            },
            {
                q: "What are typical academic funding sources?",
                options: ["Grants, contracts, institutional, philanthropy, commercial", "Government grants only", "Industry only", "Student fees only"],
                correct: 0,
                explanation: "Research groups can access multiple funding types with different characteristics."
            }
        ],
        2: [
            {
                q: "How should funding pipeline be managed?",
                options: ["Continuous proposals, track success rates, anticipate renewals, time applications", "Submit many proposals randomly", "Wait for funding to run out", "Rely on one large grant"],
                correct: 0,
                explanation: "Strategic pipeline management ensures continuous funding despite grant cycles."
            },
            {
                q: "What is reserve funding?",
                options: ["Funds set aside for gaps between grants or unexpected needs", "Emergency building fund", "Personal savings", "Unused grant money"],
                correct: 0,
                explanation: "Reserves provide bridge funding and flexibility during transitions."
            },
            {
                q: "How can overhead recovery support sustainability?",
                options: ["Some institutions return overhead for group sustainability", "Overhead goes only to administration", "Overhead doesn't exist", "Researchers keep all overhead"],
                correct: 0,
                explanation: "Overhead recovery mechanisms vary; some support research group operations."
            }
        ],
        3: [
            {
                q: "What is a research group business model?",
                options: ["How the group generates and allocates resources sustainably", "Only for startup companies", "University accounting system", "Grant application structure"],
                correct: 0,
                explanation: "Successful groups think strategically about funding, costs, and sustainability."
            },
            {
                q: "How can institutional support be leveraged for sustainability?",
                options: ["Bridge funding, matched positions, infrastructure, startup packages", "No institutional support available", "Only for senior faculty", "Avoid institutional involvement"],
                correct: 0,
                explanation: "Institutions provide various mechanisms supporting research sustainability."
            },
            {
                q: "What role does reputation play in funding sustainability?",
                options: ["Track record attracts funding; success breeds success", "Reputation doesn't matter for funding", "Only politics determines funding", "Quality is irrelevant"],
                correct: 0,
                explanation: "Research reputation helps secure continued funding through demonstrated competence."
            },
            {
                q: "How should team size be managed for sustainability?",
                options: ["Balance ambition with funding reality; avoid over-expansion", "Maximize team size always", "Keep smallest possible team", "Size doesn't affect sustainability"],
                correct: 0,
                explanation: "Sustainable groups match commitments to funding while maintaining flexibility."
            }
        ]
    },

    'c-strategic-planning': {
        1: [
            {
                q: "What is strategic research planning?",
                options: ["Developing long-term vision and direction for research activities", "Daily task planning", "Grant application writing", "Administrative planning only"],
                correct: 0,
                explanation: "Strategic planning sets direction, priorities, and positioning for research."
            },
            {
                q: "Why is strategic planning important for researchers?",
                options: ["Provides direction, helps prioritize, attracts resources", "Only for administrators", "Research can't be planned", "Limits creativity"],
                correct: 0,
                explanation: "Strategic thinking helps researchers make coherent decisions and communicate vision."
            },
            {
                q: "What elements should a research strategy include?",
                options: ["Vision, research themes, capabilities, partnerships, resources", "Only publications list", "Budget numbers only", "Past achievements only"],
                correct: 0,
                explanation: "Strategy covers where you're going, how you'll get there, and what you need."
            }
        ],
        2: [
            {
                q: "How should research priorities be set?",
                options: ["Balance scientific opportunity, impact potential, capabilities, resources", "Follow funding trends only", "Do whatever interests you", "Only what industry wants"],
                correct: 0,
                explanation: "Effective prioritization considers multiple factors including opportunity and capability."
            },
            {
                q: "What is positioning in research strategy?",
                options: ["Defining your unique strengths and place in the research landscape", "Physical location", "Ranking position only", "Job title"],
                correct: 0,
                explanation: "Positioning articulates what makes your research distinctive and competitive."
            },
            {
                q: "How often should research strategy be reviewed?",
                options: ["Regularly (annually) plus when circumstances significantly change", "Only when forced", "Never change strategy", "Daily reviews"],
                correct: 0,
                explanation: "Regular review ensures strategy remains relevant while allowing adaptation."
            }
        ],
        3: [
            {
                q: "How can researchers anticipate future directions?",
                options: ["Monitor trends, engage with community, attend conferences, read broadly", "Prediction is impossible", "Follow others only", "Ignore future, focus on present"],
                correct: 0,
                explanation: "Active engagement helps researchers identify emerging opportunities and challenges."
            },
            {
                q: "What is research portfolio management?",
                options: ["Balancing research activities across risk, timeframe, and type", "Managing investment portfolio", "Publication management", "Student portfolio review"],
                correct: 0,
                explanation: "Portfolio thinking balances safe and risky, short and long-term research investments."
            },
            {
                q: "How should strategic planning involve the team?",
                options: ["Engage team in developing and owning the strategy", "Top-down only", "Don't involve team", "Delegate entirely to team"],
                correct: 0,
                explanation: "Team involvement builds commitment and brings diverse perspectives to strategy."
            },
            {
                q: "How does individual strategy connect to institutional strategy?",
                options: ["Align where beneficial, maintain researcher autonomy, seek synergies", "Must follow institutional strategy exactly", "Ignore institutional strategy", "Conflict is inevitable"],
                correct: 0,
                explanation: "Alignment with institutional priorities can provide support while maintaining autonomy."
            }
        ]
    },

    // ============================================================================
    // SPECIALIZATION TIER - Funding Instruments & Research Domains
    // ============================================================================

    // --- Funding Instruments ---

    's-erc-grants': {
        1: [
            {
                q: "What are the three main individual ERC grant types?",
                options: ["Starting Grant, Consolidator Grant, Advanced Grant", "Small, Medium, Large", "Bronze, Silver, Gold", "Junior, Senior, Principal"],
                correct: 0,
                explanation: "ERC offers career-stage grants: Starting (2-7 yrs post-PhD), Consolidator (7-12), Advanced (established leaders)."
            },
            {
                q: "What is the typical budget for an ERC Starting Grant?",
                options: ["Up to 1.5 million euros over 5 years", "Up to 100k euros", "Over 10 million euros", "Unlimited budget"],
                correct: 0,
                explanation: "ERC Starting Grants provide up to €1.5M (with possible €1M top-up for equipment/access costs)."
            },
            {
                q: "Can ERC grants include team members?",
                options: ["Yes, PI can hire team members with the grant funding", "No, only PI can be funded", "Only students allowed", "Only industry partners"],
                correct: 0,
                explanation: "ERC PIs can build teams, hiring postdocs, students, and other staff with grant funding."
            }
        ],
        2: [
            {
                q: "What is the 'extended' eligibility window for ERC?",
                options: ["Career breaks (parental leave, illness) extend the post-PhD window", "No extensions allowed", "Extensions only for women", "Extensions require special application"],
                correct: 0,
                explanation: "Eligible career breaks extend the post-PhD window, promoting equality and flexibility."
            },
            {
                q: "What makes ERC evaluation different from Horizon collaborative projects?",
                options: ["Pure excellence focus, no impact/implementation sections, panel-based review", "Same evaluation criteria", "Only budget matters", "No interviews"],
                correct: 0,
                explanation: "ERC evaluates solely on scientific excellence without separate impact/implementation scores."
            },
            {
                q: "What is an ERC panel?",
                options: ["Expert committee reviewing proposals in a specific research domain", "Administrative body", "Financial audit committee", "University committee"],
                correct: 0,
                explanation: "Disciplinary panels of experts evaluate proposals and conduct interviews."
            }
        ],
        3: [
            {
                q: "What is ERC Synergy grant?",
                options: ["2-4 PIs combining expertise to tackle questions neither could alone", "Larger individual grant", "Grant synergy with industry", "Networking grant"],
                correct: 0,
                explanation: "Synergy funds small PI groups whose combined strengths enable exceptional research."
            },
            {
                q: "What is ERC Proof of Concept?",
                options: ["Additional funding for ERC holders to explore commercial potential", "Initial ERC application", "Concept testing before applying", "Peer review process"],
                correct: 0,
                explanation: "PoC grants help current/recent ERC holders bridge research to innovation."
            },
            {
                q: "What happens at the ERC interview stage?",
                options: ["PI presents project and answers panel questions; assessed on vision and capability", "Budget negotiation", "Administrative formalities", "Team interviews"],
                correct: 0,
                explanation: "Interviews assess whether the PI can deliver on the ambitious research vision."
            },
            {
                q: "What is the role of the host institution in ERC?",
                options: ["Provides environment, support commitment, manages funds, legal signatory", "No role required", "Writes the proposal", "Determines research topic"],
                correct: 0,
                explanation: "Institutions must commit to supporting the PI and providing necessary environment."
            }
        ]
    },

    's-horizon-ria': {
        1: [
            {
                q: "What is a Research and Innovation Action (RIA)?",
                options: ["Collaborative project for research activities, 100% EU funding", "Individual grant", "Infrastructure funding", "Training program"],
                correct: 0,
                explanation: "RIAs are collaborative research projects with full EU funding for primarily research work."
            },
            {
                q: "What is the typical RIA consortium size?",
                options: ["5-15 partners from multiple EU countries", "Single institution", "100+ partners", "Only 2 partners"],
                correct: 0,
                explanation: "RIAs typically involve multiple partners providing complementary expertise."
            },
            {
                q: "What funding rate applies to RIA participants?",
                options: ["100% of eligible costs", "50% of costs", "25% of costs", "Varies by country"],
                correct: 0,
                explanation: "RIAs receive 100% EU funding for eligible costs plus 25% indirect costs."
            }
        ],
        2: [
            {
                q: "What is the difference between RIA and Innovation Action (IA)?",
                options: ["RIA: research-focused, 100% funding; IA: closer to market, 70% funding", "No difference", "IA is larger budget", "RIA is only for universities"],
                correct: 0,
                explanation: "RIAs focus on research (100% funded); IAs focus on innovation activities (70% funded)."
            },
            {
                q: "What are Horizon Europe Clusters?",
                options: ["Six thematic areas addressing global challenges (health, digital, climate, etc.)", "Research computing clusters", "Partner groupings", "Regional networks"],
                correct: 0,
                explanation: "Pillar 2 clusters organize calls around major challenges: health, culture, security, digital, climate, food."
            },
            {
                q: "What is a work programme in Horizon Europe?",
                options: ["Document defining specific calls, topics, budgets, and deadlines", "Project management plan", "Individual researcher's plan", "University strategic plan"],
                correct: 0,
                explanation: "Work programmes detail the funding opportunities available for each period."
            }
        ],
        3: [
            {
                q: "What is a two-stage proposal process?",
                options: ["Short outline first, full proposal only if invited for stage 2", "Two separate projects", "Double review process", "Two-year funding"],
                correct: 0,
                explanation: "Two-stage calls reduce effort by filtering with shorter stage-1 proposals."
            },
            {
                q: "What are 'expected outcomes' in work programme topics?",
                options: ["Concrete results projects should deliver, used to assess impact", "Budget categories", "Evaluation scores", "Administrative requirements"],
                correct: 0,
                explanation: "Expected outcomes define what the topic aims to achieve; proposals show how they'll contribute."
            },
            {
                q: "What is Technology Readiness Level (TRL) in RIA context?",
                options: ["Scale (1-9) indicating technology maturity; RIAs typically target TRL 3-5", "Team rating level", "Proposal quality score", "Funding level"],
                correct: 0,
                explanation: "RIAs often advance technologies from early TRL (research) toward higher TRL (demonstration)."
            },
            {
                q: "What is an Associated Country in Horizon Europe?",
                options: ["Non-EU country with agreement to participate in the programme", "Country joining a consortium", "Observer status only", "Country hosting coordinator"],
                correct: 0,
                explanation: "Associated countries (like Norway, Switzerland) can participate similarly to EU members."
            }
        ]
    },

    's-msca': {
        1: [
            {
                q: "What is Marie Sklodowska-Curie Actions (MSCA)?",
                options: ["EU programme funding researcher training and mobility", "A specific research grant", "A university", "A scientific award"],
                correct: 0,
                explanation: "MSCA supports research careers through fellowships, networks, and exchanges."
            },
            {
                q: "What is an MSCA Postdoctoral Fellowship?",
                options: ["Funding for experienced researchers to work abroad (12-24 months)", "PhD scholarship", "Permanent position", "Conference travel grant"],
                correct: 0,
                explanation: "Postdoctoral Fellowships support researchers in international mobility and career development."
            },
            {
                q: "What is the MSCA mobility requirement?",
                options: ["Must move to a country different from recent residence/work", "Stay in same country", "No mobility required", "Only within EU"],
                correct: 0,
                explanation: "MSCA requires international mobility - moving to a different country than recent activity."
            }
        ],
        2: [
            {
                q: "What is MSCA Doctoral Networks?",
                options: ["Multi-partner programmes training PhD students with international exposure", "Single university PhD", "Postdoc programme", "Research network only"],
                correct: 0,
                explanation: "Doctoral Networks train PhD students through international collaboration and secondments."
            },
            {
                q: "What is MSCA Staff Exchanges (SE)?",
                options: ["Programme exchanging staff between academic and non-academic organizations", "Student exchange only", "Equipment sharing", "Data exchange"],
                correct: 0,
                explanation: "SE supports secondments between academic and non-academic sectors across borders."
            },
            {
                q: "What training elements must MSCA projects include?",
                options: ["Research skills, transferable skills, career development planning", "Only research training", "No training required", "Teaching certification only"],
                correct: 0,
                explanation: "MSCA emphasizes comprehensive training including transferable skills and career planning."
            }
        ],
        3: [
            {
                q: "What is COFUND in MSCA?",
                options: ["Co-funding of regional/national/international fellowship programmes", "Joint research funding", "Industry co-financing", "Conference funding"],
                correct: 0,
                explanation: "COFUND co-finances doctoral and postdoctoral programmes run by organizations."
            },
            {
                q: "What are the evaluation criteria for MSCA Postdoctoral Fellowships?",
                options: ["Excellence (research, candidate), Impact (career, dissemination), Implementation", "Only research quality", "Budget efficiency", "Team composition"],
                correct: 0,
                explanation: "MSCA evaluates research quality, candidate profile, career impact, and feasibility."
            },
            {
                q: "What is a secondment in MSCA Doctoral Networks?",
                options: ["Temporary placement at partner organization as part of training", "Main employment", "Final thesis defense", "First recruitment interview"],
                correct: 0,
                explanation: "Secondments provide exposure to different research environments and sectors."
            },
            {
                q: "What non-academic sectors can participate in MSCA?",
                options: ["Industry, NGOs, government, cultural institutions, hospitals", "Only companies", "Only universities", "No non-academic participation"],
                correct: 0,
                explanation: "MSCA encourages diverse sectors to enhance training and career perspectives."
            }
        ]
    },

    's-etag-grants': {
        1: [
            {
                q: "What types of grants does ETAG offer?",
                options: ["Personal Research Grants, Team Grants, mobility grants", "Only large grants", "Infrastructure funding only", "Teaching grants"],
                correct: 0,
                explanation: "ETAG funds individual researchers (PRG), teams, and mobility through various instruments."
            },
            {
                q: "What is a Personal Research Grant (PRG)?",
                options: ["Funding for PI-led research projects in Estonia (typically 3-5 years)", "Travel grant", "Equipment purchase only", "Salary supplement"],
                correct: 0,
                explanation: "PRG supports research projects led by individual PIs with teams at Estonian institutions."
            },
            {
                q: "What is ETIS used for?",
                options: ["Estonian Research Information System tracking outputs and profiles", "Grant application system", "Payment processing", "Email communication"],
                correct: 0,
                explanation: "ETIS is Estonia's research database recording outputs, grants, and researcher profiles."
            }
        ],
        2: [
            {
                q: "How are ETAG grants evaluated?",
                options: ["International peer review with evaluation panels", "Only Estonian reviewers", "Automatic funding", "Political decision"],
                correct: 0,
                explanation: "ETAG uses international experts and panels for evaluation, following European practices."
            },
            {
                q: "What is Mobilitas Pluss?",
                options: ["Programme supporting researcher mobility and returning scientists", "Public transport subsidy", "Equipment mobility", "Data transfer programme"],
                correct: 0,
                explanation: "Mobilitas Pluss funds incoming researchers and returning Estonian scientists."
            },
            {
                q: "What are ETAG Team Grants?",
                options: ["Larger grants for established research groups (bigger budget than PRG)", "Grants for student teams", "Athletic funding", "Teaching team support"],
                correct: 0,
                explanation: "Team Grants provide larger-scale funding for established research groups."
            }
        ],
        3: [
            {
                q: "What is baseline funding in Estonian research system?",
                options: ["Government funding to institutions based on research capacity evaluation", "Extra competitive grants", "Student tuition", "EU structural funds"],
                correct: 0,
                explanation: "Baseline funding provides institutions with core research support based on performance."
            },
            {
                q: "How does ETAG evaluation criteria align with international standards?",
                options: ["Similar to ERC/Horizon: excellence, impact, feasibility", "Completely different system", "No formal criteria", "Only impact matters"],
                correct: 0,
                explanation: "ETAG follows international best practices with excellence-focused evaluation."
            },
            {
                q: "What are Estonian Centres of Excellence?",
                options: ["Competitive flagship research consortia with major long-term funding", "University rankings", "Building facilities", "Student award programme"],
                correct: 0,
                explanation: "Centres of Excellence are Estonia's top research consortia in strategic areas."
            },
            {
                q: "How do ETAG and EU funding complement each other?",
                options: ["ETAG provides national base; EU offers larger international opportunities", "They are competing programmes", "Choose one or the other", "No connection between them"],
                correct: 0,
                explanation: "National funding builds capacity; EU funding enables larger-scale international research."
            }
        ]
    },

    's-industry-funding': {
        1: [
            {
                q: "What forms can industry research funding take?",
                options: ["Contract research, sponsored research, joint projects, in-kind support", "Only cash payments", "Equipment donations only", "Student scholarships only"],
                correct: 0,
                explanation: "Industry funding includes various models from contracts to partnerships to donations."
            },
            {
                q: "What is contract research?",
                options: ["Research commissioned by company for specific deliverables", "Government-mandated research", "Pure basic research", "Student projects"],
                correct: 0,
                explanation: "Contract research is funded by industry to address specific company needs."
            },
            {
                q: "What is sponsored research?",
                options: ["Industry funding for academic research with more freedom than contracts", "Government sponsorship", "Athletic sponsorship", "Event sponsorship"],
                correct: 0,
                explanation: "Sponsored research provides industry funding with more academic freedom than pure contracts."
            }
        ],
        2: [
            {
                q: "How do IP rights typically work in industry-funded research?",
                options: ["Negotiated in agreement; varies from university ownership to company ownership", "Always goes to company", "Always stays with university", "No IP in industry research"],
                correct: 0,
                explanation: "IP arrangements are negotiated and can vary widely depending on the funding model."
            },
            {
                q: "What are the benefits of industry funding for academics?",
                options: ["Real-world problems, student opportunities, additional resources, impact", "Only money", "No benefits beyond funding", "Only for applied researchers"],
                correct: 0,
                explanation: "Industry funding brings diverse benefits beyond just financial resources."
            },
            {
                q: "What challenges exist with industry funding?",
                options: ["Publication restrictions, IP conflicts, academic freedom concerns, time pressure", "No challenges", "Always easier than grants", "Only administrative burden"],
                correct: 0,
                explanation: "Industry partnerships require managing potential tensions with academic values."
            }
        ],
        3: [
            {
                q: "What is a sponsored research chair?",
                options: ["Industry-funded faculty position in area of mutual interest", "University committee role", "Conference session chair", "Teaching position only"],
                correct: 0,
                explanation: "Sponsored chairs provide long-term industry funding for faculty positions."
            },
            {
                q: "How can researchers maintain academic integrity with industry funding?",
                options: ["Clear agreements, publication rights, independence in methodology and conclusions", "Avoid industry completely", "Accept all industry conditions", "Don't disclose funding source"],
                correct: 0,
                explanation: "Explicit agreements and professional standards protect academic integrity."
            },
            {
                q: "What is a research consortium with industry?",
                options: ["Multi-company collaboration with academia on pre-competitive research", "Single company project", "Government research", "University-only collaboration"],
                correct: 0,
                explanation: "Industry consortia pool company funding for research benefiting multiple participants."
            },
            {
                q: "How should industry funding be disclosed?",
                options: ["Transparent declaration in publications, presentations, and relevant contexts", "No disclosure needed", "Only if legally required", "Hide to avoid bias perception"],
                correct: 0,
                explanation: "Transparent disclosure of funding sources is essential for research integrity."
            }
        ]
    },

    // --- Research Domains ---

    's-ai-ml': {
        1: [
            {
                q: "What distinguishes machine learning from traditional programming?",
                options: ["ML systems learn patterns from data rather than following explicit rules", "ML is always faster", "ML doesn't use computers", "ML is only for images"],
                correct: 0,
                explanation: "Machine learning algorithms learn from data to make predictions or decisions."
            },
            {
                q: "What is deep learning?",
                options: ["Machine learning using neural networks with many layers", "Very thorough analysis", "Underground computing", "Slow learning algorithms"],
                correct: 0,
                explanation: "Deep learning uses multi-layer neural networks that can learn complex representations."
            },
            {
                q: "What are common applications of AI/ML in research?",
                options: ["Image analysis, natural language processing, prediction, optimization", "Only chatbots", "Only self-driving cars", "Only games"],
                correct: 0,
                explanation: "AI/ML has broad research applications across many domains and problem types."
            }
        ],
        2: [
            {
                q: "What is supervised vs. unsupervised learning?",
                options: ["Supervised uses labeled data; unsupervised finds patterns in unlabeled data", "Supervised needs human oversight; unsupervised is automatic", "Same thing", "Supervised is for text; unsupervised for images"],
                correct: 0,
                explanation: "Supervised learning trains on labeled examples; unsupervised discovers structure in data."
            },
            {
                q: "What are transformers in modern AI?",
                options: ["Neural network architecture using attention mechanisms, basis for large language models", "Electrical equipment", "Data format converters", "Robot transformers"],
                correct: 0,
                explanation: "Transformers revolutionized NLP and are the basis for models like GPT and BERT."
            },
            {
                q: "What is responsible AI?",
                options: ["Developing AI systems that are fair, transparent, accountable, and beneficial", "AI that takes responsibility", "AI for responsibility tracking", "Government-controlled AI"],
                correct: 0,
                explanation: "Responsible AI addresses ethical concerns including bias, transparency, and social impact."
            }
        ],
        3: [
            {
                q: "What are foundation models?",
                options: ["Large pre-trained models adaptable to many downstream tasks", "Basic introductory models", "Models for building foundations", "Simple baseline models"],
                correct: 0,
                explanation: "Foundation models (like GPT, CLIP) are trained on broad data and adapted for specific uses."
            },
            {
                q: "What is explainable AI (XAI)?",
                options: ["Methods for understanding and interpreting AI model decisions", "AI that explains itself", "AI for teaching", "Simple AI models"],
                correct: 0,
                explanation: "XAI develops techniques to make AI decisions interpretable and trustworthy."
            },
            {
                q: "What are key challenges in AI research today?",
                options: ["Robustness, efficiency, alignment, safety, bias, environmental impact", "AI is completely solved", "Only computing power", "Only data availability"],
                correct: 0,
                explanation: "Current AI research addresses multiple challenges from safety to sustainability."
            },
            {
                q: "What is the EU AI Act's relevance for AI research?",
                options: ["Regulatory framework classifying AI by risk level, affecting development and deployment", "Funding programme", "Research methodology", "Academic curriculum"],
                correct: 0,
                explanation: "The EU AI Act regulates AI systems based on risk, with implications for research applications."
            }
        ]
    },

    's-data-science': {
        1: [
            {
                q: "What is data science?",
                options: ["Interdisciplinary field extracting insights from data using statistics, computing, domain knowledge", "Only statistics", "Only computer science", "Data storage"],
                correct: 0,
                explanation: "Data science combines methods from statistics, computing, and domain expertise."
            },
            {
                q: "What is bioinformatics?",
                options: ["Application of computational methods to biological data (genomics, proteomics, etc.)", "Study of computer biology", "Biological computers", "Information about biology"],
                correct: 0,
                explanation: "Bioinformatics analyzes biological data using computational and statistical methods."
            },
            {
                q: "What are the main steps in a data science workflow?",
                options: ["Data collection, cleaning, exploration, modeling, evaluation, communication", "Only modeling", "Only visualization", "Only collection"],
                correct: 0,
                explanation: "Data science involves a pipeline from data acquisition through analysis to communication."
            }
        ],
        2: [
            {
                q: "What is health informatics?",
                options: ["Application of informatics to healthcare data for improved outcomes", "Hospital IT support", "Medical device manufacturing", "Health insurance systems"],
                correct: 0,
                explanation: "Health informatics uses data science to improve healthcare delivery and outcomes."
            },
            {
                q: "What are key challenges in big data?",
                options: ["Volume, velocity, variety, veracity, value (the 5 Vs)", "Only storage space", "Only processing speed", "Only data format"],
                correct: 0,
                explanation: "Big data challenges span scale, speed, diversity, quality, and extracting value."
            },
            {
                q: "What is ELIXIR in European bioinformatics?",
                options: ["European life sciences infrastructure for biological data and tools", "A database system", "A software company", "A funding programme"],
                correct: 0,
                explanation: "ELIXIR coordinates European bioinformatics resources and services."
            }
        ],
        3: [
            {
                q: "What is genomic data science?",
                options: ["Analysis of DNA/RNA sequencing data to understand genetics and disease", "Study of genome databases", "Genetic database design", "DNA storage systems"],
                correct: 0,
                explanation: "Genomic data science analyzes sequencing data for biological and medical insights."
            },
            {
                q: "What are ethical considerations in health data research?",
                options: ["Privacy, consent, bias, equity, secondary use, re-identification risks", "No ethical issues", "Only consent matters", "Only for clinical trials"],
                correct: 0,
                explanation: "Health data research involves complex ethical considerations requiring careful management."
            },
            {
                q: "What is federated learning in data science?",
                options: ["Training models across distributed datasets without centralizing data", "Learning in federal government", "Distributed database system", "Multi-site data storage"],
                correct: 0,
                explanation: "Federated learning enables analysis of sensitive distributed data while preserving privacy."
            },
            {
                q: "What is the Human Cell Atlas?",
                options: ["International effort to map all human cell types using single-cell technologies", "Medical textbook", "Hospital database", "Anatomy software"],
                correct: 0,
                explanation: "The Human Cell Atlas aims to create comprehensive reference maps of all human cells."
            }
        ]
    },

    's-security-crypto': {
        1: [
            {
                q: "What is cryptography?",
                options: ["Science of secure communication in presence of adversaries", "Study of ancient codes", "Secret writing only", "Password management"],
                correct: 0,
                explanation: "Cryptography develops mathematical techniques for secure communication and computation."
            },
            {
                q: "What is cybersecurity?",
                options: ["Protection of computer systems and networks from threats and attacks", "Cyber insurance", "Internet speed optimization", "Website design"],
                correct: 0,
                explanation: "Cybersecurity protects digital assets, systems, and networks from unauthorized access and attacks."
            },
            {
                q: "What is the difference between symmetric and asymmetric encryption?",
                options: ["Symmetric uses same key for encrypt/decrypt; asymmetric uses public/private key pairs", "Symmetric is stronger", "Asymmetric is older", "No practical difference"],
                correct: 0,
                explanation: "Symmetric encryption uses shared secrets; asymmetric uses mathematically related key pairs."
            }
        ],
        2: [
            {
                q: "What is secure multi-party computation (MPC)?",
                options: ["Methods for computing on data from multiple parties without revealing inputs", "Group project management", "Multi-computer systems", "Distributed databases"],
                correct: 0,
                explanation: "MPC enables joint computation while keeping each party's data private."
            },
            {
                q: "What is zero-knowledge proof?",
                options: ["Proving statement is true without revealing anything beyond the statement's validity", "Proof without evidence", "Anonymous publishing", "Empty proof"],
                correct: 0,
                explanation: "Zero-knowledge proofs demonstrate knowledge without revealing the knowledge itself."
            },
            {
                q: "What is Estonia known for in cybersecurity?",
                options: ["E-government security, digital identity, after 2007 cyber attacks", "Nuclear security", "Physical security systems", "Security guard training"],
                correct: 0,
                explanation: "Estonia became a cybersecurity leader after major 2007 attacks and through e-government development."
            }
        ],
        3: [
            {
                q: "What is post-quantum cryptography?",
                options: ["Cryptographic algorithms secure against quantum computer attacks", "Cryptography after quantum theory", "Very advanced cryptography", "Theoretical cryptography"],
                correct: 0,
                explanation: "Post-quantum cryptography develops algorithms that remain secure when quantum computers exist."
            },
            {
                q: "What is differential privacy?",
                options: ["Mathematical framework for privacy-preserving data analysis and release", "Different privacy settings", "Privacy for different users", "Differential equations for privacy"],
                correct: 0,
                explanation: "Differential privacy provides provable privacy guarantees for statistical queries."
            },
            {
                q: "What is homomorphic encryption?",
                options: ["Encryption allowing computation on encrypted data without decrypting", "Same encryption everywhere", "Encryption of similar data", "Simple encryption"],
                correct: 0,
                explanation: "Homomorphic encryption enables processing encrypted data while maintaining confidentiality."
            },
            {
                q: "What is blockchain research focused on?",
                options: ["Scalability, privacy, consensus mechanisms, smart contracts, applications", "Only cryptocurrency", "Only Bitcoin", "Only financial applications"],
                correct: 0,
                explanation: "Blockchain research addresses multiple challenges and applications beyond cryptocurrency."
            }
        ]
    },

    's-software-systems': {
        1: [
            {
                q: "What is software engineering research?",
                options: ["Scientific study of methods for developing and maintaining software systems", "Only coding practices", "Only project management", "Hardware engineering"],
                correct: 0,
                explanation: "SE research develops theories, methods, and tools for effective software development."
            },
            {
                q: "What is empirical software engineering?",
                options: ["Research using evidence from real software projects and developers", "Theoretical software engineering", "Only industrial research", "Trial and error coding"],
                correct: 0,
                explanation: "Empirical SE uses studies, experiments, and data to understand software development."
            },
            {
                q: "What is human-computer interaction (HCI)?",
                options: ["Study of how people interact with computers and interface design", "Computer-to-computer communication", "AI development", "Hardware manufacturing"],
                correct: 0,
                explanation: "HCI research improves the design and effectiveness of computer systems for human users."
            }
        ],
        2: [
            {
                q: "What is mining software repositories?",
                options: ["Analyzing code repositories and development history for insights", "Physical mining with software", "Cryptocurrency mining", "Data center operations"],
                correct: 0,
                explanation: "Repository mining analyzes version control and issue data to understand development patterns."
            },
            {
                q: "What is software analytics?",
                options: ["Using data analysis to understand and improve software development processes", "Only code metrics", "Software usage statistics", "Sales analytics for software"],
                correct: 0,
                explanation: "Software analytics applies data science to software engineering data and processes."
            },
            {
                q: "What is business process management research?",
                options: ["Study of modeling, analyzing, and improving organizational processes", "Only workflow automation", "Business administration", "Process manufacturing"],
                correct: 0,
                explanation: "BPM research develops methods for understanding and optimizing business processes."
            }
        ],
        3: [
            {
                q: "What is AI for software engineering?",
                options: ["Using AI/ML to support development: code generation, testing, maintenance", "Software for AI development", "AI replacing developers", "Only chatbots for developers"],
                correct: 0,
                explanation: "AI4SE applies AI techniques to automate and improve software engineering tasks."
            },
            {
                q: "What is technical debt?",
                options: ["Accumulated consequences of shortcuts in software development", "Financial debt for technology", "Unpaid software licenses", "Hardware depreciation"],
                correct: 0,
                explanation: "Technical debt represents future costs from quick solutions that need later rework."
            },
            {
                q: "What is continuous integration/continuous deployment (CI/CD)?",
                options: ["Automated practices for integrating code changes and deploying software", "Only testing automation", "Manual deployment process", "Continuous internet connection"],
                correct: 0,
                explanation: "CI/CD automates building, testing, and deploying software for faster, reliable delivery."
            },
            {
                q: "What are software ecosystems?",
                options: ["Collections of software projects, developers, and users around platforms", "Operating systems only", "Environmental software", "Biological simulations"],
                correct: 0,
                explanation: "Software ecosystems research studies communities around platforms like npm, GitHub, or Android."
            }
        ]
    },

    's-distributed-systems': {
        1: [
            {
                q: "What is a distributed system?",
                options: ["System with components on networked computers coordinating via messages", "A system spread across offices", "Software distribution", "Distributed computing power"],
                correct: 0,
                explanation: "Distributed systems coordinate multiple computers to work together as one system."
            },
            {
                q: "What is cloud computing?",
                options: ["On-demand computing resources delivered over internet as a service", "Weather prediction systems", "Sky-based servers", "Only storage services"],
                correct: 0,
                explanation: "Cloud computing provides scalable computing resources accessible over the internet."
            },
            {
                q: "What is Internet of Things (IoT)?",
                options: ["Network of physical devices with sensors, software, and connectivity", "Internet for objects", "Smart home systems only", "Industrial sensors only"],
                correct: 0,
                explanation: "IoT connects physical devices enabling data collection and remote control."
            }
        ],
        2: [
            {
                q: "What is edge computing?",
                options: ["Processing data closer to where it's generated rather than in central cloud", "Computing at the edge of the internet", "Extreme computing", "New computing paradigm"],
                correct: 0,
                explanation: "Edge computing reduces latency and bandwidth by processing data near its source."
            },
            {
                q: "What is high-performance computing (HPC)?",
                options: ["Using supercomputers for complex calculations and simulations", "Fast personal computers", "Gaming computers", "Any modern computer"],
                correct: 0,
                explanation: "HPC uses parallel processing on supercomputers for scientific and engineering computations."
            },
            {
                q: "What is mobile computing research?",
                options: ["Study of computing on portable devices with connectivity and resource constraints", "Moving computers", "Computing while walking", "Laptop research"],
                correct: 0,
                explanation: "Mobile computing addresses unique challenges of portable, connected devices."
            }
        ],
        3: [
            {
                q: "What is fog computing?",
                options: ["Computing layer between edge devices and cloud, extending cloud to network edge", "Computing in bad weather", "Unclear computing", "Obfuscated systems"],
                correct: 0,
                explanation: "Fog computing provides intermediate processing between IoT devices and cloud."
            },
            {
                q: "What is consensus in distributed systems?",
                options: ["Agreement among distributed nodes on shared state despite failures", "Group decision making", "System configuration", "User agreement"],
                correct: 0,
                explanation: "Consensus algorithms enable distributed nodes to agree on values despite failures."
            },
            {
                q: "What is serverless computing?",
                options: ["Cloud execution model where provider manages infrastructure, billing per execution", "Computing without servers", "Offline computing", "Peer-to-peer only"],
                correct: 0,
                explanation: "Serverless abstracts server management, allowing focus on code with pay-per-use billing."
            },
            {
                q: "What is container orchestration (e.g., Kubernetes)?",
                options: ["Automated management of containerized application deployment and scaling", "Music software", "Container shipping logistics", "Data organization"],
                correct: 0,
                explanation: "Container orchestration automates deploying, scaling, and managing containerized applications."
            }
        ]
    }
};

// Helper functions for question management

function getQuestionsForSkill(skillId, level) {
    if (!questions[skillId] || !questions[skillId][level]) {
        return [];
    }
    return questions[skillId][level];
}

function getAvailableLevels(skillId) {
    if (!questions[skillId]) {
        return [];
    }
    return Object.keys(questions[skillId]).map(Number).sort((a, b) => a - b);
}

function hasQuestions(skillId) {
    return questions[skillId] && Object.keys(questions[skillId]).length > 0;
}
