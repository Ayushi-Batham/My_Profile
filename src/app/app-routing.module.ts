import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { CertificationComponent } from './certification/certification.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';


const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'home', component: HomeComponent},
  { path: 'Technicalskills', component: TechnicalSkillsComponent },
  { path: 'ProfessionalExperience', component: ProfessionalExperienceComponent },
  { path: 'Projects', component: ProjectsComponent},
  { path: 'Education', component: EducationComponent },
  { path: 'Certification', component: CertificationComponent },
  { path: 'AdditionalInformation', component: AdditionalInformationComponent},
  { path: '**', component: LoginComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
