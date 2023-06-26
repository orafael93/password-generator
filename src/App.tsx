import CharacterLength from './components/CharacterLength';
import CharacterStrength from './components/CharacterStrength';
import { ContentWrapper } from './components/ContentWrapper';
import MainWrapper from './components/MainWrapper';
import PasswordField from './components/PasswordField';
import WrapperCheckboxes from './components/WrapperCheckboxes';
import { GlobalProvider } from './context/GlobalProvider';
import { AppName } from './styles/globalStyles';

function App() {
  return (
    <GlobalProvider>
      <MainWrapper>
        <AppName>Password Generator</AppName>
        <PasswordField />
        <ContentWrapper>
          <CharacterLength />
          <WrapperCheckboxes />
          <CharacterStrength />
        </ContentWrapper>
      </MainWrapper>
    </GlobalProvider>
  );
}

export default App;
