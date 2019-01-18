import { CartService } from './../../services/cart.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['position', 'name', 'rentalRate', 'action'];
  dataSource;
  subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: CartService) { }

  ngOnInit() {
    this.subscription = this.service.cart$.subscribe(cart=>{
      console.log(cart)
      this.dataSource = new MatTableDataSource(cart.map((el, i) => {
        el['position'] = i + 1;
        return el;
      }));
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  deleteMovie(movie){
    this.service.removeFromCart(movie);
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
}
