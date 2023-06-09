import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'primeng/chart';
import { CommonModule, DatePipe } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { SingupComponent } from './Components/singup/singup.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { ClientSidebarComponent } from './Client/client-sidebar/client-sidebar.component';
import { AllProjectPostsComponent } from './Components/ProjectPost/all-project-posts/all-project-posts.component';
import { PlanComponent } from './Components/Pricing Plan/plan/plan.component';
import { CheckoutComponent } from './Components/Pricing Plan/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './Guard_Services/auth.interceptor';
import { Error404Component } from './Components/ErrorComponents/error404/error404.component';
import { Error403Component } from './Components/ErrorComponents/error403/error403.component';
import { AdminEntryComponent } from './Components/AdminDashBoard/admin-entry/admin-entry.component';
import { AdminHomeComponent } from './Components/AdminDashBoard/admin-home/admin-home.component';
import { UsersWebsiteEntryComponent } from './Components/users-website-entry/users-website-entry.component';
import { StripeComponent } from './Components/Pricing Plan/PaypalButtonComponent/stripe/stripe.component';
import { FreelancerProfileComponent } from './Components/FreelancerProfile/freelancer-profile/freelancer-profile.component';
import { AdminLookuptablecrudComponent } from './Components/AdminDashBoard/admin-lookuptablecrud/admin-lookuptablecrud.component';
import { AdminHeaderComponent } from './Components/AdminDashBoard/admin-header/admin-header.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { JQueryLoaderDirective } from './CustomDirectives/j-query-loader.directive';
import { PaginatorComponent } from './Components/paginator/paginator.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { CreateProjectPostComponent } from './Components/ProjectPost/create-project-post/create-project-post.component';
import { FreelancersByCategoryComponent } from './Components/FreeLancersByCategory/freelancers-by-category/freelancers-by-category.component';
import { AdminLookupvaluesComponent } from './Components/AdminDashBoard/admin-lookupvalues/admin-lookupvalues.component';
import { AdminPlansCrudComponent } from './Components/AdminDashBoard/admin-plans-crud/admin-plans-crud.component';
import { FreelancerEntryComponent } from './Components/FreelanserDashBoard/freelancer-entry/freelancer-entry.component';
import { FreelancerHeaderComponent } from './Components/FreelanserDashBoard/freelancer-header/freelancer-header.component';
import { FreelancerHomeComponent } from './Components/FreelanserDashBoard/freelancer-home/freelancer-home.component';
import { FreelancerProjectsComponent } from './Components/FreelanserDashBoard/freelancer-projects/freelancer-projects.component';
import { FreelancerProfileDashboardComponent } from './Components/FreelanserDashBoard/freelancer-profile/freelancer-profile.component';
import { FreelancerProfileEditComponent } from './Components/FreelanserDashBoard/freelancer-profile-edit/freelancer-profile-edit.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { RouterModule } from '@angular/router';
import { ConvertToImagePipe } from './CustomPipes/convert-to-image.pipe';
import { ConvertToPdfPipe } from './CustomPipes/convert-to-pdf.pipe';
import { ClientHeaderComponent } from './Components/ClientDashBoard/client-header/client-header.component';
import { ClientSideBarComponent } from './Components/ClientDashBoard/client-side-bar/client-side-bar.component';
import { ClientHomeComponent } from './Components/ClientDashBoard/client-home/client-home.component';
import { ClientEntryComponent } from './Components/ClientDashBoard/client-entry/client-entry.component';
import { TransactionComponent } from './Components/FreelanserDashBoard/transaction/transaction.component';
import { UpdateClientComponent } from './Components/ClientDashBoard/update-client/update-client.component';
import { MakeOfferComponent } from './Components/make-offer/make-offer.component';
import { CreateProjectPostApplicantComponent } from './Components/ProjectPost/ProjectPostApplicant/create-project-post-applicant/create-project-post-applicant.component';
import { EditProjectPostApplicantComponent } from './Components/ProjectPost/ProjectPostApplicant/edit-project-post-applicant/edit-project-post-applicant.component';
import { CreateMilestoneComponent } from './Components/ProjectPost/Milestone/create-milestone/create-milestone.component';
import { UpdateMilestoneComponent } from './Components/ProjectPost/Milestone/update-milestone/update-milestone.component';
import { DeleteMilestoneComponent } from './Components/ProjectPost/Milestone/delete-milestone/delete-milestone.component';
import { ProjectPostMilestonesComponent } from './Components/ProjectPost/Milestone/project-post-milestones/project-post-milestones.component';
import { DashboardsfooterComponent } from './Components/ClientDashBoard/dashboardsfooter/dashboardsfooter.component';
import { ManagaProjectPostsComponent } from './Components/ClientDashBoard/managa-project-posts/managa-project-posts.component';
import { AllTasksComponent } from './Components/all-tasks/all-tasks.component';
import { OffersComponent } from './Components/FreelanserDashBoard/offers/offers.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowseFreelancersComponent } from './browse-freelancers/browse-freelancers.component';
import { PostApplicantsComponent } from './Components/ClientDashBoard/post-applicants/post-applicants.component';
import { AddFreelancerReviewComponent } from './Components/ProjectPost/Review/add-freelancer-review/add-freelancer-review.component';
import { AddClientReviewComponent } from './Components/ProjectPost/Review/add-client-review/add-client-review.component';
import { FreelancerReviewsComponent } from './Components/ProjectPost/Review/freelancer-reviews/freelancer-reviews.component';
import { ClientReviewsComponent } from './Components/ProjectPost/Review/client-reviews/client-reviews.component';
import { ProjectReviewComponent } from './Components/ProjectPost/Review/project-review/project-review.component';
import { DepositeMoneyComponent } from './Components/ClientDashBoard/deposite-money/deposite-money.component';
import { ProjectDetailsComponent } from './Components/FreelanserDashBoard/project-details/project-details.component';
import { ClientTransactionComponent } from './Components/ClientDashBoard/client-transaction/client-transaction.component';
import { ClientMainReviewsComponent } from './Components/ClientDashBoard/client-main-reviews/client-main-reviews.component';
import { CustomDateDirective } from './CustomDirectives/custom-date.directive';
import { ShowReviewsComponent } from './Components/FreelanserDashBoard/show-reviews/show-reviews.component';
import { AddfreelancerReviewComponent } from './Components/FreelanserDashBoard/addfreelancer-review/addfreelancer-review.component';
import { FreelancerSideBarComponent } from './Components/FreelanserDashBoard/freelancer-side-bar/freelancer-side-bar.component';
import { ProjectPostComponent } from './Components/ProjectPost/project-post/project-post.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ConvertToImagePipe,
    ConvertToPdfPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SingupComponent,
    LoginComponent,
    ClientSidebarComponent,
    AllProjectPostsComponent,
    CreateProjectPostComponent,
    PlanComponent,
    CheckoutComponent,
    Error404Component,
    Error403Component,
    AdminEntryComponent,
    AdminHomeComponent,
    UsersWebsiteEntryComponent,
    StripeComponent,
    FreelancersByCategoryComponent,
    FreelancerProfileComponent,
    FreelancerProfileDashboardComponent,
    AdminLookuptablecrudComponent,
    AdminHeaderComponent,
    JQueryLoaderDirective,
    PaginatorComponent,
    AdminLookupvaluesComponent,
    AdminPlansCrudComponent,
    FreelancerEntryComponent,
    FreelancerHeaderComponent,
    FreelancerHomeComponent,
    FreelancerProjectsComponent,
    FreelancerProfileEditComponent,
    ClientHeaderComponent,
    ClientSideBarComponent,
    ClientHomeComponent,
    ClientEntryComponent,
    TransactionComponent,
    UpdateClientComponent,
    MakeOfferComponent,
    CreateProjectPostApplicantComponent,
    EditProjectPostApplicantComponent,
    CreateMilestoneComponent,
    UpdateMilestoneComponent,
    DeleteMilestoneComponent,
    ProjectPostMilestonesComponent,
    DashboardsfooterComponent,
    ManagaProjectPostsComponent,
    AllTasksComponent,
    OffersComponent,
    SpinnerComponent,
    BrowseFreelancersComponent,
    PostApplicantsComponent,
    AddFreelancerReviewComponent,
    AddClientReviewComponent,
    FreelancerReviewsComponent,
    ClientReviewsComponent,
    ProjectReviewComponent,
    DepositeMoneyComponent,
    ProjectDetailsComponent,
    ClientTransactionComponent,
    ClientMainReviewsComponent,
    CustomDateDirective,
    ShowReviewsComponent,
    AddfreelancerReviewComponent,
    FreelancerSideBarComponent,
    ProjectPostComponent,
  ],
  imports: [
    BrowserModule,
    ToastModule,
    RouterModule,
    ConfirmPopupModule,
    PaginatorModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    SidebarModule,
    DialogModule,
    ChartModule,
    BrowserAnimationsModule,
    MessagesModule,
    NgImageSliderModule,
    CarouselModule,
    TagModule,
    ProgressSpinnerModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ConfirmationService,
    MessageService,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
