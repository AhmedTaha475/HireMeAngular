import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { SingupComponent } from './Components/singup/singup.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { CreateProjectPostComponent } from './Components/ProjectPost/create-project-post/create-project-post.component';
import { AllProjectPostsComponent } from './Components/ProjectPost/all-project-posts/all-project-posts.component';
import { ProjectPostComponent } from './Components/ProjectPost/project-post/project-post.component';
import { PlanComponent } from './Components/Pricing Plan/plan/plan.component';
import { CheckoutComponent } from './Components/Pricing Plan/checkout/checkout.component';
import { AuthGuard } from './Guard_Services/auth.guard';
import { Error404Component } from './Components/ErrorComponents/error404/error404.component';
import { Error403Component } from './Components/ErrorComponents/error403/error403.component';
import { AdminEntryComponent } from './Components/AdminDashBoard/admin-entry/admin-entry.component';
import { AdminHomeComponent } from './Components/AdminDashBoard/admin-home/admin-home.component';
import { UsersWebsiteEntryComponent } from './Components/users-website-entry/users-website-entry.component';
import { StripeComponent } from './Components/Pricing Plan/PaypalButtonComponent/stripe/stripe.component';
import { AdminLookuptablecrudComponent } from './Components/AdminDashBoard/admin-lookuptablecrud/admin-lookuptablecrud.component';
import { FreelancerProfileComponent } from './Components/FreelancerProfile/freelancer-profile/freelancer-profile.component';
import { FreelancerProfileDashboardComponent } from './Components/FreelanserDashBoard/freelancer-profile/freelancer-profile.component';
import { FreelancersByCategoryComponent } from './Components/FreeLancersByCategory/freelancers-by-category/freelancers-by-category.component';
import { AdminLookupvaluesComponent } from './Components/AdminDashBoard/admin-lookupvalues/admin-lookupvalues.component';
import { AdminPlansCrudComponent } from './Components/AdminDashBoard/admin-plans-crud/admin-plans-crud.component';
import { AdminGuard } from './Guard_Services/admin.guard';
import { FreelancerEntryComponent } from './Components/FreelanserDashBoard/freelancer-entry/freelancer-entry.component';
import { FreelancerHomeComponent } from './Components/FreelanserDashBoard/freelancer-home/freelancer-home.component';
import { FreelancerProjectsComponent } from './Components/FreelanserDashBoard/freelancer-projects/freelancer-projects.component';
import { FreelancerProfileEditComponent } from './Components/FreelanserDashBoard/freelancer-profile-edit/freelancer-profile-edit.component';
import { TransactionComponent } from './Components/FreelanserDashBoard/transaction/transaction.component';
import { ClientEntryComponent } from './Components/ClientDashBoard/client-entry/client-entry.component';
import { ClientHomeComponent } from './Components/ClientDashBoard/client-home/client-home.component';
import { UpdateClientComponent } from './Components/ClientDashBoard/update-client/update-client.component';
import { CreateProjectPostApplicantComponent } from './Components/ProjectPost/ProjectPostApplicant/create-project-post-applicant/create-project-post-applicant.component';
import { EditProjectPostApplicantComponent } from './Components/ProjectPost/ProjectPostApplicant/edit-project-post-applicant/edit-project-post-applicant.component';
import { CreateMilestoneComponent } from './Components/ProjectPost/Milestone/create-milestone/create-milestone.component';
import { UpdateMilestoneComponent } from './Components/ProjectPost/Milestone/update-milestone/update-milestone.component';
import { DeleteMilestoneComponent } from './Components/ProjectPost/Milestone/delete-milestone/delete-milestone.component';
import { ProjectPostMilestonesComponent } from './Components/ProjectPost/Milestone/project-post-milestones/project-post-milestones.component';
import { ManagaProjectPostsComponent } from './Components/ClientDashBoard/managa-project-posts/managa-project-posts.component';
import { AllTasksComponent } from './Components/all-tasks/all-tasks.component';
import { OffersComponent } from './Components/FreelanserDashBoard/offers/offers.component';

import { BrowseFreelancersComponent } from './browse-freelancers/browse-freelancers.component';

import { PostApplicantsComponent } from './Components/ClientDashBoard/post-applicants/post-applicants.component';
import { AddClientReviewComponent } from './Components/ProjectPost/Review/add-client-review/add-client-review.component';
import { AddFreeLancerReview } from './Models/ProjectReview/add-freelancer-review';
import { FreelancerReviewsComponent } from './Components/ProjectPost/Review/freelancer-reviews/freelancer-reviews.component';
import { DepositeMoneyComponent } from './Components/ClientDashBoard/deposite-money/deposite-money.component';
import { ProjectDetailsComponent } from './Components/FreelanserDashBoard/project-details/project-details.component';
import { ClientTransactionComponent } from './Components/ClientDashBoard/client-transaction/client-transaction.component';
import { ClientMainReviewsComponent } from './Components/ClientDashBoard/client-main-reviews/client-main-reviews.component';
import { ShowReviewsComponent } from './Components/FreelanserDashBoard/show-reviews/show-reviews.component';
import { AddfreelancerReviewComponent } from './Components/FreelanserDashBoard/addfreelancer-review/addfreelancer-review.component';

const routes: Routes = [
  {
    path: '',
    component: UsersWebsiteEntryComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'Home', component: HomeComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'SignUp', component: SingupComponent },
      { path: 'ProjectPost/Create', component: CreateProjectPostComponent },
      { path: 'ProjectPost/GetAll', component: AllProjectPostsComponent },
      { path: 'ProjectPost/:id', component: ProjectPostComponent },
      {
        path: 'ProjectPost/:id/Milestone/Create',
        component: CreateMilestoneComponent,
      },
      {
        path: 'ProjectPost/:id/Milestone/:milestoneId/Update',
        component: UpdateMilestoneComponent,
      },
      {
        path: 'ProjectPost/:id/Milestone/:milestoneId/Delete',
        component: DeleteMilestoneComponent,
      },
      {
        path: 'ProjectPost/:id/Milestone/GetAll',
        component: ProjectPostMilestonesComponent,
      },
      {
        path: 'ProjectPost/:id/ProjectPostApplicant/Create',
        component: CreateProjectPostApplicantComponent,
      },
      {
        path: 'ProjectPost/:id/ProjectPostApplicant/Update',
        component: EditProjectPostApplicantComponent,
      },
      { path: 'AllFreelancers', component: BrowseFreelancersComponent },

      {
        path: 'ProjectPost/:id/ProjectPostApplicant/Create',
        component: CreateProjectPostApplicantComponent,
      },
      {
        path: 'ProjectPost/:id/ProjectPostApplicant/Update',
        component: EditProjectPostApplicantComponent,
      },
      {
        path: 'ProjectPost/:id/ProjectPostApplicant/Create',
        component: CreateProjectPostApplicantComponent,
      },
      {
        path: 'ProjectPost/:id/ProjectPostApplicant/Update',
        component: EditProjectPostApplicantComponent,
      },

      {
        path: 'ProjectPost/:id/FreelancerReview/Add',
        component: AddFreeLancerReview,
      },
      { path: 'ProjectPost/:id/ProjectReview', component: AddFreeLancerReview },
      { path: 'plan', component: PlanComponent },
      { path: 'checkout/:PlanId', component: CheckoutComponent },
      { path: 'Page404', component: Error404Component },
      { path: 'Page403', component: Error403Component },
      { path: 'stripe', component: StripeComponent },
      { path: 'AllTasks', component: AllTasksComponent },
      { path: 'FreelancerProfile/:Id', component: FreelancerProfileComponent },
      { path: 'Category/:id', component: FreelancersByCategoryComponent },
    ],
  },
  {
    path: 'Admin',
    component: AdminEntryComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'Home', component: AdminHomeComponent },
      { path: 'lookuptable', component: AdminLookuptablecrudComponent },
      { path: 'lookupvalues', component: AdminLookupvaluesComponent },
      { path: 'plan', component: AdminPlansCrudComponent },
    ],
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'Freelancer',
    component: FreelancerEntryComponent,
    children: [
      { path: '', component: FreelancerHomeComponent },
      { path: 'Home', component: FreelancerHomeComponent },
      { path: 'Profile', component: FreelancerProfileDashboardComponent },
      { path: 'Profile/Update', component: FreelancerProfileEditComponent },
      { path: 'Projects', component: FreelancerProjectsComponent },
      { path: 'Transaction', component: TransactionComponent },
      { path: 'Offers', component: OffersComponent },
      { path: 'FreelancerReviews', component: FreelancerReviewsComponent },
      {
        path: 'FreelancerProjectDetail/:id',
        component: ProjectDetailsComponent,
      },
      {
        path: 'reviews',
        component: ShowReviewsComponent,
      },
      {
        path: 'addreview',
        component: AddfreelancerReviewComponent,
      },
    ],
  },
  {
    path: 'client',
    component: ClientEntryComponent,
    children: [
      { path: '', component: ClientHomeComponent },
      { path: 'updateProfile', component: UpdateClientComponent },
      { path: 'postjob', component: CreateProjectPostComponent },
      { path: 'managejob', component: ManagaProjectPostsComponent },
      { path: 'manageApplicants/:id', component: PostApplicantsComponent },
      { path: 'DepositeMoney', component: DepositeMoneyComponent },
      { path: 'reviews', component: ClientMainReviewsComponent },
      {
        path: 'ProjectPost/:id/Milestone/Create',
        component: CreateMilestoneComponent,
      },
      {
        path: 'ProjectPost/:id/Milestone/:milestoneId/Update',
        component: UpdateMilestoneComponent,
      },
      {
        path: 'ProjectPost/:id/Milestone/:milestoneId/Delete',
        component: DeleteMilestoneComponent,
      },
      {
        path: 'ProjectPost/:id/Milestone/GetAll',
        component: ProjectPostMilestonesComponent,
      },
      {
        path: 'ProjectPost/:id/ClientReview/Add',
        component: AddClientReviewComponent,
      },
      {
        path: 'transaction',
        component: ClientTransactionComponent,
      },
    ],
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
