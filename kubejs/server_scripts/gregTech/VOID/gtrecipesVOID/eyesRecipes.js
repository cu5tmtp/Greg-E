ServerEvents.recipes((event) => {

    event.recipes.botania.runic_altar(
        'gregecore:redeye',
        [
            'botanicalextramachinery:crimson_dragonstone_block',
            'botanicalextramachinery:crimson_dragonstone_block',
            'botanicalextramachinery:crimson_spark',
            'botanicalextramachinery:crimson_spark',
            'botania:third_eye'
        ],
        45000
    )

    event.custom({
    type: "enchanted:witch_cauldron",
    cookingColor: [
      120,
      80,
      53
    ],
    finalColor: [
      250,
      180,
      60
    ],
    ingredients: [
      {
        item: 'enchanted:mystic_unguent'
      },
      {
        item: 'enchanted:soul_of_the_world'
      },
      {
        item: 'enchanted:flying_ointment'
      },
      {
        item: 'enchanted:happenstance_oil'
      },
      {
        item: 'enchanted:spirit_of_otherwhere'
      },
      {
        item: 'minecraft:ender_eye'
      }
    ],
    power: 7000,
    result: {
      item:'gregecore:greeneye',
    },
  });

    event.custom({
      type: 'draconicevolution:fusion_crafting',
      catalyst: {
        tag: 'gtceu:circuits/ulv'
      },
      ingredients: [
        {
          tag: 'gtceu:circuits/lv'
        },
        {
          tag: 'gtceu:circuits/mv'
        },
        {
          tag: 'gtceu:circuits/hv'
        },
        {
          tag: 'gtceu:circuits/ev'
        },
        {
          tag: 'gtceu:circuits/iv'
        },
        {
          tag: 'gtceu:circuits/luv'
        },
        {
          tag: 'gtceu:circuits/zpm'
        },
        {
          tag: 'gtceu:circuits/uv'
        },
        {
          tag: 'gtceu:circuits/uhv'
        },
        {
          item: 'kubejs:animated/draconicprocessor'
        }

      ],
      result: {
        item: 'gregecore:purpleeye'
      },
      tier: 'CHAOTIC',
      total_energy: 1280000,
    })
    .id('purpleeyyyyyye');

})