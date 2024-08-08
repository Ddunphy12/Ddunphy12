fetch('Java Sprint 1.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch JSON file');
    }
    return response.json();
  })
  .then(data => {
    console.log('JSON data:', data);

    const container = document.createElement('div');
    document.body.appendChild(container);

    data.hunter_subclasses.forEach(character => {
        const name = character.name;
        const superabilities = getSuperabilities(character);
        const abilities = getAbilities(character);
        const aspects = getAspects(character);
        const fragments = character.number_of_fragments;
        const debuff = character.debuff;
        const listItem = document.createElement('div');
        listItem.innerHTML =` <strong>${name}:</strong> ${superabilities} ${abilities} ${aspects} Fragments ${fragments} Debuff ${debuff}`;
        container.appendChild(listItem);
      });

    })
  .catch(error => {
    console.error('Error fetching JSON file:', error);
  });

function getSuperabilities(character){
    return `Super Abilities: ${character.super_abilities.join(',')}`;
}
function getAbilities(character){
    return `Abilities: ${character.abilities}`;
}
function getAspects(character){
    return `Aspects: ${character.aspects}`;
}