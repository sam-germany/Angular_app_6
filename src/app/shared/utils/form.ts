

export const markFormGroupTouched22  = (formGroup) => {
  (Object as any).values(formGroup.controls).forEach(control33 => {
    control33.markAsTouched();

    if(control33.controls) {
      markFormGroupTouched22(control33);
    }


    /* console.log((Object as any).values(formGroup.controls));*/
  })
}



