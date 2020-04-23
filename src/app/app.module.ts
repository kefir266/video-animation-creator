import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LetterComponent} from './components/letter/letter.component';
import { VideoRecorderComponent } from './components/video-recorder/video-recorder.component';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    VideoRecorderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
