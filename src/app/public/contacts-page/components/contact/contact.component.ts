import {Component, Input, OnInit} from '@angular/core';
import {ContactsSubjects} from '../../contacts-subjects';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Email} from '../../models/email';
import {ContactEmailService} from '../../services/contact-email.service';
import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';
import { AppComponent } from './../../../../app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contactSubjects: ContactsSubjects[];

  private contactForm: FormGroup;

  private selected: string;

  private loading = false;

  env = this.appComponent.env;

  timeout = 5000;
  position: SnotifyPosition = SnotifyPosition.leftTop;
  progressBar = false;
  closeClick = true;
  newTop = true;
  filterDuplicates = false;
  backdrop = -1;
  dockMax = 8;
  blockMax = 6;
  pauseHover = true;
  titleMaxLength = 15;
  bodyMaxLength = 80;

  formNameMaxLength: number = 50;
  formEmailMaxLength: number = 255;
  formBodyMaxLength: number = 255;
  
  captchaResponse = null;

  constructor(private fb: FormBuilder, private emailService: ContactEmailService, private snotifyService: SnotifyService, private appComponent: AppComponent) {
    this.contactForm = fb.group({
      'contactFormName': ['', [Validators.required, Validators.maxLength(this.formNameMaxLength)]],
      'contactFormEmail': ['', [Validators.required, Validators.email, Validators.maxLength(this.formEmailMaxLength)]],
      'contactFormMessage': ['', [Validators.required, Validators.maxLength(this.formBodyMaxLength)]],
      'contactFormCopy': ['', ],
      'contactFormOtherSubject': ['', ],
      'captchaForm': [null, Validators.required],
    });
  }

  get contactFormName() { return this.contactForm.get('contactFormName'); }
  get contactFormEmail() { return this.contactForm.get('contactFormEmail'); }
  get contactFormMessage() { return this.contactForm.get('contactFormMessage'); }
  get contactFormCopy() { return this.contactForm.get('contactFormCopy'); }
  get contactFormOtherSubject() { return this.contactForm.get('contactFormOtherSubject'); }
  get captchaForm() { return this.contactForm.get('captchaForm'); }

  /*
  Change global configuration
   */
  getConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax,
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      position: this.position,
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }

  addOtherSubjectControl() {
    this.contactForm.setControl('contactFormOtherSubject', new FormControl('', [Validators.required, Validators.maxLength(50)]));
  }

  onChangeSubject() {
    this.contactForm.setControl('contactFormOtherSubject', new FormControl('', ));
    if (this.selected.toString() === 'Altro..') {
      this.addOtherSubjectControl();
    }
  }

onSubmit() {
  this.loading = true;
  const e: Email = new Email();
  e.name = this.contactForm.get('contactFormName').value;
  e.email = this.contactForm.get('contactFormEmail').value;
  if (this.selected.toString() === 'Altro..') {
    e.subject = this.contactForm.get('contactFormOtherSubject').value;
  } else {
    e.subject = this.selected;
  }
  e.body = this.contactForm.get('contactFormMessage').value;
  e.sendCopy = this.contactForm.get('contactFormCopy').value;
  if (e.sendCopy.toString() === '') {
    e.sendCopy = false;
  }
  e.response = this.captchaResponse;
  this.emailService.sendEmail(e, this.env.emailUrl)
    .subscribe(data => {
      this.loading = false;
      this.snotifyService.success("Messaggio inviato correttamente!", "Inviato!", this.getConfig());
    }, err => {
      this.loading = false;
      this.snotifyService.error("Al momento non è possibile inviare il messaggio, riprova più tardi!", "Errore!", this.getConfig());
    } );
}

  public resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
  }

  ngOnInit() {
  }
}
