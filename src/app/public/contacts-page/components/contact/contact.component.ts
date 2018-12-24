import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ContactsSubjects} from '../../contacts-subjects';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiConfigService} from '../../../../api-config-service';
import {Email} from '../../models/email';
import {ContactEmailService} from '../../services/contact-email.service';
import {EventType} from '../../../../common-components/modal/event-type.enum';
import {ModalComponent} from '../../../../common-components/modal/modal.component';
import {catchError, timeout} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contactSubjects: ContactsSubjects[];
  @Input() apiConfig: ApiConfigService;

  @ViewChild(ModalComponent)
  private modalComponent: ModalComponent;

  contactForm: FormGroup;

  selected: string;

  message: string;

  modalEventType: EventType = EventType.Info;

  constructor(private fb: FormBuilder, private emailService: ContactEmailService) {
    this.contactForm = fb.group({
      'contactFormName': ['', [Validators.required]],
      'contactFormEmail': ['', [Validators.required, Validators.email]],
      'contactFormMessage': ['', [Validators.required]],
      'contactFormCopy': ['', ],
      'contactFormOtherSubject': ['', ],
    });
  }

  addOtherSubjectControl() {
    this.contactForm.setControl('contactFormOtherSubject', new FormControl('', Validators.required));
  }

  onChangeSubject() {
    this.contactForm.setControl('contactFormOtherSubject', new FormControl('', ));
    if (this.selected.toString() === 'Altro..') {
      this.addOtherSubjectControl();
    }
  }

  onSubmit() {
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
    this.emailService.sendEmail(e, this.apiConfig)
      .pipe(
        timeout(5000), catchError(err => {
          this.modalComponent.showModal(EventType.Error);
          return throwError(
            'Send Email timeout!');
        }))
      .subscribe(data => {
        this.message = data.toString();
        this.modalComponent.showModal(EventType.Success);
      }, err => {
        this.modalComponent.showModal(EventType.Error);
      } );
  }

  ngOnInit() {
  }
}
