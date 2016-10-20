"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var projects = [
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
                link: 5,
                linkName: "Information Systems Resource Support Technician",
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
                link: 8,
                linkName: "Quality Coordinator",
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
                link: 7,
                linkName: "Regulatory Affairs Specialist II",
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
                linkName: "",
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
                shortDescription: ("My primary aim has been to develop a program to address " +
                    "scientific questions about the validity of two different deer population " +
                    "estimation equations"),
                longDescription: [("Wrote an algorithm-driven program in Javascript and " +
                        "AngularJS designed to simulate camera-capture of mammal browsing"),
                    ("Wrote technical documentation detailing the function of the code and " +
                        "rationale behind design decisions"),
                    ("Continue to support the program through multiple code revisions and " +
                        "requests for additional features")],
                link: null,
                linkName: ""
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
                linkName: ""
            },
            { id: 7,
                type: "Employment",
                name: "Regulatory Affairs Specialist II",
                employer: "Cochlear Americas",
                logo: "cochlear.png",
                screenshots: [""],
                captions: [("")],
                shortDescription: (""),
                longDescription: [("Managed a Class III product recall whose scope " +
                        "extended to the United States and Canada, from initial notice to recall " +
                        "closure"),
                    ("Audited clinical study sites to ensure proper informed consent, " +
                        "adherence to GCP and study protocol, validity of records, and " +
                        "calibration of equipment"),
                    ("Author of over a dozen successful regulatory submissions"),
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
                link: null,
                linkName: ""
            },
            { id: 8,
                type: "Employment",
                name: "Quality Coordinator",
                employer: "Cochlear Americas",
                logo: "cochlear.png",
                screenshots: [""],
                captions: [("")],
                shortDescription: (""),
                longDescription: [("")],
                link: null,
                linkName: ""
            },
            { id: 9,
                type: "Skill",
                name: "",
                familiarity: 0,
                logo: "",
                screenshots: [""],
                captions: [("")],
                shortDescription: (""),
                longDescription: [("")],
                link: null,
                linkName: ""
            },
            { id: 10,
                type: "Skill",
                name: "",
                familiarity: 0,
                logo: "",
                screenshots: [""],
                captions: [("")],
                shortDescription: (""),
                longDescription: [("")],
                link: null,
                linkName: ""
            },
            { id: 11,
                type: "Skill",
                name: "",
                familiarity: 0,
                logo: "",
                screenshots: [""],
                captions: [("")],
                shortDescription: (""),
                longDescription: [("")],
                link: null,
                linkName: ""
            }
        ];
        return { projects: projects };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map