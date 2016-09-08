export class InMemoryDataService {
  createDb() {
    let projects = [
      { id: 0, 
      	type: "Programming",
      	name: "Mammal Herbivory Simulator",
      	logo: "angularjs.png",
      	screenshot: ["app/images/browse1.png", 
      		"./app/images/browse2.tiff", "./app/images/browse3.tiff"], 
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
      	name: "Archipel.io", 
        logo: "",
      	screenshot: [""],  
      	shortDescription: "",
      	longDescription: [""],
        link: null,
        linkName: "" 
      },
      { id: 2, 
        type: "Programming", 
      	name: "Payments Database", 
      	logo: "",
        screenshot: [""],  
        shortDescription: "",
        longDescription: [""],
        link: null,
        linkName: "" 
      },
      { id: 3, 
        type: "Programming", 
      	name: "DCHS Website", 
      	logo: "",
        screenshot: [""],  
        shortDescription: "",
        longDescription: [""],
        link: null,
        linkName: "" 
      }
    ];
    return {projects};
  }
}
