import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HelpComponent } from './pages/help/help.component';
import { GoalComponent } from './pages/goal/goal.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { UniversityComponent } from './pages/university/university.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { CourseComponent } from './pages/course/course.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HelpComponent,
    GoalComponent,
    ProfileComponent,
    CertificationsComponent,
    UniversityComponent,
    ExperienceComponent,
    CourseComponent,
    NavbarComponent,
    KnowledgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }