ServerEvents.recipes((event) => {

    //Add item recipes
    event.shaped(
        Item.of('kubejs:hammer', 1),
        [
            'AAA',
            'ABA',
            'B  '
        ],
        {
            A: 'minecraft:cobblestone',
            B: 'minecraft:stick'
        }
    )

    event.shaped(
        Item.of('gtceu:red_alloy_single_cable', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'kubejs:insulation',
            B: '2x gtceu:red_alloy_single_wire'
        }
    )

    event.shaped(
        Item.of('gtceu:tin_single_cable', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'kubejs:insulation',
            B: '2x gtceu:tin_single_wire'
        }
    )

    event.shaped(
        Item.of('kubejs:insulation', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:sticky_resin',
            B: 'minecraft:paper'
        }
    )

    event.shaped(
        Item.of('gtceu:wrought_iron_ingot', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'gtceu:wrought_iron_nugget',
        }
    )

    event.shaped(
        Item.of('gtceu:tin_dust', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:cobblestone',
            B: '#gtceu:tools/crafting_mortars'
        }
    )

    event.shaped(
        Item.of('minecraft:iron_block', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:iron_ingot',
        }
    )

    event.recipes.minecraft.smelting('minecraft:glass', 'gtceu:glass_dust').cookingTime(600)
});