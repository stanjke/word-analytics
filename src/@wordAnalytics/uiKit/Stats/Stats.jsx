import {
  CHARACTERS_LIMIT,
  SOCIAL_NETWORK,
  TEXT_ANALYSIS_MODES,
} from '../../constatnts/constatnts';
import { computeCharacterDiff } from '../../services/helpers/computeCharacterDiff';
import { computeWords } from '../../services/helpers/computeWords';
import Stat from '../Stat/Stat';
import './Stats.css';

export default function Stats({ text }) {
  const numberOfCharacters = text.length;

  return (
    <section className="stats">
      <Stat
        metric={computeWords(text)}
        label={TEXT_ANALYSIS_MODES.WORDS}
      />
      <Stat
        metric={numberOfCharacters}
        label={TEXT_ANALYSIS_MODES.CHARACTERS}
      />
      <Stat
        metric={computeCharacterDiff(numberOfCharacters, CHARACTERS_LIMIT.INSTAGRAM)}
        label={SOCIAL_NETWORK.INSTAGRAM}
      />
      <Stat
        metric={computeCharacterDiff(numberOfCharacters, CHARACTERS_LIMIT.FACEBOOK)}
        label={SOCIAL_NETWORK.FACEBOOK}
      />
    </section>
  );
}
