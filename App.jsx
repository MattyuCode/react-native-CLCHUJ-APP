import { AuthProvider } from "./src/Components/Context/AuthContext";
import AuthNavigator from "./src/Components/Auth/AuthNavigator";

export default function App() {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
  );
}
