import { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice'; 

export default function Oauth() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleGoogleClick = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
    } catch (error) {
      console.log('Could not log in with Google', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className={`bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Continue with Google'}
    </button>
  );
}
