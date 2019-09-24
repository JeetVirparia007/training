import {
    SIGNIN_PAGE_URL,
    SIGNIN_BUTTON_SELECTOR,
    EMAIL_INPUT_SELECTOR,
    PASSWORD_INPUT_SELECTOR,
} from '../constants/SigninPageSelectors.constant';
import { LOGOUT_BUTTON_SELECTOR } from '../constants/DashboardSummuryPageSelectors.constant';

class LoginPage {
    open() {
        browser.url(SIGNIN_PAGE_URL);
    }

    get inputEmail() {
        return $(EMAIL_INPUT_SELECTOR);
    }

    get inputPassword() {
        return $(PASSWORD_INPUT_SELECTOR);
    }

    get buttonSignIn() {
        return $(SIGNIN_BUTTON_SELECTOR);
    }

    // get welcomeMessage() {
    //     return $('#root > div > div:nth-child(3) > div > header > h5');
    // }

    get logoutButton() {
        return $(LOGOUT_BUTTON_SELECTOR);
    }

    login(user) {
        this.inputEmail.waitForEnabled();
        this.inputEmail.setValue(user.email);
        this.inputPassword.setValue(user.password);
        this.buttonSignIn.click();
        // this.welcomeMessage.waitForExist();
    }
}

export const loginPage = new LoginPage();
