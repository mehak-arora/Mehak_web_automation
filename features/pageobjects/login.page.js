"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = __importDefault(require("./page"));
/**
 * sub page containing specific selectors and methods for a specific page
 */
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LoginPage.prototype, "inputUsername", {
        /**
         * define selectors using getter methods
         */
        get: function () { return $('#username'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "inputPassword", {
        get: function () { return $('#password'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "btnSubmit", {
        get: function () { return $('button[type="submit"]'); },
        enumerable: false,
        configurable: true
    });
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    LoginPage.prototype.login = function (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    };
    /**
     * overwrite specifc options to adapt it to page object
     */
    LoginPage.prototype.open = function () {
        return _super.prototype.open.call(this, 'login');
    };
    return LoginPage;
}(page_1.default));
exports.default = new LoginPage();
