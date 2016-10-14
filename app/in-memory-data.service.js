"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var projects = [
            { id: 0,
                type: "Programming",
                name: "Mammal Herbivory Simulator",
                logo: "app/images/angularjs.png",
                screenshots: ["app/images/browse1.png",
                    "app/images/browse2.png", "app/images/browse3.png"],
                captions: ["Simulation visualization and statistics",
                    "User modifiable fields", "Modal window with additional options"],
                shortDescription: ("A user-modifiable simulation of organism movement, " +
                    "camera capture accuracy, and population estimation"),
                longDescription: [("An algorithm-driven program in Javascript and " +
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
                link: 1,
                linkName: "Information Systems Resource Support Technician"
            },
            { id: 1,
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
                    ("Performed budget calculation of payments and to subjects, IRBs, and clinics") +
                        ("Automated record keeping and generation of customer letters and payment " +
                            "requests"),
                    ("Also created instructional documents and training of peers in the use of " +
                        "this tool")],
                link: 1,
                linkName: "Compliance Coordinator"
            },
            { id: 2,
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
                link: 1,
                linkName: "Regulatory Affairs Specialist II"
            },
            { id: 3,
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
                linkName: ""
            },
            { id: 4,
                type: "Employment",
                name: "Product Compliance Specialist",
                logo: "",
                screenshots: [""],
                captions: [("")],
                shortDescription: (""),
                longDescription: [("")],
                link: null,
                linkName: ""
            },
            { id: 5,
                type: "Employment",
                name: "Information Systems Resource Support Technician",
                logo: "",
                screenshots: [""],
                captions: [("")],
                shortDescription: (""),
                longDescription: [("")],
                link: null,
                linkName: ""
            },
            { id: 6,
                type: "Employment",
                name: "Regulatory Affairs Specialist II",
                logo: "",
                screenshots: [""],
                captions: [("")],
                shortDescription: (""),
                longDescription: [("")],
                link: null,
                linkName: ""
            },
            { id: 7,
                type: "Employment",
                name: "Quality Coordinator",
                logo: "",
                screenshots: [""],
                captions: [("")],
                shortDescription: (""),
                longDescription: [("")],
                link: null,
                linkName: ""
            },
            { id: 8,
                type: "Skill",
                name: "",
                logo: "",
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