import { useAuth } from '../../hooks/useAuth.js';

const Header = () => {
  const { user } = useAuth();

  return (
    <header>
      {user ? (
        <p>
          Signed in as <span>{user}</span>
        </p>
      ) : (
        <p>Please Sign the Guest book</p>
      )}
    </header>
  );
};

export default Header;
