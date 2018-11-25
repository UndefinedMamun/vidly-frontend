import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatTableDataSource } from '@angular/material';
import { EditCustomerComponent } from '../customers/edit-customer/edit-customer.component';
import { EditGenresComponent } from './edit-genres/edit-genres.component';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];
  dataSource;

  constructor(
    private dialog: MatDialog,
    private service: GenresService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.service.$genres
      .subscribe(genres => {
        this.dataSource = new MatTableDataSource(genres);
        this.dataSource.paginator = this.paginator;
      });

    this.service.getGenres();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editGenre(genre) {
    this.dialog.open(EditGenresComponent, {
      data: {
        mode: 'Edit',
        genre: genre
      }
    })
  }

  deleteGenre(genre) {
    console.log(genre);
    this.service.deleteGenre(genre);
  }

  openGenreAddDialog() {
    this.dialog.open(EditGenresComponent, {
      data: {
        mode: 'Add'
      }
    })
  }

}
