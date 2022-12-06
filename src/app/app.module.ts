import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BtnComponent } from './components/btn/btn.component';
import { FormsModule } from '@angular/forms';
import { Btn2Component } from './components/btn2/btn2.component';
import { FooterComponent } from './components/footer/footer.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { Parallax1Component } from './pages/home/parallax1/parallax1.component';
import { UpComponent } from './components/up/up.component';
import { TitleSubPComponent } from './components/title-sub-p/title-sub-p.component';
import { SwiperModule } from 'swiper/angular';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PaperComponent } from './components/paper/paper.component';
import { FaqComponent } from './pages/home/faq/faq.component';
import { FinalComponent } from './pages/home/final/final.component';
import { PaisesSelectComponent } from './components/paises-select/paises-select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MintComponent } from './pages/mint/mint.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LangComponent } from './lang/lang.component';
// import { SpinnerInterceptor } from './components/spinner/spinner.interceptor';



export function playerFactory() {
  return player;
}

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BtnComponent,
    Btn2Component,
    FooterComponent,
    Parallax1Component,
    UpComponent,
    TitleSubPComponent,
    WelcomeComponent,
    PaperComponent,
    FaqComponent,
    FinalComponent,
    PaisesSelectComponent,
    SpinnerComponent,
    MintComponent,
    LangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    NgxParallaxScrollModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
