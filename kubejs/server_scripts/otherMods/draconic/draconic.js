ServerEvents.recipes((event) => {

    event.replaceInput(
        'draconicevolution:components/draconium_core',
        'minecraft:diamond',
        '#gtceu:circuits/zpm'
    )

    event.replaceInput(
        'draconicevolution:components/wyvern_core',
        'minecraft:nether_star',
        '#gtceu:circuits/uv'
    )

    event.replaceInput(
        'draconicevolution:modules/item_wyvern_shield_control',
        'draconicevolution:dragon_heart',
        '#gtceu:circuits/uhv'
    )

    event.replaceInput(
      'draconicevolution:tools/dislocator',
      'draconicevolution:draconium_dust',
      'gtceu:stainless_steel_ingot'
    )

    event.replaceInput(
      'draconicevolution:machines/potentiometer',
      'draconicevolution:draconium_dust',
      'gtceu:stainless_steel_ingot'
    )

    event.remove({id: 'draconicevolution:tools/advanced_dislocator'})
    event.remove({id: 'draconicevolution:celestial_manipulator'})
    event.remove({id: 'draconicevolution:awakened_draconium_block'})
    event.remove({id: 'draconicevolution:components/awakened_core'})

    event.shaped(
      Item.of('draconicevolution:advanced_dislocator', 1),
      [
        'CBC',
        'BAB',
        'CBC'
      ],
      {
        B: '#gtceu:circuits/hv',
        A: 'draconicevolution:dislocator',
        C: 'gtceu:stainless_steel_ingot'
      })
    
    event.shaped(
      Item.of('draconicevolution:celestial_manipulator', 1),
      [
        'ABA',
        'CDC',
        'EFE'
      ],
      {
        A: '#gtceu:circuits/ulv',
        B: 'minecraft:clock',
        C: 'gtceu:steel_ingot',
        D: 'minecraft:oak_log',
        E: 'minecraft:iron_ingot',
        F: 'minecraft:redstone_block'
      })
    
    event.custom({
      type: 'draconicevolution:fusion_crafting',
      catalyst: {
        type: 'draconicevolution:ingredient_stack',
        count: 4,
        items: [
          {
            item: 'draconicevolution:draconium_block'
          }
        ],
      },
      ingredients: [
        {
          item: 'draconicevolution:draconium_core'
        },
        {
          item: 'draconicevolution:draconium_core'
        },
        {
          item: 'draconicevolution:draconium_core'
        },
        {
          item: 'draconicevolution:draconium_core'
        },
        {
          item: 'draconicevolution:draconium_core'
        },
        {
          item: 'gtceu:wetware_processor_mainframe'
        },
        {
          item: 'draconicevolution:draconium_core'
        }
      ],
      result: {
        count: 4,
        item: 'draconicevolution:awakened_draconium_block'
      },
      tier: 'WYVERN',
      total_energy: 1280000,
    })
    .id('newforawakenedblock');

    event.custom({
      type: 'draconicevolution:fusion_crafting',
      catalyst: {
        item: 'gtceu:wetware_processor_mainframe'
      },
      ingredients: [
        {
          item: 'draconicevolution:wyvern_core'
        },
        {
          item: 'draconicevolution:wyvern_core'
        },
        {
          item: 'draconicevolution:wyvern_core'
        },
        {
          item: 'draconicevolution:wyvern_core'
        },
        {
          item: 'draconicevolution:awakened_draconium_ingot'
        },
        {
          item: 'draconicevolution:awakened_draconium_ingot'
        },
        {
          item: 'draconicevolution:awakened_draconium_ingot'
        },
        {
          item: 'draconicevolution:awakened_draconium_ingot'
        },
      ],
      result: {
        item: 'draconicevolution:awakened_core'
      },
      tier: 'WYVERN',
      total_energy: 1280000,
    })
    .id('newforawakenedcore');

    event.custom({
      type: 'draconicevolution:fusion_crafting',
      catalyst: {
        item: 'draconicevolution:dragon_heart'
      },
      ingredients: [
        {
          item: 'kubejs:animated/uvalloy'
        },
        {
          item: 'kubejs:animated/uvalloy'
        }
      ],
      result: {
        item: 'kubejs:animated/uhvalloy'
      },
      tier: 'WYVERN',
      total_energy: 1280000,
    })
    .id('uhvalloyyaaaay');




})