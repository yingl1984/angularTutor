import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent{
vegetable:String[]  = ["鸡蛋","西红柿","可乐","鸡翅","辣椒"];
veg1:string;
isAddVeg1;isAddVeg2;isAddVeg3;isAddVeg4;isAddVeg5;canCook;canNotCook: boolean;

addVeg1(){
 this.isAddVeg1=true;
}
  addVeg2(){
    this.isAddVeg2=true;
  }
  addVeg3(){
    this.isAddVeg3=true;
  }
  addVeg4(){
    this.isAddVeg4=true;
  }
  addVeg5(){
    this.isAddVeg5=true;
  }
  canBeCooked(){
  if((this.isAddVeg1 &&this.isAddVeg2 && !this.isAddVeg3 && !this.isAddVeg4 && !this.isAddVeg5)||(!this.isAddVeg1 &&!this.isAddVeg2 && this.isAddVeg3 && this.isAddVeg4))
    this.canCook=true;
  else
    this.canNotCook=true;
  }
}
