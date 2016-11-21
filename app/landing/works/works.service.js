"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Step 2. Use @Injectable() to declare the FriendService class as an Injectable
var WorksService = (function () {
    // 3C
    function WorksService() {
        this.works = [
            { name: 'work name 1', category: 'portrait / landscape / lighting', url: 'app/img/work1.jpg' },
            { name: 'work name 2', category: 'portrait / landscape / lighting', url: 'app/img/work2.jpg' },
            { name: 'work name 3', category: 'portrait / landscape / lighting', url: 'app/img/work3.jpg' },
            { name: 'work name 4', category: 'portrait / landscape / lighting', url: 'app/img/work4.jpg' },
            { name: 'work name 5', category: 'portrait / landscape / lighting', url: 'app/img/work5.jpg' },
            { name: 'work name 6', category: 'portrait / landscape / lighting', url: 'app/img/work6.jpg' }
        ];
    }
    // 3D
    WorksService.prototype.getWorks = function () {
        return this.works;
    };
    WorksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WorksService);
    return WorksService;
}());
exports.WorksService = WorksService;
//# sourceMappingURL=works.service.js.map