let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documents/citas-api-public
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +27 app.js
badd +1 v1/routes/doctorRoutes.js
badd +8 v1/routes/pacientesForm.js
badd +5 v1/routes/pacientesFormRoutes.js
badd +1 v1/routes/patientFormRout.js
badd +1 v1/routes/doctorFormRout.js
badd +4 v1/routes/appointmentFormRout.js
badd +4 v1/routes/homeRout.js
badd +1 views/home.ejs
badd +1 db.js
badd +31 controllers/appointmentController.js
badd +48 services/appointmentService.js
badd +6 models/appointmentModel.js
badd +8 models/doctorModel.js
badd +7 controllers/doctorController.js
badd +1 models/patientModel.js
badd +29 views/appointmentsForm.ejs
badd +3 views/doctoresForm.ejs
badd +41 controllers/patientController.js
badd +43 services/patientService.js
badd +33 services/doctorService.js
badd +11 views/doctorsList.ejs
badd +1 views/pacientesForm.ejs
badd +2 views/footer.ejs
badd +1 getUserByCedula.js
badd +1 scripts/getUserByCedula.js
badd +54 views/doctoresForm.html
badd +18 public/css/styles.css
badd +11 public/js/getUserByCedula.js
badd +11 views/getUserByCedula.js
badd +1 static/js/getUserByCedula.js
badd +1 public/js/getDoctorByCedula.js
badd +7 views/header.ejs
badd +82 views/patientsForm.ejs
badd +1 views/patientsForm.html
badd +1 views/doctorByCedula.ejs
badd +1 views/onePatient.ejs
badd +1 views/onePatientList.ejs
badd +18 views/appointmentsByCedula.ejs
badd +19 views/oneAppointment.ejs
badd +1 .env
badd +10 .git/info/exclude
badd +144 package-lock.json
badd +1 ~/Documents/citas-api/
badd +4 v1/routes/patientRoutes.js
badd +1 public/js/getPatientByCedula.js
badd +24 public/js/deletePatientByCedula.js
argglobal
%argdel
$argadd ~/Documents/citas-api/
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit app.js
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 16) / 33)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/Documents/citas-api-public
tabnext
tabnext 1
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
nohlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
