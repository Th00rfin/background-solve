
const docRef = db.collection('users').doc('email');
const docPass = db.collection('users').doc('password');
await docRef.set({
  email: '',
});
await docPass.set({
  password: '',
})