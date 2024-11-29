import{b as N}from"./chunk-PYG6UDKC.js";import{a as R,b as I,e as B,g as D,h as A}from"./chunk-75ACKSHN.js";import{U as w,V as k,a as Z,b as J,d as v,e as c,g as M,h as _,j as E,k as S,ka as z,l as P,la as L,n as O,o as y,p as F}from"./chunk-4N2EQSX4.js";import{g as Y,h as C,i as x,o as b}from"./chunk-QAOL6B3J.js";import"./chunk-Q64FFBLU.js";import{Eb as f,Ha as l,Ya as u,ab as g,ba as s,eb as p,fa as d,fb as e,gb as t,gc as Q,hb as a,ic as X,nb as h,zb as n}from"./chunk-UDMOMI4Z.js";var T=class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=d({type:i,selectors:[["app-auth-layout"]],standalone:!0,features:[f],decls:5,vars:0,consts:[[1,""]],template:function(r,m){r&1&&(a(0,"app-navbar"),e(1,"div",0)(2,"div",0),a(3,"router-outlet"),t()(),a(4,"app-footer"))},dependencies:[Z,J,Y],styles:[".auth-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:center;align-items:center}.content-wrapper[_ngcontent-%COMP%]{padding:20px}"]})};function te(i,o){i&1&&(e(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function ne(i,o){i&1&&(e(0,"mat-error"),n(1,"Introduzca un correo electr\xF3nico v\xE1lido"),t())}function oe(i,o){i&1&&(e(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}var q=class i{loginForm;fb=s(O);router=s(C);snackBar=s(z);authService=s(b);constructor(){this.loginForm=this.fb.group({email:["",[c.required,c.email]],contrasena:["",c.required]})}controlHasError(o,r){return this.loginForm.controls[o].hasError(r)}onSubmit(){if(this.loginForm.invalid)return;let o=this.loginForm.value;this.authService.login(o).subscribe({next:()=>{this.showSnackBar("Inicio de sesi\xF3n exitoso");let r=this.authService.getUserRole();r==="ADMIN"?this.router.navigate(["/admin"]):r==="ESTUDIANTE"?this.router.navigate(["/estudiante"]):r==="EXPERTO"?this.router.navigate(["/experto"]):this.showSnackBar("Rol de usuario no reconocido")},error:()=>{this.showSnackBar("Error en el inicio de sesion. Porfavor, intentar de nuevo.")}})}showSnackBar(o){this.snackBar.open(o,"Close",{duration:2e3,verticalPosition:"top"})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=d({type:i,selectors:[["app-login"]],standalone:!0,features:[f],decls:27,vars:5,consts:[[1,"login-container"],[1,"login-card"],[1,"login-image"],["src","img/icono.png",1,"avatar-image"],[1,"login-form"],[1,"logo"],[1,"plus"],[3,"ngSubmit","formGroup"],[1,"mat-form-field"],["matInput","","formControlName","email","type","email","placeholder","ingresar correo"],["matInput","","formControlName","contrasena","type","password","placeholder","ingresar contrase\xF1a"],["mat-raised-button","","type","submit",1,"submit-button",3,"disabled"],["routerLink","/auth/forgot-password",1,"forgot-password"],["mat-stroked-button","","routerLink","/auth/register",1,"create-account"]],template:function(r,m){r&1&&(e(0,"section",0)(1,"div",1)(2,"div",2),a(3,"img",3),t(),e(4,"div",4)(5,"h1",5),n(6,"ORIENTA"),e(7,"span",6),n(8,"+"),t()(),e(9,"form",7),h("ngSubmit",function(){return m.onSubmit()}),e(10,"mat-form-field",8)(11,"mat-label"),n(12,"Correo Electr\xF3nico"),t(),a(13,"input",9),u(14,te,2,0,"mat-error")(15,ne,2,0,"mat-error"),t(),e(16,"mat-form-field",8)(17,"mat-label"),n(18,"Contrase\xF1a"),t(),a(19,"input",10),u(20,oe,2,0,"mat-error"),t(),e(21,"button",11),n(22,"Iniciar Sesi\xF3n"),t(),e(23,"a",12),n(24,"\xBFOlvidaste tu contrase\xF1a?"),t(),e(25,"button",13),n(26,"Crea una cuenta"),t()()()()()),r&2&&(l(9),g("formGroup",m.loginForm),l(5),p(m.controlHasError("email","required")?14:-1),l(),p(m.controlHasError("email","email")?15:-1),l(5),p(m.controlHasError("contrasena","required")?20:-1),l(),g("disabled",m.loginForm.invalid))},dependencies:[y,E,v,M,_,F,S,P,A,D,B,R,I,N,L,k,w,x],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background-color:#fef6f4}.login-card[_ngcontent-%COMP%]{display:flex;width:90%;max-width:700px;background-color:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px #0000001a}.login-image[_ngcontent-%COMP%]{background-color:#fdeae6;width:50%;display:flex;align-items:center;justify-content:center;padding:20px}.avatar-image[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%}.logo[_ngcontent-%COMP%]{font-size:24px;font-weight:700;text-align:center;margin:0 0 20px;color:#333;display:flex;justify-content:center;align-items:center}.plus[_ngcontent-%COMP%]{color:#f8a1a1;font-size:32px;margin-left:4px}.login-form[_ngcontent-%COMP%]{padding:40px;width:50%;display:flex;flex-direction:column;justify-content:center}.mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.submit-button[_ngcontent-%COMP%]{background-color:#f8a1a1;color:#fff;width:100%;padding:12px;border-radius:4px;font-size:16px;font-weight:700;margin-top:10px}.submit-button[_ngcontent-%COMP%]:hover{background-color:#e47f7f}.submit-button[disabled][_ngcontent-%COMP%]{background-color:#e0e0e0;color:#aaa}.forgot-password[_ngcontent-%COMP%]{margin-top:10px;font-size:14px;color:#666;text-align:center}.forgot-password[_ngcontent-%COMP%]:hover{text-decoration:underline}.create-account[_ngcontent-%COMP%]{margin-top:20px;color:#f8a1a1;border-color:#f8a1a1}.create-account[_ngcontent-%COMP%]:hover{background-color:#fdeae6}@media (max-width: 768px){.login-card[_ngcontent-%COMP%]{flex-direction:column;width:100%;max-width:500px}.login-image[_ngcontent-%COMP%]{width:100%;height:200px}.login-form[_ngcontent-%COMP%]{width:100%;padding:20px}}"]})};function re(i,o){i&1&&(e(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function ie(i,o){i&1&&(e(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function ae(i,o){i&1&&(e(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function me(i,o){i&1&&(e(0,"mat-error"),n(1,"Introduzca un correo electr\xF3nico v\xE1lido"),t())}function le(i,o){i&1&&(e(0,"mat-error"),n(1,"Este campo es obligatorio"),t())}function se(i,o){i&1&&(e(0,"mat-error"),n(1," La contrase\xF1a debe tener al menos 8 caracteres, una letra may\xFAscula y un n\xFAmero "),t())}var H=class i{registerForm;fb=s(O);router=s(C);snackBar=s(z);authService=s(b);constructor(){this.registerForm=this.fb.group({nombre:["",c.required],apellido:["",c.required],email:["",[c.required,c.email]],contrasena:["",[c.required,this.passwordValidator]]})}passwordValidator(o){if(!o.value)return null;let r=o.value,m=/^[A-Z]/,j=/\d/;return!m.test(r)||!j.test(r)||r.length<8?{passwordPattern:!0}:null}controlHasError(o,r){return this.registerForm.controls[o].hasError(r)}onSubmit(){if(this.registerForm.valid){let o=this.registerForm.value;this.authService.register(o).subscribe({next:()=>{this.showSnackBar("Usuario creado correctamente"),this.router.navigate(["/auth/login"])},error:r=>{this.showSnackBar(r.error.message)}})}else this.showSnackBar("Por favor, complete los campos correctamente.")}showSnackBar(o){this.snackBar.open(o,"Cerrar",{duration:2e3,verticalPosition:"top"})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=d({type:i,selectors:[["app-register"]],standalone:!0,features:[f],decls:39,vars:8,consts:[[1,"register-container"],[1,"register-content"],[1,"register-card"],[1,"register-image"],["src","icono2.png",1,"avatar-image"],[1,"register-form"],[1,"logo"],[1,"plus"],[3,"ngSubmit","formGroup"],[1,"mat-form-field"],["matInput","","formControlName","nombre","type","text","placeholder","Ingresa tu nombre"],["matInput","","formControlName","apellido","type","text","placeholder","Ingresa tu apellido"],["matInput","","formControlName","email","type","email","placeholder","Ingresa tu correo"],["matInput","","formControlName","contrasena","type","password","placeholder","Ingresa tu contrase\xF1a"],[4,"ngIf"],["mat-raised-button","","type","submit",1,"submit-button",3,"disabled"],["routerLink","/auth/login",1,"login-link"],[1,"image-section"],["src","assets/icono2.png","alt","Books and Graduation Cap",1,"side-image"]],template:function(r,m){r&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),a(4,"img",4),t(),e(5,"div",5)(6,"h1",6),n(7,"ORIENTA"),e(8,"span",7),n(9,"+"),t()(),e(10,"form",8),h("ngSubmit",function(){return m.onSubmit()}),e(11,"mat-form-field",9)(12,"mat-label"),n(13,"Nombre"),t(),a(14,"input",10),u(15,re,2,0,"mat-error"),t(),e(16,"mat-form-field",9)(17,"mat-label"),n(18,"Apellido"),t(),a(19,"input",11),u(20,ie,2,0,"mat-error"),t(),e(21,"mat-form-field",9)(22,"mat-label"),n(23,"Correo Electr\xF3nico"),t(),a(24,"input",12),u(25,ae,2,0,"mat-error")(26,me,2,0,"mat-error"),t(),e(27,"mat-form-field",9)(28,"mat-label"),n(29,"Contrase\xF1a"),t(),a(30,"input",13),u(31,le,2,0,"mat-error",14)(32,se,2,0,"mat-error",14),t(),e(33,"button",15),n(34,"Registrarse"),t(),e(35,"a",16),n(36,"\xBFYa tienes una cuenta? Inicia sesi\xF3n"),t()()()(),e(37,"div",17),a(38,"img",18),t()()()),r&2&&(l(10),g("formGroup",m.registerForm),l(5),p(m.controlHasError("nombre","required")?15:-1),l(5),p(m.controlHasError("apellido","required")?20:-1),l(5),p(m.controlHasError("email","required")?25:-1),l(),p(m.controlHasError("email","email")?26:-1),l(5),g("ngIf",m.controlHasError("contrasena","required")),l(),g("ngIf",m.controlHasError("contrasena","passwordPattern")),l(),g("disabled",m.registerForm.invalid))},dependencies:[X,Q,y,E,v,M,_,F,S,P,A,D,B,R,I,N,L,k,w,x],styles:[".register-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#fef6f4}.register-content[_ngcontent-%COMP%]{display:flex;width:80%;max-width:1200px;align-items:center;justify-content:space-between}.register-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:450px;padding:40px;background-color:#fff;border-radius:10px;box-shadow:0 4px 12px #00000026;text-align:center}.register-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:30px}.avatar-image[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%}.register-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;font-weight:700;color:#333;margin-bottom:5px;font-family:Arial,sans-serif}.logo[_ngcontent-%COMP%]{font-size:32px;font-weight:700;color:#333}.plus[_ngcontent-%COMP%]{color:#e53935}.mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:15px;background-color:#f0f0f0;border-radius:5px}.submit-button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#fdded3;color:#333;font-weight:700;font-size:16px;margin-top:10px;border:none;border-radius:5px}.login-link[_ngcontent-%COMP%]{margin-top:20px;font-size:14px;color:#333;text-decoration:none;border:1px solid #333;padding:10px;border-radius:5px;display:inline-block}.image-section[_ngcontent-%COMP%]{width:50%;display:flex;justify-content:center}.side-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;border-radius:10px}"]})};var G=class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=d({type:i,selectors:[["app-home"]],standalone:!0,features:[f],decls:43,vars:0,consts:[[1,"header"],["routerLink","/auth/register",1,"btn"],[1,"section"],[1,"features"],[1,"feature"],[1,"fas","fa-user-graduate"],["src","img/conexion-expertos.png","alt","Conexi\xF3n con Expertos",1,"feature-image"],[1,"fas","fa-chalkboard-teacher"],[1,"fas","fa-book"],[1,"fas","fa-wallet"],[1,"cta"]],template:function(r,m){r&1&&(e(0,"header",0)(1,"h1"),n(2,"Bienvenido a OrientaNet"),t(),e(3,"p"),n(4,"Descubre tu camino profesional con nuestras herramientas de orientaci\xF3n vocacional, conexi\xF3n con expertos y recursos educativos personalizados."),t(),e(5,"a",1),n(6,"Comienza Ahora"),t()(),e(7,"section",2)(8,"h2"),n(9,"\xBFQu\xE9 Ofrecemos?"),t(),e(10,"p"),n(11,"En OrientaNet, estamos dedicados a ayudarte a alcanzar tu m\xE1ximo potencial profesional. Estas son algunas de nuestras caracter\xEDsticas:"),t(),e(12,"div",3)(13,"div",4),a(14,"i",5),e(15,"h3"),n(16,"Pruebas Vocacionales"),t(),e(17,"p"),n(18,"Descubre carreras que se alineen con tus intereses y habilidades."),t(),a(19,"img",6),t(),e(20,"div",4),a(21,"i",7),e(22,"h3"),n(23,"Conexi\xF3n con Expertos"),t(),e(24,"p"),n(25,"Recibe asesoramiento personalizado de mentores en diversas \xE1reas profesionales."),t()(),e(26,"div",4),a(27,"i",8),e(28,"h3"),n(29,"Recursos Educativos"),t(),e(30,"p"),n(31,"Accede a art\xEDculos, videos y gu\xEDas dise\xF1ados para tus intereses."),t()(),e(32,"div",4),a(33,"i",9),e(34,"h3"),n(35,"Pagos Seguros"),t(),e(36,"p"),n(37,"Procesa transacciones seguras para servicios premium."),t()()()(),e(38,"section",10)(39,"h2"),n(40,"\xBFListo para comenzar tu viaje profesional?"),t(),e(41,"a",1),n(42,"Reg\xEDstrate Ahora"),t()())},dependencies:[x],styles:[".header[_ngcontent-%COMP%]{text-align:center;padding:50px 20px;background-color:#fdece2}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:36px;color:#e53935}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#666;margin:20px 0}.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;background-color:#e53935;color:#fff;border:none;border-radius:5px;text-decoration:none;font-weight:700;transition:background-color .3s}.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#d32f2f}.section[_ngcontent-%COMP%]{padding:50px 20px;text-align:center}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;color:#e53935;margin-bottom:20px}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#666;margin-bottom:40px}.features[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}.feature[_ngcontent-%COMP%]{background-color:#fdece2;padding:20px;border-radius:8px;box-shadow:0 2px 5px #0000001a;text-align:center}.feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:40px;color:#e53935;margin-bottom:10px}.feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:#e53935;margin-bottom:10px}.feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#666}.cta[_ngcontent-%COMP%]{background-color:#fde4e4;text-align:center;padding:30px 20px}.cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;color:#e53935;margin-bottom:20px}.cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;background-color:#e53935;color:#fff;border:none;border-radius:5px;text-decoration:none;font-weight:700;transition:background-color .3s}.cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#d32f2f}"]})};var Xe=[{path:"",component:T,children:[{path:"login",component:q},{path:"register",component:H},{path:"home",component:G}]}];export{Xe as authroutes};
