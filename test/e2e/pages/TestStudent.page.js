import * as constants from '../constants/TestStudent.constants'

class TestStudent{
    get Student_Page_URL(){
        return $(constants.STUDENT_PAGE_URL);
    }

    get search_by_option(){
        return $(constants.SEACH_BY_OPTION);
    }

    get select_field(){
        return $(constants.SELECT_FIELD);
    }

    get student_name(){
        return $(constants.STUDENT_NAME);
    }

    get user_name(){
        return $(constants.USER_NAME);
    }

    get email_name(){
        return $(constants.EMAIL_SELECTOR);
    }

    get date_of_registration(){
        return $(constants.DATE_OF_REGISTRATION);
    }

    get threeDot(){
        return $(constants.ThreeDot);
    }

    get sendTemporaryPassword(){
        return $(constants.SendTemporaryPassword);
    }

    get DeleteStudent(){
        return $(constants.DeleteStudent);
    }

    get viewTutor(){
        return $(constants.ViewTutor);
    }

    get tutorUserName(){
        return $(constants.tutorUserName);
    }

    get tutorFullName(){
        return $(constants.tutorFullName);
    }

    get tutorEmail(){
        return $(constants.tutorEmail);
    }

    get tutorStatus(){
        return $(constants.Status);
    }

    get RemoveButton(){
        return $(constants.RemoveButton);
    }

    get registerButton(){
        return $(constants.RegisterButton);
    }

    get clickonsingleStudentRegistration(){
        return $(constants.clickOnsingleStudentRegistration);
    }

    get clickOnmultiRegitration(){
        return $(constants.ClickOnmultiRegistration);
    }

    get NewFullName(){
        return $(constants.fullname);
    }

    get NewUserName(){
        return $(constants.Newusername);
    }

    get Flag(){
        return $(constants.Flag);
    }
    get telephoneField(){
        return $(constants.telephoneField)
    }

    get emailField(){
        return $(constants.EmailField);    
    }

    open(){
        browser.url(constants.STUDENT_PAGE_URL);
    }

    SearchFunctionality(student){
        this.search_by_option.click();
        this.search_by_option.setValue(student.option);
        this.select_field.click();
        this.select_field.setValue(student.searchWord +"\n");
        let firstNameOfUser = this.user_name.gettext();
        let string2 = '\n\n\n\n\n\n'+firstNameOfUser+'\n\n\n\n\n\n';
        console.log(string2);
    }

    SingleStudentRegistration(NewStudentData){
        this.registerButton.click();
        this.SingleStudentRegistration.click();
        this.NewFullName.setValue(NewStudentData.Name);
        this.NewUserName.setValue(NewStudentData.UserName);
        this.telephoneField.setValue(NewStudentData.TelephoneNo);
        this.emailField.setValue(NewStudentData.Email);
        

    }

}
export const teststudent = new TestStudent();