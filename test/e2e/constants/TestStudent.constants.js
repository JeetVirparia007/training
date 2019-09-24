
// student screen locators
export const STUDENT_PAGE_URL = '#/dashboard/consultees';
export const SEACH_BY_OPTION = 'div[class="flex-filter-options"] > div:nth-child(1) div[class="Select-multi-value-wrapper"] > div:nth-child(1)';
export const SELECT_FIELD = '.Select-placeholder';
export const STUDENT_NAME = 'tr:first-of-type td[class="results-td padding-set image-hold"] div';
export const USER_NAME = 'tr:first-of-type > td:nth-of-type(2)[class="results-td padding-set"] >div';
export const EMAIL_SELECTOR = 'tr:first-of-type > td:nth-of-type(3)[class="results-td padding-set"] >div';
export const DATE_OF_REGISTRATION = 'tr:first-of-type > td:nth-of-type(4)[class="results-td padding-set"] >div';
export const ThreeDot = 'tr:nth-of-type(1) i[class="fas fa-ellipsis-h"]';
export const SendTemporaryPassword = 'div[aria-hidden="false"] >button[class = "dropdown-itemes-in-results dropdown-item"]';
export const DeleteStudent = 'div[aria-hidden="false"] >button[class = "dropdown-item"]';

// after click on view tutor  ****************************************************************************************************
export const ViewTutor = 'a[class="btn table-action link-color"]';
export const tutorUserName = 'table[classsname="add-students-table"] tbody tr:nth-child(1) td:nth-child(1)';
export const tutorFullName = 'table[classsname="add-students-table"] tbody tr:nth-child(1) td:nth-child(2)';
export const tutorEmail = 'table[classsname="add-students-table"] tbody tr:nth-child(1) td:nth-child(3)';
export const Status = 'table[classsname="add-students-table"] tbody tr:nth-child(1) td:nth-child(4) span';
export const RemoveButton = 'table[classsname="add-students-table"] tbody tr:nth-child(1) td:nth-child(5) Button';

// Register single student or multiple student. ***********************************************************************/
export const RegisterButton = 'button[title="Register"]';
export const clickOnsingleStudentRegistration = '.single-registration-button';
export const ClickOnmultiRegistration = '.multi-registration-button';
export const fullname = 'input[name="fullName"]';
export const Newusername = 'input[name="username"]';
export const Flag = 'div[class="flag al"]';
export const telephoneField = 'input[type="tel"]';
export const EmailField = 'input[id="email"]';
export const registerbuttonpopup = 'button[class="btn yellow-button-theme btn btn-primary"]';
export const downloadbutton = 'a[class="btn btn-themed-1"]';
export const uploadButton = 'label[for="file-upload-2"]';
export const cancleButton = 'button[class="btn btn-cancel btn btn-primary"]';
export const crossbutton = 'button[class="close"]';
export const deleteUploadedCSV = 'i[class="far fa-trash-alt"]';

// after click  on assign tutor to student*********************************************** */
export const AssignTutor = 'button[class="btn table-action link-color"]';
export const filteroption = 'div[class="flex-assign-users"] div[class="search-by-what"] div[class="Select-placeholder"]';
export const assigntutorsearchField = 'div[class="flex-assign-users"] div[class="search-term-here"] div[class="Select-placeholder"]';
export const submitButton = 'button[class="btn yellow-button-theme"]';
// Edit Detail of student.********************************** */

export const StudentName = 'tr:first-of-type td[class="results-td padding-set image-hold"] div';
export const NameEditButton = 'div[class="user-details"] > div:nth-child(1) > div > button > i';
export const updateButton = 'button[class="btn btn-themed-1 btn-block"]';