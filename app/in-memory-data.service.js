"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var projects = [
            { id: 0, name: "Mammal Browsing Simulator" },
            { id: 1, name: "Archipel.io" },
            { id: 2, name: "Payments Database" },
            { id: 3, name: "DCHS Website" }
        ];
        return { projects: projects };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map