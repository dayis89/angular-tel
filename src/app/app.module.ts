import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IphoneComponent } from './iphone/iphone.component';
import { HomeComponent } from './home/home.component';

//iphone

import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'iphone',
        component: IphoneComponent
    }
];


@NgModule({
    declarations:[
        IphoneComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
})
export class AppModule{

}