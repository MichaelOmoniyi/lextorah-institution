import {
  CoronaNavbar,
  CoronaHero,
  CoronaForStudents,
  CoronaForTeachers,
  CoronaSchoolLeadership,
  CoronaPlatformUsage,
  CoronaAcademicIntegrity,
  CoronaNeedSupport,
  CoronaFooter,
} from "@/components/corona";

import {
  coronaHero,
  forStudentsData,
  forTeachersData,
  schoolLeadershipData,
  platformUsageData,
  academicIntegrityData,
  needSupportData,
  coronaFooterData,
} from "@/data/coronaSchoolsData";

import styles from "./page.module.css";

export default function CoronaSchoolsPage() {
  return (
    <div className={styles.page}>
      <CoronaNavbar />
      
      <main>
        <CoronaHero {...coronaHero} />
        
        <CoronaForStudents {...forStudentsData} />
        
        <CoronaForTeachers {...forTeachersData} />
        
        <CoronaSchoolLeadership {...schoolLeadershipData} />
        
        <CoronaPlatformUsage {...platformUsageData} />
        
        <CoronaAcademicIntegrity {...academicIntegrityData} />
        
        <CoronaNeedSupport {...needSupportData} />
      </main>
      
      <CoronaFooter {...coronaFooterData} />
    </div>
  );
}
