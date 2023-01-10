import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from 'src/app/product-details/product-details.service';
import { Category } from 'src/app/shared/models/category.interface';
import { ProductCreate } from 'src/app/shared/models/product.interface';
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
    trending: new FormControl(false, {
      nonNullable: true,
    }),
    mainImage: new FormControl('', [Validators.required]),
    mainImageFile: new FormControl(),
    cardImage: new FormControl('', [Validators.required]),
    cardImageFile: new FormControl(),
    cardHoverImage: new FormControl('', [Validators.required]),
    cardHoverImageFile: new FormControl(),
  });
  public isEditMode = false;
  public categories: Category[] = [];
  private id = 0;

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
        this.isEditMode = true;
        this.id = id;
      });
    });
    this.initializationService.getAllCategories().subscribe(c => {
      this.categories = c;
      this.form.controls.categoryId.setValue(c[0].id);
    });
  }

  public onSubmit(): void {
    if (!this.form.valid) return;

    const product: ProductCreate = {
      brandId: 1,
      name: this.form.controls.name.value,
      price: this.form.controls.price.value,
      oldPrice: this.form.controls.oldPrice.value,
      trending: this.form.controls.trending.value,
      description: this.form.controls.description.value,
      createdDate: new Date().valueOf(),
      categoryId: this.form.controls.categoryId.value,
      mainImage: this.form.controls.mainImageFile.value,
      cardImage: this.form.controls.cardImageFile.value,
      cardHoverImage: this.form.controls.cardHoverImageFile.value,
    };
    const request$ = this.isEditMode
      ? this.productDetailsService.createOrUpdateProduct(product, this.id)
      : this.productDetailsService.createOrUpdateProduct(product);
    request$.subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    });
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
    return (control?.invalid && control?.touched) || false;
  }
}
