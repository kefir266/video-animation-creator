import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare const MediaRecorder: any;
const recordedChunks = [];

@Component({
  selector: 'app-video-recorder',
  templateUrl: './video-recorder.component.html',
  styleUrls: ['./video-recorder.component.css']
})
export class VideoRecorderComponent implements OnInit{
  @ViewChild('video', { static: true}) video: ElementRef;
  @Input('text') text: string;
  @Input('videoDuration') videoDuration: number;
  @Input('videoSource') videoSource;
  Phrase = [];
  stream: MediaStream;
  public isStarted = false;

  ngOnInit(): void {
    console.log(this.video.nativeElement);
    this.Phrase = this.text.split('');
    // @ts-ignore
    navigator.mediaDevices.getDisplayMedia({ video: true })
      .then(stream => this.stream = stream);
  }

  private handleDataAvailable(event) {
    console.log('data-available');
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
      console.log(recordedChunks);
      this.download();
    } else {
      // ...
    }
  }
  private download() {
    const blob = new Blob(recordedChunks, {
      type: 'video/webm'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = 'test.webm';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private recordVideo(stream) {
    const options = { mimeType: 'video/webm; codecs=vp9' };
    const mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.ondataavailable = this.handleDataAvailable.bind(this);
    mediaRecorder.start();
    setTimeout(event => {
      console.log('stop recording');
      mediaRecorder.stop();
    }, this.videoDuration);
  }

  public async onClick() {
    if (this.stream) {
      this.video.nativeElement.play();
      setTimeout(() => {
        this.isStarted = !this.isStarted;
        this.recordVideo(this.stream);
      }, 1000);
    }
  }
}
