(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{fhSy:function(n,r,e){"use strict";e.r(r),e.d(r,"RegisterModule",(function(){return P}));var o=e("ofXK"),t=e("tyNb"),i=e("JIr8"),s=e("nYR2"),c=e("eIep"),a=e("LRne"),d=e("wHSu"),b=e("fXoL"),l=e("H+bZ");let p=(()=>{class n{constructor(n){this.api=n}register(n){return this.api.post("users",n)}}return n.\u0275fac=function(r){return new(r||n)(b.Zb(l.a))},n.\u0275prov=b.Ib({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=e("lGQG"),f=e("3Pt+"),u=e("6NWb");function m(n,r){if(1&n&&(b.Rb(0,"div",14),b.Ec(1),b.Qb()),2&n){const n=r.$implicit;b.zb(1),b.Fc(n)}}function h(n,r){if(1&n&&(b.Rb(0,"div",14),b.Ec(1),b.Qb()),2&n){const n=r.$implicit;b.zb(1),b.Fc(n)}}function w(n,r){if(1&n&&(b.Rb(0,"div",14),b.Ec(1),b.Qb()),2&n){const n=r.$implicit;b.zb(1),b.Fc(n)}}function v(n,r){if(1&n&&(b.Rb(0,"div",14),b.Ec(1),b.Qb()),2&n){const n=r.$implicit;b.zb(1),b.Fc(n)}}function M(n,r){if(1&n&&(b.Rb(0,"div",14),b.Ec(1),b.Qb()),2&n){const n=r.$implicit;b.zb(1),b.Fc(n)}}function C(n,r){if(1&n&&b.Nb(0,"fa-icon",15),2&n){const n=b.fc();b.lc("icon",n.faSpinner)("spin",!0)}}const R=function(){return["/menu"]},O=function(){return["/login"]},Q=[{path:"",component:(()=>{class n{constructor(n,r,e){this.userService=n,this.auth=r,this.router=e,this.faSpinner=d.b,this.errors={},this.sending=!1}ngOnInit(){}register(){this.sending=!0,this.userService.register(this.newUser()).pipe(Object(i.a)(this.errorHandling.bind(this)),Object(s.a)(()=>this.sending=!1),Object(c.a)(()=>this.auth.login(this.email,this.password)),Object(c.a)(()=>this.router.navigate(["/menu"]))).subscribe()}errorHandling({error:n}){return n.hasOwnProperty("errors")&&(this.errors=n.errors),Object(a.a)()}newUser(){return{name:this.name,password:this.password,password_confirmation:this.passwordConfirmation,email:this.email,phone:this.phone}}}return n.\u0275fac=function(r){return new(r||n)(b.Mb(p),b.Mb(g.a),b.Mb(t.a))},n.\u0275cmp=b.Gb({type:n,selectors:[["app-register"]],decls:28,vars:26,consts:[[1,"register-form"],[3,"ngSubmit"],[1,"text-center"],[1,"form-group"],["name","name","placeholder","Name","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["class","invalid-feedback",4,"ngFor","ngForOf"],["name","email","placeholder","Email","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","phone","placeholder","Phone","required","","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","password","placeholder","Password","required","","type","password",1,"form-control",3,"ngModel","ngModelChange"],["name","password_confirmation","placeholder","Password confirmation","required","","type","password",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[3,"icon","spin",4,"ngIf"],[1,"d-flex","justify-content-around"],[3,"routerLink"],[1,"invalid-feedback"],[3,"icon","spin"]],template:function(n,r){1&n&&(b.Rb(0,"div",0),b.Rb(1,"form",1),b.dc("ngSubmit",(function(){return r.register()})),b.Rb(2,"h2",2),b.Ec(3,"Registration"),b.Qb(),b.Rb(4,"div",3),b.Rb(5,"input",4),b.dc("ngModelChange",(function(n){return r.name=n})),b.Qb(),b.Cc(6,m,2,1,"div",5),b.Qb(),b.Rb(7,"div",3),b.Rb(8,"input",6),b.dc("ngModelChange",(function(n){return r.email=n})),b.Qb(),b.Cc(9,h,2,1,"div",5),b.Qb(),b.Rb(10,"div",3),b.Rb(11,"input",7),b.dc("ngModelChange",(function(n){return r.phone=n})),b.Qb(),b.Cc(12,w,2,1,"div",5),b.Qb(),b.Rb(13,"div",3),b.Rb(14,"input",8),b.dc("ngModelChange",(function(n){return r.password=n})),b.Qb(),b.Cc(15,v,2,1,"div",5),b.Qb(),b.Rb(16,"div",3),b.Rb(17,"input",9),b.dc("ngModelChange",(function(n){return r.passwordConfirmation=n})),b.Qb(),b.Cc(18,M,2,1,"div",5),b.Qb(),b.Rb(19,"div",3),b.Rb(20,"button",10),b.Cc(21,C,1,2,"fa-icon",11),b.Ec(22," Register "),b.Qb(),b.Qb(),b.Qb(),b.Rb(23,"div",12),b.Rb(24,"a",13),b.Ec(25,"Back to menu"),b.Qb(),b.Rb(26,"a",13),b.Ec(27,"Log in"),b.Qb(),b.Qb(),b.Qb()),2&n&&(b.zb(5),b.Eb("is-invalid",r.errors.hasOwnProperty("name")),b.lc("ngModel",r.name),b.zb(1),b.lc("ngForOf",r.errors.name),b.zb(2),b.Eb("is-invalid",r.errors.hasOwnProperty("email")),b.lc("ngModel",r.email),b.zb(1),b.lc("ngForOf",r.errors.email),b.zb(2),b.Eb("is-invalid",r.errors.hasOwnProperty("phone")),b.lc("ngModel",r.phone),b.zb(1),b.lc("ngForOf",r.errors.phone),b.zb(2),b.Eb("is-invalid",r.errors.hasOwnProperty("password")),b.lc("ngModel",r.password),b.zb(1),b.lc("ngForOf",r.errors.password),b.zb(2),b.Eb("is-invalid",r.errors.hasOwnProperty("password_confirmation")),b.lc("ngModel",r.passwordConfirmation),b.zb(1),b.lc("ngForOf",r.errors.password_confirmation),b.zb(2),b.lc("disabled",r.sending),b.zb(1),b.lc("ngIf",r.sending),b.zb(3),b.lc("routerLink",b.oc(24,R)),b.zb(2),b.lc("routerLink",b.oc(25,O)))},directives:[f.m,f.f,f.g,f.a,f.k,f.e,f.h,o.j,o.k,t.b,u.a],styles:["@media (max-width:425px){.register-form[_ngcontent-%COMP%]{width:calc(100vw - 10%)}}@media (min-width:425px){.register-form[_ngcontent-%COMP%]{width:360px}}.register-form[_ngcontent-%COMP%]{margin:10vh auto 0;font-size:15px}.register-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-bottom:15px;background:#f7f7f7;box-shadow:0 2px 2px rgba(0,0,0,.3);padding:30px}.register-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 15px}.btn[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]{min-height:38px;border-radius:2px}.btn[_ngcontent-%COMP%]{font-size:15px;font-weight:700}"]}),n})()}];let y=(()=>{class n{}return n.\u0275mod=b.Kb({type:n}),n.\u0275inj=b.Jb({factory:function(r){return new(r||n)},imports:[[t.c.forChild(Q)],t.c]}),n})();var z=e("d2mR");let P=(()=>{class n{}return n.\u0275mod=b.Kb({type:n}),n.\u0275inj=b.Jb({factory:function(r){return new(r||n)},imports:[[o.b,y,f.b,u.d,z.a]]}),n})()}}]);