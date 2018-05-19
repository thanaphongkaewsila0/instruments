import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
//service
//component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MenuComponent } from './menu/menu.component';
import { HubComponent } from './hub/hub.component';
import { AddComponent } from './add/add.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BreadcrumbComponent,
    MenuComponent,
    HubComponent,
    AddComponent,
    PagenotfoundComponent,
    EditComponent,
  ],
  
  imports: [
    BrowserModule,
    //Route
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: ContentComponent, data: {menuName:'รายการครุภัณฑ์'} },
        { path: 'add', component: AddComponent, data: { menuName: 'เพิ่มครุภัณฑ์' } },
        { path: 'edit', component: EditComponent, data: { menuName: 'เเก้ไขครุภัณฑ์' } },
        { path: '**', component:PagenotfoundComponent}
      ],
    
      { enableTracing: true }
      
    ),
    FormsModule,
    CommonModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
