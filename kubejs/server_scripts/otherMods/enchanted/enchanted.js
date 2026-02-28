ServerEvents.recipes((event) => {

  event.shaped(
      Item.of('enchanted:witch_cauldron', 1),
      [
        '   ',
        'ABA',
        'AAA'
      ],
      {
        B: '#gtceu:circuits/uv',
        A: 'minecraft:iron_ingot',
      }
  )

  event.custom({
    type: "enchanted:witch_cauldron",
    cookingColor: [
      125,
      82,
      53
    ],
    finalColor: [
      256,
      180,
      60
    ],
    ingredients: [
      {
        item: "enchanted:drop_of_luck"
      },
      {
        item: "enchanted:redstone_soup"
      },
      {
        item: "gtceu:stem_cells"
      },
      {
        item: "minecraft:glass_bottle"
      }
    ],
    power: 7000,
    result: {
      item: "kubejs:witchlabflask",
    },
  });

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
        item: "kubejs:animated/zpmalloy"
      },
      {
        item: "kubejs:animated/zpmalloy"
      },
      {
        item: "enchanted:mystic_unguent"
      }
    ],
    power: 7000,
    result: {
      item: "kubejs:animated/uvalloy",
    },
  });
});
