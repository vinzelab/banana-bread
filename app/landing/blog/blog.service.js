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
var BlogService = (function () {
    // 3C
    function BlogService() {
        this.articles = [
            { title: 'Cras mattis consectetur purus sit amet', date: 'DECEMBER 17, 2015 ', category: 'lifestyle', url: 'app/img/work1.jpg', description: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper.Nullam id dolor id nibh elit... ' },
            { title: 'Cras mattis consectetur purus sit amet', date: 'DECEMBER 17, 2015 ', category: 'lifestyle', url: 'app/img/work1.jpg', description: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper.Nullam id dolor id nibh elit... ' },
            { title: 'Cras mattis consectetur purus sit amet', date: 'DECEMBER 17, 2015 ', category: 'lifestyle', url: 'app/img/work1.jpg', description: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper.Nullam id dolor id nibh elit... ' }
        ];
    }
    // 3D
    BlogService.prototype.getArticles = function () {
        return this.articles;
    };
    BlogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map