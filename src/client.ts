import * as sapper from '@sapper/app';

import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/performance';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBx2-DCDiTEPogaljDXM1xro9JNj-HwD-0',
  authDomain: 'suggest-keyword.firebaseapp.com',
  projectId: 'suggest-keyword',
  storageBucket: 'suggest-keyword.appspot.com',
  messagingSenderId: '58584803187',
  appId: '1:58584803187:web:470a505c7ce0feaa368706',
  measurementId: 'G-1G3QSJTB6X',
};
// Initialize Firebase
const initFirebase = () => {
  const app = firebase.initializeApp(firebaseConfig);
  const anal = firebase.analytics();
  const perf = firebase.performance();
  const auth = firebase.auth();
  return { app, anal, perf, auth };
};

sapper.start({
  target: document.querySelector('#sapper'),
});

// @ts-ignore
window.firebase = initFirebase();
