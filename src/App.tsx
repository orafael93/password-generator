import { Button } from './components/Button';
import { MainWrapper } from './components/MainWrapper';
import { PasswordField } from './components/PasswordField';
import { GlobalProvider } from './context/GlobalProvider';
import { ContentWrapper } from './components/ContentWrapper';
import { CharacterLength } from './components/CharacterLength';
import { CharacterStrength } from './components/CharacterStrength';
import { CheckboxesWrapper } from './components/CheckboxesWrapper';

import { AppName } from './styles/globalStyles';

function App() {
  return (
    <GlobalProvider>
      <MainWrapper>
        <AppName>Password Generator</AppName>
        <PasswordField />
        <ContentWrapper>
          <CharacterLength />
          <CheckboxesWrapper />
          <CharacterStrength />
          <Button>Generate</Button>
        </ContentWrapper>
      </MainWrapper>
    </GlobalProvider>
  );
}

export default App;
