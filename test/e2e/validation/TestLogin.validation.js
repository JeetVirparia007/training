import {testLoginPage } from '../pages/TestLogin.page'
import {assert} from 'chai';
class TestLogin {
    
    LogOutButtonValidation(){
        assert.equal(
            testLoginPage.LogoutButton.getAttribute("innerText"),
            " Logout",
        );
    }
}

export const logoutbuttonValidation = new TestLogin();