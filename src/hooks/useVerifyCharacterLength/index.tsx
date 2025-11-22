import { Fragment } from 'react';
import { useTheme } from 'styled-components';

import { VisualStrengthRetangles } from '../../components/CharacterStrength/styles';

export const useVerifyCharacterLength = (characterLength: number) => {
  const theme = useTheme();

  const MAX_RETANGLES = 4;

  const retanglesArray = Array.from({ length: MAX_RETANGLES });

  if (characterLength < 5) {
    return {
      characterLengthText: 'Too Weak!',
      visualRetangles: (
        <Fragment>
          {retanglesArray.map((_, index) => {
            return index < 1 ? (
              <VisualStrengthRetangles color={theme?.colors.red} key={index} />
            ) : (
              <VisualStrengthRetangles key={index} />
            );
          })}
        </Fragment>
      ),
    };
  }

  if (characterLength < 10) {
    return {
      characterLengthText: 'Weak!',
      visualRetangles: (
        <Fragment>
          {retanglesArray.map((_, index) => {
            return index < 2 ? (
              <VisualStrengthRetangles
                color={theme?.colors.orange}
                key={index}
              />
            ) : (
              <VisualStrengthRetangles key={index} />
            );
          })}
        </Fragment>
      ),
    };
  }

  if (characterLength < 15) {
    return {
      characterLengthText: 'Medium',
      visualRetangles: (
        <Fragment>
          {retanglesArray.map((_, index) => {
            return index < 3 ? (
              <VisualStrengthRetangles
                color={theme?.colors.yellow}
                key={index}
              />
            ) : (
              <VisualStrengthRetangles key={index} />
            );
          })}
        </Fragment>
      ),
    };
  }

  return {
    characterLengthText: 'Strong',
    visualRetangles: (
      <Fragment>
        {retanglesArray.map((_, index) => (
          <VisualStrengthRetangles
            color={theme?.colors.neonGreen}
            key={index}
          />
        ))}
      </Fragment>
    ),
  };
};
