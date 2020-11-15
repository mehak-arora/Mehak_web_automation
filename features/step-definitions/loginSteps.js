"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var login_page_1 = __importDefault(require("../pageobjects/login.page"));
var pages = {
    login: login_page_1.default
};
cucumber_1.Given(/^I am on the (\w+) page$/, function (page) {
    pages[page].open();
});
cucumber_1.When(/^I login with (\w+) and (.+)$/, function (username, password) {
    login_page_1.default.login(username, password);
});
/*Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(message);
});*/
