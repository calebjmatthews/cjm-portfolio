export class InMemoryDataService {
  createDb() {
    let projects = [
      { id: 0, name: "Mammal Browsing Simulator" },
      { id: 1, name: "Archipel.io" },
      { id: 2, name: "Payments Database" },
      { id: 3, name: "DCHS Website" }
    ];
    return {projects};
  }
}
