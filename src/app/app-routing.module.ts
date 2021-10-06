import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { CourseComponent } from './pages/course/course.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { GoalComponent } from './pages/goal/goal.component';
import { HelpComponent } from './pages/help/help.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UniversityComponent } from './pages/university/university.component';

const routes: Routes = [
  { path: 'goal', component: GoalComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'university', component: UniversityComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'course', component: CourseComponent },
  { path: 'help', component: HelpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
