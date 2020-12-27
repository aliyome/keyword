<script lang="ts">
  // client-only code here

  //  import { FirebaseApp, User, Doc, Collection } from 'sveltefire';

  import firebase from 'firebase/app';
  import 'firebase/analytics';
  import 'firebase/performance';
  import 'firebase/auth';

  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  });
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<Nav />

<main class="grid mx-auto max-w-screen-xl p-6 text-gray-800">
  <slot />
</main>

<Footer />
