import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {
  public URLs: string = `https://62bc1e016b1401736cf25a53.mockapi.io/homepage/products`

  private products : BehaviorSubject<Products[] | null> = new BehaviorSubject<Products[] | null>(null)

  constructor(private http : HttpClient) { }

  handleError(err: any){
    if(err.error instanceof Error){
      console.log(`Clien-side error: ${err.error.message}`);
      
    }else {
      console.log(`Server-side error: ${err.status} - ${err.error}`);
      
    }
  }

  getAllproduct(): Observable<Products[]>{
    return this.http.get<any>(this.URLs).pipe(catchError((err)=> throwError(()=> new Error(err))),map((data)=> {
      this.products.next(data as Products[])
      return data
    }))
  }

}
