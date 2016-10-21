import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from "@angular/router";

@Injectable()
export class ToastService {

  constructor(public toastr: ToastsManager, private route: ActivatedRoute, private router: Router) { }


showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('I am sorry something went wrong,please make a new order!', 'You will be redirected to the home page');
  this.goToHome();
}

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }

  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
  }

goToHome() {
  let link = ['/home'];
    this.router.navigate(link);
}
}

