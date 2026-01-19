# Website Translation Fix - TODO List

## ✅ Completed
- [x] Added translation keys for Navbar hardcoded text (Home, Notifications, Tenders, About, Admissions, etc.)
- [x] Updated Navbar component to use translation keys
- [x] Added Hindi translations for new keys
- [x] Updated CollegeEmblem.jsx to use translation keys
- [x] Updated ProgramOutcome.jsx to use translation keys
- [x] Added translation keys for Cells page

## 🔄 In Progress
- [ ] Audit all remaining pages for hardcoded text
- [ ] Update translation files with missing keys
- [ ] Update all page components to use translation keys
- [ ] Test language switching functionality
- [ ] Ensure language persistence works

## 📋 Pages to Audit and Update
- [ ] src/pages/about/VisionMission.jsx
- [ ] src/pages/administration/Cells.jsx
- [ ] src/pages/administration/Committees.jsx
- [ ] src/pages/administration/OrganogramOfInstitution.jsx
- [ ] src/pages/administration/Societies.jsx
- [ ] src/pages/administration/CentresList202021.jsx
- [ ] src/pages/administration/TeachingStaffSanctionedPost.jsx
- [ ] src/pages/administration/StaffProfile.jsx
- [ ] src/pages/administration/StaffCouncil.jsx
- [ ] src/pages/administration/IncubationCentre.jsx
- [ ] src/pages/nep2020/Humanities.jsx
- [ ] src/pages/nep2020/Science.jsx
- [ ] src/pages/nep2020/SocialScience.jsx
- [ ] src/pages/nep2020/VocationalCommerce.jsx
- [ ] src/pages/nep2020/AcademicInfrastructure.jsx
- [ ] src/pages/nep2020/Library.jsx
- [ ] src/pages/nep2020/TimeTable.jsx
- [ ] src/pages/nep2020/Syllabus.jsx
- [ ] src/pages/nep2020/Publications.jsx
- [ ] src/pages/nep2020/SyllabusNEP.jsx
- [ ] src/pages/nep2020/FineArts.jsx
- [ ] src/pages/nep2020/CourseMaterial.jsx
- [ ] src/pages/nep2020/VocationalComputerApplication.jsx
- [ ] src/pages/admissions/Courses.jsx
- [ ] src/pages/admissions/GeneralInformation.jsx
- [ ] src/pages/admissions/IntakeCapacity.jsx
- [ ] src/pages/admissions/FeeStructure.jsx
- [ ] src/pages/admissions/PGAdmission.jsx
- [ ] src/pages/admissions/VocationalAdmission.jsx
- [ ] src/pages/admissions/BBAAdmission.jsx
- [ ] src/pages/admissions/Eligibility.jsx
- [ ] src/pages/admissions/UGAdmission.jsx
- [ ] src/pages/admissions/ComputerApplicationCourse.jsx
- [ ] src/pages/admissions/AdmittedStudentsYearWise.jsx
- [ ] src/pages/admissions/CommerceAdmission.jsx
- [ ] src/pages/about/CodeOfEthics.jsx
- [ ] src/pages/about/MELC.jsx
- [ ] src/pages/about/StudentsRollOfHonor.jsx
- [ ] src/pages/about/FeedbackForms.jsx
- [ ] src/pages/about/MOU.jsx
- [ ] src/pages/about/Milestones.jsx
- [ ] src/pages/about/ManagementAdministration.jsx
- [ ] src/pages/about/PreviousPrincipals.jsx
- [ ] src/pages/about/CodeOfConduct.jsx
- [ ] src/pages/about/BestPractices.jsx
- [ ] src/pages/about/FuturePlans.jsx
- [ ] src/pages/about/MIS.jsx
- [ ] src/pages/about/EnvironmentalPolicy.jsx
- [ ] src/pages/about/VisitorsNote.jsx

## 🎯 Key Requirements
- Replace all hardcoded strings with translation keys
- Ensure Hindi translations are accurate
- Test language switching works for all content
- Language selection should persist in localStorage
- Handle dynamic content translation
- Support string interpolation and plural forms
- Format dates/numbers/currency based on language

## 🧪 Testing Checklist
- [ ] Language switcher changes all text
- [ ] Language persists on page refresh
- [ ] All navigation items translate
- [ ] All page content translates
- [ ] No missing translation keys (check console)
- [ ] Fallback to English when Hindi key missing
- [ ] Bilingual mode works correctly
