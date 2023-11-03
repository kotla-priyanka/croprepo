import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CropService } from '../crop.service';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css']
})
export class CropListComponent implements OnInit {

  crops: any[] = [];
  filterTerm: string = '';

  constructor(private cropService: CropService, private router: Router) { }  // Inject Router

  ngOnInit(): void {
    this.loadCrops();
  }

  loadCrops(): void {
    this.cropService.getAllCrops().subscribe(
      data => this.crops = data,
      error => console.error('Error fetching crops', error)
    );
  }


  editCrop(crop: any): void {
    // Navigate to the edit crop route and pass the crop ID
    this.router.navigate(['/edit-crop', crop.cropId]);
  }

  orderCrop(crop: any): void {
    // Navigate to the order route with the crop ID as a parameter
    this.router.navigate(['/order', crop.cropId]);
}

  deleteCrop(cropId: string): void {
    if (confirm('Are you sure you want to delete this crop?')) {
      this.cropService.deleteCrop(cropId).subscribe(
        () => {
          alert('Crop deleted successfully');
          this.loadCrops();  // Refresh the crops list
        },
        error => console.error('Error deleting crop', error)
      );
    }
  }

  
}

