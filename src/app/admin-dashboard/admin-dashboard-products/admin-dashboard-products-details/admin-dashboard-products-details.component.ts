import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from 'src/app/product-details/product-details.service';
import { Category } from 'src/app/shared/models/category.interface';
import { InitializationService } from 'src/app/shared/services/initialization/initialization.service';

@Component({
  selector: 'app-admin-dashboard-products-details',
  templateUrl: './admin-dashboard-products-details.component.html',
  styleUrls: ['./admin-dashboard-products-details.component.scss'],
})
export class AdminDashboardProductsDetailsComponent implements OnInit {
  public form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)],
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
    oldPrice: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.min(0)],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(500)],
    }),
    categoryId: new FormControl(0, {
      nonNullable: true,
    }),
    mainImage: new FormControl(),
    mainImageFile: new FormControl(),
  });
  public isEditMode = false;
  public categories: Category[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productDetailsService: ProductDetailsService,
    private initializationService: InitializationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!id) return;
      this.productDetailsService.getProductDetails(id).subscribe(p => {
        this.form.patchValue({
          ...p,
        });
      });
    });
    this.initializationService.getAllCategories().subscribe(c => {
      this.categories = c;
      this.form.controls.categoryId.setValue(c[0].id);
    });
  }

  public onSubmit() {
    console.log(this.form.controls.mainImage.value);
  }

  public onFileChange(event: Event, formControlName: string) {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      this.form.get(formControlName)?.setValue(file);
    }
  }

  public displayInvalidFeedback(controlKey: string): boolean {
    const control = this.form.get(controlKey);
    return (!control?.valid && control?.touched) || false;
  }
}
