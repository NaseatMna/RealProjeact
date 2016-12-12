/**
 * Created by Acer on 12/12/2016.
 */
import Product from'./../../public/mock_data/products';
function filter(lsit,text){
  if(!text){
    return [];
  }
  return list.filter(item.name.toUpperCase().indexOf(text.toUpperCase())!==-1);
}
function  suggest(text){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve({data:filter(Product,text)});
    },500);
  })
}
export  default {suggest};
