import { SIGNIN_BUTTON_SELECTOR,
        EMAIL_INPUT_SELECTOR,
        PASSWORD_INPUT_SELECTOR,
        SIGNIN_OPTION_SELECTOR,
        LOGOUT_BUTTON_SELECTOR
 } from '../constants/TestLogin.constants';

class TestLoginPage{
        open(){
                browser.url('/');
        }

        get inputEmail(){
                return $(EMAIL_INPUT_SELECTOR);
        }
        get inpurtPassword(){
                return $(PASSWORD_INPUT_SELECTOR);
        }
        get inputSignInButton(){
                return $(SIGNIN_BUTTON_SELECTOR);
        }
        get inputSignINOptionButton(){
                return $(SIGNIN_OPTION_SELECTOR);
        }
        get LogoutButton(){
                return $(LOGOUT_BUTTON_SELECTOR);
        }

        login(user){
                this.inputSignINOptionButton.click();
                this.inputEmail.waitForEnabled();
                this.inputEmail.setValue(user.email);
                this.inpurtPassword.setValue(user.password);
                this.inputSignInButton.click();
        }
}

export const testLoginPage = new TestLoginPage();