import React from 'react';
import { AppBar, Box, Container, Grid } from '@material-ui/core';
import Logo from '../components/Logo';
import CardGrid from '../components/CardGrid';

const cards = [
    {
        id: 'xy7-10',
        name: 'Vespiquen',
        nationalPokedexNumber: 416,
        imageUrl: 'https://images.pokemontcg.io/xy7/10.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/xy7/10_hires.png',
        types: ['Grass'],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Combee',
        hp: '90',
        number: '10',
        artist: 'kawayoo',
        rarity: 'Uncommon',
        series: 'XY',
        set: 'Ancient Origins',
        setCode: 'xy7',
        attacks: [
            {
                cost: ['Colorless'],
                name: 'Intelligence Gathering',
                text: 'You may draw cards until you have 6 cards in your hand.',
                damage: '10',
                convertedEnergyCost: 1,
            },
            {
                cost: ['Colorless', 'Colorless'],
                name: 'Bee Revenge',
                text:
                    'This attack does 10 more damage for each Pokémon in your discard pile.',
                damage: '20+',
                convertedEnergyCost: 2,
            },
        ],
        weaknesses: [{ type: 'Fire', value: '×2' }],
    },
    {
        id: 'swsh4-175',
        name: 'Drapion V',
        nationalPokedexNumber: 452,
        imageUrl: 'https://images.pokemontcg.io/swsh4/175.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/swsh4/175_hires.png',
        types: ['Darkness'],
        supertype: 'Pokémon',
        subtype: 'V',
        hp: '210',
        retreatCost: ['Colorless', 'Colorless', 'Colorless'],
        convertedRetreatCost: 3,
        number: '175',
        artist: 'Eske Yoshinob',
        rarity: 'Rare Holo V',
        series: 'Sword & Shield',
        set: 'Vivid Voltage',
        setCode: 'swsh4',
        text: [
            'V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards.',
        ],
        attacks: [
            {
                cost: ['Darkness', 'Colorless', 'Colorless'],
                name: 'Wrack Down',
                text: '',
                damage: '70',
                convertedEnergyCost: 3,
            },
            {
                cost: ['Darkness', 'Colorless', 'Colorless', 'Colorless'],
                name: 'Hazardous Claws',
                text:
                    "Discard 2 Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
                damage: '130',
                convertedEnergyCost: 4,
            },
        ],
        weaknesses: [{ type: 'Fighting', value: '×2' }],
    },
    {
        id: 'xy0-19',
        name: 'Pawniard',
        nationalPokedexNumber: 624,
        imageUrl: 'https://images.pokemontcg.io/xy0/19.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/xy0/19_hires.png',
        types: ['Metal'],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '60',
        retreatCost: ['Colorless'],
        convertedRetreatCost: 1,
        number: '19',
        artist: 'Kouki Saitou',
        rarity: '',
        series: 'XY',
        set: 'Kalos Starter Set',
        setCode: 'xy0',
        attacks: [
            {
                cost: ['Metal'],
                name: 'Pierce',
                text: '',
                damage: '10',
                convertedEnergyCost: 1,
            },
            {
                cost: ['Colorless', 'Colorless'],
                name: 'Cut',
                text: '',
                damage: '20',
                convertedEnergyCost: 2,
            },
        ],
        resistances: [{ type: 'Psychic', value: '-20' }],
        weaknesses: [{ type: 'Fire', value: '×2' }],
    },
    {
        id: 'dp6-113',
        name: 'Pineco',
        nationalPokedexNumber: 204,
        imageUrl: 'https://images.pokemontcg.io/dp6/113.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/dp6/113_hires.png',
        types: ['Grass'],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '50',
        retreatCost: ['Colorless'],
        convertedRetreatCost: 1,
        number: '113',
        artist: 'Masakazu Fukuda',
        rarity: 'Common',
        series: 'Diamond & Pearl',
        set: 'Legends Awakened',
        setCode: 'dp6',
        attacks: [
            {
                cost: ['Colorless'],
                name: 'Tackle',
                text: '',
                damage: '10',
                convertedEnergyCost: 1,
            },
            {
                cost: ['Grass', 'Colorless'],
                name: 'Selfdestruct',
                text:
                    "This attack does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) Pineco does 50 damage to itself.",
                damage: '40',
                convertedEnergyCost: 2,
            },
        ],
        weaknesses: [{ type: 'Fire', value: '+10' }],
    },
    {
        id: 'pl2-107',
        name: 'Hippowdon',
        nationalPokedexNumber: 450,
        imageUrl: 'https://images.pokemontcg.io/pl2/107.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/pl2/107_hires.png',
        types: ['Fighting'],
        supertype: 'Pokémon',
        subtype: 'Level Up',
        ability: {
            name: 'Sand Reset',
            text:
                "Once during a game on your turn (before your attack), each player shuffles all cards in play (excluding Pokémon and Supporter cards) into his or her deck. You can't use more than 1 Sand Reset Poké-Power each game.",
            type: 'Poké-Power',
        },
        hp: '130',
        retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
        convertedRetreatCost: 4,
        number: '107',
        artist: 'Shizurow',
        rarity: 'Rare Holo Lv.X',
        series: 'Platinum',
        set: 'Rising Rivals',
        setCode: 'pl2',
        text: [
            'Put this card onto your Active Hippowdon. Hippowdon LV.X can use any attack, Poké-Power, or Poké-Body from its previous Level.',
        ],
        attacks: [
            {
                cost: ['Fighting', 'Fighting', 'Colorless', 'Colorless'],
                name: 'Double Shoot',
                text:
                    "Discard 2 Fighting Energy attached to Hippowdon and choose 2 of your opponent's Benched Pokémon. This attack does 40 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                damage: '',
                convertedEnergyCost: 4,
            },
        ],
        resistances: [{ type: 'Lightning', value: '-20' }],
        weaknesses: [{ type: 'Water', value: '×2' }],
    },
    {
        id: 'base5-82',
        name: 'Potion Energy',
        imageUrl: 'https://images.pokemontcg.io/base5/82.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base5/82_hires.png',
        supertype: 'Energy',
        subtype: 'Special',
        number: '82',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Team Rocket',
        setCode: 'base5',
        text: [
            "If you play this card from your hand, remove 1 damage counter from the Pokémon you attach it to, if it has any. Potion Energy provides Colorless energy. (Doesn't count as a basic Energy card.)",
        ],
    },
    {
        id: 'base4-113',
        name: 'PlusPower',
        imageUrl: 'https://images.pokemontcg.io/base4/113.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/113_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '113',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            "Attach PlusPower to your Active Pokémonn. At the end of your turn, discard PlusPower. If this Pokémon's attack does damage to the defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon.",
        ],
    },
    {
        id: 'xy11-99',
        name: 'Captivating Poké Puff',
        imageUrl: 'https://images.pokemontcg.io/xy11/99.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/xy11/99_hires.png',
        supertype: 'Trainer',
        subtype: 'Item',
        number: '99',
        artist: 'Toyste Beach',
        rarity: 'Uncommon',
        series: 'XY',
        set: 'Steam Siege',
        setCode: 'xy11',
        text: [
            "Your opponent reveals his or her hand. Put any number of Basic Pokémon you find there onto your opponent's Bench.",
        ],
    },
    {
        id: 'pl2-108',
        name: 'Infernape 4',
        nationalPokedexNumber: 392,
        imageUrl: 'https://images.pokemontcg.io/pl2/108.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/pl2/108_hires.png',
        types: ['Fire'],
        supertype: 'Pokémon',
        subtype: 'Level Up',
        ability: {
            name: 'Intimidating Roar',
            text:
                "Once during your turn (before your attack), you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon. This power can't be used if Infernape 4 is affected by a Special Condition.",
            type: 'Poké-Power',
        },
        hp: '110',
        number: '108',
        artist: 'Ryo Ueda',
        rarity: 'Rare Holo Lv.X',
        series: 'Platinum',
        set: 'Rising Rivals',
        setCode: 'pl2',
        text: [
            'Put this card onto your Active Infernape 4. Infernape 4 LV.X can use any attack, Poké-Power, or Poké-Body from its previous Level.',
        ],
        attacks: [
            {
                cost: ['Fire', 'Fire', 'Colorless'],
                name: 'Fire Spin',
                text: 'Discard 2 Energy attached to Infernape 4.',
                damage: '100',
                convertedEnergyCost: 3,
            },
        ],
        weaknesses: [{ type: 'Water', value: '×2' }],
    },
];

const Pokemons = () => {
  return (
    <div>
      <AppBar position="static">
        <Box p={1}>
          <Logo width="100px" />
        </Box>
      </AppBar>

      <Container>
        <Box mt={2}>
          <CardGrid cards={cards} />
        </Box>
      </Container>
    </div>
  );
};

export default Pokemons;
