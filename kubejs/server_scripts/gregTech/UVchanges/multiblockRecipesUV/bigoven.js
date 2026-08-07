ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:bigoven', 1),
        [
            ' A ',
            'ABA',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uv',
            B: 'kubejs:animated/uvalloy',
            C: 'gtceu:nonconducting_casing',
            E: 'enchanted:witch_oven'
        }
    )

    event.recipes.gtceu.bigoven()
        .itemInputs(
            'enchanted:clay_jar',
            'minecraft:spruce_sapling'
        )
        .itemOutputs(
            'enchanted:wood_ash',
            'enchanted:hint_of_rebirth'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigoven()
        .itemInputs(
            'enchanted:clay_jar',
            'enchanted:rowan_sapling'
        )
        .itemOutputs(
            'enchanted:wood_ash',
            'enchanted:whiff_of_magic'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigoven()
        .itemInputs(
            'enchanted:clay_jar',
            'minecraft:birch_sapling'
        )
        .itemOutputs(
            'enchanted:wood_ash',
            'enchanted:breath_of_the_goddess'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigoven()
        .itemInputs(
            'enchanted:clay_jar',
            'enchanted:hawthorn_sapling'
        )
        .itemOutputs(
            'enchanted:wood_ash',
            'enchanted:odour_of_purity'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigoven()
        .itemInputs(
            'enchanted:clay_jar',
            'minecraft:jungle_sapling'
        )
        .itemOutputs(
            'enchanted:wood_ash',
            'enchanted:foul_fume'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigoven()
        .itemInputs(
            'enchanted:clay_jar',
            'minecraft:oak_sapling'
        )
        .itemOutputs(
            'enchanted:wood_ash',
            'enchanted:exhale_of_the_horned_one'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigoven()
        .itemInputs(
            'enchanted:clay_jar',
            'enchanted:alder_sapling'
        )
        .itemOutputs(
            'enchanted:wood_ash',
            'enchanted:reek_of_misfortune'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

});