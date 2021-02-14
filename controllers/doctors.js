import firebase from 'firebase/app';
import 'firebase/firestore';

async function getDoctors() {
  const doctors = [];
  const doctorQuery = await firebase.firestore().collection('doctors').get();
  doctorQuery.forEach(doctor => doctors.push(doctor.data()));
  return doctors;
}

async function displayDoctors() {
  const doctors = await getDoctors();
  doctors.forEach((doctor) => {
    $('.DocShow')
    .append('<tr>')
    .append('<th>Doctor</th>')
    .append('<th>Specialization</th>')
    .append('<th></th>')
    .append('</tr>')
    .append('<tr>')
    .append('<td><img class="resize" src="sexyaditya.jpg">' + doc.data().fname + ' ' + doc.data().lname + '</td>')
    .append('<td>Paleontology</td>')
    .append('<td><button class="btn btn-primary" type="button" id="button" onClick="pickDoctor(' + count + ')"> Select</button></td>')
    .append('</tr>');
  });
}
