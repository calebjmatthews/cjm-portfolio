"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var projects = [
            { id: 0,
                type: "Programming",
                name: "Mammal Herbivory Simulator",
                logo: "angularjs.png",
                screenshot: ["app/images/browse1.png",
                    "./app/images/browse2.tiff", "./app/images/browse3.tiff"],
                shortDescription: ("A user-modifiable simulation of organism movement, " +
                    "camera capture accuracy, and population estimation."),
                longDescription: [("An algorithm-driven program in Javascript and " +
                        "AngularJS designed to simulate camera observation research of mammal " +
                        "herbivory."),
                    ("This modeling software was developed as a browser application, " +
                        "able to be shared with students or the public as a stand-alone webpage"),
                    ("Two methods of random distribution were used to model organism " +
                        "movement, Rayleigh (Gaussian) and Levy (heavy-tailed)"),
                    ("Used the HTML canvas to display orgnism movement and camera " +
                        "size/placement"),
                    ("Automatically generated an array of statistics to compare two " +
                        "competing population estimation methods")],
                // link: null,
                linkName: "Information Systems Resource Support Technician" },
            { id: 1,
                name: "Archipel.io",
                screenshot: [""],
                shortDescription: "",
                longDescription: [""] },
            { id: 2,
                name: "Payments Database",
                screenshot: [""],
                shortDescription: "",
                longDescription: [""] },
            { id: 3,
                name: "DCHS Website",
                screenshot: [""],
                shortDescription: "",
                longDescription: [""] }
        ];
        return { projects: projects };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map