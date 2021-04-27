class PaginationHelper{
    constructor(collection, itemsPerPage)
    {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    //кол-во элементов
    itemCount() { return this.collection.length;  }
    
    //кол-во страницы
    pageCount() { return Math.ceil(this.collection.length / this.itemsPerPage);   }
    
    //кол-во элементов на текущей странице, считает с 0
    pageItemCount(pageIndex) {
        if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
            return(-1);//если такой страницы нет
        }
        return(this.itemsPerPage - Math.ceil((((pageIndex + 1)*this.itemsPerPage)%this.itemCount())%this.itemsPerPage));
    }//иногда шалит
    
    //принимает индекс элемента и возвращает страницу, которой он принадлежит
    pageIndex(itemIndex) {
        if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
            return(-1);
        }  
        return (Math.ceil((itemIndex + 1)/this.itemsPerPage) - 1);
    }
  } 
  
  function main() {
    collection = ['a','b','c','d','e','f'];  
    helper = new PaginationHelper(collection, 4);
    console.log(helper.pageCount()); //should == 2
    console.log(helper.itemCount()); //should == 6
    console.log(helper.pageItemCount(0)); //should == 4
    console.log(helper.pageItemCount(1)); // last page - should == 2
    console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

    // pageIndex takes an item index and returns the page that it belongs on
    console.log(helper.pageIndex(5)); //should == 1 (zero based index)
    console.log(helper.pageIndex(2)); //should == 0
    console.log(helper.pageIndex(20)); //should == -1
    console.log(helper.pageIndex(-10)); //should == -1
  }