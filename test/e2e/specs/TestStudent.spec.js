import {testLoginPage} from '../pages/TestLogin.page'
import {teststudent} from '../pages/TestStudent.page'

describe('student functionality',()=>{
    browser.ignoreSynchronization = true;
    before('before go to student page',()=>{
        testLoginPage.open();
        const fs = require('fs');
        let rawdata =fs.readFileSync('C:\\Users\\jeet.virparia\\Downloads\\meetrix-teach-test-suite\\meetrix-teach-test-suite-14911cab54eed24da3944ff54b93ef93bfe95928\\test\\data\\Logins.json');
        let web = JSON.parse(rawdata);
        console.log("\n\n\n\n\n\n\n")
        console.log(web["user"]);
        console.log("\n\n\n\n\n\n\n\n\n\n\n")
        let user = web["user"];
        testLoginPage.login(user);
    })

    it('after login going to student page.',()=>{
        browser.pause(15000); 
        teststudent.open();
        browser.pause(20000); 
        const fs = require('fs');
        let rawdata =fs.readFileSync('C:\\Users\\jeet.virparia\\Downloads\\meetrix-teach-test-suite\\meetrix-teach-test-suite-14911cab54eed24da3944ff54b93ef93bfe95928\\test\\data\\student.json');
        let web = JSON.parse(rawdata);
        console.log("\n\n\n\n\n\n\n")
        console.log(web["student"]);
        console.log("\n\n\n\n\n\n\n")
        let student = web["student"];
        teststudent.SearchFunctionality(student);
    })
})