/********************
 * YOUR CODE BELOW! *
 ********************/
const moreThan5 = num => num > 5
const isNewTopScore = (score, topScore) => score > topScore
const isInDanger = grade => grade >= 60 && grade <= 71
const isCoasting = grade => grade >= 72 && grade <= 83
const isSucceeding = grade => grade >= 84 && grade <= 92
const isFailing = grade => grade < 60
const isAcing = grade => grade > 92
const isStudent = role => role === 'student'
const isTeacher = role => role === 'teacher'
const isAdmin = role => role === 'admin'
const isElementary = level => level === 'elementary'
const areDifferentPeople = (person1, person2) => person1 !== person2
const isMiddleSchoolTeacher = (role, level) => (role === 'teacher') && (level >= 6 && level <= 8)
const notAnElementarySchoolAdministrator = (level,role) => role !== 'admin' || level !== 'elementary'

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
