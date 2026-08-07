ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:bigdistillery', 1),
        [
            ' A ',
            'ABA',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uv',
            B: 'kubejs:animated/uvalloy',
            C: 'gtceu:nonconducting_casing',
            E: 'enchanted:distillery'
        }
    )

    event.recipes.gtceu.bigdistillery()
        .itemInputs(
            '3x enchanted:clay_jar',
            'enchanted:diamond_vapour',
            'minecraft:ghast_tear'
        )
        .itemOutputs(
            'enchanted:odour_of_purity',
            'enchanted:reek_of_misfortune',
            'enchanted:foul_fume',
            'enchanted:refined_evil'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigdistillery()
        .itemInputs(
            '3x enchanted:clay_jar',
            'enchanted:breath_of_the_goddess',
            'minecraft:lapis_lazuli'
        )
        .itemOutputs(
            'enchanted:tear_of_the_goddess',
            'enchanted:whiff_of_magic',
            'minecraft:slime_ball',
            'enchanted:foul_fume'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigdistillery()
        .itemInputs(
            'minecraft:blaze_powder',
            'minecraft:gunpowder'
        )
        .itemOutputs(
            '2x minecraft:glowstone_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigdistillery()
        .itemInputs(
            'enchanted:clay_jar',
            'enchanted:foul_fume',
            '#forge:dusts/quicklime'
        )
        .itemOutputs(
            'enchanted:gypsum',
            'enchanted:oil_of_vitriol',
            'minecraft:slime_ball'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigdistillery()
        .itemInputs(
            'enchanted:clay_jar',
            'enchanted:diamond_vapour',
            'minecraft:blaze_rod'
        )
        .itemOutputs(
            'enchanted:demonic_blood'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigdistillery()
        .itemInputs(
            '6x enchanted:clay_jar',
            'minecraft:ender_pearl'
        )
        .itemOutputs(
            '5x enchanted:ender_dew',
            'enchanted:whiff_of_magic'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.bigdistillery()
        .itemInputs(
            '3x enchanted:clay_jar',
            'minecraft:diamond',
            'enchanted:oil_of_vitriol'
        )
        .itemOutputs(
            '2x enchanted:diamond_vapour',
            'enchanted:odour_of_purity'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.remove('enchanted:quicklime')
    event.recipes.gtceu.bigdistillery()
        .itemInputs(
            'enchanted:wood_ash'
        )
        .itemOutputs(
            'enchanted:quicklime'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)


});