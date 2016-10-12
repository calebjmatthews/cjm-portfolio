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
          "app/images/browse2.tiff", "app/images/browse3.tiff"],
        shortDescription: ("A user-modifiable simulation of organism movement, " +
          "camera capture accuracy, and population estimation"),
        longDescription: [("An algorithm-driven program in Javascript and " +
            "AngularJS designed to simulate camera observation research of mammal " +
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
        link: 0,
        linkName: "Compliance Coordinator"
      },
      { id: 2,
        type: "Programming",
        name: "FDA Panel Data Analysis",
        logo: "app/images/msvba.png",
        screenshots: ["app/images/hybrid1.png", "app/images/hybrid2.png", 
          "app/images/hybrid3.png", "app/images/hybrid4.png", 
          "app/images/hybrid5.png", "app/images/hybrid6.png"],
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
        logo: "typescript.png",
        screenshots: [""],
        shortDescription: "",
        longDescription: [""],
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