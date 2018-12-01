import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";

@Component({
    selector: 'donate-component',
    templateUrl: './donate.html',
    
})

export class DonateComponent 
{
    donateForm: FormGroup;
    message: string;
    
    elements: Elements;
    card: StripeElement;

      // optional parameters
      elementsOptions: ElementsOptions = {
        locale: 'es'
      };
    
    constructor(private fb: FormBuilder, private stripeService: StripeService) 
    {
        this.createForm();
    }
    
    createForm()
    {
        this.donateForm = this.fb.group({
          amount: ['',Validators.required],
          f_name: ['',Validators.required],
          l_name: ['',Validators.required],
          email: ['',Validators.required],
          country: ['',Validators.required],
          zip_code: ['',Validators.required],
          card_no: ['',Validators.required],
          exp_month: ['',Validators.required],
          exp_yr: ['',Validators.required],
          secure_code: ['',Validators.required]
        });
       /*this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });*/
    }
    
    onSubmit()
    {
        /*const name = this.donateForm.get('name').value;
        this.stripeService
          .createToken(this.card, { name })
          .subscribe(result => {
            if (result.token) {
              // Use the token to create a charge or a customer
              // https://stripe.com/docs/charges
              console.log(result.token);
            } else if (result.error) {
              // Error creating the token
              console.log(result.error.message);
            }
          });*/
      
        (<any>window).Stripe.card.createToken({
          number: this.donateForm.value.card_no,
          exp_month: this.donateForm.value.exp_month,
          exp_year: this.donateForm.value.exp_yr,
          cvc: this.donateForm.value.securecode
        }, (status: number, response: any) => {
          if (status === 200) {
            this.message = `Success! Card token ${response.card.id}.`;
          } else {
            this.message = response.error.message;
          }
        });
    
    }
}
