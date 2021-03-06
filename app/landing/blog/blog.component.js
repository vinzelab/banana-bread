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
var blog_service_1 = require('./blog.service');
var BlogComponent = (function () {
    // Inject BlogService and assign it to _blogService
    function BlogComponent(_blogService) {
        // Utilize .get request from app/blog.service.ts to populate article object
        this.articles = _blogService.getArticles();
    }
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'app-blog',
            providers: [blog_service_1.BlogService],
            templateUrl: 'app/landing/blog/blog.component.html'
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map