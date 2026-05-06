ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:bigwitchcauldron', 1),
        [
            ' A ',
            'ABA',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uv',
            B: 'kubejs:animated/uvalloy',
            C: 'gtceu:nonconducting_casing',
            E: 'enchanted:witch_cauldron'
        }
    )

    event.recipes.gtceu.bigwitchcauldron('gettheuvalloy')
        .itemInputs(
            '2x kubejs:animated/zpmalloy',
            'enchanted:mystic_unguent'
        )
        .inputFluids(
            'kubejs:uvcas 10'
        )
        .itemOutputs(
            'kubejs:animated/uvalloy'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigwitchcauldron('gettheunguent')
        .itemInputs(
            'enchanted:redstone_soup',
            'minecraft:diamond',
            'enchanted:rowan_sapling',
            'enchanted:creeper_heart',
            'enchanted:demonic_blood',
        )
        .itemOutputs(
            'enchanted:mystic_unguent'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigwitchcauldron('getthecreeperheart')
        .itemInputs(
            '64x minecraft:gunpowder'
        )
        .itemOutputs(
            'enchanted:creeper_heart'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigwitchcauldron('gettheredtonesoup')
        .itemInputs(
            'enchanted:mandrake_root',
            'enchanted:belladonna_flower',
            'enchanted:tongue_of_dog',
            'enchanted:wool_of_bat',
            'enchanted:drop_of_luck',
            'minecraft:redstone',
        )
        .itemOutputs(
            'enchanted:redstone_soup'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

});