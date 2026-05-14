ServerEvents.recipes((event) => {

    event.replaceInput(
        'ironfurnaces:furnaces/iron_furnace',
        'minecraft:furnace',
        'ironfurnaces:copper_furnace'
    )

    event.replaceInput(
        'ironfurnaces:furnaces/gold_furnace',
        '#forge:storage_blocks/gold',
        '#gtceu:circuits/lv'
    )

    event.shaped(
        Item.of('ironfurnaces:obsidian_furnace', 1),
        [
            'ABA',
            'BCB',
            'ADA'
        ],
        {
            A: 'minecraft:obsidian',
            B: 'minecraft:blaze_rod',
            C: 'ironfurnaces:emerald_furnace',
            D: '#gtceu:circuits/ev'
        }
    )

    event.replaceInput(
        'ironfurnaces:furnaces/netherite_furnace',
        '#minecraft:soul_fire_base_blocks',
        '#gtceu:circuits/iv'
    )

    event.shaped(
        Item.of('ironfurnaces:rainbow_plating', 1),
        [
            'ABC',
            'DEF',
            'HGH'
        ],
        {
            A: 'ironfurnaces:copper_furnace',
            B: 'ironfurnaces:iron_furnace',
            C: 'ironfurnaces:gold_furnace',
            D: 'ironfurnaces:diamond_furnace',
            E: 'ironfurnaces:emerald_furnace',
            F: 'ironfurnaces:obsidian_furnace',
            G: 'ironfurnaces:netherite_furnace',
            H: '#gtceu:circuits/iv'
        }
    )

    event.remove({ id: /^ironfurnaces:upgrades\/.*/ })
    event.remove('ironfurnaces:rainbow_plating')
    event.remove('ironfurnaces:furnaces/iron_furnace2')
    event.remove('ironfurnaces:furnaces/gold_furnace2')
    event.remove('ironfurnaces:furnaces/silver_furnace2')
    event.remove('ironfurnaces:furnaces/silver_furnace')
    event.remove('ironfurnaces:furnaces/crystal_furnace')
    event.remove('ironfurnaces:furnaces/obsidian_furnace2')
    event.remove('ironfurnaces:furnaces/obsidian_furnace')

})