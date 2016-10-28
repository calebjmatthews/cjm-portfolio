"use strict";
class InMemoryDataService {
    createDb() {
        let projects = [
            { id: 1,
                type: "Programming",
                name: "Mammal Herbivory Simulator",
                logo: "app/images/angularjs.png",
                screenshots: ["app/images/browse1.png",
                    "app/images/browse2.png", "app/images/browse3.png"],
                captions: ["Simulation visualization and statistics",
                    "User modifiable fields", "Modal window with additional options"],
                shortDescription: ("A user-modifiable simulation of organism movement, " +
                    "camera capture accuracy, and population estimation"),
                longDescription: [("An algorithm-driven program in Javascript, Bootstrap, " +
                        "Angular1 designed to simulate camera observation research of mammal " +
                        "herbivory"),
                    ("This modeling software was developed as a browser application, " +
                        "able to be shared with students or the public as a stand-alone " +
                        "web application"),
                    ("Two methods of random distribution were used to model organism " +
                        "movement, Rayleigh (Gaussian) and Levy (heavy-tailed)"),
                    ("Used the HTML canvas to display orgnism movement and camera " +
                        "size/placement"),
                    ("Automatically generated an array of statistics to compare two " +
                        "competing population estimation methods")],
                link: [5],
                linkName: ["Information Systems Resource Support Technician"],
                tags: ["Mammal Herbivory Simulator",
                    "Information Systems Resource Support Technician", "AngularJS", "Angular1",
                    "Javascript", "Bootstrap", "AngularJS", "Angular1", "Ecological Modeling",
                    "UW Madison", "Eric Kruger", "Random Walk", "HTML Canvas", "Web Design"]
            },
            { id: 2,
                type: "Programming",
                name: "Clinical Payments Database",
                logo: "app/images/msaccess.png",
                screenshots: [],
                captions: [("")],
                shortDescription: ("A Microsoft Access database that automated the clinical " +
                    "study payment process"),
                longDescription: [("This Microsoft Access database was developed to automate " +
                        "payment to clinics, audiologists, and patients for participation in " +
                        "several active clinical studies"),
                    ("Utilized SQL to connect to electronic data capture systems for study visit " +
                        "information"),
                    ("Performed budget calculation of payments and to subjects, IRBs, and " +
                        " clinics"),
                    ("Automated record keeping and generation of customer letters and payment " +
                        "requests"),
                    ("Also created instructional documents and training of peers in the use of " +
                        "this tool")],
                link: [8],
                linkName: ["Quality Coordinator"],
                tags: ["Clinical Payments Database", "Compliance Coordinator",
                    "Cochlear Americas", "Microsoft Access", "Database", "SQL",
                    "Clinical Study Payments", "Protocol and SOP Writing"]
            },
            { id: 3,
                type: "Programming",
                name: "FDA Panel Data Analysis",
                logo: "app/images/msvba.png",
                screenshots: ["app/images/hybrid1.png", "app/images/hybrid2.png",
                    "app/images/hybrid3.png", "app/images/hybrid4.png",
                    "app/images/hybrid5.png", "app/images/hybrid6.png"],
                captions: [("")],
                shortDescription: ("A macro-heavy spreadsheet used to perform on-demand " +
                    "data analysis during a critical presentation to the FDA"),
                longDescription: [("In order to support Pre-Market Approval (PMA) for a " +
                        "Class III medical device (The Cochlear Hybrid Implant), our team needed " +
                        "the capability to produce new graphical displays of data within seconds"),
                    ("This Microsoft Excel spreadsheet used a series of macros to perform " +
                        "secondary data analysis and generate charts and graphs to display " +
                        "this data"),
                    ("During the question and answer portion of the panel meeting, this " +
                        "tool was used successfully to create several supporting slides"),
                    ("The meeting was a success; the Hybrid Implant was recommended for " +
                        "approval by the panel of experts")],
                link: [7],
                linkName: ["Regulatory Affairs Specialist II"],
                tags: ["FDA Panel Data Analysis", "Regulatory Affairs Specialist II",
                    "Cochlear Americas", "Cochlear Hybrid Implant",
                    "Food and Drug Administration",
                    "Class III Medical Device PMA Panel Meeting", "Microsoft Excel",
                    "Visual Basic for Applications", "Data Presentation"]
            },
            { id: 4,
                type: "Programming",
                name: "Archipel.io",
                logo: "app/images/typescript.png",
                screenshots: ["app/images/archipelio1.png", "app/images/archipelio3.png",
                    "app/images/archipelio2.png"],
                captions: [("A screenshot of Archipel.io in action")],
                shortDescription: ("A strategy browser game developed as an exercise in " +
                    "Typescript, Object Oriented Programming, and real time graphical display"),
                longDescription: [("Archipel.io is built with Typescript and PixiJS, a " +
                        "Javascript WebGL renderer"),
                    ("The game features procedural island generation, local two-player " +
                        " gameplay, and an incremental settlement-building theme"),
                    ("It utilizes a custom-made (x,y) point and (x,y,z) hexagon system " +
                        "of classes and functions for UI and graphical display")],
                link: null,
                linkName: [""],
                tags: ["Archipel.io", "Typescript", "Javascript", "PixiJS", "Web Design",
                    "WebGL"]
            },
            {
                id: 9,
                type: "Self",
                name: "Development Portfolio",
                logo: "app/images/typescript.png",
                screenshots: ["app/images/archipelio1.png", "app/images/archipelio3.png",
                    "app/images/archipelio2.png"],
                captions: [("A screenshot of Archipel.io in action")],
                shortDescription: ("A strategy browser game developed as an exercise in " +
                    "Typescript, Object Oriented Programming, and real time graphical display"),
                longDescription: [("Archipel.io is built with Typescript and PixiJS, a " +
                        "Javascript WebGL renderer"),
                    ("The game features procedural island generation, local two-player " +
                        " gameplay, and an incremental settlement-building theme"),
                    ("It utilizes a custom-made (x,y) point and (x,y,z) hexagon system " +
                        "of classes and functions for UI and graphical display")],
                link: null,
                linkName: [""],
                tags: ["Archipel.io", "Typescript", "Javascript", "PixiJS", "Web Design",
                    "WebGL"]
            },
            { id: 5,
                type: "Employment",
                name: "Information Systems Resource Support Technician",
                employer: "UW Madison Kruger Labs",
                logo: "app/images/uwmadison.png",
                screenshots: ["app/images/browse1.png", "app/images/browse2.png",
                    "app/images/browse3"],
                captions: ["Simulation visualization and statistics",
                    "User modifiable fields", "Modal window with additional options"],
                shortDescription: ("Developed a program to address scientific questions " +
                    "about the validity of two different deer population estimation equations"),
                longDescription: [("Wrote an algorithm-driven program in Javascript and " +
                        "AngularJS designed to simulate camera-capture of mammal browsing"),
                    ("Wrote technical documentation detailing the function of the code and " +
                        "rationale behind design decisions"),
                    ("Continue to support the program through multiple code revisions and " +
                        "requests for additional features")],
                link: [1],
                linkName: ["Mammal Herbivory Simulator"]
            },
            { id: 6,
                type: "Employment",
                name: "Product Compliance Specialist",
                employer: "Accuray, Inc.",
                logo: "app/images/accuray.png",
                screenshots: ["app/images/accuray1.png", "app/images/accuray2.png"],
                captions: ["A TomoTehrapy device, Accuray's flagship product",
                    "A CyberKnife device"],
                shortDescription: ("Managed medical device events for TomoTherapy " +
                    "and CyberKnife devices, and performed a highly effective rework of the " +
                    "existing event coding categorization system"),
                longDescription: [("Initiated and managed a rework of the event coding " +
                        "system, which allowed product events to be broken down with greater " +
                        "consistency and in greater granularity"),
                    ("This project involved working with  product experts and users of the " +
                        "previous coding system, and will be used as a primary driver of " +
                        "product investigation thresholds moving forward"),
                    ("The set of event codes was monitored and adjusted biweekly to capture " +
                        "changing trends from the field"),
                    ("Processed medical device events to ensure accuracy and completeness, as " +
                        "well as to escalate for further investigation when appropriate"),
                    ("Performed product investigations to determine root cause and potential " +
                        "impact in cases where the device malfunctioned or did not meet " +
                        "specification"),
                    ("Wrote and managed an Event Report regarding field service errors, " +
                        "including presentation to the CAPA Review Board")],
                link: null,
                linkName: [""]
            },
            { id: 7,
                type: "Employment",
                name: "Regulatory Affairs Specialist II",
                employer: "Cochlear Americas",
                logo: "app/images/cochlear.png",
                screenshots: ["app/images/ras2.png", "app/images/ras1.png",
                    "app/images/hybrid3.png"],
                captions: [("An example of marketing material I reviewed as part of the CRB"),
                    ("The Cochlear Hybrid device, the subject of our team's PMA"),
                    ("An example of secondary data analysis to support the Hybrid PMA")],
                shortDescription: ("A broad range of successes, such as " +
                    "approval of a PMA for a new Class III device, and acceptance of " +
                    "over a dozen regulatory submissions"),
                longDescription: [("Managed a Class III product recall whose scope " +
                        "extended to the United States and Canada, from initial notice to recall " +
                        "closure"),
                    ("Audited clinical study sites to ensure proper informed consent, " +
                        "adherence to GCP and study protocol, validity of records, and " +
                        "calibration of equipment"),
                    ("Author of over a dozen successful regulatory submissions, including " +
                        "510ks, 180 Day Notices, and Real Time Reviews"),
                    ("Principal member of Class III PMA Panel Meeting team, roles included " +
                        "responsibility for secondary analysis and graphical presentation of " +
                        "data, creation and organization of backup materials, and ad hoc data " +
                        "analysis and presentation during meeting"),
                    ("Wrote regulatory procedures and work instructions"),
                    ("Regulatory member of Content Review Board, which reviewed marketing " +
                        "materials (patient-, clinic-, and internal-facing) to ensure compliance " +
                        "with approved product claims, clinical trial data, and FDA regulations"),
                    ("Participated in several distributor site audits in regulatory advisory " +
                        "and document retrieval roles")],
                link: [3],
                linkName: ["FDA Panel Data Analysis"]
            },
            { id: 8,
                type: "Employment",
                name: "Quality Coordinator",
                employer: "Cochlear Americas",
                logo: "app/images/cochlear.png",
                screenshots: [""],
                captions: [("")],
                shortDescription: ("Dramatically improved the Quality and Clinical Study " +
                    "Systems by overhauling SOPs and automating the clinical study " +
                    "payment process"),
                longDescription: [("Creation, filing, and management of over 1500 Medical " +
                        "Device Reports and Adverse Event records"),
                    ("Support of the initiation of a clinical study, including CRO selection, " +
                        "IRB applications, logistical management of Investigator’s Meeting, and " +
                        " creation of CRFs and study documents"),
                    ("Review of published literature for product-related adverse events"),
                    ("Design, development, and maintenance of an MS Access Database which " +
                        "featured: utilization of SQL to connect to electronic data capture " +
                        "systems for financial processing of clinical studies; calculation " +
                        "of payments to subjects, IRBs, and clinics; and automatic record keeping " +
                        "and automatic generation of letters and payment requests."),
                    ("Also responsible for work instruction documents and training of peers " +
                        "in the use of this tool and unrelated procedures for clinical " +
                        "study payments")],
                link: [2],
                linkName: ["Clinical Payments Database"]
            },
            { id: 10,
                type: "Skill",
                name: "Javascript",
                familiarity: 3,
                logo: "app/images/javascript.png",
                link: [1, 4, 5, 9],
                linkName: ["Mammal Herbivory Simulator", "Archipel.io",
                    "Information Systems Resource Support Technician", "Development Portfolio"],
                tags: ["Javascript", "JS"]
            },
            { id: 11,
                type: "Skill",
                name: "Typescript",
                familiarity: 3,
                logo: "app/images/typescript.png",
                link: [4, 9],
                linkName: ["Archipel.io", "Development Portfolio"],
                tags: ["Typescript", "TS"]
            },
            { id: 12,
                type: "Skill",
                name: "HTML",
                familiarity: 3,
                logo: "app/images/html.png",
                link: [1, 4, 5, 9],
                linkName: ["Mammal Herbivory Simulator", "Archipel.io",
                    "Information Systems Resource Support Technician", "Development Portfolio"],
                tags: ["HTML", "HyperText Markup Language"]
            },
            { id: 13,
                type: "Skill",
                name: "Bootstrap",
                familiarity: 3,
                logo: "app/images/bootstrap.png",
                link: [1, 5, 9],
                linkName: ["Mammal Herbivory Simulator",
                    "Information Systems Resource Support Technician", "Development Portfolio"],
                tags: ["Bootstrap"],
            },
            { id: 14,
                type: "Skill",
                name: "Visual Basic for Applications",
                familiarity: 3,
                logo: "app/images/msvba.png",
                link: [2, 3, 7, 8],
                linkName: ["Clinical Payments Database", "FDA Panel Data Analysis",
                    "Regulatory Affairs Specialist II", "Quality Coordinator"],
                tags: ["Visual Basic for Applications", "VBA"]
            },
            { id: 15,
                type: "Skill",
                name: "Technical Writing",
                familiarity: 3,
                logo: "app/images/pen.png",
                link: [1, 3, 5, 6, 7, 8],
                linkName: ["Mammal Herbivory Simulator", "FDA Panel Data Analysis",
                    "Information Systems Resource Support Technician",
                    "Product Compliance Specialist", "Regulatory Affairs Specialist II",
                    "Quality Coordinator"],
                tags: ["Technical Writing"]
            },
            { id: 16,
                type: "Skill",
                name: "Regulatory Affairs",
                familiarity: 3,
                logo: "app/images/rac.png",
                link: [3, 6, 7, 8],
                linkName: ["FDA Panel Data Analysis",
                    "Product Compliance Specialist", "Regulatory Affairs Specialist II",
                    "Quality Coordinator"],
                tags: ["Regulatory Affairs", "RA", "RAC", "ISO 13485", "21 CFR 820"]
            },
            { id: 17,
                type: "Skill",
                name: "Clinical Studies Management",
                familiarity: 3,
                logo: "app/images/caduceus.png",
                link: [2, 7, 8],
                linkName: ["Clinical Payments Database", "Regulatory Affairs Specialist II",
                    "Quality Coordinator"],
                tags: ["Clinical Studies Management", "21 CFR 812", "21 CFR 56", "21 CFR 50"]
            },
            { id: 18,
                type: "Skill",
                name: "Quality Management System",
                familiarity: 3,
                logo: "app/images/qms.png",
                link: [6, 7, 8],
                linkName: ["Product Compliance Specialist", "Regulatory Affairs Specialist II",
                    "Quality Coordinator"],
                tags: ["Quality Management System", "QMS", "ISO 13485", "21 CFR 820"]
            },
            { id: 19,
                type: "Skill",
                name: "Cascading Style Sheets (CSS)",
                familiarity: 2,
                logo: "app/images/css.png",
                link: [1, 4, 5, 9],
                linkName: ["Mammal Herbivory Simulator", "Archipel.io",
                    "Information Systems Resource Support Technician", "Development Portfolio"],
                tags: ["Cascading Style Sheets", "CSS"]
            },
            { id: 20,
                type: "Skill",
                name: "AngularJS",
                familiarity: 2,
                logo: "app/images/angularjs.png",
                link: [1, 5, 9],
                linkName: ["Mammal Herbivory Simulator",
                    "Information Systems Resource Support Technician", "Development Portfolio"],
                tags: ["AngularJS"]
            },
            { id: 21,
                type: "Skill",
                name: "Angular2",
                familiarity: 2,
                logo: "app/images/angularjs.png",
                link: [9],
                linkName: ["Development Portfolio"],
                tags: ["Angular2"]
            },
            { id: 22,
                type: "Skill",
                name: "SQL",
                familiarity: 2,
                logo: "app/images/sql.png",
                link: [2],
                linkName: ["Clinical Payments Database"],
                tags: ["SQL", "SQL Server"]
            },
            { id: 23,
                type: "Skill",
                name: "User Experience Design (UX)",
                familiarity: 2,
                logo: "app/images/ux.png",
                link: [2, 3, 4, 9],
                linkName: ["Clinical Payments Database", "FDA Panel Data Analysis",
                    "Archipel.io", "Development Portfolio"],
                tags: ["User Experience Design", "UX"]
            },
            { id: 24,
                type: "Skill",
                name: "Statistical Analysis",
                familiarity: 2,
                logo: "app/images/graph.png",
                link: [1, 3, 5, 7],
                linkName: ["Mammal Herbivory Simulator", "FDA Panel Data Analysis",
                    "Information Systems Resource Support Technician",
                    "Regulatory Affairs Specialist II"],
                tags: ["Statistical Analysis"]
            },
            { id: 25,
                type: "Skill",
                name: "Python",
                familiarity: 1,
                logo: "app/images/python.png",
                link: null,
                linkName: [""],
                tags: ["Python"]
            },
            { id: 26,
                type: "Skill",
                name: "C++",
                familiarity: 1,
                logo: "app/images/c++.png",
                link: null,
                linkName: [""],
                tags: ["C++"]
            },
            { id: 27,
                type: "The Rest",
                name: "Where I Am",
                screenshots: ["app/images/madison.png"],
                longDescription: [("I moved to Madison, Wisconsin in the summer of 2014. " +
                        "About this same time programming was growing from a tool that I " +
                        "used at work, to a hobby that consumed huge pieces of my free time."),
                    ("Since my first job I had used VBA to avoid repetitive work, but it's " +
                        "been very different designing entire projects from the ground up, " +
                        "and I've loved it.")]
            },
            { id: 28,
                type: "The Rest",
                name: "Medical and Scientific Knowledge",
                screenshots: ["app/images/csu.png"],
                longDescription: [("I studied Biochemistry at Colorado State University " +
                        "from 2006 - 2010, and I was a registered Emergency Medical Technician " +
                        "(EMT-B) from 2010 - 2011."),
                    ("I haven't stopped loving medicine. Working with cochlear implant and " +
                        "radiation therapy manufacturers has given me a fascinating, " +
                        "inside view of the forefront of medical technology.")]
            },
            { id: 29,
                type: "The Rest",
                name: "Leadership and Writing",
                screenshots: ["app/images/dmfg.png"],
                longDescription: [("Two and a half years ago I founded the Downtown " +
                        "Madison Fiction Group, with the goal of working with other writers " +
                        "to improve style and clarity."),
                    ("We meet weekly, and have almost two hundred members.  Leading meetings " +
                        "has been intimidating work, and I've learned far more than I've taught."),
                    ("Several members have actually become published authors during their time " +
                        "with the group!")]
            }
        ];
        return { projects };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map