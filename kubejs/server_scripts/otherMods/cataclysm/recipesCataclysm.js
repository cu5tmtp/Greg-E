ServerEvents.recipes((event) => {

    event.remove({type: 'cataclysm:weapon_fusion'})
    event.remove('cataclysm:meat_shredder')
    event.remove('cataclysm:laser_gatling')
    event.remove('cataclysm:wither_assault_shoulder_weapon')
    event.remove('cataclysm:mechanical_fusion_anvil')
    event.remove('cataclysm:ancient_spear')
    event.remove('cataclysm:astrape')
    event.remove('cataclysm:ceraunus')
    event.remove('cataclysm:soul_render')
    event.remove('cataclysm:the_annihilator')
    event.remove('cataclysm:the_incinerator')
    event.remove('cataclysm:cursed_bow')


    event.recipes.botania.mana_infusion(
        '2x cataclysm:witherite_ingot',
        'cataclysm:witherite_ingot',
        1000,
        'botania:conjuration_catalyst'
    )

    event.shaped(
        Item.of('kubejs:strength_ring', 1),
        [
            ' B ',
            'A A',
            ' A '
        ],
        {
            A: '#grege:witherite',
            B: 'minecraft:redstone_block'
        }
    )

    event.remove({output: 'cataclysm:abyssal_sacrifice'})
    event.shaped(
        Item.of('cataclysm:abyssal_sacrifice', 1),
        [
            'BAB',
            'ACA',
            'BAB'
        ],
        {
            A: 'minecraft:andesite',
            B: 'minecraft:kelp',
            C: '#gtceu:circuits/mv'
        }
    )

    event.shaped(
        Item.of('kubejs:regen_ring', 1),
        [
            ' B ',
            'A A',
            ' A '
        ],
        {
            A: 'gtceu:abyssal_wire_ingot',
            B: 'minecraft:lapis_block'
        }
    )

})