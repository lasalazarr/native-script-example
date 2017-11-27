"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    // Your TypeScript logic goes here
    // Revisar que hacer con los componentes
    function AppComponent() {
        console.log("Hello World");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My Apple\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/apple.jpg\"></Image>\n  ",
            styles: ["\n    @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360); }\n    }\n    Image {\n      animation-name: spin; animation-duration: 10s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFtQjFDO0lBQ0Usa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4QztRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUxVLFlBQVk7UUFqQnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsMkhBR1Q7WUFDRCxNQUFNLEVBQUUsQ0FBQyx5UUFTUixDQUFDO1NBQ0gsQ0FBQzs7T0FDVyxZQUFZLENBTXhCO0lBQUQsbUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTXkgQXBwbGVcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cbiAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvYXBwbGUuanBnXCI+PC9JbWFnZT5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH0gdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjApOyB9XG4gICAgfVxuICAgIEltYWdlIHtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluOyBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICAvLyBSZXZpc2FyIHF1ZSBoYWNlciBjb24gbG9zIGNvbXBvbmVudGVzXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGRcIik7XG4gIH1cbn1cbiJdfQ==