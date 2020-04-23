import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'video-animation-creater';
  public text = 'Example!';
  public videoDuration = 5000;
  public videoSource = 'assets/output.mp4';
  isMakingVideo = false;

  ngOnInit(): void {
  }

  public makeVideo() {
    this.isMakingVideo = true;
  }
}
