import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  currentCategory: Category;
  dataLoaded: boolean = false;

  constructor(private productService:CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  // kategorilerin üzerine tıklandığında active classının eklenmesini sağlayan metoddur
  getCurrentCategoryClass(category: Category){
    if(category == this.currentCategory){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
  
  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
}
