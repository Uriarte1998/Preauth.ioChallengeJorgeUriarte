export class Item {
  name: string;
  sellIn: number;
  quality: number;
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
export class GildedRose{
  items: Array<Item>;
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
  updateAgedBrie(i){ //Funcion para actualizar el item "Aged Brie"
    (this.items[i].quality>0 && this.items[i].quality<50)?(this.items[i].quality++,this.items[i].sellIn--) : (this.items[i].quality = this.items[i].quality,this.items[i].sellIn--); //Operador ternario para determinar las acciones
  }
  updateSulfuras(i){  //Funcion para actualizar el item "Sulfuras"
    this.items[i].quality = 80; // Calidad siempre en 80
    this.items[i].sellIn--;
  }
  updateBackstagePasses(i){  //Funcion para actualizar el item "Backstage Passes"
    (this.items[i].quality>0 && this.items[i].quality<50)? ((this.items[i].sellIn<=10 && this.items[i].sellIn>5)? (this.items[i].quality+=2,this.items[i].sellIn--): (this.items[i].sellIn<=5 && this.items[i].sellIn>=0)? (this.items[i].quality+=3,this.items[i].sellIn--):(  this.items[i].sellIn < 0?this.items[i].quality=0:this.items[i].quality++,this.items[i].sellIn--)):
                                                          (this.items[i].quality = this.items[i].quality); //Operador ternario para determinar las acciones
  }
  updateConjured(i){  //Funcion para actualizar el item "Conjured"
    (this.items[i].quality>0 && this.items[i].quality<50)?((this.items[i].sellIn<0) ?(this.items[i].quality-=4,this.items[i].sellIn--):(this.items[i].quality-=2,this.items[i].sellIn--)):(this.items[i].quality = this.items[i].quality,this.items[i].sellIn--); //Operador ternario para determinar las acciones
  }

  updateQuality(){
    this.items.forEach((val,i,arr) => {
      switch(val.name){
        case "Aged Brie":
          this.updateAgedBrie(i);
          break;
        case "Sulfuras":
          this.updateSulfuras(i)
          break;
        case "Backstage passes":
          this.updateBackstagePasses(i)
          break;
        case "Conjured":
          this.updateConjured(i)
          break;
      }
    })
    return this.items;
  }

}

var t = new Item("Aged Brie",10,20);
var t2 = new Item("Sulfuras",10,20);
var t3 = new Item("Backstage passes",12,20);
var t4 = new Item("Conjured",10,20);

var g = new GildedRose([t,t2,t3,t4])
console.log(g); //Items Creados previamente

console.log(g.updateQuality()); // Items actualizados
