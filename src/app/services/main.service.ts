import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

// private baseUrl = 'http://localhost:3000/api/centraladmin';
private baseUrl = '/api/centraladmin';

  constructor(private http: HttpClient) { }

  // Fetch all contact us queries
  getContactUsQueries(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/contact-us`);
  }

    addSliderImage(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-slider-image`, data);
  }

      addAboutUsSection(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-about`, data);
  }
  

  submit_programForm(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-future-programme`, data);
  }

    submit_placement_data(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-placement`, data);
  }

    submit_best_placemt_img(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-placement-image`, data);
  }
  
    add_home_service(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-home-service`, data);
  }
  
    submit_TestimonialUpload(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-testimonial`, data);
  }
  
    ADD_submitFacultyUpload(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-faculty`, data);
  }
  
    Add_Article(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-article`, data);
  }
  
    addWhyWeAreContent(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-why-we-are`, data);
  }
  
    add_campusGalleryForm(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-campus-gallery`, data);
  }
  
    add_placementForm(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-placement-paragraph`, data);
  }

  
    get_placement_description(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/placements-paragraph`);
  }
  
    fetch_about_us_image(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/fetch-about-us-image`);
  }
  
    why_we_are(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/why-we-are`);
  }
  
    get_campus_gallery(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/campus-gallery`);
  }
  
    updateCampusGallery(id: string, formData: FormData) {
      // Correct: send formData as body, id in URL
      return this.http.put<any>(`${this.baseUrl}/update-campus-gallery/${id}`, formData);
    }

    deleteCampusGallery(id: string) {
      return this.http.delete<any>(`${this.baseUrl}/delete-campus-gallery/${id}`);
    }


    get_Placements_Description(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/placements-paragraph`);
  }
  
    update_Placements_Description(id: string, formData: FormData) {
      // Correct: send formData as body, id in URL
      return this.http.put<any>(`${this.baseUrl}/update-placement-paragraph/${id}`, formData);
    }

    delete_Placements_Description(id: string) {
      return this.http.delete<any>(`${this.baseUrl}/delete-placement-paragraph/${id}`);
    }

      
    add_HighlightedCaseForm(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-highlighted-case`, data);
  }

get_HighlightedCase(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/highlighted-cases`);
}

edit_HighlightedCase(id: string, data: any): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}/update-highlighted-case/${id}`, data);
}

delete_HighlightedCase(id: string): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}/delete-highlighted-case/${id}`);
}



  
    get_Highlight_Case(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/highlighted-cases`);
  }
  
    add_vision_mission(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-vision-mission`, data);
  }
  
    get_vision_mission(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/vision-mission`);
  }
  
    edit_vision_mission(data:any,id:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update-vision-mission/${id}`, data);
  }
  
    delete_vision_mission(id:any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete-vision-mission/${id}`);
  }
  
    add_president_data(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-president-data`, data);
  }
  
    get_president_data(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/president-data`);
  }
  
    edit_president_data(data:any,id:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/edit-alt-president-msg/${id}`, data);
  }
  
    delete_president_data(id:any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/remove-alt-president-msg/${id}`);
  }
  
  //   addAboutUsSection(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/add-about`, data);
  // }
  
  //   addAboutUsSection(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/add-about`, data);
  // }
  
  //   addAboutUsSection(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/add-about`, data);
  // }
  
  //   addAboutUsSection(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/add-about`, data);
  // }
  
  //   addAboutUsSection(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/add-about`, data);
  // }
  
  //   addAboutUsSection(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/add-about`, data);
  // }
  








}
