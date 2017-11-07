import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MovielistService} from './services/movelist/movielist.service';
import { TestComponent } from './test/test.component';
import { BoldDirective } from './directives/bold/bold.directive';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PipeComponent } from './pipe/pipe.component';
import {SortPipe} from './pipes/pipe.sort';
import {PipeDefaultImage} from './pipes/pipe.defaultImage';
import { FormComponent } from './form/form.component';
import { ConverterComponent } from './converter/converter.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HttpModule } from '@angular/http';
const appRoutes:Routes=[

{path : 'list'  ,component :ListComponent},
{path  :'test'  ,component :TestComponent},
{path :'item'   ,component :ItemComponent},
{path :'login'  ,component :LoginFormComponent},
{path: 'pipe'   ,component:PipeComponent},
{path: 'form' ,component :FormComponent},
{path: 'converter' ,component :ConverterComponent},
{path: "", component: HomeComponent},
{path: "product", component: ProductComponent},



];


@NgModule({
  declarations: [

    PipeDefaultImage,
    SortPipe,
    ProductComponent,
    HomeComponent,
    AppComponent,
    ListComponent,
    TestComponent,
    BoldDirective,
    ItemComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    PipeComponent,
    FormComponent,
    ConverterComponent
  ],
  imports: [
    HttpModule,
    ReactiveFormsModule,   
 RouterModule.forRoot(


appRoutes,
{


enableTracing:true

}

 )
    ,
    BrowserModule,
    FormsModule
  ],
  providers: [MovielistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
