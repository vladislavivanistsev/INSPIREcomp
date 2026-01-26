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
                options: ["Context → Gap → Purpose → Overview", "Methods → Results → Discussion → Conclusion", "Abstract → Keywords → References → Appendix", "Hypothesis → Data → Analysis → Findings"],
                correct: 0,
                explanation: "The introduction typically follows the 'funnel' structure: establish context, identify the gap in knowledge, state your purpose/contribution, and preview the paper structure."
            },
            {
                q: "Which section of a research paper describes HOW the study was conducted?",
                options: ["Methods/Methodology", "Results", "Discussion", "Introduction"],
                correct: 0,
                explanation: "The Methods section details the procedures, materials, and approaches used to conduct the research, enabling reproducibility."
            },
            {
                q: "What is the primary purpose of an abstract?",
                options: ["To provide a brief summary of the entire paper", "To list all references used", "To acknowledge funding sources", "To present raw data"],
                correct: 0,
                explanation: "An abstract is a concise summary (typically 150-300 words) that covers the purpose, methods, results, and conclusions of the paper."
            }
        ],
        2: [
            {
                q: "What does 'signposting' mean in academic writing?",
                options: ["Using phrases to guide readers through the argument", "Adding footnotes to every page", "Including maps and diagrams", "Citing sources in the text"],
                correct: 0,
                explanation: "Signposting uses transitional phrases like 'First,' 'However,' 'In contrast,' to help readers follow the logical flow of arguments."
            },
            {
                q: "Which voice is generally preferred in scientific writing?",
                options: ["Passive voice for objectivity", "First person singular always", "Second person for engagement", "Future tense throughout"],
                correct: 0,
                explanation: "While active voice is increasingly accepted, passive voice is traditionally used in scientific writing to maintain objectivity and focus on the research rather than the researcher."
            },
            {
                q: "What is 'hedging' in academic writing?",
                options: ["Using cautious language to avoid overclaiming", "Avoiding citations entirely", "Writing very short sentences", "Using informal language"],
                correct: 0,
                explanation: "Hedging uses words like 'may,' 'suggests,' 'appears to' to express appropriate caution about claims and acknowledge limitations."
            }
        ],
        3: [
            {
                q: "What is the IMRaD structure?",
                options: ["Introduction, Methods, Results, and Discussion", "Index, Materials, References, and Data", "Inquiry, Measurement, Review, and Debate", "Ideas, Models, Research, and Development"],
                correct: 0,
                explanation: "IMRaD is the standard structure for empirical research papers in many scientific fields."
            },
            {
                q: "How should you handle conflicting evidence in your literature review?",
                options: ["Acknowledge and analyze the contradictions", "Ignore studies that disagree with your hypothesis", "Only cite the most recent study", "Present only supporting evidence"],
                correct: 0,
                explanation: "Good academic writing acknowledges conflicting evidence and provides critical analysis of why discrepancies might exist."
            },
            {
                q: "What is a 'thesis statement' in academic writing?",
                options: ["A clear declaration of the paper's main argument or purpose", "The list of references at the end", "A summary of methodology", "The acknowledgments section"],
                correct: 0,
                explanation: "A thesis statement clearly articulates the central argument or purpose of the paper, typically appearing in the introduction."
            },
            {
                q: "Which is the best practice for paragraph structure?",
                options: ["One main idea per paragraph with topic sentence first", "Multiple unrelated ideas to save space", "No clear structure to maintain reader interest", "Always exactly five sentences"],
                correct: 0,
                explanation: "Each paragraph should focus on one main idea, introduced by a topic sentence and supported by evidence and analysis."
            }
        ]
    },

    'l-presentation': {
        1: [
            {
                q: "What is the recommended maximum number of bullet points per slide?",
                options: ["5-7 points", "15-20 points", "1 point only", "As many as fit"],
                correct: 0,
                explanation: "The 7x7 rule suggests no more than 7 bullet points per slide with 7 words each to maintain audience attention."
            },
            {
                q: "How long should a typical conference presentation be?",
                options: ["15-20 minutes plus Q&A", "60 minutes minimum", "5 minutes exactly", "As long as needed"],
                correct: 0,
                explanation: "Most conference talks are 15-20 minutes with 5-10 minutes for questions, though this varies by venue."
            },
            {
                q: "What should be the font size minimum for presentation slides?",
                options: ["24-28 point", "8-10 point", "12 point", "48 point only"],
                correct: 0,
                explanation: "A minimum of 24-28 point ensures readability from the back of the room."
            }
        ],
        2: [
            {
                q: "What is the 'Rule of Three' in presentations?",
                options: ["Organize content into three main points", "Always use three colors", "Present for exactly three minutes", "Include three authors"],
                correct: 0,
                explanation: "Audiences remember information better when organized into three main points or sections."
            },
            {
                q: "What should you do in the first 30 seconds of a presentation?",
                options: ["Hook the audience with a compelling opening", "Read your biography", "Show your table of contents", "Apologize for any shortcomings"],
                correct: 0,
                explanation: "The opening should capture attention through a question, surprising fact, or relevant anecdote."
            },
            {
                q: "How should you handle technical difficulties during a presentation?",
                options: ["Stay calm and have a backup plan ready", "Cancel the presentation immediately", "Blame the organizers publicly", "Continue as if nothing happened"],
                correct: 0,
                explanation: "Prepare backups (USB, email copy, printed notes) and remain composed - audiences are understanding of technical issues."
            }
        ],
        3: [
            {
                q: "What is an 'elevator pitch' for research?",
                options: ["A 30-60 second summary of your work for non-experts", "A formal grant proposal", "A detailed methodology description", "A list of publications"],
                correct: 0,
                explanation: "An elevator pitch concisely explains your research's importance and impact in the time of an elevator ride."
            },
            {
                q: "How should you design slides for accessibility?",
                options: ["High contrast colors and sans-serif fonts", "Small fonts with decorative backgrounds", "Red and green color coding", "Dense text blocks"],
                correct: 0,
                explanation: "Accessible slides use high contrast, clear fonts, and avoid relying solely on color to convey information."
            },
            {
                q: "What is the best way to handle hostile questions?",
                options: ["Respond calmly and acknowledge valid points", "Argue back aggressively", "Ignore the questioner", "Leave the stage immediately"],
                correct: 0,
                explanation: "Stay professional, acknowledge legitimate concerns, and redirect to your evidence-based findings."
            },
            {
                q: "What is a poster 'lightning talk'?",
                options: ["A 1-3 minute verbal summary of your poster", "A 60-minute detailed presentation", "An informal chat at a poster session", "A written abstract submission"],
                correct: 0,
                explanation: "Lightning talks are brief presentations (1-3 minutes) that introduce poster content before the session."
            }
        ]
    },

    'l-research-ethics': {
        1: [
            {
                q: "What is research misconduct?",
                options: ["Fabrication, falsification, or plagiarism in research", "Making honest errors in analysis", "Having your paper rejected", "Disagreeing with reviewers"],
                correct: 0,
                explanation: "Research misconduct specifically refers to fabrication (making up data), falsification (manipulating data), or plagiarism (FFP)."
            },
            {
                q: "What is informed consent in research?",
                options: ["Participants understand and agree to participate", "Researchers consent to publish", "Journals agree to review", "Universities approve funding"],
                correct: 0,
                explanation: "Informed consent ensures participants understand the research purpose, procedures, risks, and their rights before agreeing to participate."
            },
            {
                q: "Why is data management important for research ethics?",
                options: ["Enables verification and reproducibility", "Makes papers longer", "Satisfies journal requirements only", "Reduces storage costs"],
                correct: 0,
                explanation: "Proper data management ensures research can be verified, reproduced, and that data is handled responsibly."
            }
        ],
        2: [
            {
                q: "What is a conflict of interest in research?",
                options: ["When personal interests could bias research", "When two researchers disagree", "When funding is insufficient", "When deadlines conflict"],
                correct: 0,
                explanation: "Conflicts of interest occur when financial, personal, or professional factors could improperly influence research decisions."
            },
            {
                q: "What is the purpose of an ethics committee (IRB/ERB)?",
                options: ["To protect research participants from harm", "To approve research budgets", "To edit manuscripts", "To hire researchers"],
                correct: 0,
                explanation: "Ethics committees review research proposals to ensure participant safety, privacy, and ethical treatment."
            },
            {
                q: "What constitutes authorship according to ICMJE guidelines?",
                options: ["Substantial contribution, drafting/revising, approval, accountability", "Any involvement in the project", "Providing funding only", "Being a supervisor automatically"],
                correct: 0,
                explanation: "ICMJE criteria require substantial contributions to conception/design/analysis, drafting/revising, final approval, and accountability."
            }
        ],
        3: [
            {
                q: "What is 'salami slicing' in publication ethics?",
                options: ["Splitting one study into multiple papers inappropriately", "Editing data to fit hypotheses", "Cutting text to meet word limits", "Removing co-authors"],
                correct: 0,
                explanation: "Salami slicing fragments research into minimum publishable units to inflate publication counts."
            },
            {
                q: "What is the Declaration of Helsinki?",
                options: ["Ethical principles for medical research involving humans", "A funding agreement between EU countries", "A copyright protection treaty", "A university ranking system"],
                correct: 0,
                explanation: "The Declaration of Helsinki establishes ethical principles for medical research involving human subjects."
            },
            {
                q: "What is 'p-hacking' in research?",
                options: ["Manipulating analyses until achieving statistical significance", "Hacking into research databases", "Publishing quickly for priority", "Testing multiple hypotheses transparently"],
                correct: 0,
                explanation: "P-hacking involves manipulating data analysis to achieve significant p-values, a form of questionable research practice."
            },
            {
                q: "What is the purpose of pre-registration?",
                options: ["Document hypotheses and methods before data collection", "Register copyright for ideas", "Book conference presentations", "Apply for ethics approval"],
                correct: 0,
                explanation: "Pre-registration records study design and analysis plans in advance to prevent questionable research practices."
            }
        ]
    },

    'l-peer-review': {
        1: [
            {
                q: "What is the primary purpose of peer review in academic publishing?",
                options: ["To evaluate research quality before publication", "To reject as many papers as possible", "To delay publication of competitors", "To increase journal profits"],
                correct: 0,
                explanation: "Peer review serves as quality control, helping ensure published research meets scientific standards."
            },
            {
                q: "What should a reviewer do if they have a conflict of interest with the paper?",
                options: ["Decline to review and notify the editor", "Review it anyway but be extra critical", "Ask a colleague to review in their place", "Accept but disclose the conflict in the review"],
                correct: 0,
                explanation: "Reviewers should decline reviews where they have conflicts (e.g., collaborators, competitors, personal relationships)."
            },
            {
                q: "What is 'single-blind' peer review?",
                options: ["Reviewers know authors, but authors don't know reviewers", "Neither party knows the other's identity", "Both parties know each other's identity", "Only the editor knows both identities"],
                correct: 0,
                explanation: "In single-blind review, reviewer identities are hidden from authors but reviewers can see author names."
            }
        ],
        2: [
            {
                q: "What should a constructive peer review include?",
                options: ["Specific, actionable feedback with justification", "Only negative criticism to improve the paper", "Personal opinions about the authors", "Recommendations to cite the reviewer's work"],
                correct: 0,
                explanation: "Good reviews provide specific, constructive feedback that helps authors improve their work."
            },
            {
                q: "What is 'double-blind' peer review?",
                options: ["Neither reviewers nor authors know each other's identity", "Two reviewers evaluate each paper", "The review happens in two rounds", "Reviews are published with two versions"],
                correct: 0,
                explanation: "Double-blind review anonymizes both authors and reviewers to reduce bias."
            },
            {
                q: "How long should a typical journal peer review take?",
                options: ["2-4 weeks is considered reasonable", "Same day turnaround expected", "6-12 months is normal", "Time doesn't matter in peer review"],
                correct: 0,
                explanation: "While timelines vary, 2-4 weeks is a reasonable expectation; longer delays frustrate authors and slow science."
            }
        ],
        3: [
            {
                q: "What is 'open peer review'?",
                options: ["Reviews and/or reviewer identities are publicly available", "Anyone can submit a review", "Papers are reviewed before submission", "Reviews are conducted via video call"],
                correct: 0,
                explanation: "Open peer review can mean published reviews, disclosed identities, or public participation in review."
            },
            {
                q: "What is a 'major revision' decision?",
                options: ["Significant changes needed, paper will be re-reviewed", "Paper is rejected permanently", "Minor typos need fixing", "Paper is accepted as-is"],
                correct: 0,
                explanation: "Major revision means substantial improvements are required and the revised paper will undergo another review round."
            },
            {
                q: "What is the reviewer's responsibility regarding confidentiality?",
                options: ["Keep manuscript contents confidential until published", "Share interesting findings with colleagues", "Post preprints on social media", "Discuss with students as teaching material"],
                correct: 0,
                explanation: "Reviewers must maintain confidentiality and not share, discuss, or use unpublished manuscript content."
            },
            {
                q: "What is 'registered reports' peer review?",
                options: ["Review of methods before data collection, acceptance based on design", "Papers registered with a government database", "Reviews submitted to a central registry", "Authors must register before submitting"],
                correct: 0,
                explanation: "Registered reports review the study design before data collection, reducing publication bias."
            }
        ]
    },

    'l-literature-review': {
        1: [
            {
                q: "What is the main purpose of a literature review?",
                options: ["Synthesize existing knowledge and identify gaps", "List every paper ever written on a topic", "Prove your hypothesis is correct", "Replace the need for original research"],
                correct: 0,
                explanation: "A literature review surveys existing research to understand the field and identify what's missing or unknown."
            },
            {
                q: "Which database is commonly used for computer science literature?",
                options: ["Google Scholar, ACM Digital Library, IEEE Xplore", "PubMed only", "Social media platforms", "Wikipedia"],
                correct: 0,
                explanation: "CS researchers typically use Google Scholar, ACM DL, IEEE Xplore, DBLP, and Scopus."
            },
            {
                q: "What is a 'systematic review'?",
                options: ["A structured, reproducible search and analysis of literature", "A review written by one author systematically", "A review of systems engineering papers", "Any review that uses a database"],
                correct: 0,
                explanation: "Systematic reviews follow predefined protocols for searching, selecting, and analyzing literature to minimize bias."
            }
        ],
        2: [
            {
                q: "What are Boolean operators in literature searching?",
                options: ["AND, OR, NOT to combine search terms", "True and False values in papers", "Mathematical operators in formulas", "Operators who manage library systems"],
                correct: 0,
                explanation: "Boolean operators (AND, OR, NOT) help construct precise database queries to find relevant papers."
            },
            {
                q: "What is 'snowballing' in literature review?",
                options: ["Following references forward and backward from key papers", "Adding more papers until the review is too large", "Starting with many papers and reducing", "A method of rapid paper reading"],
                correct: 0,
                explanation: "Snowballing finds additional papers by checking citations (backward) and citing papers (forward) of key articles."
            },
            {
                q: "What should inclusion/exclusion criteria specify?",
                options: ["Which papers to include or exclude and why", "How to format the reference list", "The journal's acceptance rate", "Author qualifications required"],
                correct: 0,
                explanation: "Clear criteria (date range, language, study type, etc.) ensure reproducible and unbiased paper selection."
            }
        ],
        3: [
            {
                q: "What is a PRISMA diagram?",
                options: ["Flowchart showing literature search and selection process", "A type of research methodology", "Software for managing references", "A citation network visualization"],
                correct: 0,
                explanation: "PRISMA diagrams document how many papers were found, screened, and included/excluded at each stage."
            },
            {
                q: "What distinguishes a scoping review from a systematic review?",
                options: ["Scoping maps the field; systematic answers specific questions", "Scoping is faster and less rigorous", "Systematic reviews are only for medical research", "There is no meaningful difference"],
                correct: 0,
                explanation: "Scoping reviews explore the breadth of a topic; systematic reviews answer focused questions with strict protocols."
            },
            {
                q: "What is citation management software used for?",
                options: ["Organizing references and generating bibliographies", "Automatically writing literature reviews", "Measuring your h-index", "Peer reviewing papers"],
                correct: 0,
                explanation: "Tools like Zotero, Mendeley, and EndNote help collect, organize, and format citations."
            },
            {
                q: "What is 'grey literature' in research?",
                options: ["Reports, theses, and documents not formally published", "Papers from disreputable journals", "Older papers from before digital archives", "Papers written in unclear language"],
                correct: 0,
                explanation: "Grey literature includes technical reports, white papers, theses, and conference papers not in traditional journals."
            }
        ]
    },

    'l-data-management': {
        1: [
            {
                q: "What does FAIR stand for in research data management?",
                options: ["Findable, Accessible, Interoperable, Reusable", "Fast, Accurate, Indexed, Reliable", "Free, Available, International, Reviewed", "Formatted, Archived, Integrated, Recorded"],
                correct: 0,
                explanation: "FAIR principles guide data management to maximize the value and reusability of research data."
            },
            {
                q: "What is a Data Management Plan (DMP)?",
                options: ["Document describing how data will be handled throughout research", "Software for organizing research files", "A backup system for computers", "The methods section of a paper"],
                correct: 0,
                explanation: "A DMP outlines data collection, storage, sharing, and preservation strategies for a research project."
            },
            {
                q: "Why is documenting data important?",
                options: ["So others can understand and reuse it", "To increase file size", "It's only required for funded research", "To make data harder to access"],
                correct: 0,
                explanation: "Good documentation (metadata) ensures data remains understandable and usable long-term."
            }
        ],
        2: [
            {
                q: "What is a persistent identifier for datasets?",
                options: ["A permanent reference like a DOI that won't change", "A temporary URL for data download", "The filename of the dataset", "The researcher's email address"],
                correct: 0,
                explanation: "Persistent identifiers like DOIs ensure data can be cited and found even if storage locations change."
            },
            {
                q: "What is data versioning?",
                options: ["Tracking changes to datasets over time", "Using the latest software version", "Numbering your research papers", "Creating multiple copies for backup"],
                correct: 0,
                explanation: "Version control for data tracks modifications, enabling reproducibility and error correction."
            },
            {
                q: "What is a data repository?",
                options: ["A platform for storing and sharing research data", "A personal hard drive", "The appendix of a paper", "A database management system"],
                correct: 0,
                explanation: "Repositories like Zenodo, Figshare, or domain-specific archives provide long-term data storage and access."
            }
        ],
        3: [
            {
                q: "What is metadata in research data management?",
                options: ["Descriptive information about the data itself", "The main research findings", "Raw experimental measurements", "Statistical analysis results"],
                correct: 0,
                explanation: "Metadata describes data characteristics (format, creator, date, methodology) enabling discovery and reuse."
            },
            {
                q: "What is the purpose of a data dictionary?",
                options: ["Define variables, values, and their meanings in a dataset", "Translate data between languages", "List all databases in the world", "Correct spelling errors in data"],
                correct: 0,
                explanation: "A data dictionary documents each variable's name, type, allowed values, and meaning."
            },
            {
                q: "What is data archiving vs. data backup?",
                options: ["Archiving is long-term preservation; backup is short-term recovery", "They are exactly the same thing", "Archiving deletes old data; backup keeps it", "Backup is for important data; archiving is for unimportant"],
                correct: 0,
                explanation: "Backups protect against data loss; archives preserve data for long-term access and compliance."
            },
            {
                q: "What license is commonly used for open research data?",
                options: ["Creative Commons (CC-BY or CC0)", "Proprietary software licenses", "No license needed for data", "The same license as the paper"],
                correct: 0,
                explanation: "CC-BY (attribution required) or CC0 (public domain) are common for open data sharing."
            }
        ]
    },

    'l-open-science': {
        1: [
            {
                q: "What is open access publishing?",
                options: ["Research freely available to read without subscription", "Publishing in any journal", "Sharing papers only with collaborators", "Papers available after a 10-year embargo"],
                correct: 0,
                explanation: "Open access makes research immediately and freely available to anyone online."
            },
            {
                q: "What is a preprint?",
                options: ["A paper shared publicly before peer review", "The first printed copy of a journal", "A paper that was rejected", "A very short paper"],
                correct: 0,
                explanation: "Preprints are manuscript versions shared on servers like arXiv before formal peer review."
            },
            {
                q: "What does 'reproducibility' mean in research?",
                options: ["Others can obtain the same results using your methods and data", "Publishing the same paper multiple times", "Copying other researchers' work", "Using the same equipment as others"],
                correct: 0,
                explanation: "Reproducibility means independent researchers can verify findings using the original data and methods."
            }
        ],
        2: [
            {
                q: "What is the difference between 'Gold' and 'Green' open access?",
                options: ["Gold: published OA by journal; Green: self-archived version", "Gold costs more; Green is free", "Gold is better quality; Green is lower quality", "Gold is for science; Green is for humanities"],
                correct: 0,
                explanation: "Gold OA is published openly by the journal (often with APC); Green OA is author self-archiving."
            },
            {
                q: "What is an Article Processing Charge (APC)?",
                options: ["Fee authors pay for open access publication", "Subscription fee for readers", "Cost of printing physical copies", "Peer reviewer compensation"],
                correct: 0,
                explanation: "APCs are fees charged by some open access journals to cover publication costs."
            },
            {
                q: "What is arXiv?",
                options: ["A preprint server for physics, math, CS, and related fields", "A journal publishing company", "A plagiarism detection tool", "A reference management software"],
                correct: 0,
                explanation: "arXiv is a major preprint repository where researchers share papers before formal publication."
            }
        ],
        3: [
            {
                q: "What is Plan S?",
                options: ["European initiative requiring immediate open access for funded research", "A strategic plan for university rankings", "Software for managing research projects", "A data storage standard"],
                correct: 0,
                explanation: "Plan S (2021) requires research funded by participating agencies to be immediately open access."
            },
            {
                q: "What are FAIR principles applied to software?",
                options: ["Making research software findable, accessible, interoperable, reusable", "Using only commercial software", "Writing software in any language", "Software that runs fairly on all computers"],
                correct: 0,
                explanation: "FAIR4RS extends FAIR principles to research software, promoting sustainable software practices."
            },
            {
                q: "What is a 'transformative agreement' in publishing?",
                options: ["Contract transitioning journal subscriptions to open access", "Agreement to transform research methods", "Contract between co-authors", "Software licensing agreement"],
                correct: 0,
                explanation: "Transformative agreements shift publisher revenue from subscriptions to open access publishing."
            },
            {
                q: "What is the purpose of ORCID?",
                options: ["Provide unique persistent identifier for researchers", "Rate the quality of research", "Detect plagiarism in papers", "Fund open access publications"],
                correct: 0,
                explanation: "ORCID iDs uniquely identify researchers, linking them to their works across platforms."
            }
        ]
    },

    'l-networking': {
        1: [
            {
                q: "What is the primary purpose of attending academic conferences?",
                options: ["Share research and build professional connections", "Take a vacation from work", "Collect free merchandise", "Fulfill travel requirements"],
                correct: 0,
                explanation: "Conferences are key venues for presenting work, getting feedback, and meeting potential collaborators."
            },
            {
                q: "What is a 'poster session' at a conference?",
                options: ["Presenting research on a visual display with informal discussion", "Selling conference merchandise", "A session about graphic design", "A formal lecture with slides"],
                correct: 0,
                explanation: "Poster sessions allow researchers to present work visually and discuss it with interested attendees."
            },
            {
                q: "Why is academic networking important?",
                options: ["Leads to collaborations, job opportunities, and knowledge exchange", "It's only important for senior professors", "To increase social media followers", "Networking is not important in academia"],
                correct: 0,
                explanation: "Networks provide collaboration opportunities, career advancement, and access to resources and ideas."
            }
        ],
        2: [
            {
                q: "What is a good way to follow up after meeting someone at a conference?",
                options: ["Send a brief email mentioning your conversation and shared interests", "Add them on all social media immediately", "Wait for them to contact you first", "Send your full CV unsolicited"],
                correct: 0,
                explanation: "A timely, personalized follow-up email helps maintain the connection and explore collaboration."
            },
            {
                q: "What is an academic 'seminar series'?",
                options: ["Regular talks by invited speakers at an institution", "A course for students only", "A series of published papers", "Online video tutorials"],
                correct: 0,
                explanation: "Seminar series invite researchers to present their work, fostering exchange and potential collaboration."
            },
            {
                q: "How can you increase your research visibility online?",
                options: ["Maintain updated profiles on Google Scholar, ORCID, and ResearchGate", "Only publish in print journals", "Avoid sharing preprints", "Delete your online presence"],
                correct: 0,
                explanation: "Online profiles, preprints, and social media help researchers discover and engage with your work."
            }
        ],
        3: [
            {
                q: "What is a 'research visit' or 'sabbatical'?",
                options: ["Extended stay at another institution for collaboration", "A vacation from research", "Visiting your own lab on weekends", "A virtual meeting with collaborators"],
                correct: 0,
                explanation: "Research visits allow intensive collaboration and exposure to different research environments."
            },
            {
                q: "What is the purpose of academic social media like Twitter/X for researchers?",
                options: ["Share findings, discuss research, and connect with peers", "Only for personal entertainment", "Required by all universities", "To replace peer review"],
                correct: 0,
                explanation: "Academic social media can amplify research impact and facilitate connections across fields."
            },
            {
                q: "What is a research consortium?",
                options: ["Formal collaboration between multiple institutions on shared goals", "A single researcher's lab group", "A journal publishing group", "A student organization"],
                correct: 0,
                explanation: "Consortia coordinate multi-institution efforts, often for large grants or infrastructure projects."
            },
            {
                q: "What is the 'two-body problem' in academic careers?",
                options: ["Difficulty finding positions for both partners in academic couples", "A physics research problem", "Managing two research projects", "Having two thesis advisors"],
                correct: 0,
                explanation: "The two-body problem refers to the challenge of academic couples finding positions at the same location."
            }
        ]
    },

    'l-time-management': {
        1: [
            {
                q: "What are the main competing demands on an academic's time?",
                options: ["Research, teaching, administration, and service", "Only research matters", "Teaching is the only priority", "Administration consumes all time"],
                correct: 0,
                explanation: "Academics balance research, teaching, administrative duties, and service to the community."
            },
            {
                q: "What is 'protected research time'?",
                options: ["Dedicated time blocked for research activities only", "Time when research is forbidden", "Patented research methods", "Time for protecting research data"],
                correct: 0,
                explanation: "Protected time ensures researchers have uninterrupted periods for focused research work."
            },
            {
                q: "What is a realistic approach to managing email as an academic?",
                options: ["Check at set times rather than constantly", "Respond to every email immediately", "Ignore all emails", "Only use email once per week"],
                correct: 0,
                explanation: "Batching email into designated times prevents constant interruption of deep work."
            }
        ],
        2: [
            {
                q: "What is the Pomodoro Technique?",
                options: ["Working in focused 25-minute intervals with short breaks", "A method for growing tomatoes", "A peer review technique", "A grant writing strategy"],
                correct: 0,
                explanation: "Pomodoro uses timed work sessions (typically 25 min) with breaks to maintain focus and prevent burnout."
            },
            {
                q: "How should academics handle saying 'no' to requests?",
                options: ["Prioritize strategically and decline when necessary", "Accept everything to build reputation", "Never say no to senior colleagues", "Always say no to save time"],
                correct: 0,
                explanation: "Strategic declining protects time for priorities; it's essential for sustainable productivity."
            },
            {
                q: "What is 'deep work' in academic context?",
                options: ["Focused, uninterrupted time on cognitively demanding tasks", "Working late at night", "Research in deep sea environments", "Underground laboratory work"],
                correct: 0,
                explanation: "Deep work (Cal Newport) refers to concentrated effort on complex tasks like writing or analysis."
            }
        ],
        3: [
            {
                q: "What is academic 'service creep'?",
                options: ["Gradual increase in committee and administrative duties", "A type of research misconduct", "Slow peer review processes", "Declining research productivity"],
                correct: 0,
                explanation: "Service creep occurs when administrative duties gradually consume time meant for research and teaching."
            },
            {
                q: "What is the Eisenhower Matrix for prioritization?",
                options: ["Categorizing tasks by urgency and importance", "A mathematical research method", "A funding allocation system", "A teaching evaluation matrix"],
                correct: 0,
                explanation: "The matrix sorts tasks into urgent/important quadrants to help prioritize effectively."
            },
            {
                q: "How can academics manage the pressure to publish?",
                options: ["Focus on quality over quantity and set realistic goals", "Publish as many papers as possible regardless of quality", "Avoid publishing until retirement", "Only submit to top journals"],
                correct: 0,
                explanation: "Sustainable publishing involves strategic choices, realistic timelines, and quality-focused goals."
            },
            {
                q: "What is 'task batching' in productivity?",
                options: ["Grouping similar tasks together to reduce context switching", "Doing many tasks simultaneously", "Delegating all tasks to others", "Postponing tasks indefinitely"],
                correct: 0,
                explanation: "Batching (e.g., all emails at once, all grading together) reduces mental overhead from switching."
            }
        ]
    },

    'l-mentoring': {
        1: [
            {
                q: "What is the primary goal of academic mentoring?",
                options: ["Support mentee's professional and personal development", "Get free labor for your research", "Increase your publication count", "Meet institutional requirements only"],
                correct: 0,
                explanation: "Effective mentoring focuses on the mentee's growth, career development, and well-being."
            },
            {
                q: "What is the difference between a supervisor and a mentor?",
                options: ["Supervisors oversee work; mentors guide broader career development", "They are exactly the same role", "Mentors are always more senior", "Supervisors are informal; mentors are formal"],
                correct: 0,
                explanation: "Supervision focuses on specific project oversight; mentoring addresses broader career guidance and support."
            },
            {
                q: "How often should mentor-mentee meetings typically occur?",
                options: ["Regular schedule (weekly/biweekly) with flexibility for needs", "Only when problems arise", "Once per semester maximum", "Daily mandatory meetings"],
                correct: 0,
                explanation: "Regular meetings maintain progress and relationships, with frequency adapted to project stage and needs."
            }
        ],
        2: [
            {
                q: "What is 'co-authorship mentoring'?",
                options: ["Teaching mentees the publication process through joint papers", "Putting your name on all mentee papers", "Writing papers for your mentees", "Only senior authors can publish"],
                correct: 0,
                explanation: "Collaborative authorship teaches research writing while ensuring appropriate credit for contributions."
            },
            {
                q: "How should a mentor handle a struggling mentee?",
                options: ["Identify issues early, provide support, and adjust expectations", "Ignore problems until they resolve themselves", "Immediately terminate the relationship", "Blame the mentee for all difficulties"],
                correct: 0,
                explanation: "Early intervention, open communication, and supportive problem-solving help mentees overcome challenges."
            },
            {
                q: "What is a 'mentoring agreement'?",
                options: ["Document outlining expectations and responsibilities for both parties", "Legal contract for intellectual property", "Agreement to pay mentoring fees", "A binding publication commitment"],
                correct: 0,
                explanation: "Mentoring agreements clarify expectations about meetings, feedback, goals, and responsibilities."
            }
        ],
        3: [
            {
                q: "What is 'peer mentoring' in academia?",
                options: ["Mentoring relationships between colleagues at similar career stages", "Only senior professors can mentor", "Mentoring through published papers", "A formal university program only"],
                correct: 0,
                explanation: "Peer mentoring provides mutual support among those facing similar career stage challenges."
            },
            {
                q: "What is 'mentoring up' or 'reverse mentoring'?",
                options: ["Junior members mentoring seniors on new technologies or perspectives", "Mentees telling mentors what to do", "Only upward career movement", "Mentoring while standing up"],
                correct: 0,
                explanation: "Reverse mentoring recognizes that junior members can teach seniors about new tools, trends, or perspectives."
            },
            {
                q: "How should mentors handle giving critical feedback?",
                options: ["Be specific, constructive, and focus on work not person", "Avoid all negative feedback", "Be harsh to build resilience", "Only give feedback when asked"],
                correct: 0,
                explanation: "Effective critical feedback is specific, actionable, and delivered constructively with care."
            },
            {
                q: "What is a 'mentoring network' approach?",
                options: ["Multiple mentors providing different types of guidance", "One mentor for everything", "A social network for mentors", "Online-only mentoring"],
                correct: 0,
                explanation: "Having multiple mentors for different needs (career, technical, personal) provides comprehensive support."
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
                options: ["A building housing IT, mathematics, and statistics faculties", "A research center for climate change", "A sports facility", "A student dormitory"],
                correct: 0,
                explanation: "Delta Center opened in 2019, bringing together UT's Institute of Computer Science, Institute of Mathematics and Statistics, and related units."
            },
            {
                q: "What is ICS at University of Tartu?",
                options: ["Institute of Computer Science", "International Computer Society", "Information and Communication Services", "Internal Computing Systems"],
                correct: 0,
                explanation: "ICS (Institute of Computer Science) is UT's primary computer science research and teaching unit."
            },
            {
                q: "Which faculty does the Institute of Computer Science belong to?",
                options: ["Faculty of Science and Technology", "Faculty of Medicine", "Faculty of Social Sciences", "Faculty of Arts and Humanities"],
                correct: 0,
                explanation: "ICS is part of UT's Faculty of Science and Technology."
            }
        ],
        2: [
            {
                q: "What is ETIS in the Estonian research system?",
                options: ["Estonian Research Information System - national database of research activities", "Estonian Technology Innovation Society", "European Technology and Innovation Scheme", "Estonian Teaching and Instruction Service"],
                correct: 0,
                explanation: "ETIS tracks Estonian research output, projects, and researcher profiles for evaluation and reporting."
            },
            {
                q: "What are the main research groups at UT ICS?",
                options: ["Software Engineering, AI/ML, Security, Data Science, Distributed Systems", "Only theoretical computer science", "Biology and chemistry labs", "Social science departments"],
                correct: 0,
                explanation: "UT ICS hosts research groups in SE, AI/ML, cryptography/security, data science/bioinformatics, and distributed systems."
            },
            {
                q: "What is the role of a 'research professor' at UT?",
                options: ["Senior researcher focused primarily on research rather than teaching", "A professor who researches teaching methods", "An honorary title only", "A visiting professor from abroad"],
                correct: 0,
                explanation: "Research professors at UT focus on research activities with reduced teaching obligations."
            }
        ],
        3: [
            {
                q: "What is UT's governance structure for research?",
                options: ["Rector → Vice Rector for Research → Deans → Institute Directors", "A single research committee makes all decisions", "Each professor decides independently", "The government directly controls all research"],
                correct: 0,
                explanation: "UT has a hierarchical structure with research strategy set at rector/vice rector level and implemented through faculties and institutes."
            },
            {
                q: "What is the Delta doctoral school?",
                options: ["Doctoral training program for IT, math, and statistics PhDs", "An undergraduate program", "A business incubator", "A high school outreach program"],
                correct: 0,
                explanation: "The Delta doctoral school coordinates PhD training across Delta Center disciplines."
            },
            {
                q: "What is HITSA/HARNO's role in Estonian education?",
                options: ["National agency supporting education development and IT education", "A private tutoring company", "University of Tartu department", "A hardware manufacturer"],
                correct: 0,
                explanation: "HARNO (formerly HITSA) is Estonia's Education and Youth Board, supporting IT education and digital competencies."
            },
            {
                q: "What is UT's position in global CS rankings?",
                options: ["Top 200-300 in CS globally, highest in Estonia", "Not ranked internationally", "Top 10 globally", "Only ranked in social sciences"],
                correct: 0,
                explanation: "UT consistently ranks in top 200-300 for CS globally and is Estonia's leading university for computer science."
            }
        ]
    },

    'p-estonian-funding': {
        1: [
            {
                q: "What is ETAG?",
                options: ["Estonian Research Council - main national research funder", "European Technology and Agriculture Group", "Estonian Teaching Assessment Guide", "Education and Training Advisory Group"],
                correct: 0,
                explanation: "ETAG (Eesti Teadusagentuur) is Estonia's primary public research funding agency."
            },
            {
                q: "What are Personal Research Grants (PRG) from ETAG?",
                options: ["Grants for individual researchers or small teams (up to ~300k€)", "Loans for personal expenses", "Scholarships for PhD students only", "Grants only for professors"],
                correct: 0,
                explanation: "PRG funds research projects led by individual PIs, typically 3-5 years with budgets around 100-300k€."
            },
            {
                q: "What is the ETAG evaluation cycle?",
                options: ["Annual calls with applications typically in autumn", "Continuous rolling applications", "Once every 5 years", "Monthly deadlines"],
                correct: 0,
                explanation: "ETAG typically has annual funding calls with autumn deadlines and decisions in spring."
            }
        ],
        2: [
            {
                q: "What are Team Grants from ETAG?",
                options: ["Larger grants for research groups with 5+ members", "Grants for sports teams", "Small individual grants", "Grants only for international teams"],
                correct: 0,
                explanation: "Team Grants support larger research groups with bigger budgets and longer durations than PRG."
            },
            {
                q: "What is mobilitas pluss?",
                options: ["ETAG program supporting researcher mobility and returning scientists", "A mobile phone plan", "Public transportation subsidy", "A physical fitness program"],
                correct: 0,
                explanation: "Mobilitas Pluss funds incoming researchers, returning Estonian scientists, and research mobility."
            },
            {
                q: "How does the Estonian research evaluation system work?",
                options: ["Regular evaluation of research institutions affecting baseline funding", "No evaluation exists", "Only international experts evaluate", "Self-assessment only"],
                correct: 0,
                explanation: "Estonia evaluates research institutions periodically, with results affecting institutional funding allocations."
            }
        ],
        3: [
            {
                q: "What is baseline funding (baasfinantseerimine) for Estonian research?",
                options: ["Government funding to institutions based on research capacity", "Student tuition fees", "Industry sponsorship only", "EU structural funds"],
                correct: 0,
                explanation: "Baseline funding provides institutions with stable core research funding based on evaluation results."
            },
            {
                q: "What are the Estonian Centres of Excellence?",
                options: ["Flagship research consortia receiving major long-term funding", "Building maintenance centers", "Teaching excellence awards", "Administrative service centers"],
                correct: 0,
                explanation: "Centres of Excellence are competitive, long-term funded research consortia in strategic areas."
            },
            {
                q: "What is RITA program?",
                options: ["Strategic research program for governance and societal challenges", "A music education initiative", "Regional tourism development", "Railway infrastructure project"],
                correct: 0,
                explanation: "RITA funds applied research addressing Estonian societal and governance challenges."
            },
            {
                q: "How do Estonian structural funds support research?",
                options: ["EU cohesion policy funds for infrastructure and capacity building", "Direct grants to individual researchers", "Only for agriculture research", "Loans requiring repayment"],
                correct: 0,
                explanation: "Structural funds finance research infrastructure, equipment, and capacity development in Estonia."
            }
        ]
    },

    'p-eu-funding': {
        1: [
            {
                q: "What is Horizon Europe?",
                options: ["EU's main research and innovation funding program (2021-2027)", "A European space mission", "An educational exchange program", "A climate change initiative only"],
                correct: 0,
                explanation: "Horizon Europe is the EU's €95.5 billion framework program for research and innovation."
            },
            {
                q: "What are the three pillars of Horizon Europe?",
                options: ["Excellent Science, Global Challenges, Innovative Europe", "Research, Development, Commercialization", "Basic, Applied, Industrial", "Teaching, Research, Service"],
                correct: 0,
                explanation: "Horizon Europe is structured into three pillars covering fundamental research, societal challenges, and innovation."
            },
            {
                q: "What is the ERC?",
                options: ["European Research Council - funding frontier research", "European Regulation Committee", "Estonian Research Council", "Educational Resources Center"],
                correct: 0,
                explanation: "ERC funds excellent individual researchers for frontier research across all fields."
            }
        ],
        2: [
            {
                q: "What are the ERC grant types?",
                options: ["Starting, Consolidator, Advanced, Synergy grants", "Small, Medium, Large grants", "Basic, Applied, Commercial grants", "Individual, Team, Institutional grants"],
                correct: 0,
                explanation: "ERC offers grants based on career stage: Starting (2-7 yrs post-PhD), Consolidator (7-12), Advanced (track record), Synergy (groups)."
            },
            {
                q: "What is MSCA?",
                options: ["Marie Skłodowska-Curie Actions - researcher mobility and training", "Mathematical Sciences Computing Association", "Multi-Site Collaborative Agreement", "Master of Science Course Approval"],
                correct: 0,
                explanation: "MSCA funds researcher mobility, doctoral networks, and staff exchanges across borders."
            },
            {
                q: "What are Horizon Europe Clusters?",
                options: ["Thematic areas under Pillar 2 addressing global challenges", "Computer server clusters", "Regional research networks", "Industry consortia"],
                correct: 0,
                explanation: "Six clusters address health, culture, security, digital, climate, and food challenges."
            }
        ],
        3: [
            {
                q: "What is a Research and Innovation Action (RIA)?",
                options: ["Collaborative project funded 100% by EU, focused on research", "A startup funding scheme", "Individual fellowship", "Infrastructure construction grant"],
                correct: 0,
                explanation: "RIAs are collaborative research projects with 100% EU funding for primarily research activities."
            },
            {
                q: "What is an Innovation Action (IA)?",
                options: ["Project closer to market, 70% EU funding, more demonstration", "Pure basic research grant", "Individual researcher grant", "Policy development action"],
                correct: 0,
                explanation: "IAs focus on innovation activities closer to market with 70% EU funding rate."
            },
            {
                q: "What is the EIC (European Innovation Council)?",
                options: ["EU body funding breakthrough innovations and scale-ups", "European Internet Commission", "Estonian Innovation Center", "Environmental Impact Council"],
                correct: 0,
                explanation: "EIC supports high-risk, high-potential innovations through Pathfinder, Transition, and Accelerator programs."
            },
            {
                q: "What is a Coordination and Support Action (CSA)?",
                options: ["Project for networking, coordination, or policy support (no research)", "A research grant for coordinators", "Student exchange program", "Conference funding only"],
                correct: 0,
                explanation: "CSAs support coordination, networking, and policy activities rather than research itself."
            }
        ]
    },

    'p-industry-landscape': {
        1: [
            {
                q: "What is Estonia known for in the tech industry?",
                options: ["E-governance, digital identity, successful startups like Skype, Wise", "Heavy manufacturing", "Oil and gas industry", "Automotive production"],
                correct: 0,
                explanation: "Estonia is recognized for digital governance, cybersecurity, and successful tech startups."
            },
            {
                q: "What is Tehnopol?",
                options: ["Science and business park supporting tech companies in Tallinn", "A political party", "A telecommunications company", "A government ministry"],
                correct: 0,
                explanation: "Tehnopol is Estonia's largest science park, hosting startups and connecting them with research."
            },
            {
                q: "What is the significance of Tartu for Estonian tech?",
                options: ["University city with growing startup ecosystem and research links", "Industrial manufacturing center", "Only a tourist destination", "Government administrative center"],
                correct: 0,
                explanation: "Tartu's university research and startup ecosystem make it Estonia's second tech hub."
            }
        ],
        2: [
            {
                q: "What is Garage48?",
                options: ["Estonian hackathon organization promoting entrepreneurship", "A car repair service", "A storage company", "A music venue"],
                correct: 0,
                explanation: "Garage48 organizes hackathons and startup events, part of Estonia's entrepreneurship ecosystem."
            },
            {
                q: "What industries commonly collaborate with UT ICS?",
                options: ["Fintech, cybersecurity, e-governance, health tech, AI", "Only agriculture", "Mining and extraction", "Traditional manufacturing only"],
                correct: 0,
                explanation: "ICS collaborates with fintech, security, digital government, health, and AI companies."
            },
            {
                q: "What is Cybernetica?",
                options: ["Estonian research company specializing in e-governance and security", "A video game company", "A pharmaceutical company", "A social media platform"],
                correct: 0,
                explanation: "Cybernetica develops secure digital solutions and has close ties to UT research."
            }
        ],
        3: [
            {
                q: "What is the Estonian e-Residency program?",
                options: ["Digital identity for non-residents to run EU businesses", "Citizenship pathway", "Student visa program", "Real estate investment scheme"],
                correct: 0,
                explanation: "e-Residency enables global entrepreneurs to establish and manage EU businesses digitally."
            },
            {
                q: "What research-industry collaboration models work in Estonia?",
                options: ["Contract research, joint labs, industrial PhDs, spin-offs", "Only informal consulting", "No formal collaboration exists", "Government-mandated partnerships only"],
                correct: 0,
                explanation: "Estonian academia-industry collaboration includes contracts, joint positions, shared infrastructure, and startups."
            },
            {
                q: "What is Startup Estonia?",
                options: ["Government initiative supporting the startup ecosystem", "A specific startup company", "University student organization", "An investment fund"],
                correct: 0,
                explanation: "Startup Estonia coordinates government support for the startup ecosystem."
            },
            {
                q: "What role does Bolt play in the Estonian tech ecosystem?",
                options: ["Major mobility/delivery startup showing Estonian startup success", "An electricity company", "A hardware manufacturer", "A research institute"],
                correct: 0,
                explanation: "Bolt is a prominent Estonian startup (mobility, delivery) demonstrating the country's tech entrepreneurship."
            }
        ]
    },

    'p-ip-basics': {
        1: [
            {
                q: "What is intellectual property (IP) in academic research?",
                options: ["Creations of mind that can be protected: inventions, works, designs", "Physical laboratory equipment", "Research data only", "Published papers only"],
                correct: 0,
                explanation: "IP includes patents, copyrights, trademarks, trade secrets, and designs arising from research."
            },
            {
                q: "What is a patent?",
                options: ["Exclusive right granted for an invention for limited time", "A type of publication", "A research grant", "A teaching certificate"],
                correct: 0,
                explanation: "Patents protect inventions, granting exclusive rights typically for 20 years in exchange for disclosure."
            },
            {
                q: "What is a Technology Transfer Office (TTO)?",
                options: ["University unit helping commercialize research results", "A government tax office", "A teaching department", "An IT support service"],
                correct: 0,
                explanation: "TTOs help researchers protect IP, license technologies, and create spin-off companies."
            }
        ],
        2: [
            {
                q: "What is licensing in technology transfer?",
                options: ["Granting rights to use IP in exchange for fees/royalties", "Publishing open source software", "Teaching a course", "Hiring new researchers"],
                correct: 0,
                explanation: "Licensing allows companies to use university IP while the university retains ownership."
            },
            {
                q: "What is a spin-off company?",
                options: ["New company created to commercialize university research", "A company that closes down", "A subsidiary of a large corporation", "A student organization"],
                correct: 0,
                explanation: "Spin-offs commercialize research results, often with researchers as founders and university as shareholder."
            },
            {
                q: "Who typically owns IP created at Estonian universities?",
                options: ["The university, with inventor rights to share in revenues", "Always the individual researcher", "Always the government", "Always the funding agency"],
                correct: 0,
                explanation: "Estonian universities typically own employee-created IP, with inventors receiving revenue shares."
            }
        ],
        3: [
            {
                q: "What is 'freedom to operate' analysis?",
                options: ["Assessment of whether your product infringes existing patents", "Permission to work anywhere", "Open source licensing", "Academic freedom policy"],
                correct: 0,
                explanation: "Freedom to operate analysis checks if commercializing research would infringe others' IP rights."
            },
            {
                q: "What is the difference between IP protection and open science?",
                options: ["IP restricts use for commercial gain; open science maximizes access", "They are the same concept", "Open science means no IP protection ever", "IP only applies to industry"],
                correct: 0,
                explanation: "IP and open science represent different strategies; they can coexist with appropriate timing and planning."
            },
            {
                q: "What is a non-disclosure agreement (NDA)?",
                options: ["Contract protecting confidential information in collaborations", "Publishing agreement with journals", "Employment contract", "Grant application form"],
                correct: 0,
                explanation: "NDAs protect confidential information when discussing potential collaborations or commercialization."
            },
            {
                q: "When should researchers contact TTO about potential IP?",
                options: ["Before any public disclosure (publication, presentation, discussion)", "After the paper is published", "Only when a company approaches", "Never, IP is automatic"],
                correct: 0,
                explanation: "Early TTO contact is crucial as public disclosure can prevent patent protection."
            }
        ]
    },

    'p-compliance': {
        1: [
            {
                q: "What is research ethics committee approval needed for?",
                options: ["Research involving human participants, sensitive data, or animals", "All research projects automatically", "Only medical research", "Only funded research"],
                correct: 0,
                explanation: "Ethics approval is required for research involving humans, personal data, animals, or sensitive topics."
            },
            {
                q: "What is GDPR in research context?",
                options: ["EU data protection regulation affecting research with personal data", "A grant funding program", "A publication format", "A laboratory safety standard"],
                correct: 0,
                explanation: "GDPR regulates how personal data is collected, processed, and stored in research."
            },
            {
                q: "What is informed consent in research?",
                options: ["Participant agreement after understanding research purpose and risks", "Journal acceptance of a paper", "Employer permission to do research", "Automatic consent through participation"],
                correct: 0,
                explanation: "Informed consent requires explaining the research and obtaining voluntary agreement to participate."
            }
        ],
        2: [
            {
                q: "What is a Data Protection Impact Assessment (DPIA)?",
                options: ["Analysis of data processing risks required for high-risk activities", "Assessment of research impact factor", "Evaluation of data quality", "Database performance testing"],
                correct: 0,
                explanation: "DPIA is required when data processing poses high risks to individuals' rights and freedoms."
            },
            {
                q: "What are the principles of research data processing under GDPR?",
                options: ["Purpose limitation, data minimization, accuracy, storage limitation", "Collect as much data as possible", "Keep data forever for future use", "No restrictions on data use"],
                correct: 0,
                explanation: "GDPR requires specific purpose, minimal necessary data, accuracy, and limited retention."
            },
            {
                q: "What is the role of a Data Protection Officer?",
                options: ["Advises organization on data protection compliance", "Protects physical data storage", "Manages IT security systems", "Approves all research projects"],
                correct: 0,
                explanation: "DPOs advise on GDPR compliance and serve as contact point for data protection issues."
            }
        ],
        3: [
            {
                q: "What are lawful bases for processing personal data in research?",
                options: ["Consent, public interest, legitimate interest (varies by context)", "Any reason is acceptable", "Only consent is ever valid", "Research is automatically exempt"],
                correct: 0,
                explanation: "Research typically relies on consent or public interest, with specific conditions for each."
            },
            {
                q: "What is the research exemption under GDPR?",
                options: ["Special provisions allowing certain flexibility for scientific research", "Complete exemption from all GDPR rules", "Only applies to medical research", "No such exemption exists"],
                correct: 0,
                explanation: "GDPR provides some flexibility for research but still requires appropriate safeguards."
            },
            {
                q: "What reporting is required for EU-funded projects?",
                options: ["Periodic reports, financial statements, and deliverables on schedule", "Only a final report at project end", "No reporting required", "Only oral presentations"],
                correct: 0,
                explanation: "EU projects require regular reporting on progress, finances, and deliverables."
            },
            {
                q: "What is research integrity in compliance context?",
                options: ["Adherence to ethical principles: honesty, rigor, transparency, fairness", "Following only legal requirements", "Publishing frequently", "Securing large grants"],
                correct: 0,
                explanation: "Research integrity encompasses ethical conduct beyond mere legal compliance."
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
