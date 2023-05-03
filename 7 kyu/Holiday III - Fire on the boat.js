/* Enjoying your holiday, you head out on a scuba diving trip!
Disaster!! The boat has caught fire!!
You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.
Go to work! */

// PREP
// P: string, first letter uppercase, only space separated
// R: same string with all "Fire" changed for "~~".
// E: "Rod Fire Rod" I will return "Rod ~~ Rod"
// Pseudocode

const fireFight = (s) => {
  return s.replaceAll('Fire', '~~');
};

fireFight(
  'Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast'
);
