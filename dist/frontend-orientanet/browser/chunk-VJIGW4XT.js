import{a as E}from"./chunk-5QCNWH6H.js";import{d as R,e as b,g as F,h as D,j as A,l as z,la as h,m as G,ma as C,o as j,q as V}from"./chunk-4GMWUNDC.js";import{b as B,i as _,n as N,p as v}from"./chunk-CY6C37ID.js";import{Bb as d,Cb as w,Eb as x,Ha as l,X as k,Ya as T,a as U,ab as c,ba as s,fa as g,fb as a,gb as e,hb as p,ib as m,ic as y,jb as f,lc as S,nb as P,pb as u,zb as t}from"./chunk-VVJHNFVE.js";var I=class i{baseURL=`${N.baseURL}/resultadotest`;http=s(B);getResultadoTestByEstudianteId(o){return this.http.get(`${this.baseURL}/buscarPorUsuario/${o}`)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})};var M=class i{resultadoTest=null;resultadoTestService=s(I);authService=s(v);snackBar=s(h);ngOnInit(){this.loadResultadoTest()}loadResultadoTest(){let n=this.authService.getUser()?.id;n?this.resultadoTestService.getResultadoTestByEstudianteId(n).subscribe({next:r=>{this.resultadoTest=r,this.showSnackBar("Resultado del test cargado con \xE9xito")},error:()=>{this.showSnackBar("Error al cargar el resultado del test")}}):this.showSnackBar("Usuario no autenticado")}showSnackBar(o){this.snackBar.open(o,"Cerrar",{duration:3e3,verticalPosition:"top"})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["app-resultado-test"]],standalone:!0,features:[x],decls:20,vars:4,consts:[[1,"resultado-test-container"],[1,"resultado-title"],[1,"resultado-details"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"h2",1),t(2,"Resultado del Test Vocacional"),e(),a(3,"div",2)(4,"p")(5,"strong"),t(6,"Recomendaci\xF3n:"),e(),t(7),e(),a(8,"p")(9,"strong"),t(10,"Nombre de la Prueba:"),e(),t(11),e(),a(12,"p")(13,"strong"),t(14,"ID de la Carrera:"),e(),t(15),e(),a(16,"p")(17,"strong"),t(18,"ID del Estudiante:"),e(),t(19),e()()()),n&2&&(l(7),d(" ",r.resultadoTest==null?null:r.resultadoTest.recomendacion,""),l(4),d(" ",r.resultadoTest==null?null:r.resultadoTest.pruebaNombre,""),l(4),d(" ",r.resultadoTest==null?null:r.resultadoTest.carreraId,""),l(4),d(" ",r.resultadoTest==null?null:r.resultadoTest.estudianteId,""))},dependencies:[S,C],styles:[".resultado-test-container[_ngcontent-%COMP%]{background-color:#fffaf0;border:1px solid #f5c6c6;border-radius:8px;padding:20px;margin:20px 0;box-shadow:0 2px 5px #0000001a}.resultado-title[_ngcontent-%COMP%]{font-size:24px;color:#e53935;margin-bottom:15px}.resultado-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0;font-size:16px;color:#333}.no-resultado[_ngcontent-%COMP%]{color:#666;font-style:italic;text-align:center;margin-top:20px}"]})};function X(i,o){if(i&1&&(m(0),a(1,"p")(2,"strong"),t(3,"Informaci\xF3n Personal:"),e(),t(4),e(),f()),i&2){let n=u();l(4),d(" ",n.profile.informacionPersonal,"")}}function J(i,o){if(i&1&&(m(0),a(1,"p")(2,"strong"),t(3,"Nivel Acad\xE9mico:"),e(),t(4),e(),f()),i&2){let n=u();l(4),d(" ",n.profile.nivelAcademico,"")}}function K(i,o){if(i&1&&(m(0),a(1,"p")(2,"strong"),t(3,"Instituci\xF3n:"),e(),t(4),e(),f()),i&2){let n=u();l(4),d(" ",n.profile.institucion,"")}}function Q(i,o){if(i&1&&(m(0),a(1,"p")(2,"strong"),t(3,"Intereses:"),e(),t(4),e(),f()),i&2){let n=u();l(4),d(" ",n.profile.intereses,"")}}function W(i,o){if(i&1&&(m(0),a(1,"p")(2,"strong"),t(3,"Carrera de Inter\xE9s:"),e(),t(4),e(),f()),i&2){let n=u();l(4),d(" ",n.profile.carreraInteres,"")}}function Y(i,o){if(i&1&&(m(0),a(1,"p")(2,"strong"),t(3,"Experiencia:"),e(),t(4),e(),f()),i&2){let n=u();l(4),d(" ",n.profile.experiencia,"")}}function Z(i,o){if(i&1&&(m(0),a(1,"p")(2,"strong"),t(3,"Certificaciones:"),e(),t(4),e(),f()),i&2){let n=u();l(4),d(" ",n.profile.certificaciones,"")}}function ee(i,o){if(i&1&&(m(0),a(1,"p")(2,"strong"),t(3,"Carrera:"),e(),t(4),e(),f()),i&2){let n=u();l(4),d(" ",n.profile.carrera,"")}}function te(i,o){i&1&&(a(0,"div"),p(1,"hr",7),e())}function ne(i,o){i&1&&(a(0,"div",8),p(1,"app-resultado-test"),e())}var L=class i{profile;isEstudiante=!1;userProfileService=s(E);authService=s(v);router=s(_);snackBar=s(h);ngOnInit(){this.loadUserProfile()}checkUserRole(){let o=this.authService.getUser();this.isEstudiante=o?.role==="ESTUDIANTE"}loadUserProfile(){let n=this.authService.getUser()?.id;n?this.userProfileService.getUserProfile(n).subscribe({next:r=>{this.profile=r,this.showSnackBar("Perfil cargado con \xE9xito")},error:()=>{this.showSnackBar("Error al cargar el perfil")}}):(this.showSnackBar("Usuario no autenticado"),this.router.navigate(["/auth/login"]))}redirectToUpdateProfile(){let o=this.authService.getUser();o?.role==="ESTUDIANTE"?this.router.navigate(["/estudiante/profile/update"]):o?.role==="EXPERTO"?this.router.navigate(["/experto/profile/update"]):this.showSnackBar("Rol no reconocido")}showSnackBar(o){this.snackBar.open(o,"Cerrar",{duration:3e3,verticalPosition:"top"})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["app-user-profile"]],standalone:!0,features:[x],decls:29,vars:14,consts:[[1,"profile-container"],[1,"profile-title"],[1,"profile-details"],[4,"ngIf"],[1,"button-container"],[1,"btn-update",3,"click"],["class","resultados-container",4,"ngIf"],[1,"section-divider"],[1,"resultados-container"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"h2",1),t(2,"Perfil de Usuario"),e(),a(3,"div",2)(4,"p")(5,"strong"),t(6,"Nombre:"),e(),t(7),e(),a(8,"p")(9,"strong"),t(10,"Email:"),e(),t(11),e(),a(12,"p")(13,"strong"),t(14,"Rol:"),e(),t(15),e(),T(16,X,5,1,"ng-container",3)(17,J,5,1,"ng-container",3)(18,K,5,1,"ng-container",3)(19,Q,5,1,"ng-container",3)(20,W,5,1,"ng-container",3)(21,Y,5,1,"ng-container",3)(22,Z,5,1,"ng-container",3)(23,ee,5,1,"ng-container",3),e(),a(24,"div",4)(25,"button",5),P("click",function(){return r.redirectToUpdateProfile()}),t(26,"Actualizar Perfil"),e()()(),T(27,te,2,0,"div",3)(28,ne,2,0,"div",6)),n&2&&(l(7),w(" ",r.profile.nombre," ",r.profile.apellido,""),l(4),d(" ",r.profile.email,""),l(4),d(" ",r.profile.role,""),l(),c("ngIf",r.profile.informacionPersonal),l(),c("ngIf",r.profile.nivelAcademico),l(),c("ngIf",r.profile.institucion),l(),c("ngIf",r.profile.intereses),l(),c("ngIf",r.profile.carreraInteres),l(),c("ngIf",r.profile.experiencia),l(),c("ngIf",r.profile.certificaciones),l(),c("ngIf",r.profile.carrera),l(4),c("ngIf",r.isEstudiante),l(),c("ngIf",r.isEstudiante))},dependencies:[S,y,C,M],styles:[".profile-container[_ngcontent-%COMP%]{max-width:600px;margin:20px auto;padding:20px;background-color:#fffaf0;border:1px solid #f5c6c6;border-radius:10px;box-shadow:0 4px 10px #0000001a}.profile-title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#e53935;text-align:center;margin-bottom:20px}.profile-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin:10px 0;color:#333}.profile-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#e53935}.button-container[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.btn-update[_ngcontent-%COMP%]{background-color:#e53935;color:#fff;padding:10px 20px;font-size:16px;border:none;border-radius:5px;cursor:pointer;transition:all .3s ease}.btn-update[_ngcontent-%COMP%]:hover{background-color:#d32f2f}@media (max-width: 768px){.profile-container[_ngcontent-%COMP%]{padding:15px}.profile-title[_ngcontent-%COMP%]{font-size:20px}.profile-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.btn-update[_ngcontent-%COMP%]{font-size:14px;padding:8px 15px}.section-divider[_ngcontent-%COMP%]{margin:40px 0;border:none;height:1px;background-color:#f5c6c6}.resultados-container[_ngcontent-%COMP%]{background-color:#fef7e6;padding:20px;border-radius:10px;box-shadow:0 4px 6px #0000001a}}"]})};var $=class i{profileForm;profile;fb=s(j);userProfileService=s(E);authService=s(v);router=s(_);snackBar=s(h);constructor(){this.profileForm=this.fb.group({nombre:["",b.required],apellido:["",b.required],email:["",[b.required,b.email]],informacionPersonal:[""],nivelAcademico:[""],institucion:[""],intereses:[""]})}ngOnInit(){this.loadUserProfile()}loadUserProfile(){let n=this.authService.getUser()?.id;n?this.userProfileService.getUserProfile(n).subscribe({next:r=>{this.profile=r,this.profileForm.patchValue(r)},error:()=>{this.showSnackBar("Error al cargar el perfil del usuario.")}}):(this.showSnackBar("Usuario no autenticado."),this.router.navigate(["/auth/login"]))}updateProfile(){if(this.profileForm.invalid){this.showSnackBar("Por favor, completa todos los campos requeridos.");return}let o=U(U({},this.profile),this.profileForm.value);this.userProfileService.updateUserProfile(o.id,o).subscribe({next:()=>{this.showSnackBar("Perfil actualizado con \xE9xito."),this.router.navigate(["/estudiante/profile"])},error:()=>{this.showSnackBar("Error al actualizar el perfil.")}})}showSnackBar(o){this.snackBar.open(o,"Cerrar",{duration:3e3,verticalPosition:"top"})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=g({type:i,selectors:[["app-update-profile"]],standalone:!0,features:[x],decls:37,vars:1,consts:[[1,"main-content"],[1,"form-container"],[1,"form-title"],[3,"ngSubmit","formGroup"],[1,"form-grid"],[1,"form-group"],["for","nombre"],["id","nombre","formControlName","nombre",1,"form-control"],["for","apellido"],["id","apellido","formControlName","apellido",1,"form-control"],["for","email"],["id","email","formControlName","email","type","email",1,"form-control"],["for","nivelAcademico"],["id","nivelAcademico","formControlName","nivelAcademico",1,"form-control"],["for","informacionPersonal"],["id","informacionPersonal","formControlName","informacionPersonal",1,"form-control"],["for","institucion"],["id","institucion","formControlName","institucion",1,"form-control"],["for","intereses"],["id","intereses","formControlName","intereses",1,"form-control"],[1,"form-actions"],["type","submit",1,"submit-button"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"div",1)(2,"h2",2),t(3,"Actualizar Perfil"),e(),a(4,"form",3),P("ngSubmit",function(){return r.updateProfile()}),a(5,"div",4)(6,"div",5)(7,"label",6),t(8,"Nombre"),e(),p(9,"input",7),e(),a(10,"div",5)(11,"label",8),t(12,"Apellido"),e(),p(13,"input",9),e(),a(14,"div",5)(15,"label",10),t(16,"Email"),e(),p(17,"input",11),e(),a(18,"div",5)(19,"label",12),t(20,"Nivel Acad\xE9mico"),e(),p(21,"input",13),e(),a(22,"div",5)(23,"label",14),t(24,"Informaci\xF3n Personal"),e(),p(25,"textarea",15),e(),a(26,"div",5)(27,"label",16),t(28,"Instituci\xF3n"),e(),p(29,"input",17),e(),a(30,"div",5)(31,"label",18),t(32,"Intereses"),e(),p(33,"textarea",19),e()(),a(34,"div",20)(35,"button",21),t(36,"Guardar Cambios"),e()()()()()),n&2&&(l(4),c("formGroup",r.profileForm))},dependencies:[V,A,R,F,D,z,G,C],styles:[".form-container[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;background-color:#fffaf0;padding:20px;border-radius:10px;box-shadow:0 4px 8px #0000001a}.form-title[_ngcontent-%COMP%]{text-align:center;font-size:24px;font-weight:700;color:#e53935;margin-bottom:20px}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px}.form-control[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ddd;border-radius:5px;box-sizing:border-box}.form-control[_ngcontent-%COMP%]:focus{outline:none;border-color:#e53935;box-shadow:0 0 4px #e5393566}.form-actions[_ngcontent-%COMP%]{grid-column:span 2;text-align:center;margin-top:20px}.submit-button[_ngcontent-%COMP%]{background-color:#e53935;color:#fff;padding:10px 15px;border:none;border-radius:5px;cursor:pointer;width:200px;font-size:16px;font-weight:700}.submit-button[_ngcontent-%COMP%]:hover{background-color:#d32f2f}@media (max-width: 768px){.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.submit-button[_ngcontent-%COMP%]{width:100%}}"]})};export{M as a,L as b,$ as c};
