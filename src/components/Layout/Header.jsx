import { useUser } from '../../context/UserContext';

const Header = () => {
  const { user } = useUser();

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
