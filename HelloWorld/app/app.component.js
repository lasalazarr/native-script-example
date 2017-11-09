"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    // Your TypeScript logic goes here
    function AppComponent() {
        console.log("Hello World");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My Apple\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/apple.jpg\"></Image>\n  ",
            styles: ["\n    @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360); }\n    }\n    Image {\n      animation-name: spin; animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFtQjFDO0lBQ0Usa0NBQWtDO0lBRWxDO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBTFUsWUFBWTtRQWpCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSwySEFHVDtZQUNELE1BQU0sRUFBRSxDQUFDLHdRQVNSLENBQUM7U0FDSCxDQUFDOztPQUNXLFlBQVksQ0FNeEI7SUFBRCxtQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBsZVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9hcHBsZS5qcGdcIj48L0ltYWdlPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfSB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MCk7IH1cbiAgICB9XG4gICAgSW1hZ2Uge1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW47IGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpO1xuICB9XG59XG4iXX0=