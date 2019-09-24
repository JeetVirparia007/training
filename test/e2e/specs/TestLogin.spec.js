import {testLoginPage } from '../pages/TestLogin.page'
import { assert,expect } from 'chai';
import { LOGOUT_BUTTON_TEXT } from '../constants/SystemLabels.constant';
describe('test login page for experiment',()=>{
   before('for Opening landing page.',()=>{
       testLoginPage.open();
   });

   it('It block to perform action on login page',()=>{
        const fs = require('fs');
        let rawdata =fs.readFileSync('C:\\Users\\jeet.virparia\\Downloads\\meetrix-teach-test-suite\\meetrix-teach-test-suite-14911cab54eed24da3944ff54b93ef93bfe95928\\test\\data\\Logins.json');
        let web = JSON.parse(rawdata);
        let user = web["user"];
        testLoginPage.login(user);        
      //  assert.equal(
       //     testLoginPage.LogoutButton.getAttribute("value"),
         //   LOGOUT_BUTTON_TEXT,
       // );
        //expect(testLoginPage.LogoutButton.getAttribute("value")).toContain("Logout");
        browser.driver.sleep(10000);
   })
});